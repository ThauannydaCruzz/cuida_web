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
  Warehouse,
  Users,
  Eye
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
  const [medicationSearch, setMedicationSearch] = useState("");
  const [filteredUnits, setFilteredUnits] = useState<HealthUnit[]>(healthUnits);
  const [medicationInterests, setMedicationInterests] = useState<Record<string, number>>({});
  const [medicationSearchCount, setMedicationSearchCount] = useState<number>(0);
  const [unitViewers, setUnitViewers] = useState<Record<string, number>>({});

  // Função para criar ícones customizados no mapa
  const createCustomIcon = (status: string, isUCAF: boolean = false) => {
    if (isUCAF) {
      return L.divIcon({
        html: `
          <div style="
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 20px;
            border: 4px solid white;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.5), 0 0 0 8px rgba(99, 102, 241, 0.1);
            animation: pulse 2s infinite;
          ">
            ⚕️
          </div>
          <style>
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
            }
          </style>
        `,
        className: 'custom-div-icon ucaf-icon',
        iconSize: [45, 45],
        iconAnchor: [22.5, 22.5]
      });
    }

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
      const isUCAF = unit.type === 'UCAF';
      const marker = L.marker(unit.coordinates, {
        icon: createCustomIcon(unit.status, isUCAF)
      });

      const popupContent = `
        <div style="padding: 8px;">
          <h3 style="font-weight: bold; font-size: 14px; margin: 0 0 4px 0;">${unit.name}</h3>
          <p style="font-size: 12px; color: #666; margin: 0;">${unit.address}</p>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('click', () => {
        setSelectedUnit(unit);
        // Zoom mais forte no mapa para a unidade selecionada
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setView(unit.coordinates, 17, { 
            animate: true,
            duration: 0.8
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
      // Simula número de pessoas que pesquisaram
      setMedicationSearchCount(Math.floor(Math.random() * 50) + 10);
    } else {
      setMedicationSearchCount(0);
    }
    
    setFilteredUnits(filtered);
  }, [medicationSearch]);

  // Simula visualizadores nas unidades
  useEffect(() => {
    const viewers: Record<string, number> = {};
    healthUnits.forEach(unit => {
      viewers[unit.id] = Math.floor(Math.random() * 8) + 2;
    });
    setUnitViewers(viewers);

    const interval = setInterval(() => {
      const newViewers: Record<string, number> = {};
      healthUnits.forEach(unit => {
        const change = Math.floor(Math.random() * 3) - 1;
        newViewers[unit.id] = Math.max(1, (viewers[unit.id] || 5) + change);
      });
      setUnitViewers(newViewers);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="flex-1 relative flex flex-col md:flex-row">
        {/* Card lateral fixo quando unidade está selecionada */}
        {selectedUnit && (
          <div className="w-full md:w-1/2 lg:w-2/5 h-1/2 md:h-full bg-background border-b md:border-r md:border-b-0 border-border z-[1000] overflow-y-auto">
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              {/* Header do Card */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  {selectedUnit.type === 'UCAF' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Warehouse className="w-5 h-5 text-primary" />
                      <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
                        Estoque Central
                      </Badge>
                    </div>
                  )}
                  <h2 className="text-lg md:text-2xl font-bold text-foreground mb-2">{selectedUnit.name}</h2>
                  <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                    {getStatusBadge(selectedUnit.status)}
                    <Badge variant="outline" className="text-xs border-primary/30 bg-primary/5">
                      <Eye className="w-3 h-3 mr-1" />
                      {unitViewers[selectedUnit.id] || 0} visualizando agora
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSelectedUnit(null);
                    // Volta ao zoom padrão
                    if (mapInstanceRef.current) {
                      mapInstanceRef.current.setView([-22.2144, -49.9463], 13, { animate: true });
                    }
                  }}
                  className="hover:bg-accent"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Informações de Contato */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{selectedUnit.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{selectedUnit.workingHours}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{selectedUnit.phone}</span>
                </div>
                {selectedUnit.type === 'UCAF' && (
                  <div className="flex items-center gap-3 text-sm">
                    <Package className="w-5 h-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">farmaciaucaf@hotmail.com</span>
                  </div>
                )}
              </div>

              {/* Descrição UCAF */}
              {selectedUnit.type === 'UCAF' && (
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl p-4 border border-indigo-200 dark:border-indigo-800">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Warehouse className="w-4 h-4 text-primary" />
                    Centro de Distribuição
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Os medicamentos chegam à UCAF e, de lá, são distribuídos para as unidades de saúde, 
                    incluindo as farmácias municipais localizadas em diferentes regiões da cidade.
                  </p>
                </div>
              )}

              {/* Medicamentos */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Medicamentos Disponíveis
                  <Badge variant="secondary" className="ml-auto">
                    {selectedUnit.medications.filter(med => med.quantity > 0).length} itens
                  </Badge>
                </h3>
                <div className="space-y-3">
                  {selectedUnit.medications.filter(med => med.quantity > 0).map((med) => {
                    const interests = medicationInterests[med.id] || 0;
                    
                    return (
                      <div key={med.id} className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{med.name}</p>
                            <p className="text-sm text-muted-foreground">{med.dosage}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge 
                              variant={med.quantity > 10 ? "default" : "secondary"}
                              className="text-sm"
                            >
                              {med.quantity} disponíveis
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleMedicationInterest(med.id, med.name)}
                              className="h-9 w-9 p-0"
                            >
                              <Heart className={`w-5 h-5 ${interests > 0 ? 'fill-current text-red-500' : ''}`} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tipo de Unidade */}
              <div className="pt-4 border-t border-border">
                <Badge 
                  variant="outline" 
                  className="border-primary/30 text-primary bg-primary/5"
                >
                  {selectedUnit.type}
                </Badge>
              </div>
            </div>
          </div>
        )}

        {/* Container do Mapa */}
        <div className={`relative ${selectedUnit ? 'w-full md:w-1/2 lg:w-3/5 h-1/2 md:h-full' : 'w-full h-full'} transition-all duration-300`}>
          {/* Controles de busca */}
          {!selectedUnit && (
            <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-[1000]">
              <div className="flex flex-col md:flex-row gap-3">
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
              <div className="bg-card/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-card border border-border/50 space-y-1">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary font-medium">{filteredUnits.length}</span> unidades encontradas
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  <span><strong className="text-foreground">{medicationSearchCount}</strong> pessoas pesquisaram nos últimos 30 minutos</span>
                </div>
              </div>
            )}
              </div>
            </div>
          )}

          {/* Mapa */}
          <div 
            ref={mapRef} 
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0 }}
          />

          {/* Legenda */}
          {!selectedUnit && (
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto z-[1000]">
              <Card className="bg-card/95 backdrop-blur-sm shadow-card border-border/50">
                <CardContent className="p-3 md:p-4">
                  <h3 className="font-semibold text-xs md:text-sm mb-2 md:mb-3 text-card-foreground">Legenda de Status</h3>
                  <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs mb-2 md:mb-3">
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
                  <div className="pt-3 border-t border-border/30">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-lg" style={{
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        border: '2px solid white',
                        boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)'
                      }}>⚕️</div>
                      <span className="text-muted-foreground font-medium">Estoque Central (UCAF)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthMap;
