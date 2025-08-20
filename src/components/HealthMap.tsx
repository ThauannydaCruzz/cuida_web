import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { HealthUnit, AlertSummary } from "@/types/health-units";
import { healthUnits } from "@/data/health-units-mock";
import { 
  Search, 
  Filter, 
  MapPin, 
  Phone, 
  Clock, 
  User, 
  AlertTriangle, 
  CheckCircle, 
  Plus, 
  X,
  Calendar,
  Package
} from "lucide-react";

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const HealthMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  
  const [selectedUnit, setSelectedUnit] = useState<HealthUnit | null>(null);
  const [selectedMarkerPosition, setSelectedMarkerPosition] = useState<{ x: number; y: number } | null>(null);
  const [medicationSearch, setMedicationSearch] = useState("");
  const [filteredUnits, setFilteredUnits] = useState<HealthUnit[]>(healthUnits);

  // Create custom icons
  const createCustomIcon = (status: string) => {
    const iconConfig = {
      healthy: { color: '#22c55e', icon: '✓' },
      normal: { color: '#3b82f6', icon: '+' },
      attention: { color: '#f59e0b', icon: '!' },
      urgent: { color: '#ef4444', icon: '✕' }
    };

    const config = iconConfig[status as keyof typeof iconConfig] || iconConfig.normal;
    
    return L.divIcon({
      html: `
        <div style="
          background-color: ${config.color};
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 14px;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        ">
          ${config.icon}
        </div>
      `,
      className: 'custom-div-icon',
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
  };

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Create map instance - Marília SP coordinates
    mapInstanceRef.current = L.map(mapRef.current).setView([-22.2144, -49.9463], 13);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstanceRef.current);

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers when filtered units change
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => {
      mapInstanceRef.current?.removeLayer(marker);
    });
    markersRef.current = [];

    // Add new markers
    filteredUnits.forEach(unit => {
      const marker = L.marker(unit.coordinates, {
        icon: createCustomIcon(unit.status)
      });

      const popupContent = `
        <div style="padding: 8px;">
          <h3 style="font-weight: bold; font-size: 14px; margin: 0 0 4px 0;">${unit.name}</h3>
          <p style="font-size: 12px; color: #666; margin: 0 0 4px 0;">${unit.address}</p>
          <p style="font-size: 12px; margin: 0;">Status: ${unit.status}</p>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('click', (e) => {
        setSelectedUnit(unit);
        // Calcular posição do marcador na tela
        const markerElement = e.target.getElement();
        if (markerElement) {
          const rect = markerElement.getBoundingClientRect();
          setSelectedMarkerPosition({
            x: rect.left + rect.width / 2,
            y: rect.top
          });
        }
      });

      marker.addTo(mapInstanceRef.current!);
      markersRef.current.push(marker);
    });
  }, [filteredUnits]);

  // Filter units based on medication search
  useEffect(() => {
    let filtered = healthUnits;
    
    // Filter by medication availability
    if (medicationSearch) {
      filtered = filtered.filter(unit =>
        unit.medications.some(med => 
          med.name.toLowerCase().includes(medicationSearch.toLowerCase()) && 
          med.quantity > 0
        )
      ).sort((a, b) => {
        // Sort by distance from city center (approximate)
        const centerLat = -22.2144;
        const centerLng = -49.9463;
        const distA = Math.sqrt(Math.pow(a.coordinates[0] - centerLat, 2) + Math.pow(a.coordinates[1] - centerLng, 2));
        const distB = Math.sqrt(Math.pow(b.coordinates[0] - centerLat, 2) + Math.pow(b.coordinates[1] - centerLng, 2));
        return distA - distB;
      });
    }
    
    setFilteredUnits(filtered);
  }, [medicationSearch]);

  const getAlertSummary = (unit: HealthUnit): AlertSummary => {
    const attentionItems = unit.medications.filter(med => med.status === 'attention').length;
    const missingItems = unit.medications.filter(med => med.quantity === 0).length;
    const expiredItems = unit.medications.filter(med => med.expiryDate && new Date(med.expiryDate) < new Date()).length;
    
    const urgentActions: string[] = [];
    unit.medications.forEach(med => {
      if (med.quantity === 0) {
        urgentActions.push(`Falta: ${med.name} (${med.dosage})`);
      }
      if (med.expiryDate && new Date(med.expiryDate) < new Date()) {
        urgentActions.push(`Vencido: ${med.name} (Lote ${med.batchNumber || 'N/A'})`);
      }
    });

    return {
      attentionItems,
      missingItems,
      expiredItems,
      urgentActions
    };
  };

  const getStatusBadge = (status: string) => {
    const configs = {
      healthy: { label: "Estoque Saudável", variant: "default" as const, icon: CheckCircle },
      normal: { label: "Estoque Normal", variant: "secondary" as const, icon: Plus },
      attention: { label: "Atenção Necessária", variant: "outline" as const, icon: AlertTriangle },
      urgent: { label: "Ação Urgente", variant: "destructive" as const, icon: X }
    };
    
    const config = configs[status as keyof typeof configs] || configs.normal;
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Map Container - Full height */}
      <div className="flex-1 relative">
        {/* Search Controls - Positioned inside map */}
        <div className="absolute top-6 left-6 right-6 z-[1000]">
          {/* Medication Search */}
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar medicação disponível..."
                value={medicationSearch}
                onChange={(e) => setMedicationSearch(e.target.value)}
                className="pl-10 bg-white/95 backdrop-blur-sm shadow-lg border-0"
              />
            </div>
            {medicationSearch && (
              <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <p className="text-sm text-muted-foreground">
                  {filteredUnits.length} unidades com "{medicationSearch}" disponível
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Map */}
        <div 
          ref={mapRef} 
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        />

        {/* Legend */}
        <div className="absolute bottom-6 left-6 z-[1000]">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0">
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-3">Legenda de Status</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                  <span>Estoque Saudável</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">+</div>
                  <span>Estoque Normal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">!</div>
                  <span>Atenção Necessária</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✕</div>
                  <span>Ação Urgente</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Info Bubble */}
      {selectedUnit && selectedMarkerPosition && (
        <div 
          className="fixed z-[1001] w-80 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border p-4"
          style={{
            left: `${Math.max(20, Math.min(selectedMarkerPosition.x - 160, window.innerWidth - 340))}px`,
            top: `${Math.max(20, selectedMarkerPosition.y - 20)}px`,
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg text-primary">{selectedUnit.name}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setSelectedUnit(null);
                setSelectedMarkerPosition(null);
              }}
              className="h-6 w-6"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Unit Info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-xs">
              <MapPin className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">{selectedUnit.address}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">{selectedUnit.workingHours}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Phone className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">{selectedUnit.phone}</span>
            </div>
          </div>

          {/* Medications */}
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Medicamentos Disponíveis</h4>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {selectedUnit.medications.filter(med => med.quantity > 0).slice(0, 3).map((med) => (
                <div key={med.id} className="flex items-center justify-between text-xs">
                  <span className="font-medium">{med.name}</span>
                  <Badge variant="default" className="bg-green-500 text-white text-xs">
                    {med.quantity} disponível
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <Button className="w-full text-sm" variant="default">
            <User className="w-3 h-3 mr-2" />
            Demonstrar Interesse
          </Button>
        </div>
      )}
    </div>
  );
};

export default HealthMap;