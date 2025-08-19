import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Heart } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para Transformar
            <span className="block">Seus Cuidados de Saúde?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Junte-se a milhares de famílias que já descobriram uma nova forma de cuidar da saúde. 
            Comece gratuitamente hoje mesmo!
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">100% Seguro</h3>
              <p className="text-white/80 text-sm">Seus dados protegidos com criptografia de ponta</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Para Toda Família</h3>
              <p className="text-white/80 text-sm">Gerencie os cuidados de todos em um só lugar</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Cuidado Humanizado</h3>
              <p className="text-white/80 text-sm">Tecnologia com o toque humano que você merece</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-white/90 border-white">
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="ghost" className="text-lg px-8 py-4 h-auto text-white hover:bg-white/10 border border-white/30">
              Agendar Demonstração
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-white/70 text-sm">
            ✓ Gratuito para sempre • ✓ Sem cartão de crédito • ✓ Suporte 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;