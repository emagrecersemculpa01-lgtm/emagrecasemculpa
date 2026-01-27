const CHECKOUT_URL = "https://pay.cakto.com.br/hvacbfa_744151";

export const PricingSection = () => {
  return (
    <section className="section-padding relative">
      <div className="neon-glow-bg w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-narrow relative z-10">
        <div className="glass-card p-8 md:p-12 text-center glow-box">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Comece hoje por um <span className="gradient-text">valor acessível</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Acesso completo ao método <strong>Emagreça Respeitando Seu Corpo</strong>
          </p>
          
          <div className="mb-8">
            <p className="text-muted-foreground line-through text-lg mb-2">
              De R$ 97,00
            </p>
            <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              R$ 37,90
            </p>
            <p className="text-muted-foreground text-sm">
              pagamento único
            </p>
          </div>
          
          <a 
            href={CHECKOUT_URL} 
            className="btn-primary-glow inline-block text-xl px-10 py-5 mb-6"
          >
            Quero começar agora por R$ 37,90
          </a>
          
          <p className="text-sm text-muted-foreground">
            Pagamento seguro • Acesso imediato • Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};
