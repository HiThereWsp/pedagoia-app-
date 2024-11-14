export const NIVEAUX = {
  maternelle: ["Petite Section", "Moyenne Section", "Grande Section"],
  elementaire: ["CP", "CE1", "CE2", "CM1", "CM2"],
  college: ["6ème", "5ème", "4ème", "3ème"],
  lycee: ["Seconde", "Première", "Terminale"]
} as const;

export const DUREES = [
  "1 semaine",
  "2 semaines",
  "3 semaines",
  "4 semaines",
  "5 semaines",
  "6 semaines",
  "1 période",
  "1 trimestre"
] as const;

export const MATIERES = {
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
} as const;