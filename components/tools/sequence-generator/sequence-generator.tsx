"use client";

import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BookOpen, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SequenceForm, type SequenceFormData } from "./sequence-form";
import { getChatCompletion } from "@/lib/api";
import ReactMarkdown from 'react-markdown';
import { Alert, AlertDescription } from "@/components/ui/alert";

export function SequenceGenerator() {
  const [sequence, setSequence] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (formData: SequenceFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const prompt = `Crée une séquence d'apprentissage détaillée et structurée pour une classe de ${formData.niveau} en ${formData.matiere} sur une durée de ${formData.duree}.
      ${formData.competencesAcquerir ? `Compétences à acquérir : ${formData.competencesAcquerir}` : ''}
      ${formData.sequencesAbordees ? `Compétences déjà acquises : ${formData.sequencesAbordees}` : ''}

      La séquence doit être structurée exactement comme suit, en respectant la hiérarchie et le formatage Markdown :

      # Séquence d'apprentissage en ${formData.matiere}
      ## Niveau : ${formData.niveau}
      ## Durée : ${formData.duree}

      ### 1. Objectifs d'apprentissage
      - [Liste à puces des objectifs principaux]

      ### 2. Compétences visées (socle commun)
      - [Liste à puces des compétences]

      ### 3. Prérequis
      - [Liste à puces des connaissances et compétences nécessaires]

      ### 4. Organisation
      - Nombre de séances : [préciser]
      - Durée par séance : [préciser] minutes

      ### 5. Matériel nécessaire
      - [Liste à puces du matériel]

      ### 6. Déroulement détaillé des séances

      #### Séance 1 : [Titre]
      - **Objectifs spécifiques :**
        - [Liste]
      - **Déroulement :** [Description détaillée]
      - **Durée :** [X] minutes
      - **Modalités :** [Travail individuel/groupe/collectif]

      [Répéter pour chaque séance]

      ### 7. Différenciation pédagogique
      - **Pour les élèves en difficulté :**
        - [Adaptations]
      - **Pour les élèves plus avancés :**
        - [Enrichissements]

      ### 8. Évaluation
      - **Critères de réussite :**
        - [Liste]
      - **Modalités d'évaluation :**
        - [Description]

      ### 9. Prolongements possibles
      - [Liste des pistes d'approfondissement]

      Remplace tous les éléments entre crochets par du contenu pertinent et détaillé.`;
      
      const response = await getChatCompletion([{
        role: "system",
        content: "Tu es un expert pédagogique spécialisé dans la création de séquences d'apprentissage. Fournis uniquement la séquence demandée, structurée en Markdown, sans texte supplémentaire. Sois précis et concret dans les descriptions."
      }, {
        role: "user",
        content: prompt
      }]);
      
      setSequence(response);
    } catch (error) {
      console.error('Error generating sequence:', error);
      setError("Une erreur est survenue lors de la génération de la séquence. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!sequence) return;
    
    const blob = new Blob([sequence], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sequence-pedagogique.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col bg-gray-50">
      <div className="border-b bg-white p-4">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 bg-[#2E8B57]/10">
              <AvatarFallback>
                <BookOpen className="h-6 w-6 text-[#2E8B57]" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold">Générateur de Séquences</h1>
              <p className="text-sm text-gray-600">Assistant pédagogique</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex">
        <div className="w-[400px] flex-shrink-0 border-r">
          <SequenceForm onSubmit={handleGenerate} isLoading={isLoading} />
        </div>

        <div className="flex-1 p-6">
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {sequence ? (
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Séquence générée</h2>
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={handleDownload}
                >
                  <Download className="h-4 w-4" />
                  Télécharger
                </Button>
              </div>
              <Card className="p-6">
                <ScrollArea className="h-[calc(100vh-250px)]">
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <ReactMarkdown>{sequence}</ReactMarkdown>
                  </div>
                </ScrollArea>
              </Card>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              <p>Remplissez le formulaire pour générer une séquence</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}