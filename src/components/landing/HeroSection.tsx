import heroWoman from "@/assets/hero-woman.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";

const CHECKOUT_URL = "https://pay.cakto.com.br/hvacbfa_744151";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="neon-glow-bg w-[600px] h-[600px] -top-32 -left-32 animate-pulse-glow" />
      <div className="neon-glow-bg w-[500px] h-[500px] top-1/2 right-0 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container-narrow section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="glow-text">Emagreça</span>
              <br />
              <span className="gradient-text">Respeitando Seu Corpo</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Um método prático para emagrecer, reduzir o inchaço, controlar a fome emocional e sair do efeito sanfona — sem culpa, sem extremos e respeitando o corpo feminino.
            </p>
            
            <a
              href={CHECKOUT_URL}
              className="btn-primary-glow inline-block"
            >
              Quero emagrecer sem culpa
            </a>
          </div>
          
          {/* Visual Content */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Woman Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img
                src={heroWoman}
                alt="Mulher confiante olhando no espelho"
                className="w-full max-w-md rounded-3xl glow-box object-cover"
              />
            </div>
            
            {/* Ebook Mockup - Floating */}
            <div className="absolute -bottom-8 -left-8 lg:-left-16 z-20 animate-float">
              <img
                src={ebookMockup}
                alt="E-book Perda de Peso Feminina Sem Culpa"
                className="w-40 md:w-52 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
