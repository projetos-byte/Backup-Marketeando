import logoMarketeando from "@/assets/logo-marketeando.png";

const IntroSection = () => {
  return (
    <section id="intro" className="py-16 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo à esquerda */}
          <div className="flex justify-center">
            <img 
              src={logoMarketeando} 
              alt="MARKETeAndo" 
              className="w-64 h-auto"
            />
          </div>
          
          {/* Conteúdo à direita */}
          <div className="text-center md:text-left">
            <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
              Sobre o Projeto
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Criado em 2023, o projeto MARKETeAndo surgiu para mudar o cenário de organizações de pequeno porte. 
              Seu objetivo: contribuir com o desenvolvimento de pequenas organizações, com ou sem fins lucrativos, 
              traduzindo conceitos em prática. Já ajudou mais de vinte organizações, estando alinhado às ODS's 04, 11 e 17, 
              com certificação Selo ODSUFU e Prêmio Paulo Freire 2023. O projeto ocorre semestralmente em parceria com 
              a disciplina de Composto Mercadológico da FAGEN/UFU.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;