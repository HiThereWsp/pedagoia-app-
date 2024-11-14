import { ScrollArea } from "@/components/ui/scroll-area";
import { ExportButton } from "./export-button";
import { GeneratedContent } from "../types";

interface VocabularyDisplayProps {
  content: GeneratedContent;
  onExport: (format: 'txt' | 'doc') => void;
}

export function VocabularyDisplay({ content, onExport }: VocabularyDisplayProps) {
  return (
    <div className="p-4 border-t">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">
          Vocabulaire : {content.metadata.theme}
        </h3>
        <ExportButton onExport={onExport} />
      </div>
      
      <ScrollArea className="h-96 border rounded-md p-4">
        <div className="space-y-6">
          {content.words.map((item, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="font-medium text-lg mb-2">
                {index + 1}. {item.word}
              </div>
              <div className="text-sm text-purple-600 mb-3">
                {item.type}
              </div>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Définition :</div>
                  <div className="text-gray-700">{item.definition}</div>
                </div>
                <div>
                  <div className="font-medium">Exemple :</div>
                  <div className="text-gray-600 italic">{item.exemple}</div>
                </div>
                {item.synonymes && (
                  <div>
                    <div className="font-medium">Synonymes :</div>
                    <div className="flex flex-wrap gap-2">
                      {item.synonymes.map((syn, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">
                          {syn}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}