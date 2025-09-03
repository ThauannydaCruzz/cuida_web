import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider, 
  SidebarTrigger,
  useSidebar 
} from "@/components/ui/sidebar";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { 
  Package, 
  Search, 
  AlertTriangle, 
  TrendingUp, 
  Plus,
  Edit,
  BarChart3,
  Activity,
  MapPin,
  Users,
  FileText,
  Calendar,
  Heart,
  Shield
} from "lucide-react";

const sidebarItems = [
  { title: "Dashboard", url: "/funcionario/dashboard", icon: BarChart3 },
  { title: "Mapa", url: "/funcionario/mapa", icon: MapPin },
  { title: "Documentos", url: "/funcionario/documentos", icon: FileText },
  { title: "Relatórios", url: "/funcionario/relatorios", icon: Activity },
  { title: "Estoque", url: "/funcionario/estoque", icon: Package },
  { title: "Clientes", url: "/clientes-cadastrados", icon: Users },
  { title: "Agendamentos", url: "/funcionario/agendamento", icon: Calendar },
];

function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"} collapsible>
      <div className="p-4 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold text-foreground font-poppins">CUIDA</h2>
              <p className="text-xs text-muted-foreground">Gestão de Saúde</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            Sistema
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const FuncionarioEstoque = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const medicamentos = [
    { 
      id: 1, 
      nome: "Paracetamol 500mg", 
      estoque: 1250, 
      minimo: 500, 
      unidade: "UBS Central", 
      status: "adequado",
      vencimento: "12/2025",
      lote: "PAR001"
    },
    { 
      id: 2, 
      nome: "Ibuprofeno 400mg", 
      estoque: 320, 
      minimo: 300, 
      unidade: "UBS Norte", 
      status: "baixo",
      vencimento: "08/2025",
      lote: "IBU002"
    },
    { 
      id: 3, 
      nome: "Amoxicilina 500mg", 
      estoque: 89, 
      minimo: 200, 
      unidade: "UBS Sul", 
      status: "critico",
      vencimento: "06/2025",
      lote: "AMX003"
    },
    { 
      id: 4, 
      nome: "Dipirona 500mg", 
      estoque: 890, 
      minimo: 400, 
      unidade: "UBS Leste", 
      status: "adequado",
      vencimento: "03/2026",
      lote: "DIP004"
    },
    { 
      id: 5, 
      nome: "Captopril 25mg", 
      estoque: 156, 
      minimo: 150, 
      unidade: "UBS Oeste", 
      status: "baixo",
      vencimento: "09/2025",
      lote: "CAP005"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "adequado":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "baixo":
        return "bg-accent/10 text-accent border-accent/20";
      case "critico":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getProgressValue = (estoque: number, minimo: number) => {
    return Math.min((estoque / minimo) * 100, 100);
  };

  const filteredMedicamentos = medicamentos.filter(med =>
    med.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.unidade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-cuida-gradient-soft">
        <AppSidebar />
        
        <main className="flex-1">
          {/* Header */}
          <header className="bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-2xl font-bold text-foreground font-poppins">Controle de Estoque</h1>
                  <p className="text-sm text-muted-foreground">Gestão de medicamentos por unidade</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-gradient-primary text-white hover:opacity-90">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Medicamento
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Sistema Oficial - Marília</span>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="shadow-cuida border border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total de Itens</p>
                      <p className="text-2xl font-bold text-foreground">2,705</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Package className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-cuida border border-secondary/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Estoque Adequado</p>
                      <p className="text-2xl font-bold text-foreground">78%</p>
                    </div>
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-cuida border border-accent/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Estoque Baixo</p>
                      <p className="text-2xl font-bold text-foreground">15</p>
                    </div>
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-cuida border border-destructive/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Estoque Crítico</p>
                      <p className="text-2xl font-bold text-foreground">3</p>
                    </div>
                    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search */}
            <Card className="shadow-cuida border border-border/20">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar medicamento ou unidade..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Medications List */}
            <Card className="shadow-cuida border border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Package className="w-5 h-5 text-primary" />
                  Lista de Medicamentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredMedicamentos.map((med) => (
                    <div key={med.id} className="p-4 rounded-lg border border-border/20 bg-gradient-to-r from-background to-muted/10 hover:border-primary/20 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Package className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{med.nome}</h3>
                            <p className="text-sm text-muted-foreground">{med.unidade} • Lote: {med.lote}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={`${getStatusColor(med.status)} font-medium`}>
                            {med.status === "adequado" && "Adequado"}
                            {med.status === "baixo" && "Baixo"}
                            {med.status === "critico" && "Crítico"}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Estoque Atual</p>
                          <p className="font-semibold text-foreground">{med.estoque.toLocaleString()} un.</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Estoque Mínimo</p>
                          <p className="font-semibold text-foreground">{med.minimo.toLocaleString()} un.</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Vencimento</p>
                          <p className="font-semibold text-foreground">{med.vencimento}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Nível do Estoque</p>
                          <div className="mt-1">
                            <Progress 
                              value={getProgressValue(med.estoque, med.minimo)} 
                              className="h-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default FuncionarioEstoque;