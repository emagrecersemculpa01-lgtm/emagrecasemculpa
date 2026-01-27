import { CheckCircle, Mail } from "lucide-react";

const Obrigado = () => {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="neon-glow-bg w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      
      <div className="container-narrow section-padding relative z-10">
        <div className="glass-card p-8 md:p-12 text-center max-w-2xl mx-auto glow-box">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Obrigada</span> pela sua compra!
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8">
            Sua jornada de transformação começa agora.
          </p>
          
          <div className="glass-card p-6 mb-8 bg-secondary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <span className="font-semibold">Próximos passos:</span>
            </div>
            <p className="text-muted-foreground">
              Após a confirmação do pagamento pela CACTO, você receberá um e-mail com o link de acesso ao material completo. 
              <br /><br />
              <strong className="text-foreground">Verifique também sua caixa de spam!</strong>
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Dúvidas? Entre em contato pelo nosso suporte.
          </p>
          
          <a
            href="/"
            className="inline-block mt-6 text-primary hover:underline transition-colors"
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </main>
  );
};

export default Obrigado;
