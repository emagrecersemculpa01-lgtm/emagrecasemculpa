import { Quote, Star, TrendingDown, Clock } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ui/scroll-reveal";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";

const testimonials = [
  {
    name: "Mariana Silva",
    age: 32,
    location: "São Paulo, SP",
    image: testimonial1,
    text: "Pela primeira vez, senti que estava fazendo algo por mim, não contra mim. Perdi 8kg em 2 meses sem passar fome e sem culpa!",
    result: "-8kg em 2 meses",
    highlight: true
  },
  {
    name: "Carolina Mendes",
    age: 28,
    location: "Rio de Janeiro, RJ",
    image: testimonial2,
    text: "Finalmente entendi por que as dietas não funcionavam. Esse método mudou minha relação com a comida. Meu inchaço sumiu em 3 semanas!",
    result: "Inchaço zero",
    highlight: false
  },
  {
    name: "Fernanda Costa",
    age: 35,
    location: "Belo Horizonte, MG",
    image: testimonial3,
    text: "Chorei lendo o capítulo sobre culpa. Me senti acolhida pela primeira vez em anos. Já eliminei 5kg respeitando meu corpo.",
    result: "-5kg sem sofrimento",
    highlight: true
  },
  {
    name: "Juliana Oliveira",
    age: 26,
    location: "Curitiba, PR",
    image: testimonial4,
    text: "Depois de 10 dietas fracassadas, achei que era impossível. Em 6 semanas perdi 6kg e voltei a vestir minhas roupas favoritas!",
    result: "-6kg em 6 semanas",
    highlight: false
  },
  {
    name: "Patrícia Almeida",
    age: 33,
    location: "Porto Alegre, RS",
    image: testimonial5,
    text: "A parte sobre o ciclo hormonal foi reveladora. Agora sei quando meu corpo precisa de mais carinho. Resultado: -4kg e muito mais energia!",
    result: "+Energia -4kg",
    highlight: false
  },
  {
    name: "Amanda Rodrigues",
    age: 29,
    location: "Salvador, BA",
    image: testimonial6,
    text: "Não acreditava que era possível emagrecer sem sofrer. Perdi 7kg em 8 semanas e pela primeira vez não recuperei o peso!",
    result: "-7kg definitivos",
    highlight: true
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="neon-glow-bg w-[500px] h-[500px] top-0 right-0" />
      
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que elas <span className="gradient-text">dizem</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de mulheres que transformaram sua relação com o corpo.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollRevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollRevealItem key={index}>
              <div className={`${testimonial.highlight ? 'glass-card-premium' : 'glass-card'} p-6 relative transition-all duration-300 hover:glow-box h-full flex flex-col`}>
                {testimonial.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="premium-badge text-[10px]">
                      <TrendingDown className="w-3 h-3" />
                      Destaque
                    </span>
                  </div>
                )}
                
                <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 glow-box"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.age} anos • {testimonial.location}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 italic leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold text-accent">{testimonial.result}</span>
                  </div>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>
        
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3">
              <div className="flex -space-x-2">
                {[testimonial1, testimonial2, testimonial3, testimonial4].map((img, i) => (
                  <img 
                    key={i}
                    src={img} 
                    alt="" 
                    className="w-8 h-8 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">+500 mulheres</strong> já transformaram suas vidas
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
