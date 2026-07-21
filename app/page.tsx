const Arrow = () => <span aria-hidden="true" className="arrow" />;

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="Solid Advice home">
            solid <span>advice</span>
          </a>
          <div className="nav-links">
            <a href="#approach">Approach</a>
            <a href="#work">Ways to work</a>
            <a href="#contact">Contact <Arrow /></a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot" /> Creative intelligence for meaningful growth</p>
            <h1>See the<br /><em>whole</em> picture.<br />Move with conviction.</h1>
            <p className="hero-intro">Solid Advice is a boutique consulting studio for people and brands ready to make their next move count.</p>
            <a className="button button-dark" href="#contact">Start a conversation <Arrow /></a>
          </div>

          <div className="hero-art" aria-label="A compass-like diagram representing evidence, instinct, and direction">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="axis axis-one" />
            <div className="axis axis-two" />
            <div className="center-mark">+</div>
            <p className="art-label art-label-top">evidence</p>
            <p className="art-label art-label-right">instinct</p>
            <p className="art-label art-label-bottom">direction</p>
          </div>
        </div>

        <div className="hero-footer">
          <p>Strategy <span>+</span> soul. Evidence <span>+</span> instinct.</p>
          <a href="#approach" className="scroll-cue">Scroll to explore <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="manifesto" id="approach">
        <p className="section-kicker">01 / The Solid Advice approach</p>
        <div className="manifesto-copy">
          <h2>Clear thinking<br />for a world that<br />isn&apos;t simple.</h2>
          <div className="manifesto-detail">
            <p>Good advice does more than identify what&apos;s true. It makes space for what&apos;s possible.</p>
            <p>We pair the rigor of research, expertise, and data with creative conviction and a human read on where things are headed. The result is practical clarity with a point of view.</p>
            <a className="text-link" href="#work">How we help <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="principles" aria-label="Our principles">
        <article className="principle principle-red">
          <span>01</span>
          <h3>Creative<br />conviction</h3>
          <p>Bold ideas with a real point of view—not safe, interchangeable recommendations.</p>
        </article>
        <article className="principle principle-paper">
          <span>02</span>
          <h3>Grounded<br />intelligence</h3>
          <p>Expertise and evidence that turn complexity into clear, usable choices.</p>
        </article>
        <article className="principle principle-ink">
          <span>03</span>
          <h3>Human<br />guidance</h3>
          <p>Close collaboration, honest perspective, and momentum you can feel.</p>
        </article>
      </section>

      <section className="work" id="work">
        <div className="work-heading">
          <p className="section-kicker">02 / Ways to work together</p>
          <p className="work-lede">Built to meet the moment, then see beyond it.</p>
        </div>
        <div className="work-list">
          <article className="work-row">
            <p className="work-number">(01)</p>
            <div><h3>Find the signal</h3><p>Research, audience insight, positioning, and the patterns that matter most.</p></div>
            <span className="work-symbol arrow-southeast" aria-hidden="true" />
          </article>
          <article className="work-row">
            <p className="work-number">(02)</p>
            <div><h3>Shape the direction</h3><p>Strategy, brand architecture, growth priorities, and a focused plan for what&apos;s next.</p></div>
            <span className="work-symbol" aria-hidden="true" />
          </article>
          <article className="work-row">
            <p className="work-number">(03)</p>
            <div><h3>Build momentum</h3><p>Creative platforms, decision support, and senior partnership that carries the work forward.</p></div>
            <span className="work-symbol arrow-east" aria-hidden="true" />
          </article>
        </div>
      </section>

      <section className="signal">
        <div className="signal-note">
          <span className="note-mark">✳</span>
          <p>Big-picture thinking. Real-world momentum.</p>
        </div>
        <p className="signal-copy">The strongest direction is both <em>felt</em> and <strong>founded.</strong></p>
        <div className="signal-data" aria-label="A simple increasing growth indicator">
          <span>NOW</span><i /><i /><i /><i className="tall" /><span aria-hidden="true" className="arrow arrow-east signal-arrow" /><span>NEXT</span>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-kicker">03 / Let&apos;s begin</p>
        <div className="contact-grid">
          <h2>Make the next<br />move <em>count.</em></h2>
          <div className="contact-detail">
            <p>Tell us what&apos;s taking shape. We&apos;ll bring perspective, a sharp pencil, and some solid advice.</p>
            <a className="button button-light" href="mailto:hello@solidadvice.co">hello@solidadvice.co <Arrow /></a>
          </div>
        </div>
        <footer>
          <a className="wordmark" href="#top">solid <span>advice</span></a>
          <p>© {new Date().getFullYear()} Solid Advice</p>
          <a href="#top">Back to top <span aria-hidden="true" className="arrow arrow-north" /></a>
        </footer>
      </section>
    </main>
  );
}
