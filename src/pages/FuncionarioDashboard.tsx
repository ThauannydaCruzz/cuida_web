import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { healthUnits } from "@/data/health-units-mock";
import { 
  ArrowLeft, 
  Activity, 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  MapPin, 
  Users,
  Calendar,
  BarChart3,
  PieChart,
  Target,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import Header from "@/components/Header";

const FuncionarioDashboard = () => {
  const navigate = useNavigate();

  // Calculate dashboard metrics
  const totalUnits = healthUnits.length;
  const totalMedications = healthUnits.reduce((acc, unit) => acc + unit.medications.length, 0);
  const availableMedications = healthUnits.reduce((acc, unit) => 
    acc + unit.medications.filter(med => med.quantity > 0).length, 0);
  const outOfStockMedications = totalMedications - availableMedications;
  
  const unitsWithIssues = healthUnits.filter(unit => 
    unit.status === 'attention' || unit.status === 'urgent').length;
  
  const medicationsByStatus = {
    healthy: healthUnits.reduce((acc, unit) => 
      acc + unit.medications.filter(med => med.status === 'healthy').length, 0),
    attention: healthUnits.reduce((acc, unit) => 
      acc + unit.medications.filter(med => med.status === 'attention').length, 0),
    urgent: healthUnits.reduce((acc, unit) => 
      acc + unit.medications.filter(med => med.status === 'urgent').length, 0),
  };

  const topMedicationsByDemand = [
    { name: "Paracetamol 500mg", demand: 45, stock: 120 },
    { name: "Dipirona 500mg", demand: 38, stock: 85 },
    { name: "Ibuprofeno 600mg", demand: 32, stock: 95 },
    { name: "Amoxicilina 500mg", demand: 28, stock: 65 },
    { name: "Omeprazol 20mg", demand: 25, stock: 110 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      <Header />
      
      {/* Back Button */}
      <div className="p-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/home-funcionario")}
          className="flex items-center gap-2 hover:bg-accent/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Home
        </Button>
      </div>

      <div className="px-6 pb-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard de Medicamentos</h1>
          <p className="text-muted-foreground">Análise completa dos medicamentos na cidade de Marília</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total de Unidades</p>
                  <p className="text-3xl font-bold text-foreground">{totalUnits}</p>
                  <p className="text-xs text-muted-foreground mt-1">Monitoradas</p>
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Medicamentos Disponíveis</p>
                  <p className="text-3xl font-bold text-foreground">{availableMedications}</p>
                  <p className="text-xs text-secondary-foreground mt-1">Em estoque</p>
                </div>
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Sem Estoque</p>
                  <p className="text-3xl font-bold text-foreground">{outOfStockMedications}</p>
                  <p className="text-xs text-destructive mt-1">Necessitam reposição</p>
                </div>
                <div className="w-12 h-12 bg-destructive/20 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Unidades c/ Problemas</p>
                  <p className="text-3xl font-bold text-foreground">{unitsWithIssues}</p>
                  <p className="text-xs text-amber-600 mt-1">Requerem atenção</p>
                </div>
                <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Status Distribution */}
          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Distribuição por Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-green-50 border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Estoque Saudável</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {medicationsByStatus.healthy}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    <span className="font-medium text-amber-800">Atenção Necessária</span>
                  </div>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                    {medicationsByStatus.attention}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-red-50 border border-red-200">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="font-medium text-red-800">Ação Urgente</span>
                  </div>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    {medicationsByStatus.urgent}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Medications by Demand */}
          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Medicamentos Mais Procurados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topMedicationsByDemand.map((med, index) => (
                  <div key={med.name} className="flex items-center justify-between p-3 rounded-xl bg-accent/20 hover:bg-accent/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">{med.name}</p>
                        <p className="text-xs text-muted-foreground">Estoque: {med.stock} unidades</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-xs">
                        {med.demand} solicitações
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Units Overview */}
        <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Visão Geral das Unidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {healthUnits.slice(0, 8).map((unit) => {
                const availableCount = unit.medications.filter(med => med.quantity > 0).length;
                const totalCount = unit.medications.length;
                const percentage = Math.round((availableCount / totalCount) * 100);
                
                return (
                  <div key={unit.id} className="flex items-center justify-between p-4 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-foreground">{unit.name}</h4>
                        <Badge 
                          variant={unit.status === 'healthy' ? 'default' : 
                                  unit.status === 'attention' ? 'secondary' : 'destructive'}
                          className="text-xs"
                        >
                          {unit.status === 'healthy' ? 'Saudável' : 
                           unit.status === 'attention' ? 'Atenção' : 'Urgente'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{unit.address}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Package className="w-3 h-3" />
                          {availableCount}/{totalCount} medicamentos
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {percentage}% disponível
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-2 bg-accent/30 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-300 ${
                            percentage > 80 ? 'bg-green-500' : 
                            percentage > 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate("/funcionario/mapa")}
                        className="text-xs"
                      >
                        Ver no Mapa
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                variant="outline" 
                onClick={() => navigate("/funcionario/mapa")}
                className="rounded-xl"
              >
                Ver Todas as Unidades no Mapa
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FuncionarioDashboard;