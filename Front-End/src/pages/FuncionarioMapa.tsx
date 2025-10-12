import React from "react";
import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { HealthUnit, AlertSummary } from "@/types/health-units";
import { healthUnits } from "@/data/health-units-mock";
import { Search, Filter, MapPin, Phone, Clock, User, AlertTriangle, CheckCircle, Plus, X, Calendar, Package, Heart, ThumbsUp, ArrowLeft, TrendingUp, Truck, BarChart3, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});
const FuncionarioMapa = () => {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const {
    toast
  } = useToast();
  const [selectedUnit, setSelectedUnit] = useState<HealthUnit | null>(null);
  const [selectedMarkerPosition, setSelectedMarkerPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [medicationSearch, setMedicationSearch] = useState("");
  const [filteredUnits, setFilteredUnits] = useState<HealthUnit[]>(healthUnits);
  const [medicationInterests, setMedicationInterests] = useState<Record<string, number>>({});

  // Create custom icons
  const createCustomIcon = (status: string) => {
    const iconConfig = {
      healthy: {
        color: '#22c55e',
        icon: '✓'
      },
      normal: {
        color: '#3b82f6',
        icon: '+'
      },
      attention: {
        color: '#f59e0b',
        icon: '!'
      },
      urgent: {
        color: '#ef4444',
        icon: '✕'
      }
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
      marker.on('click', e => {
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
      filtered = filtered.filter(unit => unit.medications.some(med => med.name.toLowerCase().includes(medicationSearch.toLowerCase()) && med.quantity > 0)).sort((a, b) => {
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
      healthy: {
        label: "Estoque Saudável",
        variant: "default" as const,
        icon: CheckCircle
      },
      normal: {
        label: "Estoque Normal",
        variant: "secondary" as const,
        icon: Plus
      },
      attention: {
        label: "Atenção Necessária",
        variant: "outline" as const,
        icon: AlertTriangle
      },
      urgent: {
        label: "Ação Urgente",
        variant: "destructive" as const,
        icon: X
      }
    };
    const config = configs[status as keyof typeof configs] || configs.normal;
    const Icon = config.icon;
    return <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>;
  };
  const handleMedicationInterest = (medicationId: string, medicationName: string) => {
    setMedicationInterests(prev => ({
      ...prev,
      [medicationId]: (prev[medicationId] || 0) + 1
    }));
    toast({
      title: "Interesse registrado!",
      description: `Demanda por ${medicationName} foi registrada no sistema.`,
      duration: 3000
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Back Button - Floating */}
      <div className="fixed top-6 left-6 z-[1002]">
        <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center gap-2 bg-card/90 backdrop-blur-xl hover:bg-card border border-border/30 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105">
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>
      </div>


      {/* Full Screen Map Container */}
      <div className="fixed inset-0 top-0 left-0 w-full h-full">
        {/* Minimal Search Bar */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-[1000] w-80 max-w-[calc(100vw-40px)]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Buscar medicação..." value={medicationSearch} onChange={e => setMedicationSearch(e.target.value)} className="pl-10 bg-card/95 backdrop-blur-xl shadow-lg border-border/30 rounded-full" />
            {medicationSearch && <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="text-xs bg-card/90 backdrop-blur-xl px-2 py-1 rounded-full border border-border/30">
                  {filteredUnits.length} unidades
                </span>
              </div>}
          </div>
        </div>

        {/* Map */}
        <div ref={mapRef} className="absolute inset-0 w-full h-full" style={{
        zIndex: 0
      }} />

        {/* Minimal Legend */}
        <div className="absolute bottom-24 left-6 z-[1000]">
          <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-3 shadow-lg border border-border/30">
            <div className="flex gap-3 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Saudável</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Normal</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span>Atenção</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Urgente</span>
              </div>
            </div>
          </div>
        </div>


        {/* Simplified Info Bubble */}
        {selectedUnit && selectedMarkerPosition && <div className="fixed z-[1001] w-72 max-w-[calc(100vw-40px)] bg-card/95 backdrop-blur-xl rounded-xl shadow-lg border border-border/30 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200" style={{
        left: `${Math.max(20, Math.min(selectedMarkerPosition.x - 144, window.innerWidth - 308))}px`,
        top: `${Math.max(20, selectedMarkerPosition.y - 30)}px`
      }}>
            {/* Header */}
            <div className="p-3 border-b border-border/20">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm text-foreground truncate">{selectedUnit.name}</h3>
                  <p className="text-xs text-muted-foreground truncate">{selectedUnit.address}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => {
              setSelectedUnit(null);
              setSelectedMarkerPosition(null);
            }} className="h-6 w-6 ml-2">
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 space-y-3">
              {/* Status */}
              <div className="flex justify-center">
                {getStatusBadge(selectedUnit.status)}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button onClick={() => {
                  toast({
                    title: "Informações da Unidade",
                    description: `${selectedUnit.name} - ${selectedUnit.workingHours}`,
                  });
                }} size="sm" className="flex-1 text-xs">
                  <Eye className="w-3 h-3 mr-1" />
                  Detalhes
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};
export default FuncionarioMapa;