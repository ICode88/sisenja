"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn, Droplets, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error) setError("");
    };

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError("");

        // Basic validation
        if (!formData.username.trim() || !formData.password.trim()) {
            setError("Username dan password harus diisi");
            setLoading(false);
            return;
        }

        try {
            // Simulate loading delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Direct redirect to dashboard without backend validation
            window.location.href = "/dashboard";

        } catch (error: any) {
            console.error("Failed to login", error);
            setError("Terjadi kesalahan saat login. Silakan coba lagi.");
        } finally {
            setLoading(false);
        }
    }, [formData]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
            <div className="w-full mt-10 max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Logo and Brand */}
                    <div className="text-center mb-8">
                        <motion.div
                            whileHover={{ rotate: 15 }}
                            className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 rounded-full mb-4"
                        >
                            <Droplets size={32} className="text-white" />
                        </motion.div>
                        <h1 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-2">
                            SISENJA
                        </h1>
                        <p className="text-muted-foreground">
                            Sistem Informasi Layanan Sedot Tinja
                        </p>
                    </div>

                    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl text-center text-cyan-700 dark:text-cyan-400">
                                Masuk ke Akun Anda
                            </CardTitle>
                            <CardDescription className="text-center">
                                Silakan masukkan username dan password Anda
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {error && (
                                    <Alert variant="destructive">
                                        <AlertDescription>{error}</AlertDescription>
                                    </Alert>
                                )}

                                <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="Masukkan username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            className="pl-10 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                                            disabled={loading}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Masukkan password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="pl-10 pr-10 border-cyan-200 focus:border-cyan-500 focus:ring-cyan-500"
                                            disabled={loading}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground disabled:opacity-50"
                                            disabled={loading}
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ scale: loading ? 1 : 1.02 }}
                                    whileTap={{ scale: loading ? 1 : 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Sedang masuk...
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <LogIn size={16} />
                                                Masuk
                                            </div>
                                        )}
                                    </Button>
                                </motion.div>

                                <div className="text-center pt-4">
                                    <p className="text-sm text-muted-foreground">
                                        Belum punya akun?{" "}
                                        <Link
                                            href="/register"
                                            className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline"
                                        >
                                            Daftar sekarang
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="text-center mt-6">
                        <p className="text-xs text-muted-foreground">
                            © 2025 SISENJA. Sistem Informasi Layanan Sedot Tinja.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}