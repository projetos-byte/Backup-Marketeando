import { useState, useEffect } from "react";
import { Download, FileText, BarChart3, CheckSquare, BookOpen, PresentationIcon, Filter, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allMaterials = [
  {
    id: 1,
    icon: CheckSquare,
    category: "Checklist",
    theme: "Marketing",
    title: "Guia de Marketing Digital para ONGs",
    description: "Passo a passo completo para iniciar sua presença digital e alcançar mais pessoas.",
  },
  {
    id: 2,
    icon: FileText,
    category: "E-book",
    theme: "Gestão",
    title: "Gestão Financeira para Pequenas Empresas",
    description: "Controle suas finanças e cresça de forma sustentável com dicas práticas.",
  },
  {
    id: 3,
    icon: BarChart3,
    category: "Infográfico",
    theme: "Impacto Social",
    title: "Indicadores de Impacto Social",
    description: "Métricas essenciais para medir o impacto da sua organização na comunidade.",
  },
  {
    id: 4,
    icon: BookOpen,
    category: "E-book",
    theme: "Marketing",
    title: "Estratégias de Redes Sociais",
    description: "Como criar conteúdo engajador e construir uma comunidade online.",
  },
  {
    id: 5,
    icon: PresentationIcon,
    category: "Planilha",
    theme: "Gestão",
    title: "Planilha de Planejamento Estratégico",
    description: "Template completo para organizar metas e acompanhar resultados.",
  },
  {
    id: 6,
    icon: CheckSquare,
    category: "Checklist",
    theme: "Impacto Social",
    title: "Checklist de Captação de Recursos",
    description: "Passos essenciais para estruturar sua estratégia de captação.",
  },
  {
    id: 7,
    icon: FileText,
    category: "E-book",
    theme: "Marketing",
    title: "Branding para Pequenas Organizações",
    description: "Como construir uma identidade visual forte e memorável.",
  },
  {
    id: 8,
    icon: BarChart3,
    category: "Infográfico",
    theme: "Gestão",
    title: "Fluxo de Caixa Simplificado",
    description: "Visualize e controle o dinheiro que entra e sai da sua organização.",
  },
];

const themes = ["Todos", "Marketing", "Gestão", "Impacto Social"];
const types = ["Todos", "E-book", "Checklist", "Infográfico", "Planilha"];

const Materiais = () => {
  const [selectedTheme, setSelectedTheme] = useState("Todos");
  const [selectedType, setSelectedType] = useState("Todos");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMaterials = allMaterials.filter((material) => {
    const themeMatch = selectedTheme === "Todos" || material.theme === selectedTheme;
    const typeMatch = selectedType === "Todos" || material.category === selectedType;
    return themeMatch && typeMatch;
  });

  const handleDownload = (title: string) => {
    // Placeholder for download functionality
    alert(`Download do material: ${title}`);
  };

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
              Materiais Gratuitos
            </h1>
            <p className="text-muted-foreground text-lg">
              Planilhas, e-books, checklists e muito mais para usar em todos os seus processos de gestão e marketing. Baixe gratuitamente!
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filtrar por:</span>
            </div>
            
            <Select value={selectedTheme} onValueChange={setSelectedTheme}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Tema" />
              </SelectTrigger>
              <SelectContent>
                {themes.map((theme) => (
                  <SelectItem key={theme} value={theme}>
                    {theme}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Tipo de Material" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {(selectedTheme !== "Todos" || selectedType !== "Todos") && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedTheme("Todos");
                  setSelectedType("Todos");
                }}
              >
                Limpar filtros
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          {filteredMaterials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Nenhum material encontrado com os filtros selecionados.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMaterials.map((material) => (
                <div
                  key={material.id}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mb-4 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-colors">
                    <material.icon className="w-16 h-16 text-primary" />
                  </div>

                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {material.category}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {material.theme}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                    {material.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {material.description}
                  </p>

                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full"
                    onClick={() => handleDownload(material.title)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Gratuito
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Materiais;