import { useState, useEffect } from "react";
import { Calendar, MapPin, Newspaper, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/foto-fundo.jpg";

const allNews = [
  {
    id: 1,
    icon: Newspaper,
    category: "Notícia",
    title: "MARKETeAndo recebe Prêmio Paulo Freire 2023",
    description: "O projeto foi reconhecido pela sua contribuição significativa à extensão universitária, promovendo a integração entre universidade e comunidade.",
    date: "2023-11-15",
    dateLabel: "15 Nov 2023",
    featured: true,
  },
  {
    id: 2,
    icon: Calendar,
    category: "Evento",
    title: "Workshop de Marketing para ONGs",
    description: "Capacitação gratuita voltada para organizações sem fins lucrativos, abordando estratégias de marketing digital e comunicação.",
    date: "2024-03-20",
    dateLabel: "20 Mar 2024",
  },
  {
    id: 3,
    icon: MapPin,
    category: "Evento",
    title: "Feira de Empreendedorismo Social",
    description: "Participe da feira com cases de sucesso do projeto e conheça as organizações que já foram beneficiadas pelo MARKETeAndo.",
    date: "2024-06-10",
    dateLabel: "10 Jun 2024",
  },
  {
    id: 4,
    icon: Newspaper,
    category: "Notícia",
    title: "Certificação Selo ODSUFU conquistada",
    description: "O MARKETeAndo obteve o selo ODSUFU por seu alinhamento com os Objetivos de Desenvolvimento Sustentável da ONU.",
    date: "2023-08-05",
    dateLabel: "05 Ago 2023",
  },
  {
    id: 5,
    icon: Calendar,
    category: "Evento",
    title: "Semana de Consultoria Gratuita",
    description: "Uma semana inteira de consultoria gratuita para PMEs e ONGs da região de Uberlândia.",
    date: "2024-09-01",
    dateLabel: "01 Set 2024",
  },
  {
    id: 6,
    icon: Newspaper,
    category: "Notícia",
    title: "Mais de 200 alunos já participaram do projeto",
    description: "O MARKETeAndo alcançou a marca de 200 alunos envolvidos desde sua criação em 2023.",
    date: "2025-02-12",
    dateLabel: "12 Fev 2025",
  },
];

const sortedNews = [...allNews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const featuredNews = sortedNews[0];
const secondaryNews = sortedNews.slice(1);

const today = new Date().toISOString().slice(0, 10);
const upcomingEvents = secondaryNews.filter(
  (item) => item.category === "Evento" && item.date >= today
);

const filters = ["Todos", "Notícias", "Eventos"] as const;
type Filter = (typeof filters)[number];

const Noticias = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredNews = secondaryNews.filter((item) => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "Notícias") return item.category === "Notícia";
    if (activeFilter === "Eventos") return item.category === "Evento";
    return true;
  });

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-5 h-5" />
            Voltar para a Landing Page
          </Link>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-script text-5xl md:text-6xl text-primary mb-4">
              Notícias e Eventos
            </h1>
            <p className="text-muted-foreground text-lg">
              Acompanhe as últimas novidades, eventos e conquistas do projeto MARKETeAndo.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="h-56 md:h-auto">
                <img
                  src={heroBg}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {featuredNews.category}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {featuredNews.dateLabel}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                  {featuredNews.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredNews.description}
                </p>
                <div>
                  <Button variant="hero" size="default">
                    Leia mais
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="pb-8 bg-background">
          <div className="container">
            <h2 className="font-script text-3xl md:text-4xl text-primary mb-6">
              Próximos Eventos
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((item) => (
                <div
                  key={item.id}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mb-4 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-colors">
                    <item.icon className="w-16 h-16 text-primary" />
                  </div>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {item.dateLabel}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter */}
      <section className="py-8 bg-background">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <Button
                key={f}
                variant={activeFilter === f ? "hero" : "outline"}
                size="default"
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-16 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mb-4 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-colors">
                  <item.icon className="w-16 h-16 text-primary" />
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {item.dateLabel}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Noticias;
