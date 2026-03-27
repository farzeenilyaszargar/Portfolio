"use client";

import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { useEffect, useState } from "react";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
});

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const stored = localStorage.getItem("theme");
        const nextIsDark = stored ? stored === "dark" : prefersDark;
        setIsDark(nextIsDark);
        document.documentElement.classList.toggle("dark", nextIsDark);
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const next = !prev;
            document.documentElement.classList.toggle("dark", next);
            localStorage.setItem("theme", next ? "dark" : "light");
            return next;
        });
    };

    return (
        <div
            className={`w-screen px-20 flex justify-between py-2 items-center  bg-blur backdrop-blur-sm border-b sticky top-0 z-50 ${
                isDark ? "bg-black/80 text-white border-neutral-700" : "bg-white/70"
            }`}
        >
            <Link href="/" className="">
                <h1 className={`${instrumentSerif.className} text-3xl font-bold italic `}>
                    Farzeen Ilyas Zargar
                </h1>
            </Link>
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={toggleTheme}
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-[1.03] ${
                        isDark ? "invert" : ""
                    }`}
                    aria-label="Toggle theme"
                    title="Toggle theme"
                >
                    <Image
                        src={isDark ? "/icons/sun.png" : "/icons/moon.png"}
                        alt={isDark ? "Light mode" : "Dark mode"}
                        width={18}
                        height={18}
                        className="h-6 w-6"
                    />
                </button>
                <Link
                    href="/resume.pdf"
                    className={`flex flex-row border px-3 py-0.5 rounded-full justify-center items-center ${
                        isDark ? "bg-white text-black" : "bg-white invert hover:invert-0"
                    }`}
                >
                    <Image src="/icons/download.png" alt="resume" width={30} height={30} className="h-4 w-auto " />
                    <p className={`pr-1 ${instrumentSerif.className} text-xl`}>Resume</p>
                </Link>
            </div>
        </div>
    );
}
