"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

const NIVEAUX = {
  maternelle: ["Petite Section", "Moyenne Section", "Grande Section"],
  elementaire: ["CP", "CE1", "CE2", "CM1", "CM2"],
  college: ["6ème", "5ème", "4ème", "3ème"],
  lycee: ["Seconde", "Première", "Terminale"]
};

const DUREES = [
  "1 semaine",
  "2 semaines",
  "3 semaines",
  "4 semaines",
  "5 semaines",
  "6 semaines",
  "1 période",
  "1 trimestre"
];

const getMatieres = (niveau: string) => {
  const niveauType = Object.keys(NIVEAUX).find(key => 
    NIVEAUX[key as keyof typeof NIVEAUX].includes(niveau)
  );

  const matieres = {
    maternelle: [
      "Mobiliser le langage",
      "Activités physiques",
      "Activités artistiques",
      "Construire les premiers outils",
      "Explorer le monde"
    ],
    elementaire: [
      "Français",
      "Mathématiques",
      "Histoire",
      "Géographie",
      "Sciences",
      "Arts plastiques",
      "Education physique",
      "Langues vivantes",
      "Enseignement moral et civique"
    ],
    college: [
      "Français",
      "Mathématiques",
      "Histoire-Géographie",
      "Sciences de la vie et de la Terre",
      "Physique-Chimie",
      "Technologie",
      "Arts plastiques",
      "Education musicale",
      "Education physique et sportive",
      "Langues vivantes",
      "Enseignement moral et civique"
    ],
    lycee: [
      "Français",
      "Mathématiques",
      "Histoire-Géographie",
      "Sciences de la vie et de la Terre",
      "Physique-Chimie",
      "Sciences économiques et sociales",
      "Philosophie",
      "Langues vivantes",
      "Education physique et sportive",
      "Enseignement moral et civique",
      "Enseignement scientifique",
      "Spécialités"
    ]
  };

  return matieres[niveauType as keyof typeof matieres] || [];
};

export interface SequenceFormData {
  niveau: string;
  matiere: string;
  duree: string;
  competencesAcquerir: string;
  sequencesAbordees: string;
}

interface SequenceFormProps {
  onSubmit: (data: SequenceFormData) => void;
  isLoading: boolean;
}

export function SequenceForm({ onSubmit, isLoading }: SequenceFormProps) {
  const [formData, setFormData] = useState<SequenceFormData>({
    niveau: '',
    matiere: '',
    duree: '',
    competencesAcquerir: '',
    sequencesAbordees: ''
  });

  const handleNiveauChange = (value: string) => {
    setFormData({
      ...formData,
      niveau: value,
      matiere: ''
    });
  };

  const isFormValid = formData.niveau && formData.matiere && formData.duree;

  return (
    <Card className="p-6 m-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Niveau scolaire
        </label>
        <Select value={formData.niveau} onValueChange={handleNiveauChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choisir le niveau" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(NIVEAUX).map(([category, niveaux]) => (
              <SelectGroup key={category}>
                <SelectLabel>{category.charAt(0).toUpperCase() + category.slice(1)}</SelectLabel>
                {niveaux.map(niveau => (
                  <SelectItem key={niveau} value={niveau}>{niveau}</SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Matière
        </label>
        <Select 
          value={formData.matiere} 
          onValueChange={(value) => setFormData({...formData, matiere: value})}
          disabled={!formData.niveau}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={formData.niveau ? "Choisir la matière" : "Sélectionnez d'abord un niveau"} />
          </SelectTrigger>
          <SelectContent>
            {getMatieres(formData.niveau).map(matiere => (
              <SelectItem key={matiere} value={matiere}>{matiere}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Durée
        </label>
        <Select 
          value={formData.duree} 
          onValueChange={(value) => setFormData({...formData, duree: value})}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choisir la durée" />
          </SelectTrigger>
          <SelectContent>
            {DUREES.map(duree => (
              <SelectItem key={duree} value={duree}>{duree}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Compétences à acquérir
        </label>
        <Textarea
          value={formData.competencesAcquerir}
          onChange={(e) => setFormData({...formData, competencesAcquerir: e.target.value})}
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
          placeholder="Ex: Objectifs d'apprentissage, compétences visées..."
          rows={2}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Compétences déjà acquises (facultatif)
        </label>
        <Textarea
          value={formData.sequencesAbordees}
          onChange={(e) => setFormData({...formData, sequencesAbordees: e.target.value})}
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
          placeholder="Ex: Notions maîtrisées, compétences acquises..."
          rows={2}
        />
      </div>

      <Button 
        className="w-full bg-[#2E8B57] hover:bg-[#2E8B57]/90"
        onClick={() => onSubmit(formData)}
        disabled={!isFormValid || isLoading}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Génération en cours...</span>
          </div>
        ) : (
          'Générer la séquence'
        )}
      </Button>
    </Card>
  );
}