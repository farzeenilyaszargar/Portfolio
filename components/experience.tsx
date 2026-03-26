import Link from 'next/link';
import Image from 'next/image';

import LinkIcon from '@/public/icons/link.png';

interface ExpProps {
    name: string;
    desc: string;
    time: string;
    link?: string;
    role: string;
    logo: string;
}

const exp: ExpProps[] = [
   
    {
        name: "Nap",
        desc: "Nap is the best way to code with AI and run multiple agents on your PC.",
        time: "Jan 2026-Present",
        link: "https://nap-code.com/",
        role: "CO-FOUNDER & BACKEND DEV",
        logo: "/icons/nap.png"

    },
    
     {
        name: "Superflights",
        desc: "Co-founded out of college. We had ₹25,00,000 in GBR (Gross Booking Revenue).",
        time: "June 2025 - Dec 2025",
        link: "https://www.superflights.co.in/",
        role: "COO & CO-FOUNDER",
        logo: "/icons/SuperflightsLogo.jpeg"
    },
     {
        name: "VIT, Vellore",
        desc: "studied computer science with a specialization in IoT.",
        time: "2023-2027",
        role: "STUDENT",
        logo: "/icons/vit.png"
    },
];


export default function Experience() {
    return (
        <div className="sm:w-2/3 px-5">
            <h1 className="text-2xl font-bold mb-4">Experience</h1>
            <div className="">
                {exp.map((experience) => (
                    <div key={experience.name} className="mb-2 border p-2 rounded-4xl flex flex-row justify-around items-center border-border">
                        <Image src={experience.logo} alt={experience.name} width={40} height={40} className="w-12 h-12 flex items-center border-none justify-center bg-black rounded-full mr-2 ml-2" />

                        <div className="pb-2 pt-1 w-3/4">
                            <p className='font-bold text-xl'>{experience.name}<span className='text-lg font-normal text-gray-400'> ({experience.time})</span></p>
                            <p className='text-xs font-semibold text-gray-500'> {experience.role}</p>
                            <p className='font-normal text-base hidden md:block text-zinc-400'>{experience.desc}</p>
                        </div>
                        {
                            experience.link ? (
                            <Link href={experience.link} target="_blank" className="bg-background text-text p-1 rounded-2xl border border-border text-base font-semibold
                                                                    flex flex-row items-center justify-center m-1 
                                                                    hover:filter hover:invert overflow-hidden  md:w-27 w-15 h-10 text-nowrap">
                                <Image src={LinkIcon} alt={experience.name} width={15} height={15} className='mr-1 w-3 h-3 mt-0.5 invert-[var(--my-invert)]'/>
                                <p className='hidden md:block'>Check Out</p>
                            </Link>): <div className=' p-1 rounded-2xl  
                                                                    flex flex-row items-center justify-center m-1
                                                                    overflow-hidden  md:w-27 w-15 h-10 text-nowrap'></div>
}
      
                    </div>
                ))}
            </div>
        </div>
    );
}
