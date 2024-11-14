"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingHeader() {
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
        <div className="relative h-8 w-[150px]">
          {!isImageLoaded && <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />}
          <Image 
            src="/pedagoya-logo.png" 
            alt="Pédagoia logo" 
            fill
            className={`object-contain transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            priority
            onLoad={() => setIsImageLoaded(true)}
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="32"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="%236b7280">Pédagoya</text></svg>';
              setIsImageLoaded(true);
            }}
          />
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Tarifs
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            À propos
          </Link>
          <Link href="/auth" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Se connecter
          </Link>
          <Link href="/auth">
            <Button className="bg-[#2E8B57] text-white hover:bg-opacity-90 transition-all duration-300 shadow-md">
              Inscription gratuite
            </Button>
          </Link>
        </nav>
        <div className="flex items-center space-x-4 md:hidden">
          <Link href="/auth" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Se connecter
          </Link>
          <Link href="/auth">
            <Button className="bg-[#2E8B57] text-white hover:bg-opacity-90 transition-all duration-300 shadow-md">
              Inscription
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}