import Image from "next/image";

const resume = "/resume.pdf";
const email = "Lerabari65@gmail.com";
const projects = [
  {
    title: "Marketplace checkout",
    stack: "TypeScript · Stripe · Prisma · PostgreSQL · Playwright",
    problem: "Buyers needed one checkout for saved cards and alternative payment methods, with consistent pricing and safeguards against charging for an item already sold.",
    contribution: "I unified the checkout form and the server-side purchase flow. The API claims items before charging, and payment reconciliation checks the amount Stripe actually captured against the expected charge.",
    outcome: "The changes merged with unit coverage for payment reuse and local browser coverage for saved-card and alternative checkout paths.",
  },
  {
    title: "Prepayment and ledger consistency",
    stack: "Stripe · PostgreSQL · SQL · Prisma · Vitest",
    problem: "Prepayment eligibility had to stay consistent when deposits settled or a bank returned funds.",
    contribution: "I added a funding marker and a SQL backfill based on settled ledger entries. For returns, I updated the ledger and funding status in the same transaction under a balance lock.",
    outcome: "The change merged with regression coverage for replayed returns. Local Stripe test-mode checks exercised deposits and reversals.",
  },
  {
    title: "Scheduled notification reliability",
    stack: "Node.js · PostgreSQL · Prisma · Vitest",
    problem: "A failed payment-method lookup could repeat notifications and stall processing for subsequent records.",
    contribution: "I traced the failure to the scheduled job, added a conditional database update to claim each record before sending, and made the lookup optional with a fallback.",
    outcome: "The fix merged with regression tests. A local PostgreSQL run showed the job could continue through the lookup failure and avoid repeat sends on a second pass.",
  },
  {
    title: "Production error monitoring and triage",
    stack: "Sentry · GitHub Actions · Claude Code · Vitest",
    problem: "API failures were missing from operational reporting, and duplicate or non-production alerts made higher-priority issues harder to identify.",
    contribution: "I added API error reporting, implemented severity rules and deduplication, and filtered alerts to production. I added a GitHub Actions workflow that uses Claude Code to review Sentry issues against the codebase.",
    outcome: "The changes merged with automated coverage for severity, alert filtering, and Sentry polling. The workflow supports a manual dry run.",
  },
  {
    title: "Marketplace catalog design",
    problem: "A single record represented the product, its listing, and the order line. That model made it difficult to support both one-of-a-kind items and stocked inventory.",
    contribution: "I contribute to the catalog redesign, which separates product classification from how items are listed and recorded on orders. The design accounts for existing listing and checkout workflows.",
  },
  {
    title: "Seller team onboarding",
    stack: "React · TypeScript · Prisma · PostgreSQL · Vitest",
    problem: "Marketplace sellers needed to invite teammates and manage access from their own dashboard.",
    contribution: "I implemented the settings UI, invitation and acceptance APIs, and the relational schema. I used unique constraints to prevent duplicate invitations and transactional updates to apply acceptance and membership changes together.",
    outcome: "The feature merged with unit tests for permissions and invitation outcomes and a local headless onboarding walkthrough.",
  },
];

export default function Home() {
  return (
    <>
      <a href="#content" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#top" className="wordmark">Lera Suanu</a>
          <nav aria-label="Main navigation">
            <a href="#work">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main id="content" tabIndex={-1}>
        <section id="top" className="shell hero">
          <div>
            <p className="eyebrow">Software engineer</p>
            <h1>I’m Lera Suanu.</h1>
            <p className="hero-lead">I build and support full-stack software, from checkout and database changes to automated regression tests.</p>
            <p className="hero-detail">3 years of total experience, including freelance work. M.S. in Computer Science.</p>
            <div className="actions">
              <a className="button primary" href={resume}>View Resume</a>
            </div>
          </div>
          <Image className="portrait" sizes="(min-width: 800px) 320px, 70vw"
            src="/lera-portrait.jpg" alt="Portrait of Lera Suanu" width={1254} height={1254} preload />
        </section>

        <section id="work" className="band">
          <div className="shell section">
            <p className="eyebrow">Professional projects · ReefnBid</p>
            <h2>Selected engineering work</h2>
            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.title} className="project">
                  <h3>{project.title}</h3>
                  {project.stack && <p className="stack">{project.stack}</p>}
                  <p>{project.problem}</p>
                  <p>{project.contribution}</p>
                  {project.outcome && <p>{project.outcome}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="shell section experience">
          <div><h2>Experience</h2></div>
          <div className="experience-list">
            <article>
              <p className="eyebrow">2026 – Present</p>
              <h3>Software Engineer · ReefnBid</h3>
              <p>I build and maintain marketplace features across React interfaces, Node.js APIs, and PostgreSQL. My work includes payment processing, transaction integrity, production troubleshooting, and automated testing.</p>
            </article>
            <article>
              <p className="eyebrow">2024 – 2026</p>
              <h3>Freelance Web Developer · Self-Employed</h3>
              <p>Worked directly with clients to scope and deliver responsive landing pages and a small online storefront. Managed implementation and revisions across custom-coded pages, WordPress, and Squarespace.</p>
            </article>
            <article>
              <p className="eyebrow">2024 – 2025</p>
              <h3>Technical Operations Assistant · University of Bridgeport</h3>
              <p>Supported campus technical operations, helped troubleshoot classroom computers and audiovisual systems, and coordinated access and scheduling with staff.</p>
            </article>
            <article>
              <p className="eyebrow">2021 – 2023</p>
              <h3>Programming Instructor · Dreamaker</h3>
              <p>Taught Python, algorithms, and object-oriented programming through project-based instruction.</p>
            </article>
          </div>
        </section>

        <section id="about" className="band">
          <div className="shell section experience">
            <div><h2>About</h2></div>
            <div className="experience-list">
              <article>
                <h3>Education</h3>
                <p>M.S. in Computer Science, University of Bridgeport</p>
                <p>B.S. in Computer Science &amp; Technology, Hebei University of Science &amp; Technology</p>
              </article>
              <article>
                <p className="eyebrow">Personal project</p>
                <h3>Suanara</h3>
                <p>My engineering portfolio, built with Next.js, React, TypeScript, and Tailwind CSS and hosted on Vercel.</p>
              </article>
              <article>
                <p className="eyebrow">Independent project</p>
                <h3>AWS data protection</h3>
                <p>Configured versioned S3 storage, Object Lock, lifecycle policies, and audit monitoring through Terraform, CloudTrail, and Athena.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="shell section contact-section">
          <div>
            <h2>Let’s Connect</h2>
            <p>Have a role, project, or collaboration in mind? Email me to get in touch.</p>
          </div>
          <div className="social">
            <a href={`mailto:${email}`}>Email me directly</a>
            <a href="https://github.com/leracraft">GitHub</a>
            <a href="https://linkedin.com/in/lerabari-suanu">LinkedIn</a>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="shell">Lera Suanu</div></footer>
    </>
  );
}
