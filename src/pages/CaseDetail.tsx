import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const casesDetails = {
  "pop-rua": {
    category: "ONG Social",
    title: "POP Rua",
    subtitle: "Transformando a comunicação de uma ONG que apoia população em situação de rua",
    description: `O projeto POP Rua atua diretamente com a população em situação de rua em Uberlândia, oferecendo suporte, alimentação e assistência social. A organização enfrentava desafios na captação de recursos e visibilidade junto à comunidade local.

A equipe do MARKETeAndo desenvolveu uma estratégia completa de marketing digital, incluindo a criação de perfis em redes sociais, desenvolvimento de conteúdo e planejamento de campanhas de arrecadação.`,
    results: [
      "Aumento de 200% no engajamento nas redes sociais",
      "5 novas parcerias com empresas locais",
      "Campanha de arrecadação com recorde de doações",
      "Visibilidade ampliada na mídia local",
    ],
    testimonial: {
      text: "O trabalho do MARKETeAndo foi transformador para nossa organização. Agora conseguimos alcançar mais pessoas e mostrar nosso trabalho.",
      author: "Coordenador do POP Rua",
    },
  },
  "mrosc": {
    category: "Organização",
    title: "MROSC",
    subtitle: "Reestruturação de processos para o Marco Regulatório das Organizações da Sociedade Civil",
    description: `O MROSC (Marco Regulatório das Organizações da Sociedade Civil) precisava de uma comunicação mais efetiva para alcançar organizações sociais de Uberlândia e região.

Nossa equipe trabalhou na criação de materiais informativos, organização de eventos e desenvolvimento de uma estratégia de comunicação digital para ampliar o alcance das informações sobre o marco regulatório.`,
    results: [
      "Processos de comunicação otimizados",
      "Material informativo distribuído para 50+ organizações",
      "3 eventos realizados com sucesso",
      "Canal de comunicação estabelecido",
    ],
    testimonial: {
      text: "A parceria com o MARKETeAndo nos ajudou a comunicar melhor sobre o MROSC para as organizações da região.",
      author: "Representante MROSC",
    },
  },
  "rockaid": {
    category: "Associação",
    title: "RockAid",
    subtitle: "Estratégia de eventos beneficentes através da música",
    description: `O RockAid é uma associação que utiliza a música como ferramenta para arrecadar fundos e apoiar causas sociais. A organização buscava ampliar seu alcance e profissionalizar sua gestão de eventos.

O MARKETeAndo desenvolveu uma estratégia completa de marketing para eventos, incluindo divulgação, parcerias e engajamento do público.`,
    results: [
      "Eventos de sucesso com casa cheia",
      "Engajamento ampliado nas redes sociais",
      "Novas parcerias com artistas locais",
      "Arrecadação recorde em eventos beneficentes",
    ],
    testimonial: {
      text: "O MARKETeAndo nos ajudou a profissionalizar nossos eventos e alcançar muito mais pessoas com nossa música e nossa causa.",
      author: "Organizador RockAid",
    },
  },
  "sos-mulheres": {
    category: "ONG Social",
    title: "SOS Mulheres",
    subtitle: "Comunicação estratégica para ONG de apoio a mulheres em vulnerabilidade",
    description: `O SOS Mulheres atua no acolhimento e suporte a mulheres em situação de vulnerabilidade. A organização precisava ampliar sua rede de apoio e fortalecer parcerias estratégicas.

Nossa equipe desenvolveu um plano de comunicação focado na sensibilização da comunidade e na captação de recursos e parcerias para a organização.`,
    results: [
      "Alcance ampliado em 150%",
      "10 novas parcerias institucionais",
      "Campanha de conscientização de sucesso",
      "Rede de voluntários expandida",
    ],
    testimonial: {
      text: "Graças ao trabalho do MARKETeAndo, conseguimos ampliar nossa rede de apoio e ajudar mais mulheres.",
      author: "Diretora SOS Mulheres",
    },
  },
};

const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const caseData = id ? casesDetails[id as keyof typeof casesDetails] : null;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate("/#contato");
  };

  if (!caseData) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-16">
          <div className="container text-center">
            <h1 className="font-script text-4xl text-primary mb-4">Case não encontrado</h1>
            <Link to="/#cases">
              <Button variant="hero">Voltar para Cases</Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container">
          <Link to="/#cases" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-5 h-5" />
            Voltar para Cases
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                {caseData.category}
              </span>
              <h1 className="font-script text-5xl md:text-6xl text-primary mb-4">
                {caseData.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {caseData.subtitle}
              </p>
            </div>
            
            {/* Image placeholder */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <ExternalLink className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Imagem do Case</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-script text-3xl text-primary mb-6">Sobre o Projeto</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                {caseData.description}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Results */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-script text-2xl text-primary mb-4">Resultados</h3>
                <ul className="space-y-3">
                  {caseData.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-primary/10 rounded-2xl p-6">
                <h3 className="font-script text-2xl text-primary mb-4">Depoimento</h3>
                <blockquote className="text-muted-foreground italic mb-4">
                  "{caseData.testimonial.text}"
                </blockquote>
                <p className="text-sm font-semibold text-foreground">
                  — {caseData.testimonial.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container text-center">
          <h2 className="font-script text-3xl text-primary mb-4">
            Quer um resultado assim para sua organização?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como o MARKETeAndo pode ajudar sua organização a alcançar novos patamares.
          </p>
          <Button variant="hero" size="lg" onClick={handleContactClick}>
            Entrar em Contato
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseDetail;