import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana",
    age: 32,
    text: "Pela primeira vez, senti que estava fazendo algo por mim, não contra mim. Perdi 8kg sem passar fome."
  },
  {
    name: "Carolina",
    age: 28,
    text: "Finalmente entendi por que as dietas não funcionavam. Esse método mudou minha relação com a comida."
  },
  {
    name: "Fernanda",
    age: 35,
    text: "Chorei lendo o capítulo sobre culpa. Me senti acolhida pela primeira vez em anos de tentativas."
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-narrow relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          O que elas <span className="gradient-text">dizem</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Histórias reais de mulheres que transformaram sua relação com o corpo.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 relative transition-all duration-300 hover:glow-box"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age} anos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
