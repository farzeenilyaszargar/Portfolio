import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"]
});

export default function Navbar()
{
    return (
        <div className="w-screen px-20 flex justify-between py-2 items-center bg-white/70 bg-blur backdrop-blur-sm border-b border-border sticky top-0 z-50">
            <Link href="/" className=""><h1 className={`${instrumentSerif.className} text-3xl font-bold italic `}>Farzeen Ilyas Zargar</h1></Link>
            <Link href={"/resume.pdf"} className="flex flex-row border px-3 py-0.5 rounded-full bg-white invert hover:invert-0 justify-center items-center "> 
                <Image src={"/icons/download.png"} alt="resume" width={30} height={30} className="h-4 w-auto " />
                <p className={`pr-1 ${instrumentSerif.className} text-xl`}>Resume</p>
            </Link>
        </div>
    );
}
