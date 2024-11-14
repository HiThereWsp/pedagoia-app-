"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PricingHeader } from "@/components/pricing/header";
import { PricingCard } from "@/components/pricing/pricing-card";
import { Button } from "@/components/ui/button";
import { PRICING_DATA, FAQ_DATA } from "@/config/pricing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubscribe = async (plan: string) => {
    setIsProcessing(true);
    try {
      switch (plan) {
        case 'enterprise':
        case 'contact':
          router.push('/contact');
          break;
        case 'free':
          router.push('/auth');
          break;
        default:
          router.push(`/checkout/${plan}`);
          break;
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F7F8] to-white">
      <PricingHeader />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Des tarifs simples et transparents
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez le plan qui correspond à vos besoins. Changez ou annulez à tout moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              {...PRICING_DATA.free}
              buttonVariant="outline"
              onSubscribe={() => handleSubscribe('free')}
            />
            <PricingCard
              {...PRICING_DATA.premium}
              isPopular
              onSubscribe={() => handleSubscribe('premium')}
            />
            <PricingCard
              {...PRICING_DATA.enterprise}
              buttonVariant="outline"
              onSubscribe={() => handleSubscribe('enterprise')}
            />
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {FAQ_DATA.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Des questions sur nos tarifs ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est là pour vous aider à choisir le meilleur plan pour vos besoins.
            </p>
            <Button
              variant="outline"
              className="border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white"
              disabled={isProcessing}
              onClick={() => handleSubscribe('contact')}
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}