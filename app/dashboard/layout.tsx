"use client";

import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { useState, ReactNode } from "react";


interface DashboardLayoutProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
    currentPath?: string;
}

export default function DashboardLayout({
    children,
    title,
    subtitle = "Selamat datang kembali, Admin Master",
    currentPath
}: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
            <Sidebar
                sidebarOpen={sidebarOpen}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                currentPath={currentPath}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header
                    title={title}
                    subtitle={subtitle}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}