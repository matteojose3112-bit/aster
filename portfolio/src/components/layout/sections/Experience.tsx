const experience = [
  {
    period: "Nov 2025 — Present",
    role: "Customer Support & Client Services Associate",
    company: "Laureles Management",
    type: "Remote",
    summary: "Manage high-volume customer communication, service requests, scheduling, and CRM records while keeping client issues moving from intake to resolution.",
    impact: "Client operations · CRM discipline · Issue resolution · Service coordination",
    capabilities: ["Customer Experience", "CRM", "Client Operations", "Problem Solving"],
  },
  {
    period: "Jun 2025 — Oct 2025",
    role: "Customer Support & Administrative Assistant",
    company: "Inmobiliaria del Café",
    type: "Part-Time",
    summary: "Handled inbound property inquiries, coordinated showings, supported follow-ups, and kept customer information and communications organized across the service process.",
    impact: "Lead follow-up · Scheduling · Administrative operations · Customer communication",
    capabilities: ["Customer Support", "Administration", "Follow-up", "Process Coordination"],
  },
  {
    period: "Nov 2024 — May 2025",
    role: "Customer Support Associate",
    company: "Rogers Communications",
    type: "Remote · Part-Time",
    summary: "Supported customers across account, billing, and basic technical issues while documenting interactions in Zendesk and Salesforce and escalating complex cases appropriately.",
    impact: "Technical support · CRM documentation · Case management · Escalation",
    capabilities: ["Zendesk", "Salesforce", "Technical Support", "Case Management"],
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
              A customer-facing foundation built around communication, CRM discipline, problem solving, and operational execution — now expanding into automation, analytics, and systems thinking.
            </p>
            <div className="mt-8 border-l border-white/10 pl-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">Career thread</p>
              <p className="mt-3 text-sm leading-6 text-neutral-400">Customer operations → systems → data → automation</p>
            </div>
          </div>

          <div className="border-t border-white/10">
            {experience.map((item, index) => (
              <article key={`${item.company}-${item.role}`} className="group border-b border-white/10 py-9 transition-colors hover:bg-white/[0.025] md:py-11">
                <div className="grid gap-7 md:grid-cols-[150px_1fr] md:gap-10">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-600">
                    <span className="text-neutral-400">0{index + 1}</span>
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
                      <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-600">Transferable impact</p>
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
