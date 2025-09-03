import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { healthUnits } from "@/data/health-units-mock";
import { ArrowLeft, Activity, Package, AlertTriangle, TrendingUp, MapPin, DollarSign, Truck, Calendar, BarChart3, PieChart, Target, Clock, CheckCircle, XCircle, AlertCircle, TrendingDown, Home, Star, Zap } from "lucide-react";
import Header from "@/components/Header";
const FuncionarioDashboard = () => {
  const navigate = useNavigate();

  // Calculate dashboard metrics
  const totalUnits = healthUnits.length;
  const totalMedications = healthUnits.reduce((acc, unit) => acc + unit.medications.length, 0);
  const availableMedications = healthUnits.reduce((acc, unit) => acc + unit.medications.filter(med => med.quantity > 0).length, 0);
  const outOfStockMedications = totalMedications - availableMedications;
  const unitsWithIssues = healthUnits.filter(unit => unit.status === 'attention' || unit.status === 'urgent').length;
  const medicationsByStatus = {
    healthy: healthUnits.reduce((acc, unit) => acc + unit.medications.filter(med => med.status === 'healthy').length, 0),
    attention: healthUnits.reduce((acc, unit) => acc + unit.medications.filter(med => med.status === 'attention').length, 0),
    urgent: healthUnits.reduce((acc, unit) => acc + unit.medications.filter(med => med.status === 'urgent').length, 0)
  };

  // Cost and financial metrics
  const monthlyCosts = {
    total: 450_000,
    lastMonth: 428_000,
    trend: 5.1
  };
  const deliveryMetrics = {
    completed: 89,
    pending: 12,
    delayed: 3,
    onTime: 95
  };

  // Expired and expiring medications
  const expiredMedications = 23;
  const expiringNext30Days = 45;
  const topMedicationsByDemand = [{
    name: "Paracetamol 500mg",
    demand: 45,
    stock: 120,
    cost: "R$ 2.340"
  }, {
    name: "Dipirona 500mg",
    demand: 38,
    stock: 85,
    cost: "R$ 1.890"
  }, {
    name: "Ibuprofeno 600mg",
    demand: 32,
    stock: 95,
    cost: "R$ 2.180"
  }, {
    name: "Amoxicilina 500mg",
    demand: 28,
    stock: 65,
    cost: "R$ 3.420"
  }, {
    name: "Omeprazol 20mg",
    demand: 25,
    stock: 110,
    cost: "R$ 1.650"
  }];

  // Best and worst performing units (storage efficiency)
  const bestStorageUnits = [{
    name: "UBS Vila Nova",
    efficiency: 98,
    score: "Excelente"
  }, {
    name: "UPA Centro",
    efficiency: 95,
    score: "Excelente"
  }, {
    name: "USF Jardim América",
    efficiency: 92,
    score: "Muito Bom"
  }];
  const worstStorageUnits = [{
    name: "UBS Periférica Sul",
    efficiency: 45,
    score: "Crítico"
  }, {
    name: "USF Rural Norte",
    efficiency: 52,
    score: "Ruim"
  }, {
    name: "UBS Zona Leste",
    efficiency: 58,
    score: "Regular"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground z-40">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold font-poppins">CUIDA</h2>
          </div>
          
          <nav className="space-y-2">
            
            
            <button onClick={() => navigate("/funcionario/mapa")} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors text-left">
              <MapPin className="w-5 h-5" />
              <span>Mapa</span>
            </button>
            <button onClick={() => navigate("/funcionario/documentos")} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors text-left">
              <Package className="w-5 h-5" />
              <span>Documentos</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors text-left">
              <Calendar className="w-5 h-5" />
              <span>Calendário</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2 font-poppins">Dashboard Administrativo</h1>
            <p className="text-muted-foreground">Análise completa dos medicamentos na cidade de Marília</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg">
            Contato
          </Button>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Monthly Costs */}
          <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary-foreground/80 text-sm mb-1">Custo Mensal Total</p>
                    <p className="text-3xl font-bold">R$ {monthlyCosts.total.toLocaleString('pt-BR')}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <TrendingUp className="w-4 h-4 text-primary-foreground/70" />
                      <span className="text-sm text-primary-foreground/80">+{monthlyCosts.trend}% vs mês anterior</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
                    <DollarSign className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                  Analisar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Deliveries */}
          <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-accent to-accent/80 p-6 text-accent-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-accent-foreground/80 text-sm mb-1">Entregas Este Mês</p>
                    <p className="text-3xl font-bold">{deliveryMetrics.completed}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <CheckCircle className="w-4 h-4 text-accent-foreground/70" />
                      <span className="text-sm text-accent-foreground/80">{deliveryMetrics.onTime}% no prazo</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-accent-foreground/20 rounded-2xl flex items-center justify-center">
                    <Truck className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl">
                  Agendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Expired Medications */}
          <Card className="bg-white border-0 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Medicamentos</h3>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-32 h-32 rounded-full border-8 border-gray-200"></div>
                  <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-8 border-rose-500 transform rotate-45" style={{
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-800">56%</p>
                      <p className="text-xs text-gray-500">Vencidos</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Vencidos:</span>
                    <span className="font-semibold">{expiredMedications}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Vencem em 30d:</span>
                    <span className="font-semibold">{expiringNext30Days}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stock Status */}
          <Card className="bg-white border-0 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Status do Estoque</h3>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-32 h-32 rounded-full border-8 border-gray-200"></div>
                  <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-8 border-blue-500 transform -rotate-45" style={{
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-800">50%</p>
                      <p className="text-xs text-gray-500">Saudável</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Saudável:</span>
                    <span className="font-semibold text-green-600">56%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Atenção:</span>
                    <span className="font-semibold text-yellow-600">30%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Crítico:</span>
                    <span className="font-semibold text-red-600">14%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Overview */}
          <Card className="bg-white border-0 shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">Eficiência Geral</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Estoque</span>
                    <span className="font-semibold">56%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-rose-500 h-2 rounded-full" style={{
                    width: '56%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Entregas</span>
                    <span className="font-semibold">49%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{
                    width: '49%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Qualidade</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{
                    width: '78%'
                  }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Top Medications */}
          <Card className="bg-white border-0 shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                Medicamentos Mais Procurados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topMedicationsByDemand.map((med, index) => <div key={med.name} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{med.name}</p>
                        <p className="text-sm text-gray-500">Estoque: {med.stock} • {med.cost}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {med.demand} solicitações
                      </Badge>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Best and Worst Storage Units */}
          <Card className="bg-white border-0 shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <Star className="w-5 h-5 text-rose-500" />
                Ranking de Armazenamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Melhores Unidades
                  </h4>
                  <div className="space-y-3">
                    {bestStorageUnits.map((unit, index) => <div key={unit.name} className="flex items-center justify-between p-3 rounded-lg bg-green-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-green-700">{index + 1}</span>
                          </div>
                          <div>
                            <p className="font-medium text-green-800">{unit.name}</p>
                            <p className="text-sm text-green-600">{unit.score}</p>
                          </div>
                        </div>
                        <Badge className="bg-green-200 text-green-800">
                          {unit.efficiency}%
                        </Badge>
                      </div>)}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4" />
                    Unidades Críticas
                  </h4>
                  <div className="space-y-3">
                    {worstStorageUnits.map((unit, index) => <div key={unit.name} className="flex items-center justify-between p-3 rounded-lg bg-red-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-4 h-4 text-red-700" />
                          </div>
                          <div>
                            <p className="font-medium text-red-800">{unit.name}</p>
                            <p className="text-sm text-red-600">{unit.score}</p>
                          </div>
                        </div>
                        <Badge className="bg-red-200 text-red-800">
                          {unit.efficiency}%
                        </Badge>
                      </div>)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* World Map and Summary */}
        <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Visão Geral das Unidades de Saúde</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Map Placeholder */}
                <div className="lg:col-span-2">
                  <div className="bg-white/20 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-600/50"></div>
                    <div className="relative z-10">
                      <MapPin className="w-16 h-16 text-white/80 mx-auto mb-4" />
                      <p className="text-white text-center">Mapa das Unidades de Saúde</p>
                      <p className="text-white/80 text-sm text-center">Clique para visualizar detalhes</p>
                    </div>
                    <Button onClick={() => navigate("/funcionario/mapa")} className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 text-white border border-white/30">
                      Abrir Mapa
                    </Button>
                  </div>
                </div>

                {/* Summary Stats */}
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3">Resumo Geral</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-white">
                        <span className="text-sm">Total de Unidades:</span>
                        <span className="font-bold">{totalUnits}</span>
                      </div>
                      <div className="flex justify-between text-white">
                        <span className="text-sm">Medicamentos Ativos:</span>
                        <span className="font-bold">{availableMedications}</span>
                      </div>
                      <div className="flex justify-between text-white">
                        <span className="text-sm">Sem Estoque:</span>
                        <span className="font-bold text-rose-200">{outOfStockMedications}</span>
                      </div>
                      <div className="flex justify-between text-white">
                        <span className="text-sm">Unidades Críticas:</span>
                        <span className="font-bold text-yellow-200">{unitsWithIssues}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-3">Ações Rápidas</h4>
                    <div className="space-y-2">
                      <Button onClick={() => navigate("/funcionario/documentos")} className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 text-sm">
                        Agendar Entrega
                      </Button>
                      <Button onClick={() => navigate("/funcionario/mapa")} className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 text-sm">
                        Analisar Estoque
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default FuncionarioDashboard;