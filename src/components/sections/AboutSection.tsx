import { Button } from "@/components/ui/button";
import heroBg from "@/assets/foto-fundo.jpg";

const AboutSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="quem-somos" className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo Side */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={heroBg} 
                alt="Equipe MARKETeAndo" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
              Quem Somos
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Somos um projeto desenvolvido por alunos da <span className="text-primary font-semibold">UFU</span> que atuam como consultores para PMEs e ONGs, aplicando ferramentas de marketing estratégico.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              São mais de 200 alunos envolvidos, mentorados pela professora Andrea van Herk. Nosso diferencial está na metodologia colaborativa que promove o aprendizado conjunto entre universidade e comunidade.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#mvv")}
              >
                Saiba mais
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => scrollToSection("#cases")}
              >
                Ver cases
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;