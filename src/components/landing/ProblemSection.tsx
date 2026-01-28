import { Sparkles, Brain, Moon } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ui/scroll-reveal";

const problems = [
  {
    icon: Sparkles,
    title: "Hormônios",
    description: "Seu corpo feminino tem necessidades únicas que dietas genéricas simplesmente ignoram. Não é falta de força de vontade."
  },
  {
    icon: Brain,
    title: "Estresse e Rotina",
    description: "A vida corrida, o cansaço e a pressão do dia a dia sabotam seus resultados sem você perceber."
  },
  {
    icon: Moon,
    title: "Ciclo Feminino",
    description: "Cada fase do seu mês pede uma abordagem diferente. Dietas que ignoram isso estão fadadas ao fracasso."
  }
];

export const ProblemSection = () => {
  return (
    <section className="section-padding relative">
      <div className="neon-glow-bg w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2" />
      
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            O problema <span className="gradient-text">nunca foi você</span>
          </h2>
          <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
            A culpa não é sua. Você não fracassou — os métodos que você tentou é que não foram feitos para você.
          </p>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-sm">
            Dietas genéricas ignoram seus hormônios, seu estresse e sua rotina real. Elas tratam você como se fosse uma máquina — e quando não funciona, a culpa cai em você. Isso acaba aqui.
          </p>
        </ScrollReveal>
        
        <ScrollRevealStagger className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <ScrollRevealItem key={index}>
              <div className="glass-card p-8 text-center transition-all duration-300 hover:glow-box hover:-translate-y-1 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/50 flex items-center justify-center">
                  <problem.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
};
