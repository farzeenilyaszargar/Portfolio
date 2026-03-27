"use client";

import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
});

export default function Contact() {
    const copyText = async (value: string) => {
        try {
            await navigator.clipboard.writeText(value);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = value;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }
    };

    return (
        <section className="w-full px-4 sm:px-6 lg:px-20 py-16">
            <div className="rounded-3xl border bg-white p-6 sm:p-8 lg:p-10 text-black">
                <h1 className={`text-4xl font-bold text-stroke-1 ${instrumentSerif.className}`}>
                    Contact Me
                </h1>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="flex items-center justify-between rounded-2xl border p-4">
                        <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border">
                                <svg
                                    aria-hidden
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 6l8 6 8-6" />
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Email</p>
                                <a
                                    href="mailto:farzeenilyaszargar@gmail.com"
                                    className="text-lg font-semibold hover:underline"
                                >
                                    farzeenilyaszargar@gmail.com
                                </a>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => copyText("farzeenilyaszargar@gmail.com")}
                            className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:scale-[1.03]"
                            aria-label="Copy email"
                            title="Copy email"
                        >
                            <svg
                                aria-hidden
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="9" y="9" width="11" height="11" rx="2" />
                                <rect x="4" y="4" width="11" height="11" rx="2" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border  p-4">
                        <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border ">
                                <svg
                                    aria-hidden
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 3.09 4.18 2 2 0 0 1 5.06 2h2a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Phone</p>
                                <a href="tel:9818960083" className="text-lg font-semibold hover:underline">
                                    +91 98189 60083
                                </a>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => copyText("+91 98189 60083")}
                            className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:scale-[1.03]"
                            aria-label="Copy phone"
                            title="Copy phone"
                        >
                            <svg
                                aria-hidden
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="9" y="9" width="11" height="11" rx="2" />
                                <rect x="4" y="4" width="11" height="11" rx="2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
