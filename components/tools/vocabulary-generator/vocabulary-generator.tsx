import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { LevelSelector } from "./components/level-selector";
import { VocabularyDisplay } from "./components/vocabulary-display";
import { educationLevels } from "./constants";
import { generateExportContent } from "./utils";
import type { FormData, GeneratedContent } from "./types";

export function VocabularyGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [formData, setFormData] = useState<FormData>({
    levelCategory: '',
    level: '',
    theme: '',
    notes: '',
    wordCount: 10
  });

  const handleGenerate = async () => {
    setError('');
    setIsGenerating(true);
    try {
      // Simulation de réponse API
      await new Promise(resolve => setTimeout(resolve, 1500));
      const content: GeneratedContent = {
        words: [
          {
            word: "Exemple",
            definition: "Ceci est un exemple de réponse API",
            type: "nom commun",
            exemple: "Voici un exemple",
            synonymes: ["illustration", "modèle"]
          }
        ],
        metadata: {
          level: formData.level,
          theme: formData.theme
        }
      };
      
      setGeneratedContent(content);
    } catch (err) {
      setError('Une erreur est survenue lors de la génération.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExport = (format: 'txt' | 'doc') => {
    if (!generatedContent) return;
    
    const content = generateExportContent(generatedContent, format);
    const blob = new Blob([content], { 
      type: format === 'txt' ? 'text/plain' : 'application/vnd.ms-word'
    });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `vocabulaire_${generatedContent.metadata.theme.toLowerCase().replace(/\s+/g, '_')}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Générateur de Vocabulaire</CardTitle>
          <CardDescription>
            Créez des listes de vocabulaire avec définitions adaptées au niveau de vos élèves
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <LevelSelector
            educationLevels={educationLevels}
            selectedLevel={formData.level}
            selectedCategory={formData.levelCategory}
            onLevelSelect={(level) => setFormData({ ...formData, level })}
            onCategorySelect={(category) => setFormData({ 
              ...formData, 
              levelCategory: category,
              level: ''
            })}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium">Thème du vocabulaire</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Ex: Les animaux, Les émotions..."
              value={formData.theme}
              onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Nombre de mots ({formData.wordCount})</label>
            <input
              type="range"
              min="5"
              max="30"
              step="5"
              className="w-full"
              value={formData.wordCount}
              onChange={(e) => setFormData({ ...formData, wordCount: Number(e.target.value) })}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setFormData({
                levelCategory: '',
                level: '',
                theme: '',
                notes: '',
                wordCount: 10
              });
              setGeneratedContent(null);
            }}
          >
            Réinitialiser
          </Button>
          
          <Button
            disabled={!formData.levelCategory || !formData.theme || isGenerating}
            onClick={handleGenerate}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Génération...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Générer
              </>
            )}
          </Button>
        </CardFooter>

        {generatedContent && (
          <VocabularyDisplay 
            content={generatedContent}
            onExport={handleExport}
          />
        )}
      </Card>
    </div>
  );
}