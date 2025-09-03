import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
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
  FileText, 
  Download, 
  Calendar, 
  Filter, 
  Search,
  BarChart3,
  Activity,
  MapPin,
  Users,
  Package,
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

const FuncionarioRelatorios = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const reportTypes = [
    { id: "medicamentos", name: "Medicamentos por Unidade", color: "bg-primary/10 text-primary" },
    { id: "estoque", name: "Controle de Estoque", color: "bg-secondary/10 text-secondary" },
    { id: "entregas", name: "Relatório de Entregas", color: "bg-accent/10 text-accent" },
    { id: "vencimento", name: "Medicamentos Vencidos", color: "bg-destructive/10 text-destructive" },
    { id: "consumo", name: "Análise de Consumo", color: "bg-primary/10 text-primary" },
    { id: "custos", name: "Relatório de Custos", color: "bg-secondary/10 text-secondary" }
  ];

  const recentReports = [
    { name: "Estoque Geral - Janeiro 2025", date: "15/01/2025", type: "PDF", size: "2.4 MB" },
    { name: "Entregas Dezembro 2024", date: "05/01/2025", type: "Excel", size: "1.8 MB" },
    { name: "Medicamentos Vencidos Q4", date: "28/12/2024", type: "PDF", size: "856 KB" },
    { name: "Análise de Custos Anual", date: "20/12/2024", type: "PDF", size: "3.2 MB" }
  ];

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
                  <h1 className="text-2xl font-bold text-foreground font-poppins">Relatórios</h1>
                  <p className="text-sm text-muted-foreground">Geração e consulta de relatórios do sistema</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Sistema Oficial - Marília</span>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Filters */}
            <Card className="shadow-cuida border border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Filter className="w-5 h-5 text-primary" />
                  Filtros de Relatório
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Tipo de Relatório</label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        {reportTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Período</label>
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Selecione o período" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hoje">Hoje</SelectItem>
                        <SelectItem value="semana">Esta Semana</SelectItem>
                        <SelectItem value="mes">Este Mês</SelectItem>
                        <SelectItem value="trimestre">Este Trimestre</SelectItem>
                        <SelectItem value="ano">Este Ano</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Unidade</label>
                    <Input 
                      placeholder="Buscar unidade..."
                      className="bg-background"
                    />
                  </div>

                  <div className="flex items-end">
                    <Button className="w-full bg-gradient-primary text-white hover:opacity-90">
                      <Search className="w-4 h-4 mr-2" />
                      Gerar Relatório
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Report Types Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {reportTypes.map((type) => (
                <Card key={type.id} className="group shadow-cuida hover:shadow-cuida-lg transition-all duration-300 hover:-translate-y-1 border border-border/20 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${type.color} group-hover:scale-110 transition-transform duration-300`}>
                        <FileText className="w-6 h-6" />
                      </div>
                      <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{type.name}</h3>
                    <p className="text-sm text-muted-foreground">Dados atualizados em tempo real</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Reports */}
            <Card className="shadow-cuida border border-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-5 h-5 text-secondary" />
                  Relatórios Recentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-background to-muted/30 border border-border/20 hover:border-primary/20 transition-colors duration-300">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{report.name}</h4>
                          <p className="text-sm text-muted-foreground">{report.date} • {report.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          {report.type}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
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

export default FuncionarioRelatorios;