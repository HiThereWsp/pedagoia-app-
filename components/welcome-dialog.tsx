"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Settings, BookOpen, HelpCircle } from "lucide-react";

interface WelcomeDialogProps {
  username: string;
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeDialog({ username, isOpen, onClose }: WelcomeDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <span className="text-3xl">🎉</span> Bienvenue, {username} !
          </DialogTitle>
          <DialogDescription className="text-base">
            Nous sommes ravis de vous avoir parmi nous. Vous êtes maintenant prêt à découvrir une manière plus simple et plus efficace d'enseigner grâce à l'intelligence artificielle !
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#2E8B57]" /> Commencez dès maintenant :
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Clock className="h-5 w-5 text-[#2E8B57] flex-shrink-0" />
              <span>Découvrez vos outils : Explorez notre suite d'outils IA pour gagner du temps sur vos tâches répétitives.</span>
            </li>
            <li className="flex gap-3">
              <Settings className="h-5 w-5 text-[#2E8B57] flex-shrink-0" />
              <span>Personnalisez votre expérience : Ajustez les paramètres pour que l'app réponde parfaitement à vos besoins pédagogiques.</span>
            </li>
            <li className="flex gap-3">
              <BookOpen className="h-5 w-5 text-[#2E8B57] flex-shrink-0" />
              <span>Utilisez les outils au quotidien : Intégrez ces outils dans votre routine pour simplifier votre travail chaque jour.</span>
            </li>
          </ul>
          <p className="flex items-start gap-3 text-sm text-muted-foreground">
            <HelpCircle className="h-5 w-5 flex-shrink-0" />
            Nous sommes ici pour vous accompagner à chaque étape. Si vous avez besoin d'aide, n'hésitez pas à consulter notre centre d'aide ou à contacter notre support.
          </p>
        </div>
        <DialogFooter>
          <Button 
            className="w-full bg-[#2E8B57] text-white hover:bg-opacity-90"
            onClick={onClose}
          >
            Prêt à simplifier votre quotidien d'enseignant !
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}