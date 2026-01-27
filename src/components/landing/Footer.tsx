export const Footer = () => {
  return (
    <footer className="section-padding border-t border-border/30">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold gradient-text mb-1">Perda de Peso Feminina Sem Culpa</p>
            <p className="text-sm text-muted-foreground">Um novo jeito de ver</p>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#termos" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#contato" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Este produto é um material educacional e não substitui acompanhamento médico ou nutricional. 
            Resultados podem variar de pessoa para pessoa. Consulte um profissional de saúde antes de 
            iniciar qualquer mudança em sua alimentação ou rotina de exercícios.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
