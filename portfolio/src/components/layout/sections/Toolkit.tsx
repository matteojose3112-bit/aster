function Toolkit() {
  const groups = [
    {
      number: "01",
      title: "CRM & Business Platforms",
      description: "Systems used to manage customers, leads, bookings, and service workflows",
      skills: ["ServiceTitan", "HubSpot", "AccuLynx", "TripleSeat", "OpenTable", "Airtable", "CRM Administration", "Lead & Pipeline Management"],
    },
    {
      number: "02",
      title: "Customer & Sales Operations",
      description: "Customer communication, outbound follow-up, and commercial coordination",
      skills: ["Quo", "Customer Service", "Outbound Outreach", "Lead Follow-up", "Account Management", "SLA Awareness", "Bookings & Scheduling", "Contracts", "Estimates", "Invoicing & Payments"],
    },
    {
      number: "03",
      title: "Operations & Process Improvement",
      description: "Keeping teams, records, vendors, and day-to-day work organized",
      skills: ["Project Coordination", "Event Coordination", "Field Crew Scheduling", "Procurement", "Vendor Coordination", "Workflow Improvement", "Documentation", "Data Quality", "Process Standardization"],
    },
    {
      number: "04",
      title: "AI, Research & Productivity",
      description: "AI-assisted learning, research, drafting, and problem-solving",
      skills: ["ChatGPT", "Google Gemini", "AI-assisted Research", "Prompting & Iteration", "Information Synthesis", "Documentation", "Workflow Planning"],
    },
    {
      number: "05",
      title: "Frontend Development",
      description: "Building responsive interfaces and reusable application components",
      skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Responsive UI", "Component-based Design", "Debugging"],
    },
    {
      number: "06",
      title: "Data, Backend & Delivery",
      description: "Developing application data flows and shipping projects",
      skills: ["Supabase", "PostgreSQL", "Local Storage", "Git", "GitHub", "GitHub Actions", "GitHub Pages", "Deployment"],
    },
  ];

  return (
    <section id="toolkit" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-white/10 pt-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="aster-section-label">04 — Toolkit</p>
              <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] md:text-7xl">
                Tools to
                <br />
                <span className="text-neutral-600">make it work.</span>
              </h2>
              <p className="mt-8 max-w-sm text-base leading-7 text-neutral-500">
                A working toolkit across business operations and software development — from the CRM and customer systems used on the job to the technologies behind projects I build and deploy.
              </p>
              <p className="mt-5 max-w-sm text-xs leading-6 text-neutral-600">
                Tools reflect professional use and hands-on projects. Depth varies by platform, and the toolkit grows as I keep learning.
              </p>
            </div>

            <div className="border-t border-white/10">
              {groups.map((group) => (
                <div key={group.number} className="group border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] md:py-9">
                  <div className="grid gap-5 md:grid-cols-[52px_190px_1fr] md:items-start md:gap-6">
                    <span className="text-[10px] tracking-[0.18em] text-neutral-600">{group.number}</span>
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.02em] text-white">{group.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-neutral-600">{group.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="border border-white/10 bg-white/[0.02] px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition group-hover:border-white/20 group-hover:text-neutral-200">
                          {skill}
                        </span>
                      ))}
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
