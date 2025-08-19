import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  MapPin, 
  Bell, 
  BarChart3, 
  Search, 
  Camera, 
  Clock, 
  Shield,
  Zap,
  Users,
  Activity,
  FileText,
  Play,
  ArrowRight
} from "lucide-react";
import doctorConsultation from "@/assets/doctor-consultation.jpg";
import aiTechnology from "@/assets/ai-technology.jpg";

const Index = () => {
  const departments = [
    { name: "Farmacologia", icon: "💊" },
    { name: "Psiquiatria", icon: "🧠" },
    { name: "Cirurgia Plástica", icon: "✂️" },
    { name: "Traumatologia", icon: "🦴" },
    { name: "Neurointervention", icon: "⚡" },
    { name: "Otolaryngologia", icon: "👂" },
    { name: "Departamento Terapêutico", icon: "🏥" },
    { name: "Pediatria", icon: "👶" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="inicio" className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                O Futuro da
                <br />
                <span className="text-primary">Gestão Medicamentosa</span>
                <br />
                É Agora<span className="text-primary">.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                CUIDA é o fundador da Gestão Inteligente de Medicamentos, 
                especialista em medicina regenerativa avançada e 
                controle automatizado de estoque.
              </p>
            </div>

            {/* Consultation Card */}
            <Card className="bg-gradient-primary p-6 text-primary-foreground shadow-hero max-w-md">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
                    <img 
                      src={doctorConsultation} 
                      alt="Profissional de Saúde" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="text-xs mb-2 bg-white/20 border-white/30 text-white">
                      Gestão Terapêutica
                    </Badge>
                    <h3 className="text-xl font-bold leading-tight">
                      CONTROLE COM
                      <br />
                      UM ESPECIALISTA
                    </h3>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-white text-primary hover:bg-white/90">
                  ACESSAR PORTAL
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Tech Image */}
            <div className="relative z-10">
              <img 
                src={aiTechnology} 
                alt="Tecnologia IA" 
                className="w-full max-w-lg mx-auto"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 right-8 bg-white rounded-full p-4 shadow-card">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            
            <div className="absolute top-1/4 -left-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-hero">
              <p className="text-sm font-medium">A nova aplicação de</p>
              <p className="text-lg font-bold">tratamento médico</p>
            </div>

            <div className="absolute bottom-1/4 right-4 bg-white rounded-2xl p-4 shadow-card">
              <p className="text-sm font-medium text-muted-foreground">Os melhores especialistas</p>
              <p className="text-lg font-bold text-foreground">do SUS</p>
            </div>

            {/* Patient Stories Card */}
            <Card className="absolute bottom-8 left-8 bg-white shadow-card">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">VER CASOS</p>
                  <p className="font-bold">DE SUCESSO</p>
                </div>
              </CardContent>
            </Card>

            {/* Background Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* Departments Grid */}
        <section id="departamentos" className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="bg-white/80 hover:bg-white hover:shadow-card transition-all cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{dept.icon}</div>
                  <p className="text-sm font-medium text-muted-foreground">{dept.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Three Focus Areas */}
        <section id="gestores" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Sistema Integrado para Gestão de Medicamentos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Três focos principais para revolucionar o controle medicamentoso da Secretaria da Saúde
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Funcionários e Gestores */}
            <Card className="bg-gradient-card shadow-card hover:shadow-hero transition-all p-8">
              <CardContent className="p-0 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Para Funcionários e Gestores
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <p>Mapa interativo com estoque em tempo real de todas as unidades</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Bell className="w-5 h-5 text-secondary mt-0.5" />
                      <p>Alertas automáticos sobre estoque baixo ou medicamentos vencendo</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary mt-0.5" />
                      <p>Agendamento de entregas e documentos oficiais automáticos</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-secondary mt-0.5" />
                      <p>Dashboard com gráficos para decisões estratégicas</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full" variant="hero">
                  Acessar Plataforma Interna
                </Button>
              </CardContent>
            </Card>

            {/* Para o Cidadão */}
            <Card className="bg-gradient-card shadow-card hover:shadow-hero transition-all p-8">
              <CardContent className="p-0 space-y-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Search className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Para o Cidadão
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Search className="w-5 h-5 text-secondary mt-0.5" />
                      <p>Portal público para pesquisar medicamentos disponíveis</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <p>Localização das unidades mais próximas com o medicamento</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-secondary mt-0.5" />
                      <p>Informações em tempo real sobre disponibilidade</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-0.5" />
                      <p>Interface amigável e acessível para todos os cidadãos</p>
                    </div>
                  </div>
                </div>
                <Link to="/portal-cidadao">
                  <Button className="w-full" variant="medical">
                    Acessar Portal do Cidadão
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* A Grande Inovação */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-hero hover:shadow-card transition-all p-8">
              <CardContent className="p-0 space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    A Grande Inovação
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <div className="flex items-start gap-3">
                      <Camera className="w-5 h-5 text-white mt-0.5" />
                      <p>Câmeras com IA nos almoxarifados para contagem automática</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-white mt-0.5" />
                      <p>Controle de estoque sempre atualizado sem intervenção manual</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-white mt-0.5" />
                      <p>Redução drástica de erros e desperdícios</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-white mt-0.5" />
                      <p>Inteligência artificial avançada para gestão preditiva</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                  Conhecer a Tecnologia IA
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section id="tecnologia" className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Modernize, Automatize e Dê Transparência
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              O projeto CUIDA busca transformar a gestão de medicamentos, 
              resultando em menos desperdício e um serviço mais eficiente para a população.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portal-cidadao">
                <Button size="lg" variant="hero" className="px-8">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8">
                Ver Demonstração
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;