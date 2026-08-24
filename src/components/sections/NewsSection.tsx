import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import imgNews1 from "@/assets/foto-fundo.jpg";
import imgNews2 from "@/assets/fundo-home.jpg";
import imgNews3 from "@/assets/hero-bg.jpg";

const newsData = [
  {
    image: imgNews1,
    category: "Notícia",
    title: "MARKETeAndo recebe Prêmio Paulo Freire 2023",
    description: "Projeto é reconhecido pela contribuição à extensão universitária.",
  },
  {
    image: imgNews2,
    category: "Evento",
    title: "Workshop de Marketing para ONGs",
    description: "Capacitação gratuita para organizações sem fins lucrativos.",
  },
  {
    image: imgNews3,
    category: "Evento",
    title: "Feira de Empreendedorismo Social",
    description: "Participe da feira com cases de sucesso do projeto.",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-1">
            <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
              Notícias e Eventos
            </h2>
            <p className="text-muted-foreground mb-6">
              Fique por dentro das últimas novidades, eventos e conquistas do projeto MARKETeAndo.
            </p>
            <Link to="/noticias">
              <Button variant="hero">
                Ver todos
              </Button>
            </Link>
          </div>

          {/* News Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {newsData.map((item, index) => (
              <Link
                to="/noticias"
                key={index}
                className="group bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 hover:from-primary/10 hover:to-primary/20 transition-all duration-300 cursor-pointer no-underline"
              >
                <div className="w-full h-36 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {item.category}
                </span>

                <h3 className="text-sm font-bold text-foreground mt-2 mb-2 leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-muted-foreground mb-4">
                  {item.description}
                </p>

                <span className="flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
                  Leia mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
