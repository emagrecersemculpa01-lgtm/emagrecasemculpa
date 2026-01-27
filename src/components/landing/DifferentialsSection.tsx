import { Check } from "lucide-react";

const differentials = [
  "Não proíbe alimentos",
  "Não ignora o ciclo feminino",
  "Não exige rotina perfeita",
  "Não usa culpa como motivação"
];

export const DifferentialsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-narrow relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          O que esse método <span className="gradient-text">faz diferente</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Um caminho que respeita sua realidade, não um ideal impossível.
        </p>
        
        <div className="max-w-xl mx-auto">
          <div className="glass-card p-8 md:p-10">
            <ul className="space-y-5">
              {differentials.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
