import { GvmPageData } from './gvm-content';
import { SiteFooter, SiteHeader } from './site-chrome';

export function GvmPage({ page }: { page: GvmPageData }) {
  const isAbout = page.kicker === 'ABOUT GVM';

  return (
    <main className="gvm-site inner-page">
      <SiteHeader />

      <section className="gvm-page-hero inner-hero">
        <img src={page.image} alt="Gandhi Vidya Mandir campus activity" />
        <div className="inner-hero-copy">
          <span className="mono">{page.kicker}</span>
          <h1>{page.title}</h1>
          <p>{page.lead}</p>
        </div>
        <div className="inner-hero-index mono"><span>GVM</span><span>01 / 01</span></div>
      </section>

      <section className="inner-rail shell">
        <span className="mono">GANDHI VIDYA MANDIR</span>
        <p>Education, service and human values from Sardarshahr, Rajasthan.</p>
        <span className="mono">EST. 1950</span>
      </section>

      <section className="gvm-page-body inner-page-body">
        <div className="shell">
          {page.sections.map((section, index) => (
            <article className="gvm-content-block inner-content-block" key={section.heading}>
              <div className="block-index mono">0{index + 1}</div>
              <div className="block-title"><span className="mono">GVM · {page.kicker}</span><h2>{section.heading}</h2></div>
              <div className="block-copy">
                {section.text.map(text => <p key={text}>{text}</p>)}
                {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {isAbout && <>
        <section className="mission-section">
          <div className="shell">
            <div className="mission-heading"><span className="mono">GVM · SERVICE WITH SINCERITY</span><h2>Our mission</h2></div>
            <div className="mission-copy">
              <p>Gandhi Vidya Mandir (GVM) signifies an educational establishment that sows the seed of humanism into each human being. If I were to elaborate, ‘Gandhi Vidya’ would augment a life-style that is useful to all and benign to all; that would keep the human society held together despite diversity of views, environments and aptitudes, by an abiding bond of love; and that should, as well, be able to prevent degeneration of human society by providing equitable education of the highest order in different streams of knowledge. That would also foster rural upliftment, character building, creation of addiction-free society, self-purification, awareness for health and hygiene, “think no ill – do no ill” to anyone, and an urge to extend a helping hand in fulfilling the basic needs (of the society). I would call it GANDHI VIDYA, and its veritable sanctum would be MANDIR.</p>
              <blockquote><span>॥ कुछ ना चाहो | काम आ जाओ ॥<br/>॥ कोई और नहीं | कोई गैर नहीं ॥</span><strong>-Swami Shri Ramsharanji</strong><small>Formerly Shri Kanhaiyalal Dugar<br/>Our Founder</small></blockquote>
            </div>
          </div>
        </section>
        <section className="story section shell" id="stories">
          <div className="story-art"><div className="frame"><img className="story-photo" src="/gh.avif" alt="Swami Shri Ram Sharanji"/></div></div>
          <div className="story-copy"><div className="eyebrow mono">A LIFE THAT LIVES ON</div><h2>A life given<br/>to <em>service</em></h2><p>Inspired by Swami Shri Ramsharanji and Gandhian ideals, GVM believes learning becomes meaningful when it uplifts people, families and communities.</p><a className="pill" href="/gaushala">Explore the GVM story <span>↗</span></a></div>
        </section>
      </>}

      <section className="gvm-page-cta inner-page-cta">
        <p>GANDHI VIDYA MANDIR · SARDARSHAHR, RAJASTHAN</p>
        <h2>Education with<br/><em>social commitment.</em></h2>
        <a href="/support-us">Support our cause <b>↗</b></a>
      </section>
      <SiteFooter />
    </main>
  );
}