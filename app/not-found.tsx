import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import Navbar from "@/comp/navbar";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export default function NotFound() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className={`px-4 sm:px-6 lg:px-20 py-20 flex flex-col items-center text-center gap-4 ${instrumentSerif.className}`}>
        <p className="text-xs uppercase tracking-[0.3em]">404</p>
        <h1 className="text-5xl sm:text-6xl text-stroke-1">Page Not Found</h1>
        <p className="max-w-xl text-base sm:text-lg project-secondary">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="theme-invert mt-2 inline-flex items-center justify-center gap-2 rounded-full border bg-black px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
