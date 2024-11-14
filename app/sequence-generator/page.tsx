"use client";

import { DashboardLayout } from "@/components/dashboard/layout";
import { SequenceGenerator } from "@/components/tools/sequence-generator";

export default function SequenceGeneratorPage() {
  return (
    <DashboardLayout>
      <SequenceGenerator />
    </DashboardLayout>
  );
}