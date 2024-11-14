"use client";

import { DashboardLayout } from "@/components/dashboard/layout";

export default function VocabularyGeneratorPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Générateur de Vocabulaire</h1>
          <p className="text-gray-600">
            Créez des listes de vocabulaire personnalisées
          </p>
        </div>
        
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <p className="text-gray-500">Fonctionnalité en cours de développement</p>
        </div>
      </div>
    </DashboardLayout>
  );
}