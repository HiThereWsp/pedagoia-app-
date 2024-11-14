"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const isEnterprise = searchParams.get("plan") === "enterprise";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation d'envoi du formulaire
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
    } catch (error) {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {isEnterprise ? "Plan Établissement" : "Contactez-nous"}
        </h1>
        <p className="text-gray-600">
          {isEnterprise
            ? "Obtenez une offre personnalisée pour votre établissement"
            : "Une question sur nos services ? Notre équipe est là pour vous aider."}
        </p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                Prénom
              </label>
              <Input id="firstName" required placeholder="Jean" />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                Nom
              </label>
              <Input id="lastName" required placeholder="Dupont" />
            </div>
          </div>

          {isEnterprise && (
            <div className="space-y-2">
              <label htmlFor="establishment" className="text-sm font-medium text-gray-700">
                Nom de l'établissement
              </label>
              <Input
                id="establishment"
                required
                placeholder="Lycée / Collège / École..."
              />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              required
              placeholder="jean.dupont@example.com"
            />
          </div>

          {isEnterprise && (
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <Input id="phone" type="tel" placeholder="01 23 45 67 89" />
            </div>
          )}

  <div className="space-y-2">
  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
    Nom de votre établissement
  </label>
  <Input
    id="subject"
    required
    placeholder=" "
  />
</div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              required
              placeholder={
                isEnterprise
                  ? "Décrivez vos besoins (nombre d'enseignants, spécificités de l'établissement...)"
                  : "Votre message..."
              }
              rows={6}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#2E8B57] hover:bg-opacity-90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Envoi en cours..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                {isEnterprise ? "Demander un devis" : "Envoyer le message"}
              </>
            )}
          </Button>
        </form>
      </Card>
    </main>
  );
}