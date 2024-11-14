"use client";

import { useState } from "react";
import { MainContent } from "@/components/dashboard/main-content";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <DashboardLayout>
      <MainContent
        isCollapsed={false}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </DashboardLayout>
  );
}