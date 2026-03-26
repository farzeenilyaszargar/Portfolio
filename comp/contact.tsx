import { Instrument_Serif } from "@next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"]
}); 

export default function Contact()
{
    return (
        <div className="w-screen flex flex-col items-start justify-center px-20 py-10 ">
            <h1 className={`text-3xl font-bold mb-6 text-stroke-1 ${instrumentSerif.className}`}>
                Contact Me
            </h1>
            <p className="text-lg">Feel free to reach out to me for any inquiries, collaborations, or just to say hello!</p>
        
            <div className="border p-2 rounded-2xl">
                <p>Email: <a href="mailto:farzeenilyaszargar@gmail.com" className="text-blue-500 hover:underline">farzeenilyaszargar@gmail.com</a></p>
                <p>Phone: <a href="tel:9818960083" className="text-blue-500 hover:underline">9818960083</a></p>
            </div>
        </div>
    );
}
