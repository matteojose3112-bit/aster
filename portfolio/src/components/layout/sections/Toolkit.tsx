function Toolkit() {
  const groups = [
    {
      number: "01", title: "CRM & Revenue Platforms", description: "Customer systems, lead pipelines, bookings, and service workflows",
      skills: ["ServiceTitan", "Quo", "HubSpot", "AccuLynx", "TripleSeat", "OpenTable", "Airtable", "CRM Administration", "Revenue Operations", "Pipeline Management", "Lead Qualification", "Account Management"],
    },
    {
      number: "02", title: "Customer Success & Sales", description: "Customer communication, conversion, retention, and commercial coordination",
      skills: ["Inbound & Outbound Calls", "Customer Service", "Customer Success Operations", "Lead Follow-up", "Appointment Setting", "SLA Management", "Bookings & Scheduling", "Contracts", "Estimates", "Invoicing & Payments", "Cross-functional Collaboration"],
    },
    {
      number: "03", title: "Business & Field Operations", description: "Keeping teams, records, vendors, and day-to-day work organized",
      skills: ["Business Operations", "Sales Operations", "Project Coordination", "Event Coordination", "Dispatch Coordination", "Field Crew Scheduling", "Procurement", "Vendor Relations", "Workflow Optimization", "Documentation", "Data Quality", "Process Standardization"],
    },
    {
      number: "04", title: "Analytics & Productivity", description: "Turning business information into useful reporting and decisions",
      skills: ["Microsoft Excel", "Google Workspace", "Power BI", "SQL", "Reporting", "Data Analysis", "KPI Tracking", "CRM Reporting", "AI-assisted Research", "Information Synthesis", "Document Summarization", "Transcription & Captions"],
    },
    {
      number: "05", title: "Frontend & Application Development", description: "Building responsive interfaces, reusable components, and user workflows",
      skills: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "HTML", "CSS", "Responsive UI", "Component-based Design", "Accessibility Foundations", "Debugging"],
    },
    {
      number: "06", title: "Backend, Data & APIs", description: "Developing application services, data models, and integrations",
      skills: ["Python", "Go", "FastAPI", "REST APIs", "PostgreSQL", "Supabase", "SQLAlchemy", "Alembic", "JWT", "JSON Schema", "Local Storage", "Database Modeling"],
    },
    {
      number: "07", title: "Quality, Delivery & AI Tooling", description: "Testing, shipping, documenting, and iterating on software projects",
      skills: ["Git", "GitHub", "GitHub Actions", "GitHub Pages", "Render", "pytest", "Vitest", "ESLint", "CI/CD", "Automated Testing", "Deployment", "AI-assisted Development", "Workflow Automation", "Prompt Iteration"],
    },
  ];

  return (
    <section id="toolkit" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-white/10 pt-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="aster-section-label">04 — Toolkit</p>
              <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] md:text-7xl">Tools to<br /><span className="text-neutral-600">make it work.</span></h2>
              <p className="mt-8 max-w-sm text-base leading-7 text-neutral-500">A practical toolkit spanning revenue and business operations, CRM platforms, customer success, analytics, and hands-on software development.</p>
              <p className="mt-5 max-w-sm text-xs leading-6 text-neutral-600">Includes professional platform experience and capabilities developed through independent projects. Proficiency and context vary by tool.</p>
            </div>
            <div className="border-t border-white/10">
              {groups.map((group) => (
                <div key={group.number} className="group border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] md:py-9">
                  <div className="grid gap-5 md:grid-cols-[52px_190px_1fr] md:items-start md:gap-6">
                    <span className="text-[10px] tracking-[0.18em] text-neutral-600">{group.number}</span>
                    <div><h3 className="text-xl font-medium tracking-[-0.02em] text-white">{group.title}</h3><p className="mt-2 text-xs leading-5 text-neutral-600">{group.description}</p></div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => <span key={skill} className="border border-white/10 bg-white/[0.02] px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition group-hover:border-white/20 group-hover:text-neutral-200">{skill}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Toolkit;
