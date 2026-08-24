import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "A.M.C.E.S.A.R",
    role: "Pequena Empresa",
    content:
      "Boa tarde a todos! Recebemos com muita alegria os materiais do Projeto MARKETEANDO e agradecemos imensamente pela dedicação e parceria de vocês. 💙 O manual de marca, o portfólio e o manual de aplicabilidade serão muito importantes para o fortalecimento da A.M.C.E.S.A.R...",
    highlight: "Parceria de Sucesso",
  },
  {
    id: 2,
    name: "Dra. Ana Carla",
    role: "Docente",
    content:
      "Estou impressionada com a qualidade do relatório. Andrea não tenho dúvida nenhuma que vc é uma excelente professora. E vcs meninos, alunos muito esforçados e capazes.",
    highlight: "Qualidade Excepcional",
  },
  {
    id: 3,
    name: "Alba Lilian",
    role: "Empreendedora",
    content:
      "Oi minha amiga, bom dia ❤️❤️ Ah, estou amando demais Andrea! Estou pra lá de encantada com eles, com o trabalho, com a dedicação 🥺❤️",
    highlight: "Dedicação e Amor",
  },
  {
    id: 4,
    name: "Claudia",
    role: "Lions Club Uberlândia",
    content:
      "Obrigada novamente Andréa, vc está fazendo a diferença com os alunos e no caso conosco do Lions 😊 Nosso vídeo sobre a galinhada teve 1000 visualizações no Instagram!",
    highlight: "Resultados Reais",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            Depoimentos
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Quote marks */}
          <Quote className="absolute -top-4 -left-4 md:-left-12 w-16 h-16 text-primary/30 rotate-180" />
          <Quote className="absolute -bottom-4 -right-4 md:-right-12 w-16 h-16 text-primary/30" />

          <div className="bg-card rounded-2xl p-8 md:p-12 text-center shadow-card relative">
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>


            <h3 className="font-script text-2xl text-primary mb-4">
              {current.highlight}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6 px-4 md:px-12">
              "{current.content}"
            </p>

            <p className="font-bold text-foreground">{current.name}</p>
            <p className="text-sm text-muted-foreground">{current.role}</p>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;