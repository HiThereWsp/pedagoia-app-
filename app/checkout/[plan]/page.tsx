"use client";

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { PRICING_DATA } from '@/config/pricing';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, CreditCard, Lock } from "lucide-react";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const plan = params.plan as string;
  const planData = PRICING_DATA[plan as keyof typeof PRICING_DATA];

  if (!planData) {
    router.push('/pricing');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // Here we would integrate with the payment system
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulation
      router.push('/dashboard');
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7f8] to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Finaliser votre abonnement</h1>
          <p className="text-gray-600 mt-2">Plan sélectionné : {planData.title}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Résumé de la commande */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Résumé de votre commande</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span>{planData.title}</span>
                <span className="font-bold">{planData.price}{planData.interval}</span>
              </div>
              {planData.yearlyPrice && (
                <div className="text-sm text-gray-500">
                  Ou {planData.yearlyPrice} par an (économisez 30%)
                </div>
              )}
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Inclus dans votre plan :</h3>
                <ul className="space-y-2">
                  {planData.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-[#2E8B57]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Formulaire de paiement */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Informations de paiement</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  required
                  placeholder="vous@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de carte
                </label>
                <div className="relative">
                  <Input 
                    required 
                    placeholder="4242 4242 4242 4242"
                    className="pl-10"
                  />
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date d'expiration
                  </label>
                  <Input
                    required
                    placeholder="MM/AA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVC
                  </label>
                  <Input
                    required
                    placeholder="123"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#2E8B57] hover:bg-opacity-90"
                disabled={isProcessing}
              >
                {isProcessing ? "Traitement en cours..." : `Payer ${planData.price}${planData.interval}`}
              </Button>
            </form>
            
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <Lock className="h-4 w-4" />
              <span>Paiement sécurisé via Stripe. Vous pouvez annuler à tout moment.</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}