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
  <header className="nav reference-nav"><div className="nav-left"><a className="brand nav-cell logo-cell" href="#home">GVM<sup>®</sup></a><button className="nav-cell sound-cell" aria-label="Sound settings"><span/><span/><span/><span/><span/></button><a className="nav-cell lang-cell" href="#home">EN</a><a className="nav-cell whatsapp-cell" href="https://wa.me/31653292939" aria-label="WhatsApp">◔</a></div><nav><a href="/activities">ACTIVITIES</a><a href="/about">ABOUT GVM</a><a href="/gaushala">GAU SHALA</a><a href="/contact">BAL GRIHA</a><a href="/contact">CONTACT</a></nav><a className="request-offer" href="/support-us"><span>SUPPORT GVM</span><b>›</b></a></header>
  <div className="hero-copy shell"><div className="art-caption mono"><span>SWAMI SHRI RAM SHARANJI</span><span>1922–2022</span></div><h1>Gandhi Vidya<br/><em>Mandir (GVM)</em></h1><div className="hero-bottom"><p>Want to sell a painting or collection? You can, with the respect it deserves. PieterKoopt® keeps the painting and its story alive.</p><a className="pill light" href="#offer">Discover GVM <span>↗</span></a></div></div>
  <div className="scroll-cue mono">SCROLL TO DISCOVER <span>↓</span></div>
 </section><section data-reveal className="intro section shell" id="about"><div className="eyebrow mono">CELEBRATING BIRTH CENTENARY OF AN ICON</div><div className="intro-grid"><h2>Celebrating a life<br/>of <em>service.</em></h2><div><p>11th Feb 2022 marks the Birth Centenary of an Icon - Late Swami Shri Ram Sharanji (Formerly Shri Kanhaiyalalji Dugar). Swamiji has inspired generations of families of Sardarshahr, Churu, Rajasthan. Born and brought up in the erstwhile princely State of Bikaner, Shri Kanhaiyalal Dugar was spiritually inclined since his childhood. He devoted his entire life towards giving back to society. He took it a step further by leaving his luxurious house in Rajasthan to set up his dream charity project.</p><p>Today, Gandhi Vidya Mandir sprawls across 1200 acres, houses IASE Deemed University, Krishi Vijan Kendra, 5 schools, a Gaushala, an Ayurved College, provides shelter to the underprivileged, &amp; provides health care for the needy. He truly transformed a desert into an Oasis. In more recent times the volunteers of the Institute have given outstanding service at the times of natural calamities like Uttarakhand floods, Tsunami, floods of Kashmir and floods of Barmer. With limited resources the GVM team of 150 volunteers fought against spread of pandemic disease Novel Covid-19 at various levels.</p><a className="text-link mono" href="/about">READ MORE ABOUT GVM <span>↗</span></a></div></div></section>
<section className="feature-deck"><div className="shell deck-grid"><div className="deck-copy"><span className="mono">GVM VALUES</span><h2>Education with<br/><em>human purpose</em></h2><p>Scroll to reveal the foundations of Gandhi Vidya Mandir.</p></div><div className="deck-stage"><article className="deck-card card-one"><span className="mono">01</span><h3>KNOWLEDGE</h3><p>Learning from pre-primary school to doctoral study.</p></article><article className="deck-card card-two"><span className="mono">02</span><h3>COMPASSION IN ACTION</h3><p>Care for children, communities and animals with dignity.</p></article><article className="deck-card card-three"><span className="mono">03</span><h3>SERVICE WITH SINCERITY</h3><p>Rural development, health and education for society.</p></article></div><div className="deck-progress"><i/><i/><i/></div></div></section>
<section data-reveal className="process section" id="how"><div className="shell"><div className="eyebrow mono">ACTIVITIES</div><h2 className="process-title">Education and service<br/><em>working together</em></h2><p className="process-lead">Across the campus and surrounding villages, GVM turns its values into meaningful opportunities and care.</p><div className="steps"><div className="step-stage"><article className="step"><div className="step-copy"><span className="mono">01</span><h3>Learn and grow</h3><p>Schools, higher education, research, hostels and libraries help learners build their futures.</p></div><div className="step-visual">⌁</div></article><article data-reveal className="step sage"><div className="step-copy"><span className="mono">02</span><h3>Serve communities</h3><p>Health camps, medical services, literacy and vocational programmes reach beyond the campus.</p></div><div className="step-visual">◎</div></article><article data-reveal className="step clay"><div className="step-copy"><span className="mono">03</span><h3>Care with dignity</h3><p>Bal Griha, Gau Shala and social-welfare homes put compassion into daily practice.</p></div><div className="step-visual">↗</div></article></div></div></div></section>
<section data-reveal className="story section shell" id="stories"><div className="story-art"><div className="frame"><img className="story-photo" src="/gh.avif" alt="Gandhi Vidya Mandir Gau Shala"/></div></div><div className="story-copy"><div className="eyebrow mono">GAU SHALA THAT LIVE ON</div><h2>A life given<br/>to <em>service</em></h2><p>Inspired by Swami Shri Ramsharanji and Gandhian ideals, GVM believes learning becomes meaningful when it uplifts people, families and communities.</p><a className="pill" href="/gaushala">Explore the GVM story <span>↗</span></a></div></section>
<section data-reveal className="closing section" id="offer"><div className="shell closing-inner"><div><div className="eyebrow mono">SUPPORT OUR CAUSE</div><h2>Help education<br/><em>serve humanity.</em></h2></div><a className="circle-cta" href="/support-us">SUPPORT<br/>GVM <b>↗</b></a></div></section>
<footer data-reveal id="contact"><div className="shell footer-top"><a className="brand footer-brand" href="#home">GVM<sup>®</sup></a><div><span className="mono">NAVIGATION</span><a href="#home">Home</a><a href="#offer">Discover GVM</a><a href="/activities">How it works</a><a href="/about">About us</a></div><div><span className="mono">CONTACT</span><a href="mailto:info@pieterkoopt.nl">info@pieterkoopt.nl</a><a href="tel:+31653292939">01564 220025</a><a href="https://wa.me/31653292939">WhatsApp ↗</a></div><div><span className="mono">ADDRESS</span><p>Sardarshahr, Churu<br/>Rajasthan 331401, India</p><a href="https://instagram.com/pieterkoopt">Instagram ↗</a></div></div><div className="shell footer-bottom mono">© 2026 GANDHI VIDYA MANDIR <span>EDUCATION · SERVICE · HUMANITY</span></div></footer>
<div className="modal" id="quote"><a className="modal-close" href="#offer">CLOSE ×</a><div className="modal-card"><span className="mono">FREE & WITHOUT OBLIGATION</span><h2>Tell us about<br/><em>your painting</em></h2><p>An art specialist will contact you within 48 hours.</p><form><input required placeholder="Your name"/><input required type="email" placeholder="Email address"/><textarea required placeholder="Artist, dimensions, history..."/><button className="pill light">Request offer <span>↗</span></button></form></div></div></main>
}







