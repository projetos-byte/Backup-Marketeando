import logoUfu from "@/assets/logo-ufu.png";
import logoFagen from "@/assets/logo-fagen.jpg";
import logoEgen from "@/assets/logo-egen.jpeg";
import logoNacem from "@/assets/logo-nacem.png";
import logoNeepe from "@/assets/logo-neepe.png";
import logoUberhub from "@/assets/logo-uberhub.png";
import logoCieps from "@/assets/logo-cieps.png";
import logoCiaem from "@/assets/logo-ciaem.png";

const partners = [
  { name: "UFU", logo: logoUfu },
  { name: "FAGEN", logo: logoFagen },
  { name: "EGEN", logo: logoEgen },
  { name: "NACEM", logo: logoNacem },
  { name: "NEEPE", logo: logoNeepe },
  { name: "UBERHUB", logo: logoUberhub },
  { name: "CIEPS", logo: logoCieps },
  { name: "CIAEM", logo: logoCiaem },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Instituições e organizações que acreditam no nosso trabalho e fazem parte dessa jornada de transformação.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;