import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import LayoutContent from '@/components/layout/layout-content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SISENJA - Sistem Informasi Layanan Sedot Tinja',
  description: 'Sistem Informasi Layanan Sedot Tinja Kabupaten Tanah Bumbu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LayoutContent>{children}</LayoutContent>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
