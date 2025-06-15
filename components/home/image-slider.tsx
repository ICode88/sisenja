'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/images/kantor-layanan.png",
    "/images/drying-area.png",

];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center"
        >
            <div className="relative w-full max-w-lg overflow-hidden rounded-lg">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-200/50 to-blue-300/50 dark:from-cyan-900/50 dark:to-blue-800/50 blur-2xl z-0" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={images[currentIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt="Slider Image"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-xl object-cover w-full h-auto"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ImageSlider;
