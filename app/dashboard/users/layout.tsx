"use client";

import { ReactNode } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface UsersLayoutProps {
    children: ReactNode;
}

export default function UsersLayout({ children }: UsersLayoutProps) {
    return (
        <DashboardLayout
            title="Manajemen User"
            subtitle="Kelola data pengguna sistem SISENJA"
            currentPath="/dashboard/users"
        >
            {children}
        </DashboardLayout>
    );
}