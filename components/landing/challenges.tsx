import { ChevronRight } from "lucide-react";

const challenges = [
  "Beaucoup d'heures passées à préparer les cours à la maison",
  "Difficulté à adapter les ressources à chaque élève",
  "Temps limité pour l'interaction individuelle",
  "Stress lié à la gestion administrative",
  "Manque d'outils adaptés à l'ère numérique",
];

export function LandingChallenges() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Passez-vous trop de temps à préparer vos cours et à corriger vos élèves ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Les défis quotidiens des enseignants :</h3>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-6 w-6 text-[#2E8B57] mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold mb-4">Pédagoia, une solution sur-mesure</h3>
            <p className="text-gray-700 leading-relaxed">
              En tant qu'experts en IA, nous étudions les méthodes de travail des enseignants afin d'identifier
              les leviers de productivité dans leurs tâches quotidiennes. Notre suite d'outils IA est basée sur les programmes                     nationaux et est conçue pour aider les enseigants à gagner plus de 10 heures par semaine tout en améliorant la       qualité de votre enseignement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}