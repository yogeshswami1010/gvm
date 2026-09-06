export function SiteHeader() {
  return (
    <header className="nav reference-nav">
      <div className="nav-left">
        <a className="brand nav-cell logo-cell" href="/"><span className="logo-wordmark">Gandhi Vidhya Mandir</span></a>
      </div>
      <nav>
        <a href="/activities">ACTIVITIES</a>
        <a href="/about">ABOUT GVM</a>
        <a href="/gaushala">GAU SHALA</a>
        <a href="/bal-griha">BAL GRIHA</a>
        <a href="/contact">CONTACT</a>
      </nav>
      <a className="request-offer" href="/support-us"><span>SUPPORT GVM</span><b>›</b></a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="shell footer-topline"><span className="mono">GANDHI VIDYA MANDIR · SARDARSHAHR, RAJASTHAN</span><span className="mono">EDUCATION · SERVICE · HUMANITY</span></div>
      <div className="shell footer-main">
        <div className="footer-identity"><a className="brand footer-brand" href="/"><img className="site-logo site-logo-footer" src="/gvm-logo.png" alt="Gandhi Vidya Mandir logo"/></a><p>Learning, service and human values—working together for generations.</p><a className="footer-support mono" href="/support-us">SUPPORT OUR CAUSE <b>↗</b></a></div>
        <div className="footer-column"><span className="mono">EXPLORE</span><a href="/">Home</a><a href="/about">About GVM</a><a href="/activities">Activities</a><a href="/gaushala">Gau Shala</a></div>
        <div className="footer-column"><span className="mono">CONNECT</span><a href="/bal-griha">Bal Griha</a><a href="/team">Our Team</a><a href="/contact">Contact</a><a href="/support-us">Support GVM</a></div>
        <div className="footer-column footer-contact"><span className="mono">CENTRAL OFFICE</span><a href="mailto:gvmcentraloffice@gmail.com">gvmcentraloffice@gmail.com</a><a href="tel:+911564220025">01564-220025</a><p>Sardarshahr, Churu<br/>Rajasthan 331401, India</p></div>
      </div>
      <div className="shell footer-bottom mono"><span>© 2026 GANDHI VIDYA MANDIR</span><span>MADE FOR A LIFE OF SERVICE</span></div>
    </footer>
  );
}