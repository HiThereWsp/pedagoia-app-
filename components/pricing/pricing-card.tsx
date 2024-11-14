"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  interval: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  yearlyPrice?: string;
  buttonVariant?: "default" | "outline";
  onSubscribe?: () => void;
}

export function PricingCard({
  title,
  description,
  price,
  interval,
  features,
  ctaText,
  isPopular,
  yearlyPrice,
  buttonVariant = "default",
  onSubscribe
}: PricingCardProps) {
  return (
    <Card className={`relative ${isPopular ? "border-[#2E8B57] shadow-lg scale-105" : "border-gray-200"}`}>
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-[#2E8B57] text-white px-3 py-1 rounded-full text-sm font-medium">
            Le plus populaire
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-2">{interval}</span>
          {yearlyPrice && (
            <div className="text-sm text-gray-500">
              ou {yearlyPrice} /an (économisez 17%)
            </div>
          )}
        </div>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-[#2E8B57] flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          variant={buttonVariant}
          className={`w-full ${
            buttonVariant === "default" 
              ? "bg-[#2E8B57] hover:bg-opacity-90" 
              : "border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white"
          }`}
          onClick={onSubscribe}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
}