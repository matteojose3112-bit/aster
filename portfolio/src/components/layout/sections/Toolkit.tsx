function Toolkit() {
  const groups = [
    { number: "01", title: "Operations", description: "Process and execution", skills: ["Process Design", "Workflow Optimization", "SOPs", "KPI Management", "Business Operations"] },
    { number: "02", title: "Revenue & Customer", description: "Growth and client systems", skills: ["RevOps", "CRM", "Customer Success", "Onboarding", "Pipeline Management", "Retention"] },
    { number: "03", title: "Data & BI", description: "Turning data into decisions", skills: ["SQL", "Power BI", "Excel", "Data Analysis", "Data Modeling", "ETL"] },
    { number: "04", title: "Automation & APIs", description: "Connecting systems and removing manual work", skills: ["REST APIs", "Webhooks", "Zapier", "Power Automate", "Python", "Workflow Automation"] },
    { number: "05", title: "Technology", description: "Building and shipping digital products", skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Git", "GitHub"] },
  ];

  return (
    <section id="toolkit" className="relative overflow-hidden px-6 py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-white/10 pt-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="aster-section-label">04 — Toolkit</p>
              <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] md:text-7xl">
                Skills that
                <br />
                <span className="text-neutral-600">ship.</span>
              </h2>
              <p className="mt-8 max-w-sm text-base leading-7 text-neutral-500">
                A practical toolkit across operations, customer experience, revenue, data, automation, and software — built around solving the problem, not collecting tools.
              </p>
            </div>

            <div className="border-t border-white/10">
              {groups.map((group) => (
                <div key={group.number} className="group border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] md:py-9">
                  <div className="grid gap-5 md:grid-cols-[52px_190px_1fr] md:items-start md:gap-6">
                    <span className="text-[10px] tracking-[0.18em] text-neutral-600">{group.number}</span>
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.02em] text-white">{group.title}</h3>
                      <p className="mt-2 text-xs text-neutral-600">{group.description}</p>
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
