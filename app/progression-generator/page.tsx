"use client";

import { DashboardLayout } from "@/components/dashboard/layout";

export default function ProgressionGeneratorPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Générateur de Progressions</h1>
          <p className="text-gray-600">
            Créez des progressions annuelles adaptées à votre programme
          </p>
        </div>
        
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <p className="text-gray-500">Fonctionnalité en cours de développement</p>
        </div>
      </div>
    </DashboardLayout>
  );
}