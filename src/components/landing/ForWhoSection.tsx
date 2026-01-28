import { User, RefreshCw, Heart, Target } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ui/scroll-reveal";

const personas = [
  {
    icon: User,
    title: "Mulheres cansadas de dietas",
    description: "Que já tentaram de tudo e nada parece funcionar de verdade"
  },
  {
    icon: RefreshCw,
    title: "Quem sofre com efeito sanfona",
    description: "Emagrece, engorda, e se culpa por isso — num ciclo sem fim"
  },
  {
    icon: Heart,
    title: "Quem quer emagrecer sem se odiar",
    description: "Buscando um caminho com autocompaixão e respeito ao próprio corpo"
  },
  {
    icon: Target,
    title: "Quem busca resultado real",
    description: "Não quer milagre, quer um método possível de manter"
  }
];

export const ForWhoSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Para <span className="gradient-text">quem é</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Este método foi criado especialmente para você.
          </p>
        </ScrollReveal>
        
        <ScrollRevealStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {personas.map((persona, index) => (
            <ScrollRevealItem key={index}>
              <div className="glass-card p-6 text-center transition-all duration-300 hover:glow-box hover:-translate-y-1 h-full">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary/50 flex items-center justify-center">
                  <persona.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{persona.title}</h3>
                <p className="text-muted-foreground text-sm">{persona.description}</p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>
        
        <ScrollReveal delay={0.2}>
          <p className="text-center text-muted-foreground text-sm italic">
            ⚠️ Não é um método milagroso. Requer compromisso com você mesma.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
