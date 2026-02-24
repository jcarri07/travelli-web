import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    once?: boolean;
}

const ScrollReveal = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.7,
    once = true,
}: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once, margin: "-80px" });

    const initial: Record<string, number> = { opacity: 0 };
    if (direction === "up") initial.y = 40;
    if (direction === "down") initial.y = -40;
    if (direction === "left") initial.x = 40;
    if (direction === "right") initial.x = -40;

    const animate = inView
        ? { opacity: 1, y: 0, x: 0 }
        : initial;

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
