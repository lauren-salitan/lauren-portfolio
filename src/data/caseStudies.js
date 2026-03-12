export const caseStudies = [
  {
    id: 'big-truck-dashboards',
    title: 'Sales & Inventory Analytics Platform',
    client: 'Big Truck Farms',
    role: 'External Product & Data Systems Lead',
    timeframe: '2024',
    stack: ['Python', 'SQL', 'TypeScript', 'Supabase', 'Vercel', 'EKOS exports'],
    summary: 'Replaced manual EKOS reporting with interactive dashboards for a $4M distributor serving 35+ partners and 30+ SKUs.',
    challenge: 'The team spent ~20 hours/week exporting and cleaning EKOS data in Excel, with limited visibility into SKU, distributor, and packaging performance.',
    approach: [
      'Ran discovery with C-suite to define the critical metrics (SKU YOY, top distributors, packaging mix) and mock UX flows for non-technical users.',
      'Engineered data cleaning scripts to normalize three years of inconsistent EKOS exports and built repeatable imports.',
      'Prototyped an Excel dashboard for fast validation, then shipped a Supabase + TypeScript web app deployed to Vercel for always-on access.',
      'Iterated with stakeholders, adding guardrails and visual defaults to keep insights clear for non-technical users.'
    ],
    results: [
      '20+ hours/week manual reporting eliminated; removed need for a dedicated reporting role.',
      'Leadership gained self-serve SKU/distributor insights across 3 years of data, improving planning and pricing decisions.',
      'System now underpins nationwide sales, marketing, and accounting reviews.'
    ]
  },
  {
    id: 'arrivals-automation',
    title: 'Arrivals Automation System',
    client: 'Bushwhack Adventures',
    role: 'Head of Tech Ops & Product Systems',
    timeframe: '2024',
    stack: ['Zapier', 'Google Sheets', 'Twilio SMS', 'HubSpot', 'Google Drive'],
    summary: 'Built a multi-tier alerting and prep workflow covering monthly, weekly, and 24-hour arrival checkpoints.',
    challenge: 'Arrivals data lived in texts and memory, causing last-minute scrambles and errors across a 20-person staff.',
    approach: [
      'Mapped the end-to-end arrivals journey and defined the minimum viable checkpoints for management, guides, and housekeeping.',
      'Automated monthly overview sheets, weekly prep folders with contracts and checklists, and day-before SMS alerts with assignments.',
      'Integrated HubSpot, Drive, and Twilio to keep a single source of truth and push info to every role.',
      'Trained staff and rebuilt copy/templates after the first season to improve clarity and adoption.'
    ],
    results: [
      '15+ hours/month saved for the operator; arrival-related mistakes dropped to zero.',
      'Staff reported higher confidence and smoother guest experience for 80–120 annual guests.',
      'Created a repeatable cadence that reduced cognitive load and stress during peak season.'
    ]
  },
  {
    id: 'receipt-generator',
    title: 'AI-Powered Receipt Generator',
    client: 'Bushwhack Adventures',
    role: 'Head of Tech Ops & Product Systems',
    timeframe: '2024',
    stack: ['Python', 'OpenAI API', 'Zapier', 'Google Forms', 'HubSpot', 'Apps Script'],
    summary: 'End-to-end automation that turns uploaded payment images into CRM-updated records and emails PDF receipts automatically.',
    challenge: 'Customers frequently needed receipts; the team considered hiring an admin to manually create them, risking errors and cost.',
    approach: [
      'Designed a low-friction intake via Google Form for non-technical staff.',
      'Built Python + Zapier workflow using OpenAI for OCR/field extraction; matched records in HubSpot and generated PDFs via Apps Script.',
      'Automated email delivery and logging for auditability; documented the flow and trained staff.',
      'Owned ideation → build → rollout, incorporating feedback to harden error handling.'
    ],
    results: [
      '20+ hours/month saved; 100% copy-paste errors eliminated for up to 100 customers/month.',
      'Finance data now accurate in CRM, improving downstream comms and balance tracking.',
      'Demonstrated ROI of automation, unlocking trust for broader system upgrades.'
    ]
  },
  {
    id: 'netric-ops-hub',
    title: 'Notion Ops & Productivity Hub',
    client: 'Netric / Ommeya Health',
    role: 'Productivity Systems Consultant',
    timeframe: '2024',
    stack: ['Notion', 'Zapier', 'AI research tools'],
    summary: 'Centralized meetings, tasks, experiments, and workflows into a Notion-based operating system for a founder-led team.',
    challenge: 'Founder workflows were fragmented across tools with communication overload and no predictable routine.',
    approach: [
      'Ran workflow + energy audits, identifying afternoon productivity slumps and comms overload.',
      'Designed a three-phase roadmap (Assessment → Strategy → Monitoring) and built a Notion workspace covering meetings, tasks, resources, and tutorials.',
      'Set up data-driven experiments (energy/time tracking) and implemented communication boundaries and task triage.',
      'Produced tutorials and tool recommendations to support adoption.'
    ],
    results: [
      'Unified scattered workflows into one operating hub, reducing context switching.',
      'Data-informed scheduling improved focus windows; comms load reduced via boundaries and filters.',
      'Client adopted repeatable rituals, enabling sustainable productivity gains.'
    ]
  },
  {
    id: 'trip-syllabus',
    title: 'Automated Trip Syllabus',
    client: 'Bushwhack Adventures',
    role: 'Head of Tech Ops & Product Systems',
    timeframe: '2024',
    stack: ['DocuSign', 'Google Workspace', 'Zapier', 'HubSpot'],
    summary: 'Contract-triggered personalized trip packets covering logistics, balances, guides, and gear lists.',
    challenge: 'Guests repeatedly requested trip info; staff spent hours answering ad-hoc questions.',
    approach: [
      'Mapped info needs across trip types and designed reusable syllabus templates.',
      'Linked DocuSign contract completion to automated PDF generation pulling live CRM data.',
      'Collaborated on visual polish with media team; iterated after user feedback for clarity.',
      'Documented the flow and trained staff for full adoption.'
    ],
    results: [
      'Hundreds of guest questions deflected annually; staff hours reclaimed for operations.',
      'Consistent, on-brand communication improved guest preparedness and trust.',
      'Templates now serve as a scalable knowledge base for new offerings.'
    ]
  },
];
