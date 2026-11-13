function About() {
  const valueProps = [
    { number: "01", title: "Think in systems", text: "I look for the bottleneck behind the task — then design a clearer process, workflow, or system around it." },
    { number: "02", title: "Connect the dots", text: "I bridge revenue goals, customer needs, data, and technology instead of treating them as separate problems." },
    { number: "03", title: "Improve the workflow", text: "I use CRM platforms, careful record management, reporting, and practical digital tools to reduce friction and improve visibility." },
    { number: "04", title: "Measure what matters", text: "The goal is better decisions, stronger customer outcomes, reliable execution, and scalable operations." },
  ];
  const metrics = [
    ["$80K–$100K+", "monthly revenue supported at one location"],
    ["~$2M", "Q2 operation revenue"],
    ["~2×", "year-over-year growth"],
    ["95%+", "SLA compliance"],
    ["40–60+", "daily customer interactions"],
    ["80–100", "monthly CRM accounts and leads"],
    ["15–25%", "lead-conversion improvement"],
    ["4–6 hrs", "saved per week through workflow improvements"],
  ];

  return (
    <section id="about" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-white/10 pt-10">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="aster-section-label">01 — About</p>
              <p className="mt-8 max-w-xs text-xs uppercase leading-6 tracking-[0.16em] text-neutral-600">
                Revenue operations / business operations / CRM / customer success / analytics
              </p>
            </div>
            <div>
              <h2 className="max-w-6xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
                I connect <span className="text-neutral-500">revenue, operations, customer experience, and technology</span> to build clearer workflows and measurable business results.
              </h2>
              <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6 text-base leading-8 text-neutral-400 md:text-lg">
                  <p>
                    Operations and CRM professional specializing in Revenue Operations, Sales Operations, Business Operations, CRM administration, Customer Success, reporting, and process improvement. My experience spans home services, hospitality, real estate, and residential construction across Canada and Colombia.
                  </p>
                  <p>
                    I have supported commercial operations, customer pipelines, bookings, contracts, estimates, dispatch, field teams, procurement, payments, and reporting. I am open to opportunities across Canadian, Colombian, and international markets, including fully remote and cross-border arrangements.
                  </p>
                  <p>
                    I also build independent software and business tools, applying hands-on learning in frontend and backend development, databases, APIs, testing, deployment, AI-assisted research, and workflow automation.
                  </p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">Platforms & capabilities</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["HubSpot", "TripleSeat", "OpenTable", "AccuLynx", "ServiceTitan", "Quo", "Airtable", "Excel", "Google Workspace", "SQL", "Power BI", "CRM Administration", "Pipeline Operations", "Reporting", "Data Analysis", "Workflow Optimization"].map((skill) => (
                      <span key={skill} className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-white/30 hover:text-neutral-200">{skill}</span>
                    ))}
                  </div>
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">Credentials & languages</p>
                    <p className="mt-4 text-sm leading-6 text-neutral-400">5 HubSpot Academy certifications: Sales Hub, Service Hub, Inbound, Inbound Sales, and Reporting; plus an Advanced SQL credential.</p>
                    <p className="mt-3 text-sm leading-6 text-neutral-400">English and Spanish bilingual · Basic French</p>
                    <p className="mt-3 text-sm leading-6 text-neutral-400">Canadian and Colombian citizen · Open to remote and cross-border opportunities</p>
                  </div>
                </div>
              </div>
              <div className="mt-14 border-y border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {metrics.map(([number, label]) => (
                    <div key={label} className="border-b border-r border-white/10 p-5 md:p-7">
                      <p className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">{number}</p>
                      <p className="mt-2 text-xs leading-5 text-neutral-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-14 grid border-y border-white/10 md:grid-cols-2">
                {valueProps.map((item, index) => (
                  <div key={item.number} className={`group p-7 md:p-8 ${index % 2 === 0 ? "md:border-r md:border-white/10" : ""} ${index < 2 ? "border-b border-white/10" : ""}`}>
                    <div className="flex items-start justify-between gap-6">
                      <span className="text-[10px] tracking-[0.18em] text-neutral-600">{item.number}</span>
                      <span className="text-neutral-700 transition group-hover:text-neutral-400">↗</span>
                    </div>
                    <h3 className="mt-10 text-xl font-medium tracking-[-0.02em] text-white">{item.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
