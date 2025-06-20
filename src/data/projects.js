export const featuredProjects = [
  // --- Automation / Ops --------------------------------------------------
  {
    id: "receipt-gen",
    title: "Receipt Generator",
    tag: "Automation",
    stack: ["Python", "Zapier", "OpenAI", "Google Apps Script", "HubSpot API"],
    excerpt:
      "Uploads a transaction image → parses via AI → updates CRM & emails PDF receipt.",
    metrics: "Saved 20+ hrs / month & eliminated copy-paste errors.",
    highlight: true,
  },
  {
    id: "inventory-tracker",
    title: "Weekly Inventory Tracker",
    tag: "Automation",
    stack: ["Zapier Tables", "Google Sheets", "HubSpot"],
    excerpt: "Real-time hunt capacity report delivered every Monday 7 AM.",
    metrics: "Prevents over-booking, improves sales planning.",
    highlight: true,
  },
  // --- Software Engineering ---------------------------------------------
  {
    id: "remember-our-lives",
    title: "Remember Our Lives",
    tag: "React + Node",
    stack: ["React", "Node", "Express", "PostgreSQL"],
    excerpt: "Memorial site with timeline, family-tree & Google Maps embed.",
    metrics: "",
    highlight: true,
  },
  // TODO: add more projects and GitHub links
  {
    id: "google-calendar",
    title: "Google Calendar Scheduler",
    tag: "Automation",
    stack: ["Apps Script", "Zapier", "HubSpot"],
    excerpt: "Creates shared calendar events for every new booking.",
    metrics: "Eliminated double-booking incidents.",
  },
];
