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

      {/* Quick Access Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Acesso Rápido</h3>
          <p className="text-lg text-muted-foreground">Ferramentas essenciais para gestão da saúde pública</p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-card/60 backdrop-blur-xl rounded-3xl p-2 shadow-2xl border border-border/20">
            <div className="grid grid-cols-3 gap-2">
              <Button
                onClick={() => navigate("/funcionario/mapa")}
                variant="ghost"
                className="flex flex-col items-center gap-3 p-6 h-auto bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm text-foreground">Mapa</p>
                  <p className="text-xs text-muted-foreground">Unidades de Saúde</p>
                </div>
              </Button>

              <Button
                onClick={() => navigate("/funcionario/dashboard")}
                variant="ghost"
                className="flex flex-col items-center gap-3 p-6 h-auto bg-gradient-to-br from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 border border-secondary/20 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Activity className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm text-foreground">Dashboard</p>
                  <p className="text-xs text-muted-foreground">Dados & Métricas</p>
                </div>
              </Button>

              <Button
                onClick={() => navigate("/funcionario/documentos")}
                variant="ghost"
                className="flex flex-col items-center gap-3 p-6 h-auto bg-gradient-to-br from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 border border-accent/20 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm text-foreground">Documentos</p>
                  <p className="text-xs text-muted-foreground">Consultas</p>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Access Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Employee Access */}
            <Card className="bg-gradient-to-br from-card to-card/80 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-border/20 rounded-3xl overflow-hidden group hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <CardHeader className="text-center pb-6 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">Sistema Interno</CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  Plataforma completa de gestão para profissionais da saúde
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-accent/10 transition-colors hover:bg-accent/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Gerenciamento de medicamentos</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-accent/10 transition-colors hover:bg-accent/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Controle de filas em tempo real</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-accent/10 transition-colors hover:bg-accent/20">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">Monitoramento de unidades</span>
                  </div>
                </div>
                <div className="pt-6 space-y-3">
                  <Button 
                    onClick={() => navigate("/login")} 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Acessar Sistema Interno
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 py-4 text-lg font-semibold rounded-2xl transition-all duration-300" 
                    onClick={() => navigate("/funcionario/dashboard")}
                  >
                    Ver Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Customer Access */}
            <Card className="bg-gradient-to-br from-card to-card/80 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-border/20 rounded-3xl overflow-hidden group hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
              <CardHeader className="text-center pb-6 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">Portal do Cidadão</CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  Serviços de saúde online para a população de Marília
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-accent/10 transition-colors hover:bg-accent/20">
                    <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Localizar postos de saúde</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-accent/10 transition-colors hover:bg-accent/20">
                    <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <Activity className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Consultar medicamentos disponíveis</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-accent/10 transition-colors hover:bg-accent/20">
                    <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">Informações e dicas de saúde</span>
                  </div>
                </div>
                <div className="pt-6">
                  <Button 
                    className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" 
                    onClick={() => navigate("/portal-cidadao")}
                  >
                    Entrar no Portal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Recursos do Sistema</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tecnologia avançada para melhorar o atendimento e a gestão da saúde pública
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Tempo Real</h4>
              <p className="text-gray-600">Monitoramento em tempo real de filas, medicamentos e visualizações</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Localização</h4>
              <p className="text-gray-600">Encontre o posto de saúde mais próximo com informações atualizadas</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Segurança</h4>
              <p className="text-gray-600">Dados protegidos e sistema confiável para informações de saúde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-cuida-blue rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Secretaria de Saúde de Marília</span>
            </div>
            <p className="text-muted-foreground mb-2">Sistema oficial da Prefeitura Municipal de Marília</p>
            <p className="text-gray-400 text-sm">© 2025 Secretaria de Saúde de Marília. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default HomeFuncionario;