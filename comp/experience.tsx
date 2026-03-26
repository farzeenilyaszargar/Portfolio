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
        name: "Nap Inc.",
        desc: "Nap is the best way to code with AI and run multiple agents on your PC.",
        time: "Jan 2026-Present",
        link: "https://www.nap-code.com/",
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



export default function Experience()
{
    return (
        <div className="w-screen flex flex-col items-center ">
            {
                <p>experience here</p>
            }
        </div>
    );
}
