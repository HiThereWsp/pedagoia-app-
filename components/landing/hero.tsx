import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LandingHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Optimisez votre enseignement grâce à la magie de l'IA
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Une suite d'outils IA pour simplifier vos tâches en un clic et vous concentrer sur vos élèves.
            </p>
            <div className="space-x-4">
              <Link href="/auth">
                <Button size="lg" className="bg-[#2E8B57] text-white hover:bg-opacity-90 transition-all duration-300 shadow-md">
                  Je m'inscris maintenant
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
              alt="Enseignants utilisant Pédagoia en classe"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}