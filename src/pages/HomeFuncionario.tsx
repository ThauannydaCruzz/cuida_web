import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, UserCheck, MapPin, Activity, Shield, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
const HomeFuncionario = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-cuida-gradient-soft">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cuida-blue rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CUIDA</h1>
                <p className="text-sm text-muted-foreground">Marília - SP</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cuida-blue" />
              <span className="text-sm font-medium text-foreground">Sistema Oficial</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Sistema de Saúde Digital de Marília
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Plataforma integrada para gestão de medicamentos, atendimento aos cidadãos e monitoramento
            em tempo real das unidades de saúde da cidade.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sistema de Gestão de Saúde
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Plataforma integrada para gestão de medicamentos, atendimento aos cidadãos e monitoramento
            em tempo real das unidades de saúde da cidade de Marília.
          </p>
        </div>
      </section>

      {/* Main Access Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Employee Access */}
            <Card className="group relative bg-gradient-to-br from-card via-card/95 to-card/90 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-border/30 rounded-3xl overflow-hidden hover:scale-[1.02]">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <CardHeader className="text-center pb-8 pt-12 relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500 group-hover:shadow-2xl">
                  <UserCheck className="w-12 h-12 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Sistema Interno
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
                  Plataforma completa de gestão para profissionais da saúde pública
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8 px-8 pb-12 relative z-10">
                <div className="space-y-6">
                  {[
                    { icon: Activity, text: "Gerenciamento inteligente de medicamentos", color: "from-blue-500/20 to-blue-600/20" },
                    { icon: Users, text: "Controle de filas e atendimentos em tempo real", color: "from-green-500/20 to-green-600/20" },
                    { icon: MapPin, text: "Monitoramento avançado de todas as unidades", color: "from-purple-500/20 to-purple-600/20" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-6 p-4 rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 transition-all duration-300 group/item">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-foreground font-medium text-lg flex-1">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-8 space-y-4">
                  <Button 
                    onClick={() => navigate("/login")} 
                    className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-primary-foreground"
                  >
                    <UserCheck className="w-5 h-5 mr-2" />
                    Acessar Sistema Interno
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Citizen Portal */}
            <Card className="group relative bg-gradient-to-br from-card via-card/95 to-card/90 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-border/30 rounded-3xl overflow-hidden hover:scale-[1.02]">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <CardHeader className="text-center pb-8 pt-12 relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500 group-hover:shadow-2xl">
                  <Users className="w-12 h-12 text-secondary-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-4 group-hover:text-secondary-foreground transition-colors duration-300">
                  Portal do Cidadão
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
                  Serviços de saúde online para toda a população de Marília
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8 px-8 pb-12 relative z-10">
                <div className="space-y-6">
                  {[
                    { icon: MapPin, text: "Localizar postos de saúde mais próximos", color: "from-emerald-500/20 to-emerald-600/20" },
                    { icon: Activity, text: "Consultar medicamentos disponíveis", color: "from-indigo-500/20 to-indigo-600/20" },
                    { icon: Heart, text: "Informações e dicas de saúde preventiva", color: "from-rose-500/20 to-rose-600/20" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-6 p-4 rounded-2xl bg-gradient-to-r from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 transition-all duration-300 group/item">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-7 h-7 text-secondary-foreground" />
                      </div>
                      <span className="text-foreground font-medium text-lg flex-1">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-8">
                  <Button 
                    className="w-full bg-gradient-to-r from-secondary via-secondary/90 to-secondary/80 hover:from-secondary/90 hover:via-secondary/80 hover:to-secondary/70 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] text-secondary-foreground" 
                    onClick={() => navigate("/portal-cidadao")}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Entrar no Portal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-secondary/5 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-6">Recursos Avançados</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tecnologia de ponta para melhorar o atendimento e a gestão da saúde pública de forma eficiente e moderna
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Activity,
                title: "Tempo Real",
                description: "Monitoramento instantâneo de filas, medicamentos e visualizações com atualizações automáticas",
                gradient: "from-blue-500/10 to-blue-600/10",
                iconBg: "from-blue-500 to-blue-600"
              },
              {
                icon: MapPin,
                title: "Geolocalização",
                description: "Encontre o posto de saúde mais próximo com informações precisas e atualizadas",
                gradient: "from-green-500/10 to-green-600/10",
                iconBg: "from-green-500 to-green-600"
              },
              {
                icon: Shield,
                title: "Segurança Total",
                description: "Dados protegidos com criptografia avançada e sistema confiável para informações de saúde",
                gradient: "from-purple-500/10 to-purple-600/10",
                iconBg: "from-purple-500 to-purple-600"
              }
            ].map((feature, index) => (
              <div key={index} className="group text-center">
                <div className={`p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} hover:shadow-2xl transition-all duration-500 border border-border/20 hover:scale-105`}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Navigation Bar */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-gray-200/50">
          <div className="flex items-center gap-1">
            <Button
              onClick={() => navigate("/funcionario/mapa")}
              variant="ghost"
              className="flex flex-col items-center gap-1 p-3 h-auto hover:bg-gray-100 rounded-xl transition-colors"
            >
              <MapPin className="w-5 h-5 text-gray-600" />
              <span className="text-xs text-gray-600">Mapa</span>
            </Button>

            <Button
              onClick={() => navigate("/funcionario/dashboard")}
              variant="ghost"
              className="flex flex-col items-center gap-1 p-3 h-auto hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Activity className="w-5 h-5 text-gray-600" />
              <span className="text-xs text-gray-600">Dashboard</span>
            </Button>

            <Button
              onClick={() => navigate("/funcionario/documentos")}
              variant="ghost"
              className="flex flex-col items-center gap-1 p-3 h-auto hover:bg-gray-100 rounded-xl transition-colors"
            >
              <Users className="w-5 h-5 text-gray-600" />
              <span className="text-xs text-gray-600">Documentos</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">Secretaria de Saúde de Marília</span>
            </div>
            <p className="text-muted-foreground mb-3 text-lg">Sistema oficial da Prefeitura Municipal de Marília</p>
            <p className="text-muted-foreground text-sm">© 2025 Secretaria de Saúde de Marília. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default HomeFuncionario;