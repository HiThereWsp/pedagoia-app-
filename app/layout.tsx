import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pédagoya - Optimisez votre enseignement avec l\'IA',
  description: 'Une suite d\'outils IA pour simplifier vos tâches en un clic et vous concentrer sur vos élèves.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="pedagoya-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}