export interface ProjProps {
    id: string;
    title: string;
    description: string;
    linkWeb?: string;
    webAvail:boolean;
    img: string;
    skills: string[];
    fullInfo?:string;
    features?: string[];
}

export const projects: ProjProps[] = [
     {
        id: 'nap',
        title: "Nap",
        description: "Agent orchestration platform for tools, tasks, and workflow automation stack.",
        linkWeb: "https://nap-code.com/",
        img: "/imgs/nap.png",
        skills: ["TypeScript", "APIs", "Infrastructure"],
        webAvail:true,
        features: [
            "Multi agent coordination",
            "Task routing and state",
            "Tool integrations",
            "Structured outputs and logs",
        ],

        fullInfo: "Nap is an agent orchestration platform that coordinates tools, tasks, and multi step workflows with strong observability. It routes tasks to the right agents, tracks state, and provides clear logs so complex jobs stay understandable. The system focuses on reliability, repeatability, and safe automation, with pluggable integrations for new tools. It supports multi agent coordination, task queues, and structured outputs for downstream use. The product blends infrastructure with UX to make automation feel trustworthy and controllable. It is built for teams who want scalable agent workflows. It balances experimentation and rigor, making results easier to trust and apply later confidently.",
    },
    
    {
        id: 'race',
        title: "Algo Race",
        description: "Algorithm visualization tool comparing runtimes, swaps, and behaviors live today.",
        img: "/imgs/algo.gif",
        skills: ["C/C++", "GraphQL", "DSA Concepts"],
        webAvail:false,
        features: [
            "Side-by-side algorithm playback",
            "Step-by-step swaps and comparisons",
            "Input presets and shuffle modes",
            "Speed controls with live metrics",
        ],

        fullInfo: "Algo Race is an interactive visualization that compares multiple algorithms side by side on the same input. It renders each step, highlights comparisons and swaps, and shows how data structures evolve over time. Users can pick input sizes, shuffle patterns, and speeds to understand best and worst cases. The interface emphasizes clarity with synchronized timelines and live metrics, so the behavioral differences are obvious at a glance. Built for learners and interview prep, it turns abstract complexity into visible motion and intuition. The project favors smooth performance and accurate, deterministic animation for repeatable demos. Includes presets and a clean UI.",

    },
     {
        id: 'lunoir',
        title: "Lunoir Wear",
        description: "Streetwear ecommerce storefront optimized for drops and conversions today now.",
        linkWeb: "https://www.lunoirwear.com/",
        img: "/imgs/lunoir.gif",
        skills: ["Next.js", "TailwindCSS", "TypeScript"],
        webAvail:true,
        features: [
            "Drop focused product pages",
            "Fast cart and checkout",
            "Mobile first layouts",
            "High conversion merchandising",
        ],

        fullInfo: "Lunoir Wear is a focused ecommerce storefront for limited streetwear drops with a fast, frictionless buying flow. Product pages emphasize bold visuals, sizing clarity, and stock awareness, while the cart and checkout keep steps minimal. The site is mobile first, optimized for quick browsing and quick payments, and tuned for high conversion on drop days. The build highlights performance, responsive layouts, and brand presence without clutter. I designed the structure to let content and photography lead, with simple filtering and a calm purchase experience. It balances speed, polish, and merch storytelling for fans. It is reliable, fast, and well documented.",

    },
    {
        id: 'lightpost',

        title: "LightPost",
        description: "AI news feed summarizing stories with clear context daily now.",
        linkWeb: "https://github.com/farzeenilyaszargar/lightpost-final",
        img: "/imgs/lightpost.png",
        skills: ["Next.js", "TailwindCSS", "TypeScript"],
        webAvail:true,
        features: [
            "AI summaries and key points",
            "Topic clustering with context",
            "Clean reading interface",
            "Freshness and source diversity",
        ],

        fullInfo: "LightPost is an AI assisted news feed that reduces noise by summarizing long articles and clustering related topics. It surfaces key takeaways, shows story context, and helps readers scan quickly without losing depth. The interface keeps focus on content with a clean layout, lightweight controls, and responsive typography for daily reading. The curation pipeline prioritizes relevance, freshness, and source diversity while avoiding repetition. The product is designed for habit building, encouraging fast catch ups and deeper dives when needed. It delivers a calm, informative experience for people who want signal over scroll. It stays responsive and polished across daily use.",

    },
    
    {
        id: 'gameoflife',

        title: "Game Of Life",
        description: "Interactive Conway simulation with controls and presets for learning now.",
        linkWeb: "https://github.com/farzeenilyaszargar/GameOfLife",
        img: "/imgs/gol.gif",
        skills: ["C++"],
        webAvail:true,
        features: [
            "Interactive grid editing",
            "Preset patterns and random seeds",
            "Speed and size controls",
            "Step-by-step simulation",
        ],

        fullInfo: "Game Of Life is a visual simulation of Conway’s cellular automaton built for clarity and speed. Users can draw patterns, pause, step frame by frame, and change grid sizes or speeds to explore emergent behavior. The renderer prioritizes crisp visuals and efficient updates so large boards remain smooth. It includes classic presets, random seeds, and quick controls to reset or evolve states. The project makes the rules feel tangible by showing how simple local interactions create complex global patterns. It is a compact, interactive way to learn systems thinking. It favors clarity, strong defaults, and a friendly learning curve overall.",

    },
    {
        id: 'surfers',
        title: "Surfers",
        description: "AI site builder generating editable pages from prompts fast now.",
        img: "/imgs/surfers.png",
        skills: ["AI", "React", "Node.js"],
        webAvail:false,
        features: [
            "Prompt to page generation",
            "Editable sections and styles",
            "Rapid preview and publish",
            "Coherent layout defaults",
        ],

        fullInfo: "Surfers is an AI first site builder that turns prompts into live, editable pages in minutes. It generates sensible layouts, typography, and sections, then lets users refine content with a simple editor. The focus is speed to publish without sacrificing control, enabling quick iteration and experimentation. The product combines prompt understanding with structured design defaults so output feels coherent and usable. It supports rapid previews, clean exports, and collaborative updates. The system is built for creators who want a fast starting point and the freedom to customize. It blends speed with simplicity so you can stay focused and finish tasks.",
    },

    {
        id: 'your-time',

        title: "Time Is Yours (Web Extension)",
        description: "Browser extension tracking website time and reporting habits daily now.",
        linkWeb: "https://github.com/farzeenilyaszargar/time-is-yours-extension/",
        img: "/imgs/ext.gif",
        skills: ["JS", "HTML", "CSS"],
        webAvail:false,
        fullInfo: "Time Is Yours is a browser extension that tracks time spent on websites and turns it into clear, actionable reports. It logs sessions, categorizes domains, and surfaces daily and weekly trends so users understand their habits. The UI focuses on quick insight with charts, totals, and gentle nudges to rebalance attention. Users can set goals, block distractions, and export summaries for accountability. The extension is lightweight, respects privacy, and runs smoothly in the background without slowing browsing. It helps turn vague screen time into measurable, improvable routines. It blends speed with simplicity so you can stay focused and finish tasks.",
        features: [
            "Automatic site time tracking",
            "Daily and weekly reports",
            "Goals and distraction controls",
            "Exportable summaries",
        ],
       

    },

    
    {
        id: 'music-player',
        title: "Calypso Music AI",
        description: "Music intelligence experiment analyzing audio attributes for discovery workflows now.",
        img: "/imgs/calypso.jpg",
        webAvail:false,

        skills: ["Rust"],
        features: [
            "Audio feature extraction",
            "Similarity based playlists",
            "Musical attribute clustering",
            "Interpretable analysis outputs",
        ],

        fullInfo: "Calypso Music AI is an experimental system that classifies and groups music based on musical attributes rather than user behavior. It analyzes rhythm, harmony, timbre, and structure to create meaningful clusters and recommendations. The project explores how genre, mood, and arrangement can be inferred from audio features, enabling discovery that feels musical instead of statistical. The pipeline emphasizes clean preprocessing, robust feature extraction, and interpretable outputs. It is designed as a research friendly tool for exploring audio similarity and building playlists that sound coherent and intentional. It balances experimentation and rigor, making results easier to trust and apply later confidently.",

    },

    {
        id: 'superflights',
        title: "Superflights",
        description: "Fast travel booking platform with search, filters, and checkout now.",
        linkWeb: "https://www.superflights.co.in/",
        img: "/imgs/superlights.png",
        skills: ["Next.js", "TypeScript", "Payments"],
        webAvail:true,
        features: [
            "Fast search and filters",
            "Itinerary builder",
            "Pricing clarity",
            "Checkout and payments flow",
        ],

        fullInfo: "Superflights is a full stack travel booking platform built for speed, clarity, and trustworthy pricing. The experience centers on a fast search flow, smart filters, and a clean itinerary builder that guides users to checkout without friction. The UI emphasizes transparent fares, flexible options, and responsive performance even under heavy traffic. The system is designed for scalable APIs, reliable caching, and consistent results across devices. It blends product design with engineering discipline to keep booking intuitive. The project showcases workflow orchestration, payments handling, and robust edge case coverage. It is tuned for real world use with dependable behavior under load.",
    },
    
    {
        id: 'security-system',

        title: "Security System Using Raspberry Pi",
        description: "Raspberry Pi security system with sensors, alerts, and dashboard now.",
        img: "/imgs/security.jpg",
        webAvail:false,

        skills: ["Python"],
        features: [
            "Motion and sensor triggers",
            "Local recording and alerts",
            "Configurable schedules",
            "Lightweight status dashboard",
        ],

        fullInfo: "Security System Using Raspberry Pi is a modular home monitoring setup that combines sensors, camera input, and alerts into a reliable pipeline. Motion detection and door sensors trigger recording, while notifications are delivered through configurable channels. The system prioritizes privacy by storing footage locally and allows flexible schedules for arming and disarming. A lightweight dashboard provides status, history, and quick controls. The build emphasizes stability, clear logs, and recovery on reboot so it behaves like a real product. It is designed to be extendable for additional sensors and integrations. It favors reliability, quiet operation, and clear status at all times.",

    },
   

    {
        id: 'to-do',
        title: "To Do & Timer & Tunes ",
        description: "Minimal focus toolkit combining tasks, timer, and music daily now.",
        img: "/imgs/todo.jpeg",
        skills: ["NextJS"],
        webAvail:true,
        linkWeb:"https://sip-and-focus-8fbjfc58h-farzeenilyaszargars-projects.vercel.app/",
        features: [
            "Quick task capture",
            "Pomodoro focus cycles",
            "Integrated music player",
            "Minimal daily workflow",
        ],

        fullInfo: "To Do & Timer & Tunes is a personal focus toolkit that unifies a task list, Pomodoro timer, and ambient music in one minimal interface. The goal is to reduce context switching and keep sessions intentional. Users can capture tasks quickly, start focused work blocks, and switch between study friendly playlists without leaving the page. The layout is simple, responsive, and built for daily use. It favors speed, clarity, and low friction over heavy configuration. The experience helps you start, sustain, and finish work with fewer distractions. It blends speed with simplicity so you can stay focused and finish tasks.",
        
    },

    

    
]
