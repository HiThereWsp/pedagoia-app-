"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { WelcomeDialog } from "@/components/welcome-dialog";
import Image from "next/image";
import Link from "next/link";

export default function AuthPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simuler une authentification
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowWelcome(true);
      
      // Après la fermeture du dialog de bienvenue, rediriger vers le dashboard
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#E6F7F8] to-white flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-[200px]">
                <Image
                  src="/pedagoya-logo.png"
                  alt="Pédagoya logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <Card className="w-full shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-gray-900">
                Connexion
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                Accédez à votre compte Pédagoya
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Adresse e-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-transparent"
                    onChange={(e) => setUsername(e.target.value.split('@')[0])}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-transparent"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Cacher le mot de passe" : "Afficher le mot de passe"}
                      </span>
                    </Button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#2E8B57] text-white hover:bg-opacity-90 transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion en cours..." : "Se connecter"}
                </Button>
              </form>
              <div className="mt-4 text-center text-sm">
                <Link
                  href="#"
                  className="text-[#2E8B57] hover:text-opacity-80 transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="mt-6 text-center text-sm text-gray-600">
                Vous n'avez pas de compte ?{" "}
                <Link
                  href="#"
                  className="text-[#2E8B57] hover:text-opacity-80 transition-colors font-medium"
                >
                  S'inscrire gratuitement
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <WelcomeDialog 
        username={username}
        isOpen={showWelcome}
        onClose={() => {
          setShowWelcome(false);
          router.push('/dashboard');
        }}
      />
    </>
  );
}