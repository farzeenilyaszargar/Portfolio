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
        description: "Nap is an agent orchestration platform that coordinates tools, tasks, and multi step workflows with strong observability. It routes tasks to the right agents, tracks state, and provides clear logs so complex jobs stay understandable. The system focuses on reliability, repeatability, and safe automation, with pluggable integrations for new tools. It supports multi agent coordination, task queues, and structured outputs for downstream use. The product blends infrastructure with UX to make automation feel trustworthy and controllable. It is built for teams who want scalable agent workflows. It balances experimentation and rigor, making results easier to trust and apply later confidently.",
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

        fullInfo: "Nap is an orchestration layer for tool-using agents, designed to break down work into reliable, repeatable steps. It manages task routing, tool calls, and state so complex workflows remain observable and controllable. The platform is built to scale with new tools, models, and execution environments.",
    },
    
    {
        id: 'race',
        title: "Algo Race",
        description: "Algo Race is an interactive visualization that compares multiple algorithms side by side on the same input. It renders each step, highlights comparisons and swaps, and shows how data structures evolve over time. Users can pick input sizes, shuffle patterns, and speeds to understand best and worst cases. The interface emphasizes clarity with synchronized timelines and live metrics, so the behavioral differences are obvious at a glance. Built for learners and interview prep, it turns abstract complexity into visible motion and intuition. The project favors smooth performance and accurate, deterministic animation for repeatable demos. Includes presets and a clean UI.",
        img: "/imgs/algo.gif",
        skills: ["C/C++", "GraphQL", "DSA Concepts"],
        webAvail:false,
        features: [
            "Side-by-side algorithm playback",
            "Step-by-step swaps and comparisons",
            "Input presets and shuffle modes",
            "Speed controls with live metrics",
        ],

        fullInfo: "Algo Race visualizes algorithms side by side so you can see how they behave on the same input. It focuses on clarity and intuition, showing step-by-step progression, timing differences, and how data structures evolve during execution. The interface highlights swaps, comparisons, and state changes in real time, making it easier to understand why certain algorithms outperform others on specific inputs. It is built to be interactive, so you can tweak input sizes, shuffle patterns, and watch the execution paths diverge.",

    },
     {
        id: 'lunoir',
        title: "Lunoir Wear",
        description: "Lunoir Wear is a focused ecommerce storefront for limited streetwear drops with a fast, frictionless buying flow. Product pages emphasize bold visuals, sizing clarity, and stock awareness, while the cart and checkout keep steps minimal. The site is mobile first, optimized for quick browsing and quick payments, and tuned for high conversion on drop days. The build highlights performance, responsive layouts, and brand presence without clutter. I designed the structure to let content and photography lead, with simple filtering and a calm purchase experience. It balances speed, polish, and merch storytelling for fans. It is reliable, fast, and well documented.",
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

        fullInfo: "Lunoir Wear is a focused ecommerce storefront built to showcase limited drops with a clean, fast buying flow. The product emphasizes sharp visuals, a smooth cart and checkout experience, and mobile-first performance. The goal was to keep the brand front and center while ensuring the purchase path stays frictionless.",

    },
    {
        id: 'lightpost',

        title: "LightPost",
        description: "LightPost is an AI assisted news feed that reduces noise by summarizing long articles and clustering related topics. It surfaces key takeaways, shows story context, and helps readers scan quickly without losing depth. The interface keeps focus on content with a clean layout, lightweight controls, and responsive typography for daily reading. The curation pipeline prioritizes relevance, freshness, and source diversity while avoiding repetition. The product is designed for habit building, encouraging fast catch ups and deeper dives when needed. It delivers a calm, informative experience for people who want signal over scroll. It stays responsive and polished across daily use.",
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

        fullInfo: "LightPost is an AI-assisted news feed that curates stories and highlights key takeaways. It focuses on reducing noise by summarizing long articles and grouping related topics so readers can scan quickly. The interface keeps attention on content, with a lightweight, responsive UI for daily reading.",

    },
    
    {
        id: 'gameoflife',

        title: "Game Of Life",
        description: "Game Of Life is a visual simulation of Conway’s cellular automaton built for clarity and speed. Users can draw patterns, pause, step frame by frame, and change grid sizes or speeds to explore emergent behavior. The renderer prioritizes crisp visuals and efficient updates so large boards remain smooth. It includes classic presets, random seeds, and quick controls to reset or evolve states. The project makes the rules feel tangible by showing how simple local interactions create complex global patterns. It is a compact, interactive way to learn systems thinking. It favors clarity, strong defaults, and a friendly learning curve overall.",
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

        fullInfo: "A visual implementation of Conway's Game of Life with emphasis on performance and clarity. It supports configurable grid sizes, simulation speed control, and interactive patterns. The project highlights how simple rules can generate complex emergent behavior.",

    },
    {
        id: 'surfers',
        title: "Surfers",
        description: "Surfers is an AI first site builder that turns prompts into live, editable pages in minutes. It generates sensible layouts, typography, and sections, then lets users refine content with a simple editor. The focus is speed to publish without sacrificing control, enabling quick iteration and experimentation. The product combines prompt understanding with structured design defaults so output feels coherent and usable. It supports rapid previews, clean exports, and collaborative updates. The system is built for creators who want a fast starting point and the freedom to customize. It blends speed with simplicity so you can stay focused and finish tasks.",
        img: "/imgs/surfers.png",
        skills: ["AI", "React", "Node.js"],
        webAvail:false,
        features: [
            "Prompt to page generation",
            "Editable sections and styles",
            "Rapid preview and publish",
            "Coherent layout defaults",
        ],

        fullInfo: "Surfers is a prompt-to-website builder that generates a clean starting point and keeps everything editable. It balances fast generation with sensible defaults for typography, layout, and sections, then provides a simple editor for refining content and styles. The focus is on speed to first publish and making changes without friction.",
    },

    {
        id: 'your-time',

        title: "Time Is Yours (Web Extension)",
        description: "Time Is Yours is a browser extension that tracks time spent on websites and turns it into clear, actionable reports. It logs sessions, categorizes domains, and surfaces daily and weekly trends so users understand their habits. The UI focuses on quick insight with charts, totals, and gentle nudges to rebalance attention. Users can set goals, block distractions, and export summaries for accountability. The extension is lightweight, respects privacy, and runs smoothly in the background without slowing browsing. It helps turn vague screen time into measurable, improvable routines. It blends speed with simplicity so you can stay focused and finish tasks.",
        linkWeb: "https://github.com/farzeenilyaszargar/time-is-yours-extension/",
        img: "/imgs/ext.gif",
        skills: ["JS", "HTML", "CSS"],
        webAvail:false,
        fullInfo: "This project is a web extension designed to track the time users spend on various websites, providing detailed reports on their time usage. The extension aims to help users understand their online habits and improve productivity by visualizing time spent across different sites. It features a user-friendly interface that displays time statistics, allowing users to set goals and receive reminders for excessive usage. The extension is built using JavaScript, HTML, and CSS, ensuring compatibility with major browsers. It includes options for customizing tracking preferences and generating weekly or monthly reports to analyze trends in web activity.",
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
        description: "Calypso Music AI is an experimental system that classifies and groups music based on musical attributes rather than user behavior. It analyzes rhythm, harmony, timbre, and structure to create meaningful clusters and recommendations. The project explores how genre, mood, and arrangement can be inferred from audio features, enabling discovery that feels musical instead of statistical. The pipeline emphasizes clean preprocessing, robust feature extraction, and interpretable outputs. It is designed as a research friendly tool for exploring audio similarity and building playlists that sound coherent and intentional. It balances experimentation and rigor, making results easier to trust and apply later confidently.",
        img: "/imgs/calypso.jpg",
        webAvail:false,

        skills: ["Rust"],
        features: [
            "Audio feature extraction",
            "Similarity based playlists",
            "Musical attribute clustering",
            "Interpretable analysis outputs",
        ],

        fullInfo:"This placeholder brief outlines a Rust music player project intended to be fast, safe, and pleasant to use. The application targets desktop platforms and optionally a terminal interface, demonstrating modern async design and careful resource management. Core responsibilities are decoding audio, managing a media library, scheduling playback, and presenting a responsive UI. Audio playback will use rodio or cpal for output, wrapped in a small trait to allow swapping backends. Supported formats initially include MP3, FLAC, WAV, OGG, and AAC via symphonia. Files are discovered by a library indexer that walks directories with ignore rules, extracts tags with lofty, computes content hashes for deduplication, and stores metadata in SQLite through sqlx. Indexing runs on Tokio tasks to avoid blocking the UI. The queue and playlist engine provide shuffle, repeat, crossfade, gapless playback, replay gain, and a lightweight ten band equalizer. Smart playlists evaluate simple rules like genre, year, or play count. Streaming HTTP, HLS, and radio sources are buffered with backpressure and graceful reconnects. A small cache reduces bandwidth and supports offline listening for recently played tracks. Two interfaces are planned. A TUI built with ratatui and crossterm offers keyboard driven control in the terminal. A desktop shell using Tauri provides native windowing, tray controls, and media keys. Both share the same core crate to maintain a single source of truth. Telemetry uses tracing for structured logs and optional OpenTelemetry for metrics. Tests cover decoders, queue invariants, and migration safety; property tests with proptest strengthen correctness. Security considerations include sandboxing external artwork fetches, validating playlist URLs, and handling untrusted tags safely. Documentation will include quickstart examples, configuration guides, and an architecture diagram. The roadmap targets a minimal viable player, then plugins for visualizers, scrobbling, and DSP effects. Contributions are welcome and encouraged. Issue templates and code style guidelines ship included. The long-term goal is a polished, low-latency player that feels instant even with large libraries.",

    },

    {
        id: 'superflights',
        title: "Superflights",
        description: "Superflights is a full stack travel booking platform built for speed, clarity, and trustworthy pricing. The experience centers on a fast search flow, smart filters, and a clean itinerary builder that guides users to checkout without friction. The UI emphasizes transparent fares, flexible options, and responsive performance even under heavy traffic. The system is designed for scalable APIs, reliable caching, and consistent results across devices. It blends product design with engineering discipline to keep booking intuitive. The project showcases workflow orchestration, payments handling, and robust edge case coverage. It is tuned for real world use with dependable behavior under load.",
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

        fullInfo: "Superflights is an OTA-style travel platform that focuses on speed, pricing clarity, and a clean booking experience. I built the core web product with a search flow that surfaces flights and fares quickly, then guides users through flexible filters, itinerary building, and checkout. The system emphasizes reliable pricing, responsive UX, and scalable APIs so the product remains fast even under heavy usage.",
    },
    
    {
        id: 'security-system',

        title: "Security System Using Raspberry Pi",
        description: "Security System Using Raspberry Pi is a modular home monitoring setup that combines sensors, camera input, and alerts into a reliable pipeline. Motion detection and door sensors trigger recording, while notifications are delivered through configurable channels. The system prioritizes privacy by storing footage locally and allows flexible schedules for arming and disarming. A lightweight dashboard provides status, history, and quick controls. The build emphasizes stability, clear logs, and recovery on reboot so it behaves like a real product. It is designed to be extendable for additional sensors and integrations. It favors reliability, quiet operation, and clear status at all times.",
        img: "/imgs/security.jpg",
        webAvail:false,

        skills: ["Python"],
        features: [
            "Motion and sensor triggers",
            "Local recording and alerts",
            "Configurable schedules",
            "Lightweight status dashboard",
        ],

        fullInfo:"This placeholder brief describes a modular home security system built with Raspberry Pi and Python. The objective is dependable detection, quick notification, and easy extension without proprietary lock-in. The core service runs on Raspberry Pi OS, installed as a systemd unit for automatic startup and graceful restarts. A Pi Camera or USB webcam provides video; OpenCV performs motion analysis via background subtraction, morphology filters, and contour heuristics to suppress noise from shadows or small pets. Optional PIR sensors on GPIO pins offer low-power wake triggers and corroboration. Door/window status is supported with magnetic reed switches; a piezo buzzer provides local chirps for arm, disarm, and alarm states. Configuration lives in a human-readable YAML file: arming schedules, sensitivity thresholds, detection zones, clip length, storage limits, and notification channels. When motion is confirmed, the system captures timestamped JPEG bursts or short H.264 segments, writes structured logs, and pushes alerts through email, Telegram, or generic webhooks. A circular disk buffer enforces retention, with spillover to a NAS via SMB/NFS when available. A lightweight Flask dashboard exposes live preview, event history, and settings. Token-based auth protects access; all endpoints prefer HTTPS behind a reverse proxy such as Caddy. The UI emphasizes large status badges, quick arm/disarm controls, and per-sensor health indicators. Health checks verify camera availability, disk space, and clock drift; self-repair routines attempt reconnection before escalating. Development follows a multi-package layout: core detection, devices, notifications, storage, and web UI. Tests include unit coverage for detectors, property tests for state machines, and integration tests with sample clips. Observability uses Python’s logging plus OpenTelemetry traces when enabled. A Makefile and install script handle provisioning, udev rules, and service registration. The roadmap includes person detection with a tiny model, MQTT and Home Assistant integration, secure remote access through Tailscale, multi-camera federation, and an export tool for law-enforcement handoff. Documentation covers wiring diagrams, troubleshooting, and upgrade paths. The system is designed to be privacy-first, keeping footage and alerts under the owner’s control.",

    },
   

    {
        id: 'to-do',
        title: "To Do & Timer & Tunes ",
        description: "To Do & Timer & Tunes is a personal focus toolkit that unifies a task list, Pomodoro timer, and ambient music in one minimal interface. The goal is to reduce context switching and keep sessions intentional. Users can capture tasks quickly, start focused work blocks, and switch between study friendly playlists without leaving the page. The layout is simple, responsive, and built for daily use. It favors speed, clarity, and low friction over heavy configuration. The experience helps you start, sustain, and finish work with fewer distractions. It blends speed with simplicity so you can stay focused and finish tasks.",
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

        fullInfo: "A personal focus toolkit that combines a to‑do list, a Pomodoro timer, and a calm music player in one place. It is designed to reduce context switching and keep sessions intentional. The UI is minimal, with quick task entry and a timer flow that keeps you moving.",
        
    },

    

    
]
