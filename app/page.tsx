"use client";

import { Suspense } from 'react';
import { ErrorBoundary } from "@/components/error-boundary";
import { LandingHero } from "@/components/landing/hero";
import { LandingChallenges } from "@/components/landing/challenges";
import { LandingMetrics } from "@/components/landing/metrics";
import { LandingSteps } from "@/components/landing/steps";
import { LandingTestimonials } from "@/components/landing/testimonials";
import { LandingFAQ } from "@/components/landing/faq";
import { LandingCTA } from "@/components/landing/cta";
import { LandingFooter } from "@/components/landing/footer";
import { LandingHeader } from "@/components/landing/header";

export default function LandingPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
          <LandingHeader />
          <main>
            <LandingHero />
            <LandingChallenges />
            <LandingMetrics />
            <LandingSteps />
            <LandingTestimonials />
            <LandingFAQ />
            <LandingCTA />
          </main>
          <LandingFooter />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}