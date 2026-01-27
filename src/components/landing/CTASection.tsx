const CHECKOUT_URL = "#checkout-placeholder";

interface CTASectionProps {
  variant?: "intermediate" | "final";
}

export const CTASection = ({ variant = "intermediate" }: CTASectionProps) => {
  const isIntermediate = variant === "intermediate";
  
  return (
    <section className="section-padding relative">
      <div className="neon-glow-bg w-[600px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-narrow relative z-10">
        <div className="glass-card p-8 md:p-12 text-center glow-box">
          {isIntermediate ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Pronta para <span className="gradient-text">começar?</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Dê o primeiro passo para uma relação saudável com seu corpo.
              </p>
              <a href={CHECKOUT_URL} className="btn-primary-glow inline-block">
                Ir para o Checkout Seguro
              </a>
            </>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="gradient-text">Acesso imediato</span> ao método completo
              </h2>
              
              <ul className="text-left max-w-md mx-auto mb-8 space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-primary">✓</span> Guia PDF completo
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-primary">✓</span> Estratégias para cada fase do ciclo
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-primary">✓</span> Exercícios adaptados
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-primary">✓</span> Mentalidade sem culpa
                </li>
              </ul>
              
              <a href={CHECKOUT_URL} className="btn-primary-glow inline-block text-xl px-10 py-5">
                Comprar Agora
              </a>
              
              <p className="mt-6 text-sm text-muted-foreground">
                Pagamento seguro • Acesso imediato • Garantia de 7 dias
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
