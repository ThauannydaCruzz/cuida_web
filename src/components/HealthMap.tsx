import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { HealthUnit } from "@/types/health-units";
import { healthUnits } from "@/data/health-units-mock";
import {
  MapPin,
  Phone,
  Clock,
  AlertTriangle,
  CheckCircle,
  Plus,
  X,
  Package,
  Heart,
  ThumbsUp
} from "lucide-react";

// Correção para os marcadores padrão do Leaflet não aparecerem quebrados
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
  const { toast } = useToast();
  
  const [selectedUnit, setSelectedUnit] = useState<HealthUnit | null>(null);
  const [selectedMarkerPosition, setSelectedMarkerPosition] = useState<{ x: number; y: number } | null>(null);
  const [medicationSearch, setMedicationSearch] = useState("");
  const [filteredUnits, setFilteredUnits] = useState<HealthUnit[]>(healthUnits);
  const [medicationInterests, setMedicationInterests] = useState<Record<string, number>>({});

  // Função para criar ícones customizados no mapa
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

  // Inicializa o mapa
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Coordenadas de Marília, SP
    mapInstanceRef.current = L.map(mapRef.current).setView([-22.2144, -49.9463], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstanceRef.current);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Atualiza os marcadores quando as unidades filtradas mudam
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    markersRef.current.forEach(marker => {
      mapInstanceRef.current?.removeLayer(marker);
    });
    markersRef.current = [];

    filteredUnits.forEach(unit => {
      const marker = L.marker(unit.coordinates, {
        icon: createCustomIcon(unit.status)
      });

      const popupContent = `
        <div style="padding: 8px;">
          <h3 style="font-weight: bold; font-size: 14px; margin: 0 0 4px 0;">${unit.name}</h3>
          <p style="font-size: 12px; color: #666; margin: 0;">${unit.address}</p>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('click', (e) => {
        setSelectedUnit(unit);
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

  // Filtra as unidades com base na busca por medicamento
  useEffect(() => {
    let filtered = healthUnits;
    
    if (medicationSearch) {
      filtered = filtered.filter(unit =>
        unit.medications.some(med => 
          med.name.toLowerCase().includes(medicationSearch.toLowerCase()) && 
          med.quantity > 0
        )
      );
    }
    
    setFilteredUnits(filtered);
  }, [medicationSearch]);

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
  
  const handleMedicationInterest = (medicationId: string, medicationName: string) => {
    setMedicationInterests(prev => ({
      ...prev,
      [medicationId]: (prev[medicationId] || 0) + 1
    }));
    
    toast({
      title: "Interesse registrado!",
      description: `Você demonstrou interesse em ${medicationName}. A demanda foi registrada.`,
      duration: 3000,
    });
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 relative">
        {/* Controles de busca */}
        <div className="absolute top-6 left-6 right-6 z-[1000]">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar medicação disponível..."
                value={medicationSearch}
                onChange={(e) => setMedicationSearch(e.target.value)}
                className="pl-10 bg-card/95 backdrop-blur-sm shadow-card border-border/50 focus:ring-primary/30"
              />
            </div>
            {medicationSearch && (
              <div className="bg-card/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-card border border-border/50">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-medium">{filteredUnits.length}</span> unidades encontradas
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mapa */}
        <div 
          ref={mapRef} 
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        />

        {/* Legenda */}
        <div className="absolute bottom-6 left-6 z-[1000]">
          <Card className="bg-card/95 backdrop-blur-sm shadow-card border-border/50">
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-3 text-card-foreground">Legenda de Status</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <span className="text-muted-foreground">Saudável</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">+</div>
                  <span className="text-muted-foreground">Normal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">!</div>
                  <span className="text-muted-foreground">Atenção</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">✕</div>
                  <span className="text-muted-foreground">Urgente</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Card de Informações da Unidade Selecionada */}
      {selectedUnit && (
        <div 
          className="fixed z-[1001] w-96 max-w-[calc(100vw-40px)] bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/30 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300"
          style={{
            left: '20px',
            bottom: '20px',
            top: 'auto'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          
          <div className="relative p-4 border-b border-border/20">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg text-foreground leading-tight truncate mb-1">{selectedUnit.name}</h3>
                {getStatusBadge(selectedUnit.status)}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedUnit(null)}
                className="h-8 w-8 ml-2 hover:bg-accent/50"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="relative p-4 space-y-4">
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 text-primary" />
                <span className="line-clamp-1">{selectedUnit.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 flex-shrink-0 text-primary" />
                  <span className="text-xs">{selectedUnit.workingHours}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                  <span className="text-xs">{selectedUnit.phone}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2">
                <Package className="w-4 h-4 text-primary" />
                Medicamentos Disponíveis
                <Badge variant="secondary" className="text-xs ml-auto">
                  {selectedUnit.medications.filter(med => med.quantity > 0).length} itens
                </Badge>
              </h4>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                {selectedUnit.medications.filter(med => med.quantity > 0).map((med) => {
                  const interests = medicationInterests[med.id] || 0;
                  const isSufficient = med.quantity >= interests;
                  
                  return (
                    <div key={med.id} className="group">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-accent/20">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm text-foreground truncate">{med.name}</p>
                          <p className="text-xs text-muted-foreground">{med.dosage}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <Badge 
                              variant={med.quantity > 10 ? "default" : "secondary"} 
                              className="text-xs mb-1"
                            >
                              {med.quantity} disp.
                            </Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMedicationInterest(med.id, med.name)}
                            className="h-8 w-8 p-0"
                          >
                            <Heart className={`w-4 h-4 ${interests > 0 ? 'fill-current text-red-500' : ''}`} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-border/20">
              <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                {selectedUnit.type}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthMap;