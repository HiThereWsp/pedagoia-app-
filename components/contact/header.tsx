import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ContactHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-[150px]">
              <Image
                src="/pedagoya-logo.png"
                alt="Pédagoya logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/pricing">
              <Button variant="ghost">Tarifs</Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-[#2E8B57] text-white hover:bg-opacity-90">
                Connexion
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}