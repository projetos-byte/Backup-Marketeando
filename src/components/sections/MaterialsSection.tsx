import { Download, FileText, BarChart3, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const materialsData = [
  {
    icon: CheckSquare,
    category: "Checklist",
    title: "Guia de Marketing Digital para ONGs",
    description: "Passo a passo completo para iniciar sua presença digital.",
  },
  {
    icon: FileText,
    category: "E-book",
    title: "Gestão Financeira para Pequenas Empresas",
    description: "Controle suas finanças e cresça de forma sustentável.",
  },
  {
    icon: BarChart3,
    category: "Infográfico",
    title: "Indicadores de Impacto Social",
    description: "Métricas essenciais para medir o impacto da sua organização.",
  },
];

const MaterialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-1">
            <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
              Materiais Gratuitos
            </h2>
            <p className="text-muted-foreground mb-6">
              Planilhas, e-books, checklists e muito mais para usar em todos os seus processos de gestão e marketing.
            </p>
            <Link to="/materiais">
              <Button variant="hero">
                Ver todos
              </Button>
            </Link>
          </div>

          {/* Materials Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materialsData.map((material, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 hover:from-primary/10 hover:to-primary/20 transition-all duration-300 cursor-pointer"
              >
                <div className="w-full h-32 bg-primary/20 rounded-xl mb-4 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <material.icon className="w-12 h-12 text-primary" />
                </div>

                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {material.category}
                </span>

                <h3 className="text-sm font-bold text-foreground mt-2 mb-2 leading-tight">
                  {material.title}
                </h3>

                <p className="text-xs text-muted-foreground mb-4">
                  {material.description}
                </p>

                <button className="flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
                  Baixe agora <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;