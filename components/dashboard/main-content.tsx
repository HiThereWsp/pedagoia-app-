"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

interface MainContentProps {
  isCollapsed: boolean;
  activeFilter: string;
  setActiveFilter: (value: string) => void;
  activeCategory: string;
  setActiveCategory: (value: string) => void;
}

const toolsData = {
  planning: {
    name: "Planification et Organisation",
    tools: [
      {
        title: "Générateur de Séquences Pédagogiques",
        description: "Créez des séquences alignées sur les programmes",
        isFavorite: true,
        isRecommended: true,
        href: "/dashboard/tools/sequence-generator"
      },
      {
        title: "Créateur de Progressions Annuelles",
        description: "Planifiez votre année scolaire",
        isFavorite: false,
        isRecommended: true,
        href: "/dashboard/tools/progression-generator"
      },
    ],
  },
  teaching: {
    name: "Enseignement et Animation",
    tools: [
      {
        title: "Générateur de Vocabulaire",
        description: "Créez des listes de vocabulaire personnalisées",
        isFavorite: true,
        isRecommended: false,
        href: "/dashboard/tools/vocabulary-generator"
      },
      {
        title: "Générateur de QCM",
        description: "Créez des évaluations interactives",
        isFavorite: false,
        isRecommended: true,
        href: "/dashboard/tools/quiz-generator"
      },
    ],
  },
};

const categories = [
  { id: "all", label: "Tous les outils" },
  { id: "planning", label: "Planification et Organisation" },
  { id: "teaching", label: "Enseignement et Animation" },
  { id: "evaluation", label: "Suivi et Évaluation" },
  { id: "admin", label: "Administratif" },
];

function ToolCard({ tool }: { tool: any }) {
  return (
    <Link href={tool.href}>
      <Card className="hover:shadow-lg transition-shadow duration-200">
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium mb-2">{tool.title}</h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className={tool.isFavorite ? "text-[#2E8B57]" : ""}
            >
              <Star className={`h-4 w-4 ${tool.isFavorite ? "fill-current" : ""}`} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function MainContent({
  isCollapsed,
  activeFilter,
  setActiveFilter,
  activeCategory,
  setActiveCategory,
}: MainContentProps) {
  return (
    <main
      className={`flex-1 transition-all duration-300 ${
        isCollapsed ? "ml-24" : "ml-80"
      }`}
    >
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Ma boite à outils IA</h1>
          <p className="text-gray-600">
            Explorez nos outils d'IA pour l'enseignement
          </p>
        </div>

        <div className="mb-8">
          <div className="flex gap-3 mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveFilter("favorites")}
              className={
                activeFilter === "favorites"
                  ? "bg-[#2E8B57]/10 border-[#2E8B57] text-[#2E8B57]"
                  : ""
              }
            >
              <Star
                className={`h-4 w-4 mr-2 ${
                  activeFilter === "favorites" ? "fill-current" : ""
                }`}
              />
              Mes favoris
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveFilter("recommended")}
              className={
                activeFilter === "recommended"
                  ? "bg-[#2E8B57]/10 border-[#2E8B57] text-[#2E8B57]"
                  : ""
              }
            >
              <Star
                className={`h-4 w-4 mr-2 ${
                  activeFilter === "recommended" ? "fill-current" : ""
                }`}
              />
              Nos recommandations
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={`w-full justify-center whitespace-normal h-auto py-2 text-sm ${
                  activeCategory === category.id
                    ? "bg-[#2E8B57]/10 border-[#2E8B57] text-[#2E8B57]"
                    : "hover:bg-gray-50"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(toolsData).map(([key, category]) => {
            if (activeCategory !== "all" && key !== activeCategory) return null;

            let toolsToShow = category.tools;
            if (activeFilter === "favorites") {
              toolsToShow = category.tools.filter((tool) => tool.isFavorite);
            } else if (activeFilter === "recommended") {
              toolsToShow = category.tools.filter((tool) => tool.isRecommended);
            }

            if (toolsToShow.length === 0) return null;

            return (
              <div key={key}>
                <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {toolsToShow.map((tool, index) => (
                    <ToolCard key={index} tool={tool} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}