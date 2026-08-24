import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const casesData = [
  {
    id: "pop-rua",
    category: "ONG Social",
    title: "POP Rua",
    description:
      "Desenvolvimento de estratégia de marketing digital e captação de recursos para instituição de apoio à população em situação de rua.",
    results: ["Aumento de visibilidade", "Novas parcerias estratégicas"],
  },
  {
    id: "mrosc",
    category: "Organização",
    title: "MROSC",
    description:
      "Reestruturação de processos de gestão e desenvolvimento de comunicação para marco regulatório das organizações da sociedade civil.",
    results: ["Processos otimizados", "Comunicação efetiva"],
  },
  {
    id: "rockaid",
    category: "Associação",
    title: "RockAid",
    description:
      "Criação de estratégia de eventos e capacitação em marketing para associação beneficente através da música.",
    results: ["Eventos de sucesso", "Engajamento ampliado"],
  },
  {
    id: "sos-mulheres",
    category: "ONG Social",
    title: "SOS Mulheres",
    description:
      "Desenvolvimento de plano de comunicação e parcerias estratégicas para ONG de apoio a mulheres em situação de vulnerabilidade.",
    results: ["Alcance ampliado", "Novas parcerias"],
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça algumas das organizações que transformamos juntos através do nosso trabalho colaborativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {casesData.map((caseItem, index) => (
            <Link
              key={caseItem.id}
              to={`/cases/${caseItem.id}`}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {caseItem.category}
                </span>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {caseItem.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {caseItem.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {caseItem.results.map((result, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                  >
                    ✓ {result}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;