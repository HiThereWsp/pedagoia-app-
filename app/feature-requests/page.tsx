"use client";

import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";

export default function FeatureRequestsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert("Votre demande a été envoyée avec succès !");
      setFormData({ title: "", description: "" });
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Demande de fonctionnalités</h1>
          <p className="text-gray-600">
            Suggérez de nouvelles fonctionnalités pour améliorer Pédagoia
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium text-gray-700">
                Titre de la fonctionnalité
              </label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Ex: Générateur de fiches d'exercices différenciées"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-gray-700">
                Description détaillée
              </label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Décrivez la fonctionnalité souhaitée et son utilité..."
                rows={6}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#2E8B57] hover:bg-[#2E8B57]/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer la suggestion
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}