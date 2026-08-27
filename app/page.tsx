'use client';
import { useEffect } from 'react';
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
    const starts=[0,.28,.56],ends=[.14,.42,.70];
    const release=Math.max(0,Math.min(1,(progress-.82)/.16));
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
  <header className="nav reference-nav"><div className="nav-left"><a className="brand nav-cell logo-cell" href="#home">GANDHI VIDYA MANDIR</a><button className="nav-cell sound-cell" aria-label="Sound settings"><span/><span/><span/><span/><span/></button><a className="nav-cell lang-cell" href="#home">EN</a><a className="nav-cell whatsapp-cell" href="mailto:gvmcentraloffice@gmail.com" aria-label="Email Gandhi Vidya Mandir">✉</a></div><nav><a href="#how">ACTIVITIES</a><a href="#about">ABOUT GVM</a><a href="#stories">OUR FOUNDER</a><a href="https://www.gandhividyamandir.org/gaushala">GAU SHALA</a><a href="#contact">CONTACT</a></nav><a className="request-offer" href="https://www.gandhividyamandir.org/support-us"><span>SUPPORT US</span><b>›</b></a></header>
  <div className="hero-copy shell"><div className="art-caption mono"><span>SARDARSHAHR, CHURU — RAJASTHAN</span><span>SINCE 1950</span></div><h1>Education maketh a man.<br/><em>Service shapes humanity.</em></h1><div className="hero-bottom"><p>Gandhi Vidya Mandir is a 1,200-acre centre for education and social service, created as an oasis of learning in the Thar Desert.</p><a className="pill light" href="#about">Discover GVM <span>↗</span></a></div></div>
  <div className="scroll-cue mono">SCROLL TO DISCOVER <span>↓</span></div>
 </section><section data-reveal className="intro section shell" id="about"><div className="eyebrow mono">AN OASIS IN THE THAR DESERT</div><div className="intro-grid"><h2>Education with<br/>universal<br/><em>social commitment</em></h2><div><p>Founded in 1950 at Sardarshahr, GVM advances education, culture, livelihood, health and rural welfare through enduring programmes rooted in Gandhian values.</p><a className="text-link mono" href="https://www.gandhividyamandir.org/introduction">READ OUR INTRODUCTION <span>↗</span></a></div></div></section>
<section className="feature-deck"><div className="shell deck-grid"><div className="deck-copy"><span className="mono">WHY GANDHI VIDYA MANDIR</span><h2>Knowledge, character<br/><em>and service</em></h2><p>GVM brings education and social commitment together to help individuals, families and rural communities flourish.</p></div><div className="deck-stage"><article className="deck-card card-one"><span className="mono">01</span><h3>EDUCATION & RESEARCH</h3><p>Learning spans from pre-primary education to doctoral programmes.</p></article><article className="deck-card card-two"><span className="mono">02</span><h3>RURAL & HEALTH WELFARE</h3><p>Community programmes support health, livelihoods, literacy and dignity.</p></article><article className="deck-card card-three"><span className="mono">03</span><h3>SERVICE WITH SINCERITY</h3><p>May the Sun of Knowledge Shine.</p></article></div><div className="deck-progress"><i/><i/><i/></div></div></section>
<section data-reveal className="process section" id="how"><div className="shell"><div className="eyebrow mono">OUR MISSION</div><h2 className="process-title">Knowledge, emotion<br/><em>conduct and growth</em></h2><p className="process-lead">Education at GVM nurtures the four facets of human personality: knowledge, emotion, conduct and physical development.</p><div className="steps"><div className="step-stage"><article className="step"><div className="step-copy"><span className="mono">01</span><h3>Knowledge</h3><p>Equitable education opens opportunity from the earliest years through advanced study.</p></div><div className="step-visual">⌁</div></article><article data-reveal className="step sage"><div className="step-copy"><span className="mono">02</span><h3>Character</h3><p>Ethics, compassion and humanistic values guide learning at every step.</p></div><div className="step-visual">◎</div></article><article data-reveal className="step clay"><div className="step-copy"><span className="mono">03</span><h3>Service</h3><p>Rural upliftment, health, dignity and service connect education with society.</p></div><div className="step-visual">↗</div></article></div></div></div></section>
<section data-reveal className="story section shell" id="stories"><div className="story-art"><div className="frame"><div className="paint-stroke"/></div></div><div className="story-copy"><div className="eyebrow mono">OUR FOUNDER</div><h2>A life devoted<br/><em>to service</em></h2><p>Swami Shri Ramsharanji, formerly Shri Kanhaiyalal Dugar, devoted his life and personal wealth to education and the upliftment of people in need.</p><a className="pill" href="https://www.gandhividyamandir.org/our-inspiration">Our inspiration <span>↗</span></a></div></section>
<section data-reveal className="closing section" id="offer"><div className="shell closing-inner"><div><div className="eyebrow mono">SUPPORT OUR CAUSE</div><h2>Help education<br/><em>serve humanity.</em></h2></div><a className="circle-cta" href="https://www.gandhividyamandir.org/support-us">SUPPORT<br/>GVM <b>↗</b></a></div></section>
<footer data-reveal id="contact"><div className="shell footer-top"><a className="brand footer-brand" href="#home">GANDHI VIDYA MANDIR</a><div><span className="mono">NAVIGATION</span><a href="#home">Home</a><a href="#about">Discover GVM</a><a href="#how">Activities</a><a href="#about">About GVM</a></div><div><span className="mono">CONTACT</span><a href="mailto:gvmcentraloffice@gmail.com">gvmcentraloffice@gmail.com</a><a href="tel:+911564220025">01564-220025 / 223642 / 223054</a><a href="https://www.gandhividyamandir.org/contact">Contact page ↗</a></div><div><span className="mono">ADDRESS</span><p>Gandhi Vidya Mandir<br/>Sardarshahr, Churu<br/>Rajasthan 331401, India</p><a href="https://www.gandhividyamandir.org/">Official website ↗</a></div></div><div className="shell footer-bottom mono">© 2026 GANDHI VIDYA MANDIR <span>SARDARSHAHR · RAJASTHAN · INDIA</span></div></footer>
<div className="modal" id="quote"><a className="modal-close" href="#offer">CLOSE ×</a><div className="modal-card"><span className="mono">CONNECT WITH US</span><h2>Start a conversation<br/><em>with GVM</em></h2><p>Write to Gandhi Vidya Mandir about education, service, support or campus programmes.</p><form><input required placeholder="Your name"/><input required type="email" placeholder="Email address"/><textarea required placeholder="Your message..."/><button className="pill light">Send inquiry <span>↗</span></button></form></div></div></main>
}







