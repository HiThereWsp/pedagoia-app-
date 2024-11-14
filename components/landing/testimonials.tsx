"use client";

import Image from "next/image";
import { Star, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marie Leganaut",
    role: "Professeure de lycée",
    quote: "Avant, je passais des heures à corriger. Maintenant, Pédagoya me fait gagner du temps chaque jour. Je peux enfin me concentrer sur l'essentiel : l'interaction avec mes élèves.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
  },
  {
    name: "Denis Vasseur",
    role: "Professeur des écoles",
    quote: "Grâce à Pédagoya, j'ai pu créer des ressources adaptées aux besoins spécifiques de chacun de mes élèves. C'est un véritable game-changer pour la différenciation pédagogique !",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
  },
  {
    name: "Sophie Lefebvre",
    role: "Enseignante en collège",
    quote: "Pédagoya m'a permis de moderniser mes méthodes d'enseignement. Mes élèves sont plus engagés et mes cours sont plus interactifs. C'est une vraie révolution dans ma pratique quotidienne.",
    useAvatar: true,
  },
];

export function LandingTestimonials() {
  return (
    <section className="py-20 bg-[#E6F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Ce que disent nos utilisateurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-100">
                    {testimonial.useAvatar ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="h-8 w-8 text-gray-400" />
                      </div>
                    ) : (
                      <Image
                        src={testimonial.image!}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#2E8B57] fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}