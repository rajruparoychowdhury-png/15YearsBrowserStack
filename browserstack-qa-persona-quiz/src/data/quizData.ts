export const PERSONAS = {
  oracle: {
    id: "oracle",
    title: "The Oracle",
    superpower: "Foresight, big-picture thinking, and proactive strategy",
    description: "You are the visionary. You see the bigger picture, anticipate future challenges, and use industry trends to design the testing strategy long before a single line of test code is written. You're always three steps ahead.",
    icon: "Eye",
    svgPath: `<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600">
        <circle cx="100" cy="100" r="40" stroke="#a78bfa" stroke-width="4"/>
        <circle cx="100" cy="100" r="15" stroke="#f472b6"/>
        <path d="M100 20 L100 40 M100 160 L100 180 M20 100 L40 100 M160 100 L180 100" stroke="#60a5fa" stroke-width="3"/>
        <circle cx="100" cy="100" r="60" stroke-dasharray="8 8" stroke="#cbd5e1"/>
        <polygon points="100,65 105,75 95,75" fill="#f472b6"/>
        <polygon points="100,135 105,125 95,125" fill="#f472b6"/>
    </g>`,
    variations: [
      { subtitle: "The Strategic Seer", quote: "A visionary mapping out quality pathways far before development begins." },
      { subtitle: "The Trend Navigator", quote: "Harnessing deep industry insights to stay multiple steps ahead." },
      { subtitle: "The Future Aligned", quote: "Mitigating quality risks through long-term proactive planning." }
    ]
  },
  guardian: {
    id: "guardian",
    title: "The Guardian",
    superpower: "User advocacy, responsibility, and high standards",
    description: "You are the ultimate user advocate. With a deep sense of empathy and responsibility, you are the unwavering last line of defense, ensuring that only the highest quality experience reaches the customer.",
    icon: "Shield",
    svgPath: `<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600">
        <path d="M100 35 C120 35 155 45 155 45 C155 90 135 145 100 165 C65 145 45 90 45 45 C45 45 80 35 100 35 Z" fill="#e0e7ff" stroke="#a78bfa" stroke-width="4"/>
        <path d="M100 65 L100 135 M65 95 L135 95" stroke="#f472b6" stroke-width="4"/>
        <circle cx="100" cy="95" r="15" fill="#ffffff" stroke="#60a5fa" stroke-width="3"/>
    </g>`,
    variations: [
      { subtitle: "The User Champion", quote: "The unwavering defender of seamless, high-quality user experiences." },
      { subtitle: "The Quality Shield", quote: "Securing the perimeter so only impeccable releases meet the public." },
      { subtitle: "The Empathic Sentry", quote: "Sensing and neutralizing UX friction points before they strike." }
    ]
  },
  pathfinder: {
    id: "pathfinder",
    title: "The Pathfinder",
    superpower: "Curiosity, exploration, and finding new-age solutions",
    description: "You are the fearless explorer. You are drawn to new technologies, experiment with the newest tools, and explore uncharted territories in the applications.",
    icon: "Compass",
    svgPath: `<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600">
        <circle cx="100" cy="100" r="55" stroke="#60a5fa" stroke-width="4" fill="#eff6ff"/>
        <polygon points="100,55 115,115 100,100" fill="#f472b6" stroke="#f472b6"/>
        <polygon points="100,145 85,85 100,100" fill="#a78bfa" stroke="#a78bfa"/>
        <circle cx="100" cy="100" r="4" fill="#ffffff" stroke="#1e1b4b" stroke-width="2"/>
        <path d="M60 60 L70 70 M140 140 L130 130 M140 60 L130 70 M60 140 L70 130" stroke="#cbd5e1" stroke-width="2"/>
    </g>`,
    variations: [
      { subtitle: "The Tech Explorer", quote: "Constantly exploring beta tools and emerging frameworks." },
      { subtitle: "The Frontier Scout", quote: "Charting unknown territories in applications with absolute curiosity." },
      { subtitle: "The Innovation Catalyst", quote: "Drawn to the newest paradigms to break boundaries." }
    ]
  },
  architect: {
    id: "architect",
    title: "The Architect",
    superpower: "System building, structure, and creating reliable tools",
    description: "You are the master builder. Your greatest satisfaction comes from designing, building, and maintaining robust, scalable, and elegant automations. You create systems that empower others.",
    icon: "Building2",
    svgPath: `<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600">
        <rect x="50" y="50" width="100" height="100" rx="10" stroke="#a78bfa" stroke-width="4" fill="#f5f3ff"/>
        <rect x="70" y="70" width="60" height="60" rx="4" stroke="#60a5fa" stroke-dasharray="4 4"/>
        <line x1="50" y1="100" x2="150" y2="100" stroke="#cbd5e1" stroke-width="2"/>
        <line x1="100" y1="50" x2="100" y2="150" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="100" cy="100" r="10" fill="#f472b6" stroke="#f472b6"/>
    </g>`,
    variations: [
      { subtitle: "The Automation Master", quote: "Constructing resilient systems and reliable automated pipelines." },
      { subtitle: "The Framework Builder", quote: "Creating elegant architectures that empower the entire delivery cycle." },
      { subtitle: "The Structural Specialist", quote: "Transforming testing complexity into simple, modular automation." }
    ]
  },
  diplomat: {
    id: "diplomat",
    title: "The Diplomat",
    superpower: "Collaboration, consensus-building, human systems",
    description: "You are the communication bridge. You excel at fostering collaboration between QA, developers, and product teams, translating technical issues into business impact and ensuring everyone is aligned.",
    icon: "Handshake",
    svgPath: `<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600">
        <circle cx="70" cy="130" r="15" fill="#fbcfe8" stroke="#f472b6" stroke-width="3"/>
        <circle cx="130" cy="130" r="15" fill="#bfdbfe" stroke="#60a5fa" stroke-width="3"/>
        <circle cx="100" cy="70" r="18" fill="#ddd6fe" stroke="#a78bfa" stroke-width="3"/>
        <line x1="85" y1="120" x2="100" y2="88" stroke="#cbd5e1" stroke-width="3"/>
        <line x1="115" y1="120" x2="100" y2="88" stroke="#cbd5e1" stroke-width="3"/>
        <line x1="85" y1="130" x2="115" y2="130" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="2 2"/>
    </g>`,
    variations: [
      { subtitle: "The Bridge Builder", quote: "Unifying developers, testers, and product owners around quality goals." },
      { subtitle: "The Alignment Specialist", quote: "Translating technical constraints into real business impact with grace." },
      { subtitle: "The Collaborative Hub", quote: "Fostering standard understanding and eliminating delivery silos." }
    ]
  },
  detective: {
    id: "detective",
    title: "The Detective",
    superpower: "Root cause analysis and problem-solving",
    description: "You are the relentless problem-solver. No bug is too complex or too mysterious for you. You thrive on digging into logs, finding the root cause, and chasing down the most elusive issues.",
    icon: "Search",
    svgPath: `<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600">
        <circle cx="90" cy="90" r="35" stroke="#a78bfa" stroke-width="4" fill="#ffffff"/>
        <line x1="115" y1="115" x2="155" y2="155" stroke="#60a5fa" stroke-width="8" stroke-linecap="round"/>
        <circle cx="155" cy="155" r="4" fill="#1e1b4b"/>
        <rect x="84" y="80" width="12" height="18" rx="4" fill="#f472b6"/>
        <line x1="78" y1="83" x2="84" y2="85" stroke="#f472b6" stroke-width="2"/>
        <line x1="78" y1="89" x2="84" y2="89" stroke="#f472b6" stroke-width="2"/>
        <line x1="78" y1="95" x2="84" y2="93" stroke="#f472b6" stroke-width="2"/>
        <line x1="102" y1="83" x2="96" y2="85" stroke="#f472b6" stroke-width="2"/>
        <line x1="102" y1="89" x2="96" y2="89" stroke="#f472b6" stroke-width="2"/>
        <line x1="102" y1="95" x2="96" y2="93" stroke="#f472b6" stroke-width="2"/>
    </g>`,
    variations: [
      { subtitle: "The Bug Hunter", quote: "Chasing down elusive edge cases and intermittent failures." },
      { subtitle: "The Root Cause Sleuth", quote: "Scouring logs, console outputs, and code paths with absolute precision." },
      { subtitle: "The Log Whisperer", quote: "Solving mysteries that leave other teams baffled." }
    ]
  },
  catalyst: {
    id: "catalyst",
    title: "The Catalyst",
    superpower: "Process optimization, speed, and team improvement",
    description: "You are the team accelerator. A master of process and efficiency, you find and remove bottlenecks, streamline workflows, and assist others make the entire development lifecycle faster and smoother.",
    icon: "Zap",
    svgPath: `<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600">
        <path d="M100 35 L145 110 L120 110 L130 165 L55 90 L80 90 Z" fill="#eff6ff" stroke="#60a5fa" stroke-width="4"/>
        <polygon points="100,35 120,110 100,95" fill="#f472b6" stroke="#f472b6"/>
        <circle cx="100" cy="100" r="25" stroke="#a78bfa" stroke-dasharray="4 4" stroke-width="2"/>
    </g>`,
    variations: [
      { subtitle: "The Velocity Engine", quote: "Eliminating process bottlenecks to accelerate developer workflows." },
      { subtitle: "The Lifecycle Streamliner", quote: "Championing seamless CI/CD pathways and high velocity." },
      { subtitle: "The Flow Optimiser", quote: "Designing efficient environments for swift and safe product iterations." }
    ]
  },
};

export const TIE_BREAKER_ORDER = [
  "guardian",
  "architect",
  "detective",
  "catalyst",
  "diplomat",
  "oracle",
  "pathfinder",
];

export const QUESTIONS = [
  {
    id: 1,
    text: "A major release is a huge success. What part gives you the most satisfaction?",
    options: [
      { text: "The rock-solid automation framework I designed is working perfectly and flawlessly", persona: "architect" },
      { text: "I personally caught a last-minute UX issue that would have been a hindrance for our users", persona: "guardian" },
      { text: "The new CI/CD process I championed cut the final testing and release time in half", persona: "catalyst" },
      { text: "Finally nailing the root cause of that one intermittent bug that's been plaguing us for months", persona: "detective" },
    ],
  },
  {
    id: 2,
    text: "It's the day before a release, and a critical, complex bug is discovered. What is your immediate, gut instinct?",
    options: [
      { text: "Start digging into logs trying to reproduce it under different conditions to find the exact trigger", persona: "detective" },
      { text: "Get the key people from Dev, Product, and QA on a call to align on a single plan of action", persona: "diplomat" },
      { text: "Assess the real-world user impact. How many users will this affect? Is it a release blocker?", persona: "guardian" },
      { text: "Write an automated test that consistently fails, proving the bug's existence and securing the test coverage", persona: "architect" },
    ],
  },
  {
    id: 3,
    text: "You have a free afternoon for professional development. What do you dive into?",
    options: [
      { text: "Reading blogs and whitepapers about the future of SDLC/AI and its long-term impacts", persona: "oracle" },
      { text: "Downloading and experimenting with a brand new testing tool that just launched in beta", persona: "pathfinder" },
      { text: "Refactoring and optimising our regression suite to make it run faster and more reliably", persona: "catalyst" },
      { text: "Mentoring a junior tester on the team, helping them with their strategies and career goals", persona: "diplomat" },
    ],
  },
  {
    id: 4,
    text: "You're starting on a new, complex project. Where do you focus your energy first?",
    options: [
      { text: "Defining a clear, data-driven strategy and identifying the biggest areas of risk upfront", persona: "oracle" },
      { text: "Whiteboarding the ideal architecture that will support this project for years to come", persona: "architect" },
      { text: "Getting my hands on the earliest prototypes to explore, understand, and start finding flaws in the core concepts", persona: "pathfinder" },
      { text: "Setting up meetings with the lead developer and product manager to ensure our quality goals are perfectly aligned from day one", persona: "diplomat" },
    ],
  },
  {
    id: 5,
    text: "A developer says, \"I can't reproduce it... it works on my machine.\" Your response is:",
    options: [
      { text: "\"Let's get on a call and walk through it together. We'll surely figure it out.\"", persona: "diplomat" },
      { text: "\"This bug is real for our users, we need to fix it before it impacts them.\"", persona: "guardian" },
      { text: "\"Let's look at my test data, the logs, screen recordings, the console output, and the steps.\"", persona: "detective" },
      { text: "\"We need a standardised testing environment. This is a process issue to fix for the team.\"", persona: "catalyst" },
    ],
  },
  {
    id: 6,
    text: "What is your biggest professional frustration?",
    options: [
      { text: "When the team skips the strategic planning phase and rushes into coding and testing", persona: "oracle" },
      { text: "When a preventable, silly bug escapes to production because a process wasn't followed", persona: "guardian" },
      { text: "Teams work in silos, causing miscommunication and redundancy slowing everyone down", persona: "diplomat" },
      { text: "When bug reports are vague with no logs, no steps, and no context", persona: "detective" },
    ],
  },
  {
    id: 7,
    text: "For you, the \"Quality\" in \"Quality Assurance\" is ultimately about...",
    options: [
      { text: "Building predictable, reliable, and highly automated systems to ensure consistent standards", persona: "architect" },
      { text: "A process that allows the entire team to ship features quickly, safely, and efficiently", persona: "catalyst" },
      { text: "A product that delights and empowers the end-user at every single stage", persona: "guardian" },
      { text: "Using data and forward-looking trends to create a testing strategy that prevents issues", persona: "oracle" },
    ],
  }
];
