"use client";

import { ReactNode } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface OrdersLayoutProps {
    children: ReactNode;
}

export default function OrdersLayout({ children }: OrdersLayoutProps) {
    return (
        <DashboardLayout
            title="Manajemen Pesanan"
            subtitle="Kelola pelacakan dan riwayat pesanan layanan"
            currentPath="/dashboard/orders"
        >
            {children}
        </DashboardLayout>
    );
}