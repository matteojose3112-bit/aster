const experience = [
  {
    period: "Oct 2026 — Present",
    role: "Customer Service Representative",
    company: "Colt Home Services",
    type: "Customer Service · Sales Development · Remote",
    summary: "Support customer service and outbound sales operations for a home services business. Use ServiceTitan and connected tools to manage customer information, work through outbound contact lists, maintain accurate CRM records, support call operations, and communicate service and Mass Save program information when appropriate.",
    impact: "Outbound lead follow-up · CRM data quality · Customer communication · Service coordination support",
    capabilities: ["ServiceTitan", "Quo", "Airtable", "Outbound Outreach", "Customer Service", "Lead Management", "CRM Integrity"],
  },
  {
    period: "Oct 2026",
    role: "Independent Freelancer",
    company: "Freelance",
    type: "Independent · Remote",
    summary: "Completed independent freelance work drawing on experience in sales operations, customer service, CRM administration, research, and workflow coordination.",
    impact: "Independent client support · Research and documentation · Operations experience",
    capabilities: ["Freelance", "Operations", "Customer Support", "CRM", "Research"],
  },
  {
    period: "Sep 2025 — Jun 2026",
    role: "Sales & Operations Coordinator",
    company: "Laureles Management",
    type: "Remote · Medellín, Colombia",
    summary: "Supported sales and operational activities across a two-location operation, managing customer inquiries, CRM workflows, bookings, contracts, payments, scheduling, and event execution. Coordinated with venue management, call center teams, venue staff, and cross-functional teams.",
    impact: "$80K–$100K+ monthly revenue supported at one location · Approximately $2M Q2 revenue · 2× year-over-year growth · 95%+ SLA compliance",
    capabilities: ["HubSpot", "TripleSeat", "OpenTable", "Sales Operations", "Event Coordination", "Account Management"],
  },
  {
    period: "Oct 2024 — Aug 2025",
    role: "CRM, Sales & Marketing Coordinator",
    company: "Inmobiliaria del Café Quindío",
    type: "Hybrid · Armenia, Colombia",
    summary: "Managed CRM, sales, customer service, and back-office activities in real estate, supporting the customer lifecycle from lead generation and follow-up through documentation and transactions. Maintained 15–20 active property listings and client relationships.",
    impact: "150+ CRM contacts · 80–100 leads monthly · 15–25% improvement in lead conversion · 4–6 hours saved weekly through workflow improvements",
    capabilities: ["HubSpot", "Lead Generation", "Pipeline Management", "Real Estate Operations", "Documentation", "Customer Service"],
  },
  {
    period: "Jan 2021 — Sep 2024",
    role: "Operations & Customer Service Coordinator",
    company: "416 Roofing",
    type: "Hybrid · Toronto, Canada",
    summary: "Managed sales, customer service, operations, project coordination, procurement, and CRM for a residential roofing company. Coordinated estimates, materials, vendors, field crews, scheduling, payments, and project progress across concurrent jobs.",
    impact: "20–25 projects monthly · 3 field crews coordinated · 5–7 estimates weekly · Materials procurement 4–5 times weekly",
    capabilities: ["AccuLynx", "Project Coordination", "Estimating", "Procurement", "Scheduling", "Invoicing & Payments"],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="aster-section-label">03 — Experience</p>
            <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] md:text-7xl">
              Experience
              <br />
              <span className="text-neutral-600">that scales.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-7 text-neutral-500">
              Sales, customer service, CRM, and operational coordination experience across home services, hospitality, real estate, and residential roofing — with a focus on customer relationships, lead management, project delivery, and workflow improvement.
            </p>
            <div className="mt-8 border-l border-white/10 pl-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">Career thread</p>
              <p className="mt-3 text-sm leading-6 text-neutral-400">Customer relationships → CRM & sales operations → project delivery → process improvement</p>
            </div>
          </div>

          <div className="border-t border-white/10">
            {experience.map((item, index) => (
              <article key={`${item.company}-${item.role}`} className="group border-b border-white/10 py-9 transition-colors hover:bg-white/[0.025] md:py-11">
                <div className="grid gap-7 md:grid-cols-[150px_1fr] md:gap-10">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-600">
                    <span className="text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                    <br />
                    <span className="mt-2 inline-block leading-5">{item.period}</span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">{item.type}</p>
                      <span className="text-neutral-700 transition group-hover:text-neutral-300">↗</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em] text-white md:text-3xl">{item.role}</h3>
                    <p className="mt-2 text-sm font-medium text-neutral-500">{item.company}</p>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">{item.summary}</p>

                    <div className="mt-7 border-l border-white/10 pl-4">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-600">Selected impact</p>
                      <p className="mt-2 text-sm leading-6 text-neutral-400">{item.impact}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.capabilities.map((capability) => (
                        <span key={capability} className="border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition group-hover:border-white/20 group-hover:text-neutral-300">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
