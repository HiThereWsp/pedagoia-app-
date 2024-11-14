"use client";

import { DashboardLayout } from "@/components/dashboard/layout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Play, Book } from "lucide-react";

const tutorials = [
  {
    title: "Premiers pas avec Pédagoia",
    duration: "5 min",
    description: "Découvrez les fonctionnalités de base et commencez à utiliser l'application.",
    videoUrl: "#"
  },
  {
    title: "Créer une séquence pédagogique",
    duration: "8 min",
    description: "Apprenez à utiliser le générateur de séquences pour créer des contenus adaptés.",
    videoUrl: "#"
  },
  {
    title: "Gérer vos progressions annuelles",
    duration: "6 min",
    description: "Organisez votre année scolaire efficacement avec notre outil de progression.",
    videoUrl: "#"
  },
  {
    title: "Utiliser le chat avec Liya",
    duration: "4 min",
    description: "Tirez le meilleur parti de votre assistante pédagogique virtuelle.",
    videoUrl: "#"
  }
];

export default function TutorialsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Tutoriels</h1>
          <p className="text-gray-600">
            Apprenez à utiliser Pédagoia efficacement avec nos guides vidéo
          </p>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#2E8B57]/10 flex items-center justify-center flex-shrink-0">
                      <Book className="h-5 w-5 text-[#2E8B57]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{tutorial.title}</h3>
                      <p className="text-sm text-gray-500">{tutorial.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{tutorial.duration}</span>
                        <Button variant="ghost" size="sm" className="text-[#2E8B57]">
                          <Play className="h-4 w-4 mr-2" />
                          Regarder
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </DashboardLayout>
  );
}