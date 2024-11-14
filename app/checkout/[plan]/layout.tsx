import { PRICING_DATA } from '@/config/pricing';

export function generateStaticParams() {
  return Object.keys(PRICING_DATA).map((plan) => ({
    plan,
  }));
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}