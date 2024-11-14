"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export function HelpButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg bg-[#2E8B57] hover:bg-[#2E8B57]/90"
        >
          <HelpCircle className="h-6 w-6 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Centre d'aide</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Link href="/tutorials">
            <Button variant="outline" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Tutoriels rapides
            </Button>
          </Link>
          <Link href="/feature-requests">
            <Button variant="outline" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Demander des fonctionnalités
            </Button>
          </Link>
          <Link href="https://blog.pedagoia.com" target="_blank">
            <Button variant="outline" className="w-full justify-start">
              <HelpCircle className="mr-2 h-4 w-4" />
              Le blog Pedagoia
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}