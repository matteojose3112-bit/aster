const experience = [
  {
    period: "Nov 2025 — Present",
    role: "Customer Support & Client Services Associate",
    company: "Laureles Management",
    type: "Remote",
    summary: "Manage high-volume customer communication, service requests, scheduling, and CRM records while maintaining a consistent client experience.",
    capabilities: ["Customer Experience", "CRM", "Client Operations"],
  },
  {
    period: "Jun 2025 — Oct 2025",
    role: "Customer Support & Administrative Assistant",
    company: "Inmobiliaria del Café",
    type: "Part-Time",
    summary: "Handled inbound property inquiries, scheduled showings, supported client follow-ups, and maintained organized customer records and communications.",
    capabilities: ["Customer Support", "Administration", "Client Follow-up"],
  },
  {
    period: "Nov 2024 — May 2025",
    role: "Customer Support Associate",
    company: "Rogers Communications",
    type: "Remote · Part-Time",
    summary: "Supported customers across account, billing, and basic technical issues while documenting interactions in Zendesk and Salesforce and escalating complex cases.",
    capabilities: ["Zendesk", "Salesforce", "Technical Support"],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="aster-section-label">03 — Experience</p>
            <h2 className="mt-7 text-5xl font-semibold tracking-[-0.045em] md:text-7xl">
              People,
              <br />
              <span className="text-neutral-600">systems.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-7 text-neutral-500">
              Customer-facing experience shaped by operations, communication,
              CRM discipline, and problem solving.
            </p>
          </div>

          <div className="border-t border-white/10">
            {experience.map((item, index) => (
              <article key={`${item.company}-${item.role}`} className="group border-b border-white/10 py-9 transition-colors hover:bg-white/[0.025] md:py-11">
                <div className="grid gap-6 md:grid-cols-[150px_1fr_auto] md:gap-10">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-neutral-600">
                    <span className="text-neutral-400">0{index + 1}</span>
                    <br />
                    <span className="mt-2 inline-block">{item.period}</span>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">{item.type}</p>
                    <h3 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-white md:text-3xl">{item.role}</h3>
                    <p className="mt-2 text-sm text-neutral-500">{item.company}</p>
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">{item.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.capabilities.map((capability) => (
                        <span key={capability} className="border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden text-2xl text-neutral-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-300 md:block">↗</div>
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
