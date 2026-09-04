'use client';
import { useEffect } from 'react';
import { SiteFooter, SiteHeader } from './site-chrome';
export default function Home() {
 useEffect(()=>{
  const nodes=document.querySelectorAll('[data-reveal]');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('is-visible')}),{threshold:.14});
  nodes.forEach(node=>observer.observe(node));
  const onScroll=()=>{
   document.querySelector('.nav')?.classList.toggle('is-small',window.scrollY>80);
   const steps=document.querySelector('.process .steps') as HTMLElement|null;
   const processCards=Array.from(document.querySelectorAll('.process .step')) as HTMLElement[];
   if(steps&&processCards.length){
    const rect=steps.getBoundingClientRect();
    const travel=Math.max(1,steps.offsetHeight-innerHeight);
    const progress=Math.max(0,Math.min(1,-rect.top/travel));
    const starts=[.03,.43,.82],ends=[.20,.60,.97];
    const release=Math.max(0,Math.min(1,(progress-.995)/.005));
    processCards.forEach((card,index)=>{
     const raw=Math.max(0,Math.min(1,(progress-starts[index])/(ends[index]-starts[index])));
     const eased=1-Math.pow(1-raw,3);
     const enterY=(1-eased)*110;
     const releaseY=release*115;
     card.style.opacity=String(raw);
     card.style.transform='translate3d(0,calc('+enterY+'vh - '+releaseY+'vh),0) rotate(0deg) scale(1)';
    });
   }
   const deck=document.querySelector('.feature-deck') as HTMLElement|null;
   const cards=Array.from(document.querySelectorAll('.deck-card')) as HTMLElement[];
   if(!deck||!cards.length)return;
   const travel=Math.max(1,deck.offsetHeight-innerHeight);
   const progress=Math.max(0,Math.min(1,(scrollY-deck.offsetTop)/travel));
   const starts=[.02,.34,.66],ends=[.25,.57,.89],finalX=[-82,0,82],finalY=[22,0,28],finalR=[-7,0,6];
   cards.forEach((card,index)=>{const raw=Math.max(0,Math.min(1,(progress-starts[index])/(ends[index]-starts[index])));const eased=1-Math.pow(1-raw,3);const y=140*(1-eased)+finalY[index]*eased;const x=finalX[index]*eased;const rotation=(index===0?-15:index===1?10:-9)*(1-eased)+finalR[index]*eased;card.style.opacity=String(raw);card.style.transform=`translate3d(${x}px,${y}px,0) rotate(${rotation}deg) scale(${.9+.1*eased})`});
  };
  addEventListener('scroll',onScroll,{passive:true}); onScroll();
  return()=>{observer.disconnect();removeEventListener('scroll',onScroll)};
 },[]);
 return <main><section className="hero" id="home">
  <video className="hero-media" autoPlay muted loop playsInline poster="https://cdn.prod.website-files.com/67890d3b1a9365a1173c954e/68414b36c5bc5cd43e314e77_Videoframe.webp"><source src="https://player.vimeo.com/progressive_redirect/playback/1093047624/rendition/720p/file.mp4?loc=external&log_user=0&signature=0cd224625af390868dad10388d9ee1554824439a5e54f93b59aa7f2a9eae41f5" type="video/mp4"/></video><div className="hero-shade"/>
  <SiteHeader />
  <div className="hero-copy shell"><div className="art-caption mono"><span>SWAMI SHRI RAM SHARANJI</span><span>1922–2022</span></div><h1>Gandhi Vidya<br/><em>Mandir (GVM)</em></h1><div className="hero-bottom"><p>Want to sell a painting or collection? You can, with the respect it deserves. PieterKoopt® keeps the painting and its story alive.</p><a className="pill light" href="#offer">Discover GVM <span>↗</span></a></div></div>
  <div className="scroll-cue mono">SCROLL TO DISCOVER <span>↓</span></div>
 </section><section data-reveal className="intro section shell centenary" id="about">
  <div className="eyebrow mono">OUR FOUNDER · GVM</div>
  <div className="founder-grid">
    <figure className="founder-media">
      <img src="/gvm-campus-aerial.jpg" alt="Gandhi Vidya Mandir aerial campus" />
      <figcaption className="mono">GANDHI VIDYA MANDIR · SARDARSHAHR</figcaption>
    </figure>
    <div className="founder-copy">
      <span className="mono">A LIFE OF SERVICE</span>
      <h2>Swami Shri<br />Ram Sharanji<br /><em>1922–2022</em></h2>
      <p>11th Feb 2022 marks the Birth Centenary of an Icon - Late Swami Shri Ram Sharanji (Formerly Shri Kanhaiyalalji Dugar). Swamiji has inspired generations of families of Sardarshahr, Churu, Rajasthan. Born and brought up in the erstwhile princely State of Bikaner, Shri Kanhaiyalal Dugar was spiritually inclined since his childhood. He devoted his entire life towards giving back to society. He took it a step further by leaving his luxurious house in Rajasthan to set up his dream charity project.</p>
      <a className="text-link mono" href="/about">READ MORE ABOUT GVM <span>↗</span></a>
    </div>
  </div>
</section>
<section className="feature-deck"><div className="shell deck-grid"><div className="deck-copy"><span className="mono">GVM VALUES</span><h2>Education with<br/><em>human purpose</em></h2><p>Scroll to reveal the foundations of Gandhi Vidya Mandir.</p></div><div className="deck-stage"><article className="deck-card card-one"><span className="mono">01</span><h3>KNOWLEDGE</h3><p>Learning from pre-primary school to doctoral study.</p></article><article className="deck-card card-two"><span className="mono">02</span><h3>COMPASSION IN ACTION</h3><p>Care for children, communities and animals with dignity.</p></article><article className="deck-card card-three"><span className="mono">03</span><h3>SERVICE WITH SINCERITY</h3><p>Rural development, health and education for society.</p></article></div><div className="deck-progress"><i/><i/><i/></div></div></section>
<section data-reveal className="gvm-overview"><div className="shell overview-grid"><article><span>01</span><h3>Introduction to GVM</h3><p>GVM was founded in 1950, on a 1200-acre piece of land, on one of the harshest and most backward terrains. Acutely prone to droughts, heat and cold waves, epidemics and other travesties of nature, GVM has striven to alleviate the acute backwardness through various permanent and adhoc programmes of education, culture, livelihood, health and hygiene schemes etc.</p><a href="/about">Read more <b>↗</b></a></article><article><span>02</span><h3>Our vision</h3><p>The importance of ethics and values too cannot be disregarded; otherwise a student would become a rudderless ship. In order to meet the manifold changes and challenges in the emotional maladies confronting the society at large, the institutions of higher education must set a mind-frame consciously ingrained in the humanistic values.</p><a href="/about">Read more <b>↗</b></a></article><article><span>03</span><h3>Essence of GVM</h3><p>GVM has had a glorious past. It has grown from strength-to-strength and its 50 years history is a saga of strides, struggles and success. “Service with Sincerity” is our watchword and the motto is “Gyan-bhanur-bhasatam” - “May the Sun of Knowledge Shine”.</p><a href="/about">Read more <b>↗</b></a></article><article><span>04</span><h3>Our inspirations</h3><p>Gandhi Vidya Mandir (GVM), founded in 1950 as a sequel to its founder’s dedication to the cause of Mahatma Gandhi whose assassination spurred a revolution in his heart and soul. His name was Shri Kanhaiyalal Dugar. Born and brought up in Sardarshahr in the erstwhile princely State of Bikaner in a very distinguished and wealthy family, yet, Shri Kanhaiyalal Dugar was spiritually inclined since his childhood.</p><a href="/about">Read more <b>↗</b></a></article></div></section>


<section data-reveal className="process section" id="how"><div className="shell"><div className="steps"><div className="step-stage"><article className="step"><div className="step-copy"><span className="mono">01</span><h3>Learn and grow</h3><p>Schools, higher education, research, hostels and libraries help learners build their futures.</p></div><div className="step-visual">⌁</div></article><article data-reveal className="step sage"><div className="step-copy"><span className="mono">02</span><h3>Serve communities</h3><p>Health camps, medical services, literacy and vocational programmes reach beyond the campus.</p></div><div className="step-visual">◎</div></article><article data-reveal className="step clay"><div className="step-copy"><span className="mono">03</span><h3>Care with dignity</h3><p>Bal Griha, Gau Shala and social-welfare homes put compassion into daily practice.</p></div><div className="step-visual">↗</div></article></div></div></div></section>
<section data-reveal className="heritage-gallery"><div className="shell"><div className="gallery-heading"><div><span className="mono">GVM ARCHIVES</span><h2>Moments that<br/><em>shape a legacy.</em></h2></div><div className="gallery-side"><p>Historic photographs from Gandhi Vidya Mandir, preserving generations of learning, service and community.</p><div className="gallery-controls"><button type="button" aria-label="Previous gallery images" onClick={() => document.querySelector<HTMLElement>('.gallery-grid')?.scrollBy({ left: -window.innerWidth * .72, behavior: 'smooth' })}>←</button><button type="button" aria-label="Next gallery images" onClick={() => document.querySelector<HTMLElement>('.gallery-grid')?.scrollBy({ left: window.innerWidth * .72, behavior: 'smooth' })}>→</button></div></div></div><div className="gallery-grid"><figure className="gallery-item gallery-large"><img loading="lazy" src="https://static.wixstatic.com/media/944c0d_0403308400a84f20abe120675d7628bf~mv2.jpg/v1/fill/w_1100,h_900,al_c,q_85,usm_0.66_1.00_0.01/944c0d_0403308400a84f20abe120675d7628bf~mv2.jpg" alt="Historic GVM inauguration"/></figure><figure className="gallery-item"><img loading="lazy" src="https://static.wixstatic.com/media/944c0d_cf80327a884245e59b925c755b5cb46b~mv2.jpg/v1/fill/w_700,h_650,al_c,q_85,usm_0.66_1.00_0.01/944c0d_cf80327a884245e59b925c755b5cb46b~mv2.jpg" alt="GVM archival gathering"/></figure><figure className="gallery-item"><img loading="lazy" src="https://static.wixstatic.com/media/944c0d_7fa5d0a8508a47798ce27e74d2148fcd~mv2.jpg/v1/fill/w_700,h_650,al_c,q_85,usm_0.66_1.00_0.01/944c0d_7fa5d0a8508a47798ce27e74d2148fcd~mv2.jpg" alt="GVM service event"/></figure><figure className="gallery-item"><img loading="lazy" src="https://static.wixstatic.com/media/944c0d_e3255065f17f451a98424dd7bf19ab29~mv2.jpg/v1/fill/w_700,h_650,al_c,q_85,usm_0.66_1.00_0.01/944c0d_e3255065f17f451a98424dd7bf19ab29~mv2.jpg" alt="GVM archival ceremony"/></figure><figure className="gallery-item"><img loading="lazy" src="https://static.wixstatic.com/media/944c0d_4890e3aee88a4580a49f907fafa8582a~mv2.jpg/v1/fill/w_700,h_650,al_c,q_85,usm_0.66_1.00_0.01/944c0d_4890e3aee88a4580a49f907fafa8582a~mv2.jpg" alt="Historic GVM visit"/></figure><figure className="gallery-item"><img loading="lazy" src="https://static.wixstatic.com/media/944c0d_9f211daca4814c61b761c843745aa403~mv2.jpg/v1/fill/w_700,h_650,al_c,q_85,usm_0.66_1.00_0.01/944c0d_9f211daca4814c61b761c843745aa403~mv2.jpg" alt="GVM community moment"/></figure><figure className="gallery-item"><img loading="lazy" src="https://static.wixstatic.com/media/944c0d_9f2c6473462048d4a4ea1b34aa2dd5f4~mv2.jpg/v1/fill/w_700,h_650,al_c,q_85,usm_0.66_1.00_0.01/944c0d_9f2c6473462048d4a4ea1b34aa2dd5f4~mv2.jpg" alt="GVM archival photograph"/></figure><figure className="gallery-item"><img loading="lazy" src="https://static.wixstatic.com/media/944c0d_b012a1c22c40469aa476372ca64119bd~mv2.jpg/v1/fill/w_700,h_650,al_c,q_85,usm_0.66_1.00_0.01/944c0d_b012a1c22c40469aa476372ca64119bd~mv2.jpg" alt="GVM presentation"/></figure><figure className="gallery-item"><img loading="lazy" src="https://static.wixstatic.com/media/944c0d_c6f8f47d6e164c5f9ec930681df942c3~mv2.jpg/v1/fill/w_700,h_650,al_c,q_85,usm_0.66_1.00_0.01/944c0d_c6f8f47d6e164c5f9ec930681df942c3~mv2.jpg" alt="GVM historical gathering"/></figure><figure className="gallery-item"><img loading="lazy" src="https://static.wixstatic.com/media/944c0d_9b6dba92c96e428a844ef243a21525c6~mv2.jpg/v1/fill/w_700,h_650,al_c,q_85,usm_0.66_1.00_0.01/944c0d_9b6dba92c96e428a844ef243a21525c6~mv2.jpg" alt="GVM heritage moment"/></figure></div></div></section>
<section data-reveal className="closing section" id="offer"><div className="shell closing-inner"><div><div className="eyebrow mono">SUPPORT OUR CAUSE</div><h2>Help education<br/><em>serve humanity.</em></h2></div><a className="circle-cta" href="/support-us">SUPPORT<br/>GVM <b>↗</b></a></div></section>
<SiteFooter />
<div className="modal" id="quote"><a className="modal-close" href="#offer">CLOSE ×</a><div className="modal-card"><span className="mono">FREE & WITHOUT OBLIGATION</span><h2>Tell us about<br/><em>your painting</em></h2><p>An art specialist will contact you within 48 hours.</p><form><input required placeholder="Your name"/><input required type="email" placeholder="Email address"/><textarea required placeholder="Artist, dimensions, history..."/><button className="pill light">Request offer <span>↗</span></button></form></div></div></main>
}







