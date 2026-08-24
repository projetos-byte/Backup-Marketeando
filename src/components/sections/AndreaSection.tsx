const AndreaSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
              Professora Andréa Van Herk
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              A docente Andréa Van Herk é a mente por trás da criação do projeto MARKETeAndo. Professora na Universidade Federal de Uberlândia, ela é responsável por mentorar os mais de 200 alunos que já passaram pelo projeto.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              Sua visão inovadora e compromisso com a educação transformadora são os pilares que sustentam o sucesso do MARKETeAndo, conectando a teoria acadêmica com a prática real de organizações que precisam de apoio.
            </p>
          </div>

          {/* Image Placeholder Side */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Decorative mountain illustration */}
              <svg className="w-full h-full text-muted-foreground/20" viewBox="0 0 400 320" fill="none">
                <ellipse cx="120" cy="180" rx="30" ry="30" fill="currentColor" />
                <path d="M0 320 L150 160 L220 220 L400 80 L400 320 Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndreaSection;