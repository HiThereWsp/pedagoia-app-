import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ExportButtonProps {
  onExport: (format: 'txt' | 'doc') => void;
}

export function ExportButton({ onExport }: ExportButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Exporter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onExport('txt')}>
          <FileText className="w-4 h-4 mr-2" />
          Format Texte
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onExport('doc')}>
          <FileText className="w-4 h-4 mr-2" />
          Format Document
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}