export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="pills">
              <span className="pill">Technical</span>
              <span className="pill">Interpersonal</span>
              <span className="pill">Entrepreneurship</span>
              <span className="pill">Result-Oriented</span>
            </div>
            <h1>
              Be industry-ready: Learn, build, and ship with Upskill Foundarly
            </h1>
            <p>
              A modern, outcomes-first learning experience that blends hands-on technical mastery,
              high-agency interpersonal skills, and real entrepreneurship practice — so you graduate
              with proof-of-work portfolios, interviews, and prototypes.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn" href="#apply">Apply Now</a>
              <a className="btn secondary" href="#curriculum">Explore Curriculum</a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="num">12 weeks</div>
                <div className="label">Intensive, cohort-based sprints</div>
              </div>
              <div className="stat">
                <div className="num">3 pillars</div>
                <div className="label">Tech · Interpersonal · Entrepreneurship</div>
              </div>
              <div className="stat">
                <div className="num">100% POA</div>
                <div className="label">Proof-of-Ability via portfolio</div>
              </div>
            </div>
          </div>
          <div>
            <div className="hero-card">
              <div className="title">Outcome Engine</div>
              <ul className="results-list">
                <li><span className="check">✓</span> Build 3+ real projects with users</li>
                <li><span className="check">✓</span> Interview-ready case narratives</li>
                <li><span className="check">✓</span> Launch a prototype or micro-venture</li>
                <li><span className="check">✓</span> Career and founder mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="section">
        <div className="container">
          <h2>The 3-Pillar Curriculum</h2>
          <p className="lead">
            Integrated, practice-first learning tracks designed to compound your capabilities.
          </p>
          <div className="grid-3">
            <div className="card">
              <h3>Technical Mastery</h3>
              <p>
                Modern stacks, AI tooling, system design, product engineering. Build ship-ready
                features and end-to-end apps. Code reviews and architecture critiques.
              </p>
            </div>
            <div className="card">
              <h3>Interpersonal Excellence</h3>
              <p>
                Communication, negotiation, leadership, and collaboration. Practice with feedback,
                async writing drills, stakeholder mapping, and real standups.
              </p>
            </div>
            <div className="card">
              <h3>Entrepreneurial Execution</h3>
              <p>
                Problem discovery, validation, lean experiments, GTM. Ship prototypes, iterate with
                metrics, and pitch with data-backed narratives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section results">
        <div className="container results-grid">
          <div>
            <h2>Relentlessly result-oriented</h2>
            <p className="lead">
              We measure what matters: tangible outcomes that compound your career capital.
            </p>
            <ul className="results-list">
              <li><span className="check">✓</span> Portfolio artifacts reviewed by industry engineers</li>
              <li><span className="check">✓</span> Mock loops and partner interviews</li>
              <li><span className="check">✓</span> Prototype shipped to real users</li>
              <li><span className="check">✓</span> Measurable skill deltas, pre/post assessments</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>What you’ll walk away with</h3>
            <ul>
              <li>3+ shipped projects with write-ups</li>
              <li>Resume and LinkedIn revamp with proof links</li>
              <li>Foundational systems diagrams, RFCs, PRs</li>
              <li>Pitch deck and prototype repository</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2>What learners and mentors say</h2>
          <div className="testi-grid">
            <div className="testi">
              “The portfolio-first approach got me interviews in weeks, not months.”
              <div className="author">— Aisha, SWE</div>
            </div>
            <div className="testi">
              “The interpersonal drills made me a far better collaborator.”
              <div className="author">— Ken, PM</div>
            </div>
            <div className="testi">
              “Shipping a prototype taught me more than 3 courses combined.”
              <div className="author">— Maria, Founder</div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq">
        <div className="container" style={{ display: 'grid', gap: 12 }}>
          <h2>FAQ</h2>
          <div className="faq-item">
            <strong>Who is this for?</strong>
            <div>
              Ambitious students and professionals who want to accelerate outcomes with proof-of-work.
            </div>
          </div>
          <div className="faq-item">
            <strong>How much time is required?</strong>
            <div>About 8–12 hours/week across lessons, projects, and mentorship.</div>
          </div>
          <div className="faq-item">
            <strong>Is there a certificate?</strong>
            <div>
              We prioritize demonstrable outputs over certificates. You’ll graduate with evidence that
              employers and investors value.
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to get results?</h2>
          <p className="lead">Join the next cohort — limited spots.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn" href="mailto:admissions@foundarly.com?subject=Upskill%20Foundarly%20—%20Application">Apply via Email</a>
            <a className="btn secondary" href="#curriculum">See curriculum</a>
          </div>
        </div>
      </section>
    </main>
  );
}
