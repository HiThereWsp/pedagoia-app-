export interface VocabularyWord {
  word: string;
  definition: string;
  type: string;
  exemple: string;
  synonymes?: string[];
  specificites?: string[];
  registre?: string;
}

export interface GeneratedContent {
  words: VocabularyWord[];
  metadata: {
    level: string;
    theme: string;
    difficulty?: string;
  };
}

export interface FormData {
  levelCategory: string;
  level: string;
  theme: string;
  notes: string;
  wordCount: number;
}

export interface EducationLevel {
  name: string;
  sections: string[];
}

export interface EducationLevels {
  [key: string]: EducationLevel;
}