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
        <div className="w-screen flex flex-row justify-between py-20 px-20">
            <div className="">
                <h2 className="text-2xl">I am a</h2>
                <h2 className={`text-6xl font-bold text-stroke ${instrumentSerif.className}`}>Software Developer</h2>

                <p className="items-center justify-center"><Image src="/icons/location-pin.png" alt="Location" width={20} height={20} className="inline mr-2 pb-1"/>Delhi, India</p>
            </div>
            <div className="flex flex-row items-center">
                <Link href="https://x.com/farzeenilyas" className=" p-2 rounded-full hover:scale-110"><Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} className="w-10 theme-inverty"/></Link>
                <Link href="https://www.linkedin.com/in/farzeenilyaszargar/" className=" p-2 rounded-full hover:scale-110"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-12 theme-inverty"/></Link>
                <Link href="https://github.com/farzeenilyaszargar" className=" p-2 rounded-full hover:scale-110"><Image src="/icons/github.svg" alt="GitHub" width={20} height={20} className="w-12 theme-inverty"/></Link>
            </div>
        </div>
    );
}
