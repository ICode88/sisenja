"use client";

import { Menu, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
    title: string;
    subtitle?: string;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({
    title,
    subtitle,
    sidebarOpen,
    setSidebarOpen,
    setMobileMenuOpen
}: HeaderProps) {
    const handleMenuClick = () => {
        if (window.innerWidth >= 768) {
            setSidebarOpen(!sidebarOpen);
        } else {
            setMobileMenuOpen(true);
        }
    };

    return (
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleMenuClick}
                        className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                    >
                        <Menu size={20} />
                    </Button>

                    <div className="hidden md:block">
                        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="hidden md:block relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                        <Input
                            placeholder="Cari..."
                            className="pl-10 w-64 border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                        />
                    </div>

                    {/* Notifications */}
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell size={20} />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            3
                        </span>
                    </Button>

                    {/* Profile */}
                    <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="/api/placeholder/32/32" />
                            <AvatarFallback className="bg-cyan-600 text-white text-sm">AM</AvatarFallback>
                        </Avatar>
                        <div className="hidden md:block">
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                Admin Master
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}