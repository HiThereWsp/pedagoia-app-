"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronRight,
  ChevronLeft,
  Bot,
  Settings,
  HelpCircle,
  LogOut,
  CreditCard,
  History,
  MessageSquare,
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const navigationItems = [
  { icon: Bot, text: "Ma boite à outils IA", href: "/dashboard" },
  { icon: MessageSquare, text: "Chatbot (Liya)", href: "/chat" },
  { icon: History, text: "Historique des contenus", href: "/history" },
];

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-4 left-4 bottom-4 bg-white rounded-2xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.2)] flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-[4.5rem]" : "w-72"
      }`}
    >
      <div className="p-4 flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`p-2 hover:bg-gray-50 rounded-xl transition-all ${
                isCollapsed ? "w-10" : "w-full"
              }`}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 ring-2 ring-[#2E8B57]/10">
                  <AvatarFallback className="bg-[#2E8B57]/5 text-[#2E8B57]">
                    SM
                  </AvatarFallback>
                </Avatar>
                {!isCollapsed && (
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">Sandra Marx</span>
                    <span className="text-xs text-gray-500">Enseignante</span>
                  </div>
                )}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Paramètres
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              Mettre à jour mon abonnement
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Déconnexion
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 h-8 w-8 rounded-lg hover:bg-gray-50"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3">
        <nav className="space-y-1 py-2">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start rounded-xl transition-all hover:bg-gray-50 ${
                  isCollapsed
                    ? "px-2 py-3 flex flex-col items-center"
                    : "px-3 py-2.5 flex items-center gap-3"
                } ${
                  pathname === item.href
                    ? "bg-[#2E8B57]/5 text-[#2E8B57] hover:bg-[#2E8B57]/10"
                    : ""
                }`}
              >
                <item.icon className={`${isCollapsed ? "h-6 w-6" : "h-5 w-5"} ${!isCollapsed ? "" : "mb-1"}`} />
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.text}</span>
                )}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-4 mt-auto">
        <div className="bg-[#2E8B57]/5 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-full bg-[#2E8B57]/10 flex items-center justify-center">
              <CreditCard className="h-4 w-4 text-[#2E8B57]" />
            </div>
            {!isCollapsed && (
              <div>
                <h4 className="text-sm font-medium">Plan Premium</h4>
                <p className="text-xs text-gray-500">14 jours restants</p>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <Button
              variant="default"
              className="w-full bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white"
            >
              Mettre à niveau
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
}