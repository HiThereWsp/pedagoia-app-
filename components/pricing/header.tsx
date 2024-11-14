"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PricingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${
        isScrolled ? "shadow-sm" : ""
      } transition-shadow duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="relative h-8 w-[150px]">
          {!isImageLoaded && <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />}
          <Image 
            src="/pedagoya-logo.png" 
            alt="Pédagoia logo" 
            fill
            className={`object-contain transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            priority
            onLoad={() => setIsImageLoaded(true)}
          />
        </Link>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/auth" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Se connecter
          </Link>
          <Link href="/auth">
            <Button className="bg-[#2E8B57] text-white hover:bg-opacity-90 transition-all duration-300 shadow-md">
              Commencer gratuitement
            </Button>
          </Link>
        </nav>
        <Link href="/auth" className="md:hidden">
          <Button className="bg-[#2E8B57] text-white hover:bg-opacity-90 transition-all duration-300 shadow-md">
            Commencer
          </Button>
        </Link>
      </div>
    </header>
  );
}