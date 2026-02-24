import { useEffect, useState } from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(100, pct));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent">
            <div
                className="h-full transition-all duration-150 ease-out"
                style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #FF6B00 0%, #FF9500 60%, #FFB84D 100%)",
                    boxShadow: "0 0 8px rgba(255, 107, 0, 0.7)",
                }}
            />
        </div>
    );
};

export default ProgressBar;
