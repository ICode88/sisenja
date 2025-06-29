"use client";

import { ReactNode } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface FinanceLayoutProps {
    children: ReactNode;
}

export default function FinanceLayout({ children }: FinanceLayoutProps) {
    return (
        <DashboardLayout
            title="Manajemen Keuangan"
            subtitle="Kelola informasi biaya dan tarif layanan"
            currentPath="/dashboard/finance"
        >
            {children}
        </DashboardLayout>
    );
}