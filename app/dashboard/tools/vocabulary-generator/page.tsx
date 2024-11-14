"use client";

import { DashboardLayout } from "@/components/dashboard/layout";
import { VocabularyGenerator } from "@/components/tools/vocabulary-generator";

export default function VocabularyGeneratorPage() {
  return (
    <DashboardLayout>
      <VocabularyGenerator />
    </DashboardLayout>
  );
}