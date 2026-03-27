import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
});

export default function Footer()
{
    return (
        <div className="w-full flex flex-col items-center justify-top border-t overflow-hidden mb-0 mt-5 h-18 pt-5 px-4 sm:px-6 lg:px-20">
            <h1 className={`font-black text-4xl sm:text-6xl lg:text-8xl ${instrumentSerif.className} text-stroke-1 `}>FARZEEN ILYAS ZARGAR</h1>
        </div>
    );
}
