
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
    moreImgs?: string[];
}

export const projects: ProjProps[] = [
    
    {
        id: 'race',

        title: "Algo Race",
        description: "race between different algotithms visualized for better understanding! ",
        img: "/imgs/algos.gif",
        skills: ["C/C++", "GraphQL", "DSA Concepts"],
        webAvail:false,
        fullInfo: "Algo Race visualizes algorithms side by side so you can see how they behave on the same input. It focuses on clarity and intuition, showing step-by-step progression, timing differences, and how data structures evolve during execution. The interface highlights swaps, comparisons, and state changes in real time, making it easier to understand why certain algorithms outperform others on specific inputs. It is built to be interactive, so you can tweak input sizes, shuffle patterns, and watch the execution paths diverge.",

    },
     {
        id: 'lunoir',

        title: "Lunoir Wear",
        description: "a marketplace for selling my tshirts. get the craziest but high quality shirts only at lunoirwear",
        linkWeb: "https://www.lunoirwear.com/",
        img: "/imgs/lunoir.gif",
        skills: ["Next.js", "TailwindCSS", "TypeScript"],
        webAvail:true,
        fullInfo: "Lunoir Wear is a focused ecommerce storefront built to showcase limited drops with a clean, fast buying flow. The product emphasizes sharp visuals, a smooth cart and checkout experience, and mobile-first performance. The goal was to keep the brand front and center while ensuring the purchase path stays frictionless.",

    },
    {
        id: 'lightpost',

        title: "LightPost",
        description: "an ai powered news feed",
        linkWeb: "https://github.com/farzeenilyaszargar/lightpost-final",
        img: "/imgs/lightpost.png",
        skills: ["Next.js", "TailwindCSS", "TypeScript"],
        webAvail:true,
        fullInfo: "LightPost is an AI-assisted news feed that curates stories and highlights key takeaways. It focuses on reducing noise by summarizing long articles and grouping related topics so readers can scan quickly. The interface keeps attention on content, with a lightweight, responsive UI for daily reading.",

    },
    {
        id: 'gameoflife',

        title: "Game Of Life",
        description: "Conway's Game of Life Cellular Automata",
        linkWeb: "https://github.com/farzeenilyaszargar/GameOfLife",
        img: "/imgs/goll.gif",
        skills: ["C++"],
        webAvail:true,
        fullInfo: "A visual implementation of Conway's Game of Life with emphasis on performance and clarity. It supports configurable grid sizes, simulation speed control, and interactive patterns. The project highlights how simple rules can generate complex emergent behavior.",

    },

    {
        id: 'your-time',

        title: "Time Is Yours (Web Extension)",
        description: "a web extension that tracks your time spent on websites and gives you a detailed report of your time usage.",
        linkWeb: "https://github.com/farzeenilyaszargar/time-is-yours-extension/",
        img: "/imgs/ext.gif",
        skills: ["JS", "HTML", "CSS"],
        webAvail:false,
        fullInfo: "This project is a web extension designed to track the time users spend on various websites, providing detailed reports on their time usage. The extension aims to help users understand their online habits and improve productivity by visualizing time spent across different sites. It features a user-friendly interface that displays time statistics, allowing users to set goals and receive reminders for excessive usage. The extension is built using JavaScript, HTML, and CSS, ensuring compatibility with major browsers. It includes options for customizing tracking preferences and generating weekly or monthly reports to analyze trends in web activity.",
        features: ["Time tracking for websites",
            "Detailed reports on time usage",
            "User-friendly interface",
            "Compatibility with major browsers"],
        moreImgs: [
                "/imgs/ext2.png",
                "/imgs/ext3.png"

            ]

    },

    
    {
        id: 'music-player',
        title: "Calypso Music AI",
        description: "i made this AI to distinguish music based on actual musical values and not predective values of the user.",
        img: "/imgs/calypso.gif",
        webAvail:false,

        skills: ["Rust"],
        fullInfo:"This placeholder brief outlines a Rust music player project intended to be fast, safe, and pleasant to use. The application targets desktop platforms and optionally a terminal interface, demonstrating modern async design and careful resource management. Core responsibilities are decoding audio, managing a media library, scheduling playback, and presenting a responsive UI. Audio playback will use rodio or cpal for output, wrapped in a small trait to allow swapping backends. Supported formats initially include MP3, FLAC, WAV, OGG, and AAC via symphonia. Files are discovered by a library indexer that walks directories with ignore rules, extracts tags with lofty, computes content hashes for deduplication, and stores metadata in SQLite through sqlx. Indexing runs on Tokio tasks to avoid blocking the UI. The queue and playlist engine provide shuffle, repeat, crossfade, gapless playback, replay gain, and a lightweight ten band equalizer. Smart playlists evaluate simple rules like genre, year, or play count. Streaming HTTP, HLS, and radio sources are buffered with backpressure and graceful reconnects. A small cache reduces bandwidth and supports offline listening for recently played tracks. Two interfaces are planned. A TUI built with ratatui and crossterm offers keyboard driven control in the terminal. A desktop shell using Tauri provides native windowing, tray controls, and media keys. Both share the same core crate to maintain a single source of truth. Telemetry uses tracing for structured logs and optional OpenTelemetry for metrics. Tests cover decoders, queue invariants, and migration safety; property tests with proptest strengthen correctness. Security considerations include sandboxing external artwork fetches, validating playlist URLs, and handling untrusted tags safely. Documentation will include quickstart examples, configuration guides, and an architecture diagram. The roadmap targets a minimal viable player, then plugins for visualizers, scrobbling, and DSP effects. Contributions are welcome and encouraged. Issue templates and code style guidelines ship included. The long-term goal is a polished, low-latency player that feels instant even with large libraries.",

    },
    {
        id: 'security-system',

        title: "Security System Using Raspberry Pi",
        description: "integrating sensors, camera and microprocessor to make a functioning security system.",
        img: "/imgs/raspberry.webp",
        webAvail:false,

        skills: ["Python"],
        fullInfo:"This placeholder brief describes a modular home security system built with Raspberry Pi and Python. The objective is dependable detection, quick notification, and easy extension without proprietary lock-in. The core service runs on Raspberry Pi OS, installed as a systemd unit for automatic startup and graceful restarts. A Pi Camera or USB webcam provides video; OpenCV performs motion analysis via background subtraction, morphology filters, and contour heuristics to suppress noise from shadows or small pets. Optional PIR sensors on GPIO pins offer low-power wake triggers and corroboration. Door/window status is supported with magnetic reed switches; a piezo buzzer provides local chirps for arm, disarm, and alarm states. Configuration lives in a human-readable YAML file: arming schedules, sensitivity thresholds, detection zones, clip length, storage limits, and notification channels. When motion is confirmed, the system captures timestamped JPEG bursts or short H.264 segments, writes structured logs, and pushes alerts through email, Telegram, or generic webhooks. A circular disk buffer enforces retention, with spillover to a NAS via SMB/NFS when available. A lightweight Flask dashboard exposes live preview, event history, and settings. Token-based auth protects access; all endpoints prefer HTTPS behind a reverse proxy such as Caddy. The UI emphasizes large status badges, quick arm/disarm controls, and per-sensor health indicators. Health checks verify camera availability, disk space, and clock drift; self-repair routines attempt reconnection before escalating. Development follows a multi-package layout: core detection, devices, notifications, storage, and web UI. Tests include unit coverage for detectors, property tests for state machines, and integration tests with sample clips. Observability uses Python’s logging plus OpenTelemetry traces when enabled. A Makefile and install script handle provisioning, udev rules, and service registration. The roadmap includes person detection with a tiny model, MQTT and Home Assistant integration, secure remote access through Tailscale, multi-camera federation, and an export tool for law-enforcement handoff. Documentation covers wiring diagrams, troubleshooting, and upgrade paths. The system is designed to be privacy-first, keeping footage and alerts under the owner’s control.",

    },
   

    {
        id: 'to-do',
        title: "To Do & Timer & Tunes ",
        description: "just a to do + promodoro timer + classical music site i made for myself!",
        img: "/imgs/todo.jpeg",
        skills: ["NextJS"],
        webAvail:true,
        linkWeb:"https://sip-and-focus-8fbjfc58h-farzeenilyaszargars-projects.vercel.app/",
        fullInfo: "A personal focus toolkit that combines a to‑do list, a Pomodoro timer, and a calm music player in one place. It is designed to reduce context switching and keep sessions intentional. The UI is minimal, with quick task entry and a timer flow that keeps you moving.",
        
    },

    
    {
        id: 'sudoku-solver',
        title: "Sudoku Solver Algorithm",
        description: "solves sudoku with multiple algotithms",
        img: "/imgs/sudoku.gif",
        skills: ["Next.js", "TailwindCSS"],
        webAvail:false,
        fullInfo:"This project delivers a fast, reliable Sudoku solver and generator with clean interfaces and strong correctness guarantees. At its core is a hybrid solving engine: constraint propagation (naked/hidden singles, candidate elimination by units, pairs/triples) to shrink the search space, followed by depth-first backtracking with heuristics (MRV/least-remaining-values and forward checking). For advanced performance, an optional exact-cover backend (Algorithm X with Dancing Links) can be toggled for benchmarking or very hard puzzles. The solver validates inputs (no duplicates per row/column/box), detects unsatisfiable boards, and verifies uniqueness of solutions. A generator builds fresh puzzles by carving from complete grids and testing uniqueness, with difficulty estimated from the sequence of techniques required. The project ships with a CLI for batch solving/generation, a minimal web UI for interactive play and hints, and a test suite covering canonical edge cases. Clear module boundaries make it easy to embed the engine in other apps (mobile, desktop, or web workers). Documentation includes an API guide, technique glossary, and performance notes. The goal is a solver that is both fast for power users and approachable for learners.",
        
    },

    {
        id: 'img-ascii',
        title: "Convert Image to ASCII Characters",
        description: "just upload files to convert Image to ASCII characters with shadings!",
        img: "/imgs/ascii.gif",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        webAvail:true,
        linkWeb: "",
        fullInfo: "A simple web app that transforms images into ASCII art with shading and contrast control. It supports quick uploads and renders the output in a readable monospace grid. The project focuses on balancing fidelity with performance so results appear instantly.",

        
    },

    {
        id: 'superflights',
        title: "Superflights",
        description: "a full-stack travel booking platform with fast search, itinerary management, and checkout flows.",
        linkWeb: "https://www.superflights.co.in/",
        img: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=1200&q=80",
        skills: ["Next.js", "TypeScript", "Payments"],
        webAvail:true,
        fullInfo: "Superflights is an OTA-style travel platform that focuses on speed, pricing clarity, and a clean booking experience. I built the core web product with a search flow that surfaces flights and fares quickly, then guides users through flexible filters, itinerary building, and checkout. The system emphasizes reliable pricing, responsive UX, and scalable APIs so the product remains fast even under heavy usage.",
    },
    {
        id: 'surfers',
        title: "Surfers",
        description: "an AI-first site builder that turns prompts into live, editable pages with quick publishing.",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        skills: ["AI", "React", "Node.js"],
        webAvail:false,
        fullInfo: "Surfers is a prompt-to-website builder that generates a clean starting point and keeps everything editable. It balances fast generation with sensible defaults for typography, layout, and sections, then provides a simple editor for refining content and styles. The focus is on speed to first publish and making changes without friction.",
    },
    {
        id: 'java-todo',
        title: "Java To-Do App",
        description: "a clean desktop to-do manager with priorities, reminders, and local persistence.",
        img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80",
        skills: ["Java", "SQLite", "Desktop"],
        webAvail:false,
        fullInfo: "A lightweight desktop to-do app built in Java with an emphasis on speed and clarity. It supports task priorities, due dates, and reminders, and stores everything locally for fast access. The UI is minimal and optimized for quick entry and review.",
    },
    {
        id: 'nap',
        title: "Nap",
        description: "an agent orchestration platform for coordinating tools, tasks, and multi-step workflows.",
        linkWeb: "https://nap-code.com/",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        skills: ["TypeScript", "APIs", "Infrastructure"],
        webAvail:true,
        fullInfo: "Nap is an orchestration layer for tool-using agents, designed to break down work into reliable, repeatable steps. It manages task routing, tool calls, and state so complex workflows remain observable and controllable. The platform is built to scale with new tools, models, and execution environments.",
    },

    
]
