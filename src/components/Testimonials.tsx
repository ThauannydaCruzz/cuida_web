import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de Família",
      content: "O CUIDA transformou como cuidamos da saúde da nossa família. Conseguimos agendar consultas facilmente e ter todo o histórico médico organizado em um só lugar.",
      rating: 5,
      avatar: "👩‍🦳"
    },
    {
      name: "Dr. João Santos",
      role: "Cardiologista",
      content: "Como profissional de saúde, posso dizer que a plataforma CUIDA facilitou muito o atendimento aos meus pacientes. A interface é intuitiva e os recursos são excelentes.",
      rating: 5,
      avatar: "👨‍⚕️"
    },
    {
      name: "Ana Costa",
      role: "Paciente",
      content: "Precisei de atendimento de emergência e o CUIDA me conectou rapidamente com um médico. O suporte 24h salvou minha vida. Sou eternamente grata!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Oliveira",
      role: "Idoso",
      content: "Aos 75 anos, pensei que seria difícil usar tecnologia para cuidar da saúde. Mas o CUIDA é tão simples que até eu consegui! Agora não vivo sem.",
      rating: 5,
      avatar: "👴"
    },
    {
      name: "Juliana Mendes",
      role: "Enfermeira",
      content: "A funcionalidade de monitoramento do CUIDA permite acompanhar meus pacientes de forma mais eficiente. É uma ferramenta indispensável no cuidado moderno.",
      rating: 5,
      avatar: "👩‍⚕️"
    },
    {
      name: "Roberto Lima",
      role: "Empresário",
      content: "Implementamos o CUIDA na nossa empresa e a produtividade aumentou. Os funcionários estão mais saudáveis e satisfeitos com o benefício oferecido.",
      rating: 5,
      avatar: "👨‍💼"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Quote className="w-4 h-4 text-secondary mr-2" />
            <span className="text-secondary font-medium">Depoimentos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos
            <span className="block text-secondary">Usuários Dizem</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram seus cuidados de saúde 
            com o CUIDA. Sua satisfação é nossa maior conquista.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-hero transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-secondary" />
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Confiança garantida por</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="px-6 py-3 bg-muted rounded-lg">
              <span className="font-semibold text-muted-foreground">ISO 27001</span>
            </div>
            <div className="px-6 py-3 bg-muted rounded-lg">
              <span className="font-semibold text-muted-foreground">LGPD</span>
            </div>
            <div className="px-6 py-3 bg-muted rounded-lg">
              <span className="font-semibold text-muted-foreground">CFM</span>
            </div>
            <div className="px-6 py-3 bg-muted rounded-lg">
              <span className="font-semibold text-muted-foreground">ANVISA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;