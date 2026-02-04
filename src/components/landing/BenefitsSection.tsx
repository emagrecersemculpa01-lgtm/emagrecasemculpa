import { Sparkles, Brain, Scale, Utensils, TrendingUp, Moon, Zap, Heart, Leaf, Timer } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ui/scroll-reveal";

const benefits = [
  {
    icon: Scale,
    text: "Redução do inchaço e sensação de peso",
    highlight: true
  },
  {
    icon: Brain,
    text: "Mais controle da fome emocional",
    highlight: true
  },
  {
    icon: TrendingUp,
    text: "Menos efeito sanfona"
  },
  {
    icon: Utensils,
    text: "Relação mais leve com comida"
  },
  {
    icon: Sparkles,
    text: "Constância sem sofrimento"
  },
  {
    icon: Moon,
    text: "Melhor qualidade de sono e disposição"
  },
  {
    icon: Zap,
    text: "Mais energia durante o dia"
  },
  {
    icon: Heart,
    text: "Autoestima restaurada"
  },
  {
    icon: Leaf,
    text: "Alimentação intuitiva e prazerosa"
  },
  {
    icon: Timer,
    text: "Resultados visíveis em semanas, não meses"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="neon-glow-bg w-[400px] h-[400px] top-1/2 left-0 -translate-y-1/2" />
      
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="premium-badge mb-4">
              <Sparkles className="w-3 h-3" />
              Transformação Completa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tudo o que você <span className="gradient-text">pode conquistar</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Com o método certo, resultados reais são possíveis.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card-premium p-8 md:p-10">
              <ScrollRevealStagger className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <ScrollRevealItem key={index}>
                    <li className={`flex items-center gap-4 list-none p-3 rounded-xl transition-all duration-300 hover:bg-primary/5 ${benefit.highlight ? 'bg-primary/10 border border-primary/20' : ''}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${benefit.highlight ? 'bg-primary/30' : 'bg-primary/20'}`}>
                        <benefit.icon className={`w-5 h-5 text-primary ${benefit.highlight ? 'icon-glow' : ''}`} />
                      </div>
                      <span className={`text-base ${benefit.highlight ? 'font-medium text-foreground' : ''}`}>{benefit.text}</span>
                    </li>
                  </ScrollRevealItem>
                ))}
              </ScrollRevealStagger>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-center text-muted-foreground text-sm mt-8 italic">
            ⚠️ Não é um método milagroso. Resultados variam conforme a aplicação.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
