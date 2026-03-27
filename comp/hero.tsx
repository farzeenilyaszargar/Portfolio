import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
});

export default function Hero()
{
    return (
        <div className="w-full flex flex-col gap-8 lg:flex-row lg:justify-between py-12 lg:py-20 px-4 sm:px-6 lg:px-20">
            <div className="">
                <h2 className="text-2xl">I am a</h2>
                <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-stroke ${instrumentSerif.className}`}>Software Developer</h2>

                <p className="items-center justify-center"><Image src="/icons/location-pin.png" alt="Location" width={20} height={20} className="inline mr-2 pb-1"/>Delhi, India</p>
            </div>
            <div className="flex flex-row items-center gap-2 lg:gap-4">
                <Link href="https://x.com/farzeenilyas" className=" p-2 rounded-full hover:scale-110"><Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} className="w-10 theme-invert"/></Link>
                <Link href="https://www.linkedin.com/in/farzeenilyaszargar/" className=" p-2 rounded-full hover:scale-110"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-12 theme-invert"/></Link>
                <Link href="https://github.com/farzeenilyaszargar" className=" p-2 rounded-full hover:scale-110"><Image src="/icons/github.svg" alt="GitHub" width={20} height={20} className="w-12 theme-invert"/></Link>
            </div>
        </div>
    );
}
