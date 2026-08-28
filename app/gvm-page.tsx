import { GvmPageData } from './gvm-content';

const nav = [
  ['About GVM', '/about'], ['Activities', '/activities'], ['Gau Shala', '/gaushala'],
  ['Bal Griha', '/bal-griha'], ['Our Team', '/team'], ['Contact', '/contact'],
];

export function SiteHeader() {
  return <header className="gvm-nav"><a className="gvm-brand" href="/">GANDHI VIDYA MANDIR</a><nav>{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><a className="gvm-support" href="/support-us">Support us <b>↗</b></a></header>;
}

export function SiteFooter() {
  return <footer className="gvm-footer"><div><strong>GANDHI VIDYA MANDIR</strong><p>Sardarshahr, Churu<br/>Rajasthan 331401, India</p></div><div><span>CONTACT</span><a href="mailto:gvmcentraloffice@gmail.com">gvmcentraloffice@gmail.com</a><a href="tel:+911564220025">01564-220025 / 223642 / 223054</a></div><div><span>EXPLORE</span><a href="/activities">Activities</a><a href="/contact">Contact</a><a href="https://www.gandhividyamandir.org/">Official website ↗</a></div></footer>;
}

export function GvmPage({ page }: { page: GvmPageData }) {
  return <main className="gvm-site"><SiteHeader/><section className="gvm-page-hero"><img src={page.image} alt="Gandhi Vidya Mandir campus activity"/><div><span>{page.kicker}</span><h1>{page.title}</h1><p>{page.lead}</p></div></section><section className="gvm-page-body">{page.sections.map((section, index) => <article className="gvm-content-block" key={section.heading}><span>0{index + 1}</span><div><h2>{section.heading}</h2>{section.text.map(text => <p key={text}>{text}</p>)}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}</div></article>)}</section><section className="gvm-page-cta"><p>GANDHI VIDYA MANDIR · SARDARSHAHR, RAJASTHAN</p><h2>Education with<br/><em>social commitment.</em></h2><a href="/support-us">Support our cause <b>↗</b></a></section><SiteFooter/></main>;
}
