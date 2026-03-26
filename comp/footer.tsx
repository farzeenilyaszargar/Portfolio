import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
});

export default function Footer()
{
    return (
        <div className="w-screen flex flex-col items-center justify-top border-t border-border mb-0  mt-5 h-14 overflow-hidden ">
            <h1 className={`font-black text-8xl ${instrumentSerif.className} text-stroke`}>FARZEEN</h1>
        </div>
    );
}
