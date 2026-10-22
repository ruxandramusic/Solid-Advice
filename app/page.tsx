import RecommendationCarousel from "./recommendation-carousel";

const Arrow = () => <span aria-hidden="true" className="arrow" />;

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-sidestamp" aria-hidden="true">
          <span>Field note</span>
          <p>Stay <em>close</em><br />to culture.</p>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="Solid Advice home">
            solid <span>advice</span>
          </a>
          <div className="nav-links">
            <a href="#approach">Approach</a>
            <a href="#work">Recommendations</a>
            <a href="#contact">Contact <Arrow /></a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot" /> Creative intelligence for meaningful growth</p>
            <h1>See the<br /><em>whole</em> picture.<br />Move with conviction.</h1>
            <p className="hero-intro">A boutique consulting studio helping creators and brands see things differently, find clarity in complexity, and turn vision into meaningful progress.</p>
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
          <a href="#approach" className="scroll-cue">Scroll to explore <span aria-hidden="true" className="arrow arrow-south" /></a>
        </div>
      </section>

      <section className="manifesto" id="approach">
        <p className="section-kicker">01 / The Solid Advice approach</p>
        <div className="field-note field-note-approach" aria-hidden="true">
          <span>Working note</span>
          <p>Clarity is a<br /><em>creative</em> act.</p>
        </div>
        <div className="manifesto-copy">
          <h2>Clear thinking<br />for a world that<br />isn&apos;t simple.</h2>
          <div className="manifesto-detail">
            <p><strong>To change what you build, sometimes you have to change how you see.</strong></p>
            <p>Every meaningful next move begins with a shift in perspective. Sometimes that means challenging an assumption. Sometimes it means rethinking a strategy. And sometimes it means seeing possibilities you hadn&apos;t considered before.</p>
            <p>At Solid Advice, we bring together strategic expertise, creative thinking, and a belief in what&apos;s possible to help creators and brands navigate complexity, evolve with intention, and build what&apos;s next.</p>
            <a className="text-link" href="#work">What people say <Arrow /></a>
          </div>
        </div>
      </section>

      <RecommendationCarousel />

      <section className="signal">
        <div className="signal-note">
          <span className="signal-dot" aria-hidden="true" />
          <p>Big-picture thinking. An analyst&apos;s mind. A creative&apos;s eye.</p>
        </div>
        <p className="signal-copy">The strongest direction is both <em>felt</em> and <strong>founded.</strong></p>
        <div className="signal-data" aria-label="A simple increasing growth indicator">
          <span>NOW</span><i /><i /><i /><i className="tall" /><span aria-hidden="true" className="arrow arrow-east signal-arrow" /><span>NEXT</span>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-kicker">03 / Let&apos;s begin</p>
        <div className="field-note field-note-contact" aria-hidden="true">
          <span>Open invitation</span>
          <p>Bring the<br /><em>knotty</em> question.</p>
        </div>
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
