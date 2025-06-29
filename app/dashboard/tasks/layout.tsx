"use client";

import { ReactNode } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";

interface TasksLayoutProps {
    children: ReactNode;
}

export default function TasksLayout({ children }: TasksLayoutProps) {
    return (
        <DashboardLayout
            title="Jadwal & Tugas"
            subtitle="Kelola penerimaan tugas dan jadwal harian tim"
            currentPath="/dashboard/tasks"
        >
            {children}
        </DashboardLayout>
    );
}