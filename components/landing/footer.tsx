"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const footerSections = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#" },
      { label: "Tarifs", href: "#" },
      { label: "Pour les écoles", href: "#" },
      { label: "Pour les enseignants", href: "#" },
    ],
  },
  {
    title: "Société",
    links: [
      { label: "À propos", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Centre d'aide", href: "#" },
      { label: "Communauté", href: "#" },
      { label: "Webinaires", href: "#" },
      { label: "Accessibilité", href: "#" },
    ],
  },
  {
    title: "Mentions légales",
    links: [
      { label: "Confidentialité", href: "#" },
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Sécurité", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, name: "Facebook" },
  { icon: Instagram, name: "Instagram" },
];

export function LandingFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4 text-gray-900">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Pédagoia, Inc. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <span
                    key={social.name}
                    className="text-gray-400 hover:text-gray-500 transition-colors cursor-pointer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="h-6 w-6" />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}