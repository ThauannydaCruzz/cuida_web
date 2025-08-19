import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Calendar, 
  FileText, 
  Users, 
  Phone, 
  Shield,
  Clock,
  Heart,
  Activity
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Consultas Online",
      description: "Consultas médicas por videochamada com profissionais qualificados, no conforto da sua casa.",
      features: ["24h disponível", "Especialistas certificados", "Receitas digitais"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agendamento Inteligente",
      description: "Sistema inteligente de agendamento que se adapta à sua rotina e preferências.",
      features: ["Lembretes automáticos", "Reagendamento fácil", "Sincronização com calendário"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Histórico Médico",
      description: "Mantenha todo seu histórico médico organizado e acessível quando precisar.",
      features: ["Armazenamento seguro", "Compartilhamento rápido", "Backup automático"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cuidado Familiar",
      description: "Gerencie os cuidados de toda sua família em uma única plataforma integrada.",
      features: ["Perfis múltiplos", "Controle parental", "Notificações familiares"]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Emergência 24h",
      description: "Suporte de emergência disponível 24 horas para situações críticas.",
      features: ["Resposta imediata", "Localização GPS", "Contatos de emergência"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Monitoramento",
      description: "Monitore seus sinais vitais e receba alertas sobre sua saúde.",
      features: ["Integração com wearables", "Alertas personalizados", "Relatórios detalhados"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Heart className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-medium">Nossos Serviços</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Cuidado Completo para
            <span className="block text-primary">Toda Sua Família</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de saúde digital, 
            desde consultas online até monitoramento contínuo da sua saúde.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-hero transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary group-hover:text-primary-glow transition-colors">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center shadow-hero">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            Números que Falam por Si
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">+50K</div>
              <div className="text-primary-foreground/80">Pacientes Atendidos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">+200</div>
              <div className="text-primary-foreground/80">Profissionais</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80">Suporte Disponível</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">98%</div>
              <div className="text-primary-foreground/80">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;