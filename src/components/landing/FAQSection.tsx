import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const faqs = [
  {
    question: "Esse método funciona para qualquer idade?",
    answer: "Sim! O método foi desenvolvido para mulheres adultas de todas as idades, respeitando as particularidades hormonais de cada fase da vida."
  },
  {
    question: "Preciso fazer exercícios intensos?",
    answer: "Não. O método inclui sugestões de movimentos leves e adaptáveis à sua realidade. Nada de punição ou rotinas exaustivas."
  },
  {
    question: "Vou precisar cortar alimentos?",
    answer: "Não. Acreditamos que restrições extremas não funcionam a longo prazo. Você aprenderá a fazer escolhas conscientes sem proibições."
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer: "Cada corpo responde de forma diferente. O foco está na mudança de hábitos sustentáveis, não em promessas vazias de resultados rápidos."
  },
  {
    question: "Como recebo o material?",
    answer: "Após a confirmação do pagamento, você receberá o acesso por e-mail em poucos minutos. É um PDF que pode ser lido em qualquer dispositivo."
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Você tem 7 dias para avaliar o conteúdo. Se não gostar, devolvemos seu dinheiro sem perguntas."
  }
];

export const FAQSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Dúvidas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tudo o que você precisa saber antes de começar.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card border-none px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
