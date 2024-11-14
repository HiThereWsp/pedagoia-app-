import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EducationLevels } from "../types";

interface LevelSelectorProps {
  educationLevels: EducationLevels;
  selectedLevel: string;
  selectedCategory: string;
  onLevelSelect: (level: string) => void;
  onCategorySelect: (category: string) => void;
}

export function LevelSelector({
  educationLevels,
  selectedLevel,
  selectedCategory,
  onLevelSelect,
  onCategorySelect
}: LevelSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Niveau scolaire</label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.entries(educationLevels).map(([key, level]) => (
          <Button
            key={key}
            variant={selectedCategory === key ? "default" : "outline"}
            className="w-full"
            onClick={() => onCategorySelect(key)}
          >
            {level.name}
          </Button>
        ))}
      </div>

      {selectedCategory && (
        <ScrollArea className="h-20 mt-2">
          <div className="grid grid-cols-2 gap-2">
            {educationLevels[selectedCategory].sections.map((section) => (
              <Button
                key={section}
                variant={selectedLevel === `${selectedCategory}-${section}` ? "default" : "outline"}
                size="sm"
                onClick={() => onLevelSelect(`${selectedCategory}-${section}`)}
              >
                {section}
              </Button>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}