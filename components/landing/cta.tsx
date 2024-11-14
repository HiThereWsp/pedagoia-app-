import { Button } from "@/components/ui/button";

export function LandingCTA() {
  return (
    <section className="py-20 bg-[#2E8B57]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Prêt à transformer votre enseignement avec l'IA ?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-white opacity-90">
          Rejoignez des milliers d'enseignants qui gagnent des heures de travail chaque semaine grâce à Pédagoia.
        </p>
        <Button
          size="lg"
          className="bg-white text-[#2E8B57] hover:bg-opacity-90 transition-all duration-300 shadow-md"
        >
          Je m'inscris gratuitement
        </Button>
      </div>
    </section>
  );
}