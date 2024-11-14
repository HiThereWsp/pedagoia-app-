import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Comment Pédagoia s'intègre-t-il à mes outils existants ?",
    answer: "Pédagoia est conçu pour s'intégrer facilement avec les outils couramment utilisés par les enseignants. Il est compatible avec Google Classroom, Microsoft Teams, et d'autres plateformes éducatives populaires.",
  },
  {
    question: "Est-il conforme aux programmes de l'Éducation Nationale ?",
    answer: "Oui, Pédagoia est entièrement aligné avec les programmes officiels de l'Éducation Nationale. Nos contenus sont régulièrement mis à jour pour assurer leur conformité.",
  },
  {
    question: "Ai-je besoin de compétences techniques pour utiliser Pédagoia ?",
    answer: "Non, Pédagoia est conçu pour être intuitif et facile à utiliser, même pour les enseignants peu familiers avec la technologie. Nous offrons également des tutoriels et un support client réactif.",
  },
  {
    question: "Quelle est la politique de confidentialité concernant les données des élèves ?",
    answer: "La protection des données est notre priorité. Nous sommes conformes au RGPD et n'utilisons les données que pour améliorer nos services. Aucune information personnelle n'est partagée avec des tiers.",
  },
  {
    question: "Puis-je essayer Pédagoya avant de m'engager ?",
    answer: "Absolument ! Nous offrons une période d'essai gratuite de 30 jours pour vous permettre d'explorer toutes les fonctionnalités de Pédagoya sans engagement.",
  },
];

export function LandingFAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Foire aux questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}