import { GvmPageData } from './gvm-content';
import { SiteFooter, SiteHeader } from './site-chrome';

const campusContacts = [
  ['IASE Deemed University', '01564-223054'], ['Engineering Department', '01564-222248'], ['Management Department', '01564-222248'], ['Biotechnology Department', '01564-222204'], ['Physiotherapy Department', '01564-275536'], ['Veterinary Department', '01564-275542'], ['Mahila Mahavidyalaya', '01564-224658'], ['Guest House', '01564-223982'], ['Basic Teachers’ Training College', '01564-220056'], ['Ayurveda Vishwa Bharati', '01564-220176'], ['Panchkaram Department', '01564-225454'], ['Krishi Vigyan Kendra', '01564-221624'], ['Basic Higher Secondary School', '01564-220277'], ['SSRD Higher Secondary School', '01564-220209'], ['National Open School', '01564-225535'], ['Meera Niketan (Girls HS School)', '01564-220261'], ['Balbari School', '01564-220265'], ['Pratap Hostel', '01564-225323'], ['Durgawati Hostel', '01564-220420'], ['Bajaj Hostel', '01564-275748'], ['Nahta Hostel', '01564-224304'], ['Bal Grih, Subh-Seva Ashram', '01564-223641'], ['GVM Sah-Upbhogta Bhandar', '01564-220676'], ['Gaay Seva Sadan', '01564-220676'], ['Seth Budhmal Dugar College', '01564-220027'], ['Jawahar Navodya School', '01564-220010'], ['Aaapani Yojna', '01564-222056'], ['Panchayat Samiti', '01564-220050'], ['Sah. Dugadh Avsheetan Kendra', '01564-220192'], ['Jaldaay Department', '01564-220275'], ['Vidyut Mandal', '01564-220028'], ['GVM Post-office and Telegram', '01564-220257'], ['Oriental Bank of Commerce (OBC)', '01564-220947'],
];

function ContactHub() {
  return <>
    <section className="contact-offices"><div className="shell">
      <div className="contact-heading"><span className="mono">CONNECT WITH US TODAY</span><h2>Every conversation<br/><em>starts here.</em></h2></div>
      <div className="office-grid">
        <article className="office-card office-central"><span className="mono">01 · CENTRAL OFFICE</span><h3>Gandhi Vidya Mandir</h3><a href="tel:+911564220025">01564-220025</a><a href="tel:+911564223642">01564-223642</a><a href="tel:+911564223054">01564-223054</a><p>Gandhi Vidya Mandir,<br/>Sardarshahr, Churu – 331401,<br/>Rajasthan, India.</p><a className="office-email" href="mailto:gvmcentraloffice@gmail.com">gvmcentraloffice@gmail.com ↗</a></article>
        <article className="office-card"><span className="mono">02 · REGIONAL OFFICE (EAST)</span><h3>Howrah Office</h3><a href="tel:+913326413465">033-26413465</a><a href="tel:+91332641499">033-2641499</a><p>5P, Mahatma Gandhi Road,<br/>Howrah Maidan, Howrah – 711101,<br/>West Bengal, India.</p></article>
      </div>
    </div></section>
    <section className="contact-directory"><div className="shell"><div className="directory-heading"><span className="mono">GVM CAMPUS</span><h2>Important contacts</h2><p>Reach the right academic, residential or service department directly.</p></div><div className="directory-grid">{campusContacts.map(([name, phone], index) => <a href={`tel:+91${phone.replace(/[^0-9]/g, '')}`} key={name}><span className="mono">{String(index + 1).padStart(2, '0')}</span><strong>{name}</strong><b>{phone}</b></a>)}</div></div></section>
  </>;
}
export function GvmPage({ page }: { page: GvmPageData }) {
  const isAbout = page.kicker === 'ABOUT GVM';
  const isContact = page.kicker === 'CONTACT';
  const isGaushala = page.kicker === 'GAU SHALA';

  return (
    <main className="gvm-site inner-page">
      <SiteHeader />

      <section className="gvm-page-hero inner-hero">
        {isGaushala ? (
          <video autoPlay loop muted playsInline poster={page.image} aria-label="Gau Shala cattle care">
            <source src="/gaushala-hero.mp4" type="video/mp4" />
          </video>
        ) : <img src={page.image} alt="Gandhi Vidya Mandir campus activity" />}
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

      {isContact ? <ContactHub /> : <section className="gvm-page-body inner-page-body">
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
      </section>}

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