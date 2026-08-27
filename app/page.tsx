'use client';
import { useEffect, useState } from 'react';
export default function Home() {
 const [intro,setIntro]=useState(true);
 useEffect(()=>{
  document.body.classList.add('is-loading');
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
 const enter=()=>{setIntro(false);document.body.classList.remove('is-loading')};
 return <main>{intro&&<div className="site-intro"><div className="intro-signature">Piet</div><div className="intro-choice"><div className="sound-bars"><i/><i/><i/><i/><i/></div><p className="mono">For the best experience, we<br/>recommend turning on your sound.</p><div><button onClick={enter}>WITHOUT AUDIO</button><button className="active" onClick={enter}>WITH AUDIO</button></div></div></div>}<section className="hero" id="home">
  <video className="hero-media" autoPlay muted loop playsInline poster="https://cdn.prod.website-files.com/67890d3b1a9365a1173c954e/68414b36c5bc5cd43e314e77_Videoframe.webp"><source src="https://player.vimeo.com/progressive_redirect/playback/1093047624/rendition/720p/file.mp4?loc=external&log_user=0&signature=0cd224625af390868dad10388d9ee1554824439a5e54f93b59aa7f2a9eae41f5" type="video/mp4"/></video><div className="hero-shade"/>
  <header className="nav reference-nav"><div className="nav-left"><a className="brand nav-cell logo-cell" href="#home">PIETERKOOPT<sup>®</sup></a><button className="nav-cell sound-cell" aria-label="Sound settings"><span/><span/><span/><span/><span/></button><a className="nav-cell lang-cell" href="#home">EN</a><a className="nav-cell whatsapp-cell" href="https://wa.me/31653292939" aria-label="WhatsApp">◔</a></div><nav><a href="#how">HOW IT WORKS</a><a href="#about">ABOUT US</a><a href="#stories">STORIES</a><a href="#contact">CITY TOUR</a><a href="#contact">CONTACT</a></nav><a className="request-offer" href="#quote"><span>REQUEST OFFER</span><b>›</b></a></header>
  <div className="hero-copy shell"><div className="art-caption mono"><span>VINCENT VAN GOGH — STARRY NIGHT</span><span>1889</span></div><h1>Time changes everything.<br/><em>Except history.</em></h1><div className="hero-bottom"><p>Want to sell a painting or collection? You can, with the respect it deserves. PieterKoopt® keeps the painting and its story alive.</p><a className="pill light" href="#offer">Sell your painting <span>↗</span></a></div></div>
  <div className="scroll-cue mono">SCROLL TO DISCOVER <span>↓</span></div>
 </section><section data-reveal className="intro section shell" id="about"><div className="eyebrow mono">SELLING YOUR PAINTING?</div><div className="intro-grid"><h2>Selling your<br/>painting?<br/><em>It starts here</em></h2><div><p>Your artwork takes centre stage. We treat each piece with respect and personal attention, keeping the process simple and its story alive.</p><a className="text-link mono" href="#contact">READ MORE ABOUT PIETERKOOPT <span>↗</span></a></div></div></section>
<section className="feature-deck"><div className="shell deck-grid"><div className="deck-copy"><span className="mono">WHY PIETERKOOPT®</span><h2>Three reasons<br/><em>to sell with us</em></h2><p>Scroll to reveal each advantage. Every card arrives, settles, and remains in the stack.</p></div><div className="deck-stage"><article className="deck-card card-one"><span className="mono">01</span><h3>NO HIDDEN FEES</h3><p>You receive 100% of the offer.</p></article><article className="deck-card card-two"><span className="mono">02</span><h3>EXPERT ASSESSMENT AT HOME</h3><p>We come to you and arrange everything.</p></article><article className="deck-card card-three"><span className="mono">03</span><h3>FAST AND PERSONAL PROCESS</h3><p>A response to your submission within 48 hours.</p></article></div><div className="deck-progress"><i/><i/><i/></div></div></section>
<section data-reveal className="process section" id="how"><div className="shell"><div className="eyebrow mono">HOW IT WORKS</div><h2 className="process-title">Selling paintings<br/><em>without the hassle</em></h2><p className="process-lead">We keep things simple, fast and transparent. Follow the steps and we take care of the rest.</p><div className="steps"><div className="step-stage"><article className="step"><div className="step-copy"><span className="mono">01</span><h3>Upload your artwork</h3><p>Take clear photos, tell the story and upload everything easily.</p></div><div className="step-visual">⌁</div></article><article data-reveal className="step sage"><div className="step-copy"><span className="mono">02</span><h3>Review by Pieter</h3><p>We review your submission and respond within 48 hours.</p></div><div className="step-visual">◎</div></article><article data-reveal className="step clay"><div className="step-copy"><span className="mono">03</span><h3>Personal appointment</h3><p>Pieter visits with a specialist and gives you a fair offer.</p></div><div className="step-visual">↗</div></article></div></div></div></section>
<section data-reveal className="story section shell" id="stories"><div className="story-art"><div className="frame"><div className="paint-stroke"/></div></div><div className="story-copy"><div className="eyebrow mono">STORIES THAT LIVE ON</div><h2>Every painting<br/>has a <em>story</em></h2><p>Art is more than an object. Every painting holds a moment, a memory, an emotion. Stories like these deserve to be shared.</p><a className="pill" href="#stories">See all stories <span>↗</span></a></div></section>
<section data-reveal className="closing section" id="offer"><div className="shell closing-inner"><div><div className="eyebrow mono">READY WHEN YOU ARE</div><h2>Selling a painting?<br/><em>Pieter arranges it.</em></h2></div><a className="circle-cta" href="#quote">REQUEST<br/>OFFER <b>↗</b></a></div></section>
<footer data-reveal id="contact"><div className="shell footer-top"><a className="brand footer-brand" href="#home">PIETERKOOPT<sup>®</sup></a><div><span className="mono">NAVIGATION</span><a href="#home">Home</a><a href="#offer">Sell your painting</a><a href="#how">How it works</a><a href="#about">About us</a></div><div><span className="mono">CONTACT</span><a href="mailto:info@pieterkoopt.nl">info@pieterkoopt.nl</a><a href="tel:+31653292939">+31 6 53 29 29 39</a><a href="https://wa.me/31653292939">WhatsApp ↗</a></div><div><span className="mono">ADDRESS</span><p>Johan de Wittstraat 33<br/>3311 KG Dordrecht</p><a href="https://instagram.com/pieterkoopt">Instagram ↗</a></div></div><div className="shell footer-bottom mono">© 2026 PIETERKOOPT® <span>PRIVACY POLICY · TERMS & CONDITIONS</span></div></footer>
<div className="modal" id="quote"><a className="modal-close" href="#offer">CLOSE ×</a><div className="modal-card"><span className="mono">FREE & WITHOUT OBLIGATION</span><h2>Tell us about<br/><em>your painting</em></h2><p>An art specialist will contact you within 48 hours.</p><form><input required placeholder="Your name"/><input required type="email" placeholder="Email address"/><textarea required placeholder="Artist, dimensions, history..."/><button className="pill light">Request offer <span>↗</span></button></form></div></div></main>
}







