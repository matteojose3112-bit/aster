function About() {
  const valueProps = [
    { number: "01", title: "Think in systems", text: "I look for the bottleneck behind the task — then design a clearer process, workflow, or system around it." },
    { number: "02", title: "Connect the dots", text: "I bridge business goals, customer needs, data, and technology instead of treating them as separate problems." },
    { number: "03", title: "Improve the workflow", text: "I use CRM systems, careful record management, process reviews, and practical digital tools to reduce friction and improve visibility." },
    { number: "04", title: "Measure what matters", text: "The goal is not more tools. It is better decisions, faster execution, stronger customer outcomes, and scalable operations." },
  ];

  return (
    <section id="about" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-white/10 pt-10">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <p className="aster-section-label">01 — About</p>
              <p className="mt-8 max-w-xs text-xs uppercase leading-6 tracking-[0.16em] text-neutral-600">
                Sales operations / customer experience / process improvement
              </p>
            </div>

            <div>
              <h2 className="max-w-6xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
                I help turn <span className="text-neutral-500">busy operations</span> into clearer workflows, stronger customer experiences, and measurable results.
              </h2>

              <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6 text-base leading-8 text-neutral-400 md:text-lg">
                  <p>
                    My experience spans hospitality, real estate, and residential roofing. I have coordinated customer relationships, sales pipelines, bookings, contracts, estimates, project schedules, procurement, payments, and CRM records across fast-moving operations.
                  </p>
                  <p>
                    I am interested in roles where organized execution, clear communication, accurate data, and continuous process improvement help teams serve customers and deliver work more effectively.
                  </p>
                </div>

                <div className="border-l border-white/10 pl-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">Core toolkit</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["HubSpot", "TripleSeat", "OpenTable", "AccuLynx", "Sales Operations", "Customer Service", "Project Coordination", "Procurement", "CRM", "Process Improvement"].map((skill) => (
                      <span key={skill} className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-white/30 hover:text-neutral-200">
                        {skill}
                      </span>
                    ))}
                  </div>
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
