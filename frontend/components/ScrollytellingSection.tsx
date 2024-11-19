"use client";
import { motion } from "motion/react";

export default function ScrollytellingSection({
    children,
    id="",
    fullHeight=false,
}: Readonly<{
    children: React.ReactNode;
    id?: string;
    fullHeight?: boolean;
}>) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={ "scrollytelling-section" }
        >
            {children}
        </motion.section>
    );
};

