import { Clock, Wand2, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const metrics = [
  { metric: "10h+", description: "de temps libéré chaque semaine pour l'essentiel", icon: Clock },
  { metric: "30+", description: "tâches quotidiennes automatisées", icon: Wand2 },
  { metric: "100%", description: "adaptable au niveau de vos élèves", icon: Users },
  { metric: "∞", description: "nouvelles ressources mensuelles", icon: BookOpen },
];

export function LandingMetrics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
          Concentrez-vous sur l'essentiel : vos élèves
        </h2>
        <p className="text-xl mb-12 text-center text-gray-600">
          L'IA s'occupe du reste, vous gardez le contrôle
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                {<item.icon className="h-12 w-12 mx-auto mb-4 text-[#2E8B57]" />}
                <h3 className="text-3xl font-bold mb-2 text-gray-900">{item.metric}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-[#2E8B57] text-white hover:bg-opacity-90 transition-all duration-300 shadow-md">
            J'essaye l'outil
          </Button>
        </div>
      </div>
    </section>
  );
}