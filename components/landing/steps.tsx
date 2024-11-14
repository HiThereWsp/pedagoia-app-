const steps = [
  {
    number: "1",
    title: "Inscrivez-vous gratuitement",
    description: "Créez votre compte en quelques secondes et accédez immédiatement à nos outils.",
  },
  {
    number: "2",
    title: "Choisissez vos outils",
    description: "Sélectionnez et utilisez chaque jour l'outil adapté à votre besoin du moment. De la préparation à l'évaluation.",
  },
  {
    number: "3",
    title: "Retrouvez votre équilibre",
    description: "Redécouvrez le plaisir d'enseigner en vous concentrant sur ce qui compte vraiment : l'épanouissement et la réussite de vos élèves sans négliger votre santé mentale.",
  },
];

export function LandingSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Comment ça marche ?</h2>
        <p className="text-xl mb-12 text-center text-gray-600">3 étapes vers un enseignement plus serein</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[#2E8B57] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}