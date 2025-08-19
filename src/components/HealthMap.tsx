import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Simplified custom icons using DivIcon
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

const MapComponent = ({ units, onMarkerClick }: { units: HealthUnit[], onMarkerClick: (unit: HealthUnit) => void }) => {
  return (
    <MapContainer
      center={[-23.5505, -46.6333]}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {units.map((unit) => (
        <Marker
          key={unit.id}
          position={unit.coordinates}
          icon={createCustomIcon(unit.status)}
          eventHandlers={{
            click: () => onMarkerClick(unit)
          }}
        >
          <Popup>
            <div style={{ padding: '8px' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '14px', margin: '0 0 4px 0' }}>{unit.name}</h3>
              <p style={{ fontSize: '12px', color: '#666', margin: '0 0 4px 0' }}>{unit.address}</p>
              <p style={{ fontSize: '12px', margin: '0' }}>Status: {unit.status}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

const HealthMap = () => {
  const [selectedUnit, setSelectedUnit] = useState<HealthUnit | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUnits, setFilteredUnits] = useState<HealthUnit[]>(healthUnits);

  useEffect(() => {
    const filtered = healthUnits.filter(unit =>
      unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUnits(filtered);
  }, [searchTerm]);

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
    <div className="h-screen flex">
      {/* Map Container */}
      <div className="flex-1 relative">
        {/* Search and Filter Bar */}
        <div className="absolute top-4 left-4 right-4 z-[1000] flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar Unidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white shadow-card"
            />
          </div>
          <Button variant="outline" size="icon" className="bg-white shadow-card">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Map */}
        <div className="absolute inset-0">
          <MapComponent units={filteredUnits} onMarkerClick={setSelectedUnit} />
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 z-[1000]">
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  <span>Estoque Saudável</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">+</div>
                  <span>Estoque Normal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">!</div>
                  <span>Atenção Necessária</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">✕</div>
                  <span>Ação Urgente</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sidebar */}
      {selectedUnit && (
        <div className="w-96 bg-card border-l border-border overflow-y-auto">
          <div className="sticky top-0 bg-primary text-primary-foreground p-4 z-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{selectedUnit.name}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedUnit(null)}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Unit Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{selectedUnit.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{selectedUnit.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{selectedUnit.workingHours}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4 text-muted-foreground" />
                <span>{selectedUnit.manager}</span>
              </div>
              <div className="mt-2">
                {getStatusBadge(selectedUnit.status)}
              </div>
            </div>

            {/* Alert Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sumário de Alertas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {(() => {
                  const summary = getAlertSummary(selectedUnit);
                  return (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Itens em Atenção:</span>
                        <Badge variant="outline" className="text-orange-600">
                          {summary.attentionItems}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Itens em Falta:</span>
                        <Badge variant="destructive">
                          {summary.missingItems}
                        </Badge>
                      </div>
                    </>
                  );
                })()}
              </CardContent>
            </Card>

            {/* Urgent Actions */}
            {(() => {
              const summary = getAlertSummary(selectedUnit);
              return summary.urgentActions.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ações Urgentes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {summary.urgentActions.map((action, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>{action}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })()}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full" variant="default">
                <Package className="w-4 h-4 mr-2" />
                Ver Estoque Completo
              </Button>
              <Button className="w-full" variant="secondary">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Reabastecimento
              </Button>
            </div>

            {/* Medications List */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Medicamentos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {selectedUnit.medications.slice(0, 5).map((med) => (
                  <div key={med.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{med.name}</p>
                      <p className="text-xs text-muted-foreground">{med.dosage}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {med.quantity}/{med.maxStock}
                      </p>
                      {getStatusBadge(med.status)}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthMap;