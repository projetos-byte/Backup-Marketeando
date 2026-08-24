import { Heart, Eye, Star } from "lucide-react";

const mvvData = [
  {
    icon: Heart,
    title: "MISSÃO",
    description:
      "Transformar pequenas organizações, traduzindo dificuldades em soluções viáveis através do conhecimento compartilhado.",
  },
  {
    icon: Eye,
    title: "VISÃO",
    description:
      "Cuidar das organizações e alunos ao promover intercâmbio de conhecimentos, conectando academia e comunidade.",
  },
  {
    icon: Star,
    title: "VALORES",
    description:
      "Propósito, Responsabilidade e Empatia são os pilares que guiam cada ação e decisão do MARKETeAndo.",
  },
];

const MVVSection = () => {
  return (
    <section id="mvv" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossos princípios fundamentais que guiam cada ação e decisão do MARKETeAndo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mvvData.map((item, index) => (
            <div
              key={item.title}
              className="group gradient-card rounded-2xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="font-script text-2xl text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-white/90 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MVVSection;