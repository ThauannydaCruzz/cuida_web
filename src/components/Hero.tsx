import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import cuidaHero from "@/assets/cuida-hero.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cuidaHero}
          alt="Cuidados de Saúde" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Heart className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-medium">Sistema de Cuidados Integrado</span>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Cuidando de
            <span className="block bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              Você e Sua Família
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            O CUIDA é sua plataforma completa para gerenciar cuidados de saúde, 
            conectar com profissionais qualificados e manter sua família sempre protegida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4 h-auto">
              Começar Gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
              Saiba Mais
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-card">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-primary-glow" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Cuidado Personalizado</h3>
              <p className="text-white/80 text-sm">
                Planos de cuidado adaptados às necessidades específicas de cada paciente
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-card">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Segurança Total</h3>
              <p className="text-white/80 text-sm">
                Seus dados médicos protegidos com os mais altos padrões de segurança
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-card">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-primary-glow" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Rede de Profissionais</h3>
              <p className="text-white/80 text-sm">
                Acesso a uma rede qualificada de profissionais de saúde certificados
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;