function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-sm font-medium tracking-[0.35em] text-slate-400">
          CONTACT
        </p>

        <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Let's build something useful.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Interested in working together, discussing a project, or simply
          connecting? I'd be happy to hear from you.
        </p>

        <div className="mt-12">
          <a
            href="mailto:your@email.com"
            className="inline-block rounded-lg border border-slate-700 px-8 py-4 text-lg font-medium transition hover:border-slate-500 hover:bg-slate-900"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;