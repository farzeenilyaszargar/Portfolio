import Image from "next/image";
import Link from "next/link";

export default function Hero()
{
    return (
        <div className="w-screen flex flex-row justify-between py-20 px-20">
            <div className="">
                <h2 className="text-2xl">I am a</h2>
                <h2 className="text-5xl font-bold">Software Dev</h2>
                
                <p className="items-center"><Image src="/icons/location-pin.png" alt="Location" width={20} height={20} className="inline mr-2"/>Delhi, India</p>
            </div>
            <div className="flex flex-row items-center">
                <Link href="https://x.com/farzeenilyas" className="border border-border p-2 rounded-full"><Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} className="w-10"/></Link>
                <Link href="https://www.linkedin.com/in/farzeenilyaszargar/" className="border border-border p-2 rounded-full"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-10"/></Link>
                <Link href="https://github.com/farzeenilyaszargar" className="border border-border p-2 rounded-full"><Image src="/icons/github.svg" alt="GitHub" width={20} height={20} className="w-10"/></Link>
            </div>
        </div>
    );
}
