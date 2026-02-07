import { Gift, BookOpen, ListChecks, Clock, Crown, Moon, Heart } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ui/scroll-reveal";

const bonuses = [
  {
    icon: BookOpen,
    title: "Guia de Receitas Rápidas",
    description: "20+ receitas práticas para o dia a dia, prontas em menos de 20 minutos",
    value: "R$ 27"
  },
  {
    icon: ListChecks,
    title: "Checklist Semanal",
    description: "Planejamento simplificado para manter a constância sem estresse",
    value: "R$ 17"
  },
  {
    icon: Clock,
    title: "Guia de Desbloqueio Emocional",
    description: "Técnicas para identificar e superar a fome emocional de vez",
    value: "R$ 37"
  },
  {
    icon: Moon,
    title: "Protocolo do Sono Reparador",
    description: "Rotina noturna que acelera o metabolismo e reduz o cortisol enquanto você dorme",
    value: "R$ 29"
  },
  {
    icon: Heart,
    title: "Diário de Autocompaixão",
    description: "30 dias de exercícios para transformar sua relação com o corpo e a comida",
    value: "R$ 19"
  }
];

export const BonusSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="neon-glow-bg w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2" />
      
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="premium-badge mb-4">
              <Crown className="w-3 h-3" />
              Bônus Exclusivos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">+R$ 129</span> em bônus incluídos
          </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Você recebe tudo isso junto com o método principal, sem pagar nada a mais.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollRevealStagger className="grid md:grid-cols-3 gap-6 mb-8">
          {bonuses.map((bonus, index) => (
            <ScrollRevealItem key={index}>
              <div className="glass-card-premium p-6 h-full group shimmer-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <bonus.icon className="w-7 h-7 text-accent icon-glow" />
                  </div>
                  <div className="flex items-center gap-1">
                    <Gift className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold text-accent">GRÁTIS</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {bonus.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {bonus.description}
                </p>
                
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm">
                    <span className="text-muted-foreground line-through">Valor: {bonus.value}</span>
                    <span className="ml-2 text-accent font-bold">Incluso</span>
                  </p>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>
        
        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3">
              <Crown className="w-5 h-5 text-accent icon-glow" />
              <span className="text-lg font-semibold">
                Total em bônus: <span className="gradient-text">R$ 129,00</span> — você paga <span className="text-accent">R$ 0</span>
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
