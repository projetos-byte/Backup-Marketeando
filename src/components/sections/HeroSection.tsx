import { Button } from "@/components/ui/button";
import heroBg from "@/assets/foto-fundo.jpg";
import logoMarketeando from "@/assets/logo-marketeando.png";
import seloOdsufu from "@/assets/selo-odsufu.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with lighter overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-white/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Logo (increased size) */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <img 
                src={logoMarketeando} 
                alt="MARKETeAndo" 
                className="w-72 h-auto drop-shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-primary mb-4 animate-fade-in leading-tight">
              Auxiliando ONGs e<br />Pequenas Empresas
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 font-light mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Trocando Saberes. Produzindo Amor.
            </p>
            
            <p className="text-foreground/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg lg:mx-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Nosso propósito se baseia em formar e compartilhar conhecimento para o aprendizado conjunto de organizações sem fins lucrativos e pequenas empresas.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#contato")}
              >
                Entre em contato
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => scrollToSection("#quem-somos")}
              >
                Saiba mais
              </Button>
            </div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap gap-6 items-center justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <img src={seloOdsufu} alt="Selo ODSUFU" className="h-12 w-auto" />
              <span className="px-4 py-2 rounded-full text-foreground/60 text-sm font-medium border border-foreground/15">
                Prêmio Destaque Paulo Freire
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
