import { MATIERES, NIVEAUX } from "./constants";

export const getMatieres = (niveau: string) => {
  const niveauType = Object.keys(NIVEAUX).find(key => 
    NIVEAUX[key as keyof typeof NIVEAUX].includes(niveau)
  );

  if (!niveauType) return [];
  return MATIERES[niveauType as keyof typeof MATIERES];
};