import { useState } from 'react'

const Arrow = ({ down = false }: { down?: boolean }) => (
  <svg
    aria-hidden="true"
    className={down ? 'arrow arrow-down' : 'arrow'}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const services = [
  {
    number: '01',
    title: 'Operating model & roles',
    copy: 'Clarify who owns what, how decisions move, and where accountability sits as the business grows.',
    detail: 'Role design · Decision rights · Team cadence',
  },
  {
    number: '02',
    title: 'Workflow redesign',
    copy: 'Untangle the processes that have accumulated over time and rebuild them around the way work actually happens.',
    detail: 'Process mapping · Handoffs · Standard ways of working',
  },
  {
    number: '03',
    title: 'Tools & information',
    copy: 'Make your systems earn their place. We simplify the toolset and create reliable paths for information.',
    detail: 'Systems review · Tool selection · Documentation',
  },
  {
    number: '04',
    title: 'Implementation support',
    copy: 'Turn recommendations into everyday practice with practical planning, facilitation and hands-on support.',
    detail: 'Change planning · Team sessions · Embedded delivery',
  },
]

const steps = [
  ['01', 'Understand the work', 'We listen, observe and trace how work moves—not how the handbook says it should.'],
  ['02', 'Find the friction', 'Together, we identify the few constraints creating disproportionate drag.'],
  ['03', 'Design the practical answer', 'We build changes your team can understand, own and maintain.'],
  ['04', 'Make it stick', 'We support the shift into day-to-day work and leave useful tools behind.'],
]

export function MorrowSite() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Morrow Operations Advisory home">
          <span className="brand-mark">M</span>
          <span>Morrow<small>Operations Advisory</small></span>
        </a>
        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#about" onClick={closeMenu}>Who we help</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Start a conversation <Arrow /></a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker eyebrow">Independent operations consultancy · Bristol / UK-wide</div>
        <h1>Better operations.<br /><em>Less operational</em><br />theatre.</h1>
        <div className="hero-bottom">
          <p>
            We help growing businesses replace improvised processes with clearer,
            calmer ways of working—without burying the team in bureaucracy.
          </p>
          <a className="text-link" href="#services">See how we help <Arrow down /></a>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1623303647440-967d26b95b47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000"
            alt="A team working together around a table"
          />
          <div className="image-index">
            <span>In practice / 01</span>
            <strong>See the work<br />as it happens.</strong>
          </div>
          <div className="visual-stamp" aria-hidden="true">
            <span>MOA</span>
            <small>Observe<br />Simplify<br />Embed</small>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Common signs of operational strain">
        <div className="signal-intro">
          <span>When to call</span>
          <strong>Four signs the operating model is falling behind</strong>
        </div>
        <div className="signal"><span>01</span><p>Decisions collect at the top</p></div>
        <div className="signal"><span>02</span><p>Work depends on who knows whom</p></div>
        <div className="signal"><span>03</span><p>Tools multiply, visibility doesn’t</p></div>
        <div className="signal"><span>04</span><p>Busy teams keep revisiting the same problems</p></div>
      </section>

      <section className="editorial-intro" id="about">
        <figure className="office-figure">
          <img
            src="https://images.unsplash.com/photo-1503423571797-2d2bb372094a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400"
            alt="A quiet studio workspace with a long wooden table"
          />
          <div className="figure-inset">
            <img
              src="https://images.unsplash.com/photo-1620206299315-db98c1578420?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=600"
              alt="Hands documenting a workshop on paper"
            />
            <span>From observation<br />to a usable system</span>
          </div>
          <figcaption>
            <span>Good operations are often invisible.</span>
            <span>Photography: Pawel Chu / Unsplash</span>
          </figcaption>
        </figure>
        <div className="intro-copy">
          <span className="eyebrow">The work behind the work</span>
          <h2>Growth exposes the joins.</h2>
          <p className="lead">
            The habits that got a business moving rarely support its next chapter.
            Decisions slow down. Knowledge sits with a few people. Simple work
            gathers extra steps.
          </p>
          <p>
            Morrow works with leadership teams to understand where the strain is
            coming from, then makes thoughtful, proportionate changes to the
            operating system of the business.
          </p>
          <p>
            No off-the-shelf playbooks. No transformation programme for its own
            sake. Just useful structures that fit the people and the work.
          </p>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div className="section-label">
            <span className="eyebrow">What we do</span>
            <span className="section-code">MOA / Capability map / 2025</span>
          </div>
          <h2>Practical help, where the work gets stuck.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <div>
                <p>{service.copy}</p>
                <span className="service-detail">{service.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="fit-section">
        <div className="fit-title">
          <span className="eyebrow">A good fit</span>
          <h2>Built for businesses in the complicated middle.</h2>
        </div>
        <div className="fit-body">
          <p>
            Our clients are typically founder-led or independently owned businesses
            with 20–200 people. They have momentum, capable teams and a sense that
            the way they operate hasn’t quite kept pace.
          </p>
          <ul>
            <li><span>01</span>Professional and creative services</li>
            <li><span>02</span>Specialist product and technology firms</li>
            <li><span>03</span>Multi-site and operational businesses</li>
          </ul>
        </div>
        <aside className="fit-aside">
          <span>Common starting points</span>
          <p>“Everything still comes through me.”</p>
          <p>“We have the tools, but not the system.”</p>
          <p>“We’ve grown, but our processes haven’t.”</p>
          <div className="aside-mark" aria-hidden="true">
            <span>20</span>
            <span>—</span>
            <span>200</span>
            <small>people / typical client scale</small>
          </div>
        </aside>
      </section>

      <section className="approach" id="approach">
        <div className="approach-head">
          <span className="eyebrow">How we work</span>
          <h2>Close enough to see the detail.<br />Far enough away to question it.</h2>
        </div>
        <div className="steps">
          {steps.map(([number, title, copy]) => (
            <article className="step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="engagement-note">
          Engagements range from a focused four-week diagnostic to several months
          of embedded support. We scope the work around the problem—not a preset package.
        </p>
      </section>

      <section className="principle">
        <p>Our principle</p>
        <blockquote>
          “The best process is the lightest one that creates clarity, protects
          quality and helps people do good work.”
        </blockquote>
        <span>Morrow Operations Advisory</span>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <span className="eyebrow">Start a conversation</span>
          <h2>Tell us what feels harder than it should.</h2>
        </div>
        <div className="contact-action">
          <p>
            A useful first call is 30 minutes. We’ll ask a few direct questions,
            share an initial point of view and decide whether there’s a sensible next step.
          </p>
          <a href="mailto:hello@morrowoperations.co.uk">
            hello@morrowoperations.co.uk <Arrow />
          </a>
          <span>No sales deck. No obligation.</span>
        </div>
      </section>

      <footer>
        <a className="brand brand-light" href="#top">
          <span className="brand-mark">M</span>
          <span>Morrow<small>Operations Advisory</small></span>
        </a>
        <p>Independent operations advice for growing businesses.</p>
        <div className="footer-meta">
          <span>Bristol, United Kingdom</span>
          <span>© 2025 Morrow Operations Advisory</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}
