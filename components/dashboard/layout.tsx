"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { HelpButton } from "./help-button";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <Sidebar 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed} 
      />
      <main className={`flex-1 transition-all duration-300 ${
        isCollapsed ? "ml-24" : "ml-80"
      }`}>
        {children}
      </main>
      <HelpButton />
    </div>
  );
}