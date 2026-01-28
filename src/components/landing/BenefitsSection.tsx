import { Sparkles, Brain, Scale, Utensils, TrendingUp } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ui/scroll-reveal";

const benefits = [
  {
    icon: Scale,
    text: "Redução do inchaço e sensação de peso"
  },
  {
    icon: Brain,
    text: "Mais controle da fome emocional"
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
  }
];

export const BenefitsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Tudo o que você <span className="gradient-text">pode conquistar</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Com o método certo, resultados reais são possíveis.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 md:p-10">
              <ScrollRevealStagger className="space-y-5">
                {benefits.map((benefit, index) => (
                  <ScrollRevealItem key={index}>
                    <li className="flex items-center gap-4 list-none">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg">{benefit.text}</span>
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
