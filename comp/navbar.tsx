import Image from "next/image";
import Link from "next/link";

export default function Navbar()
{
    return (
        <div className="w-screen flex justify-between px-20 py-2 items-center bg-white/90 bg-blur backdrop-blur-sm ">
            <Link href="/" className=""><h1 className="text-2xl font-bold italic">Farzeen Ilyas Zargar</h1></Link>
            <Link href={"/resume.pdf"} className="flex flex-row border px-3 py-0.5 rounded-xl bg-white invert hover:invert-0 justify-center items-center" > 
                <Image src={"/icons/download.png"} alt="resume" width={30} height={30} className="h-4 w-auto" />
                <p className="pr-1">Resume</p>
            </Link>
        </div>
    );
}
