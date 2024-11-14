"use client";

import { SequenceGenerator } from "@/components/tools/sequence-generator";
import { DashboardLayout } from "@/components/dashboard/layout";

export default function SequenceGeneratorPage() {
  return (
    <DashboardLayout>
      <SequenceGenerator />
    </DashboardLayout>
  );
}