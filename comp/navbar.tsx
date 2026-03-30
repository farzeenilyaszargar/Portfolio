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
    const [isAnimating, setIsAnimating] = useState(false);
    const [wipeVisible, setWipeVisible] = useState(false);
    const [wipeActive, setWipeActive] = useState(false);
    const [wipeFading, setWipeFading] = useState(false);
    const [wipeTone, setWipeTone] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const nextIsDark = stored === "dark";
        setIsDark(nextIsDark);
        document.documentElement.classList.toggle("dark", nextIsDark);
        if (!stored) {
            localStorage.setItem("theme", "light");
        }
    }, []);

    const toggleTheme = () => {
        if (isAnimating) return;
        const next = !isDark;
        const tone: "dark" | "light" = next ? "dark" : "light";
        setIsAnimating(true);
        setWipeTone(tone);
        setWipeFading(false);
        setWipeVisible(true);
        requestAnimationFrame(() => {
            setWipeActive(true);
        });

        const wipeDuration = 520;
        const fadeDuration = 220;
        const switchAt = 260;

        window.setTimeout(() => {
            document.documentElement.classList.toggle("dark", next);
            localStorage.setItem("theme", next ? "dark" : "light");
            setIsDark(next);
        }, switchAt);

        window.setTimeout(() => {
            setWipeFading(true);
            window.setTimeout(() => {
                setWipeActive(false);
                setWipeVisible(false);
                setWipeFading(false);
                setIsAnimating(false);
            }, fadeDuration);
        }, wipeDuration);
    };

    return (
        <div
            className={`w-full px-4 sm:px-6 lg:px-20 flex justify-between py-2 items-center bg-blur backdrop-blur-sm border-b sticky top-0 z-50 ${
                isDark ? "bg-black/80 text-white border-neutral-700" : "bg-white/70"
            }`}
        >
            {wipeVisible ? (
                <div
                    className={`theme-wipe ${wipeTone === "dark" ? "theme-wipe--dark" : "theme-wipe--light"}${
                        wipeActive ? " is-active" : ""
                    }${wipeFading ? " is-fading" : ""}`}
                />
            ) : null}
            <Link href="/" className="">
                <h1 className={`${instrumentSerif.className} text-2xl sm:text-3xl font-bold italic`}>
                    <span className="sm:hidden">Farzeen</span>
                    <span className="hidden sm:inline">Farzeen Ilyas Zargar</span>
                </h1>
            </Link>
            <div className="flex items-center sm:gap-3">
                <button
                    type="button"
                    onClick={toggleTheme}
                    disabled={isAnimating}
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
                    className={`flex flex-row border sm:px-3 px-1 py-0.5 rounded-full justify-center items-center ${
                        isDark ? "bg-white text-black" : "bg-white invert hover:invert-0"
                    }`}
                >
                    <Image src="/icons/download.png" alt="resume" width={30} height={30} className="h-4 w-auto " />
                    <p className={`pr-1 ${instrumentSerif.className} text-lg sm:text-xl`}>Resume</p>
                </Link>
            </div>
        </div>
    );
}
