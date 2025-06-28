'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import Footer from './footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith('/dashboard');

    return (
        <div className="flex min-h-screen flex-col">
            {!isDashboard && <Navbar />}
            <main className="flex-1">{children}</main>
            {!isDashboard && <Footer />}
        </div>
    );
}
