import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Ubuntu, Quicksand } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ubuntuInit = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const quicksandInit = Quicksand({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});
