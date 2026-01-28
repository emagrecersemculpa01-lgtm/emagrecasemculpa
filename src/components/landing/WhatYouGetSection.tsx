import { FileText, Utensils, Calendar, Dumbbell, Heart } from "lucide-react";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "@/components/ui/scroll-reveal";

const benefits = [
  {
    icon: FileText,
    title: "Guia completo em PDF",
    description: "Passo a passo estruturado e fácil de aplicar na sua vida real"
  },
  {
    icon: Utensils,
    title: "Estratégias simples para vida real",
    description: "Alimentação prática, sem receitas mirabolantes ou ingredientes caros"
  },
  {
    icon: Calendar,
    title: "Ajustes para o ciclo hormonal",
    description: "Cada fase do mês trabalhando a seu favor, não contra você"
  },
  {
    icon: Dumbbell,
    title: "Exercícios possíveis, sem punição",
    description: "Movimentos que cabem na sua rotina, sem exigir 2h de academia"
  },
  {
    icon: Heart,
    title: "Mentalidade para constância sem culpa",
    description: "Transforme sua relação com comida e corpo de forma duradoura"
  }
];

export const WhatYouGetSection = () => {
  return (
    <section className="section-padding relative">
      <div className="neon-glow-bg w-[500px] h-[500px] bottom-0 right-0" />
      
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            O que você <span className="gradient-text">recebe</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tudo o que você precisa para começar sua transformação hoje.
          </p>
        </ScrollReveal>
        
        <ScrollRevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollRevealItem key={index}>
              <div className="glass-card p-6 transition-all duration-300 hover:glow-box hover:-translate-y-1 h-full">
                <div className="w-12 h-12 mb-4 rounded-xl bg-secondary/50 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
};
