"use client";

import { ReactNode } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface ServicesLayoutProps {
    children: ReactNode;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
    return (
        <DashboardLayout
            title="Manajemen Layanan"
            subtitle="Kelola permohonan dan pesanan layanan"
            currentPath="/dashboard/services"
        >
            {children}
        </DashboardLayout>
    );
}