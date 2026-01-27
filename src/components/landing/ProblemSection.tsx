import { Sparkles, Brain, Moon } from "lucide-react";

const problems = [
  {
    icon: Sparkles,
    title: "Hormônios",
    description: "Seu corpo feminino tem necessidades únicas que dietas comuns ignoram."
  },
  {
    icon: Brain,
    title: "Estresse",
    description: "A rotina pesada sabota seus resultados sem você perceber."
  },
  {
    icon: Moon,
    title: "Ciclo",
    description: "Cada fase do mês pede uma abordagem diferente."
  }
];

export const ProblemSection = () => {
  return (
    <section className="section-padding relative">
      <div className="neon-glow-bg w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2" />
      
      <div className="container-narrow relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          O problema <span className="gradient-text">nunca foi você</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A culpa não é sua. Métodos genéricos não consideram o que torna você, você.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center transition-all duration-300 hover:glow-box hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/50 flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
