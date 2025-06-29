"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Droplets,
    Users,
    FileText,
    DollarSign,
    Truck,
    Star,
    Calendar,
    MessageCircle,
    ClipboardList,
    Home,
    Settings,
    LogOut,
    ChevronDown,
    ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    {
        title: "Dashboard",
        icon: Home,
        href: "/dashboard",
        active: true
    },
    {
        title: "Data User",
        icon: Users,
        href: "/dashboard/users",
        badge: 24
    },
    {
        title: "Layanan",
        icon: FileText,
        children: [
            { title: "Permohonan Layanan", href: "/dashboard/services/requests", badge: 8 },
            { title: "Pemesanan", href: "/dashboard/services/orders", badge: 3 }
        ]
    },
    {
        title: "Keuangan",
        icon: DollarSign,
        children: [
            { title: "Informasi Biaya", href: "/dashboard/finance/pricing" },
            { title: "Tarif", href: "/dashboard/finance/rates" }
        ]
    },
    {
        title: "Pesanan",
        icon: Truck,
        children: [
            { title: "Pelacakan Status", href: "/dashboard/orders/tracking", badge: 12 },
            { title: "Riwayat Pesanan", href: "/dashboard/orders/history" }
        ]
    },
    {
        title: "Ulasan & Penilaian",
        icon: Star,
        href: "/dashboard/reviews",
        badge: 5
    },
    {
        title: "Jadwal & Tugas",
        icon: Calendar,
        children: [
            { title: "Penerimaan Tugas", href: "/dashboard/tasks/assignments", badge: 6 },
            { title: "Jadwal Harian", href: "/dashboard/tasks/schedule" }
        ]
    },
    {
        title: "Komunikasi",
        icon: MessageCircle,
        href: "/dashboard/communication",
        badge: 15
    },
    {
        title: "Laporan Lapangan",
        icon: ClipboardList,
        href: "/dashboard/field-reports",
        badge: 2
    }
];

interface SidebarProps {
    sidebarOpen: boolean;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    currentPath?: string;
}

export default function Sidebar({ sidebarOpen, mobileMenuOpen, setMobileMenuOpen, currentPath }: SidebarProps) {
    const [expandedMenus, setExpandedMenus] = useState(new Set(["Layanan"]));
    const pathname = usePathname();

    const toggleMenu = (title: string) => {
        const newExpanded = new Set(expandedMenus);
        if (newExpanded.has(title)) {
            newExpanded.delete(title);
        } else {
            newExpanded.add(title);
        }
        setExpandedMenus(newExpanded);
    };

    const isActive = (href: string) => {
        return pathname === href;
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center gap-3 p-6 border-b border-slate-200 dark:border-slate-700">
                <motion.div
                    whileHover={{ rotate: 15 }}
                    className="flex items-center justify-center w-10 h-10 bg-cyan-600 rounded-lg"
                >
                    <Droplets size={24} className="text-white" />
                </motion.div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg text-cyan-700 dark:text-cyan-400">
                        SISENJA
                    </span>
                    <span className="text-xs text-muted-foreground">
                        Admin Dashboard
                    </span>
                </div>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 py-4 overflow-y-auto">
                <div className="px-4 space-y-2">
                    {menuItems.map((item) => (
                        <div key={item.title}>
                            {item.children ? (
                                // Menu with submenu
                                <div>
                                    <button
                                        onClick={() => toggleMenu(item.title)}
                                        className={cn(
                                            "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                                            "hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-400",
                                            "text-slate-700 dark:text-slate-300"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon size={18} />
                                            <span>{item.title}</span>
                                        </div>
                                        {expandedMenus.has(item.title) ? (
                                            <ChevronDown size={16} />
                                        ) : (
                                            <ChevronRight size={16} />
                                        )}
                                    </button>

                                    <AnimatePresence>
                                        {expandedMenus.has(item.title) && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="ml-6 mt-1 space-y-1"
                                            >
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.title}
                                                        href={child.href}
                                                        className={cn(
                                                            "flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors",
                                                            isActive(child.href)
                                                                ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400"
                                                                : "hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-400 text-slate-600 dark:text-slate-400"
                                                        )}
                                                    >
                                                        <span>{child.title}</span>
                                                        {child.badge && (
                                                            <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
                                                                {child.badge}
                                                            </Badge>
                                                        )}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                // Single menu item
                                <Link
                                    href={item.href!}
                                    className={cn(
                                        "flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                                        isActive(item.href!)
                                            ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400"
                                            : "hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-300"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon size={18} />
                                        <span>{item.title}</span>
                                    </div>
                                    {item.badge && (
                                        <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
                                            {item.badge}
                                        </Badge>
                                    )}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </nav>

            {/* User Profile & Settings */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="/api/placeholder/40/40" />
                        <AvatarFallback className="bg-cyan-600 text-white">AM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                            Admin Master
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            admin@sisenja.com
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex-1 justify-start">
                        <Settings size={16} className="mr-2" />
                        Pengaturan
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        <LogOut size={16} />
                    </Button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: sidebarOpen ? 280 : 0 }}
                className="hidden md:block bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-hidden"
            >
                <SidebarContent />
            </motion.aside>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            className="fixed left-0 top-0 z-50 w-280 h-full bg-white dark:bg-slate-800 md:hidden"
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}