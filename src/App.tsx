const IOS_STORE_URL = '#'
const ANDROID_STORE_URL = '#'
const PRIVACY_POLICY_URL = 'https://ryankolsen.github.io/bourbonvault-privacy/'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Your Vault',
    body: 'Catalogue every bottle you own. Know exactly what\'s in your collection at a glance.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Tasting Notes',
    body: 'Log detailed notes and a 0–100 score for every pour. Build a record you\'ll treasure.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Discover & Wishlist',
    body: 'Browse 1,860+ bourbons from our curated catalog. Add anything to your wishlist.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Groups & Sale Alerts',
    body: 'Create a crew, post sale finds, and never let your circle miss a great bottle.',
  },
]

function AppleButton() {
  return (
    <a
      href={IOS_STORE_URL}
      className="store-btn"
      aria-label="Download on the App Store"
    >
      <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="store-btn-text">
        <span className="store-btn-sub">Download on the</span>
        <span className="store-btn-main">App Store</span>
      </span>
    </a>
  )
}

function GooglePlayButton() {
  return (
    <a
      href={ANDROID_STORE_URL}
      className="store-btn"
      aria-label="Get it on Google Play"
    >
      <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.18 23.76c.37.21.8.22 1.2.04L16.54 12 12.36 7.82 3.18 23.76zM20.9 10.53L17.95 8.8l-3.79 3.2 3.79 3.2 2.97-1.74c.85-.5.85-1.44-.02-1.93zM2.01 1.46C1.99 1.63 2 1.8 2 1.98v20.04c0 .18.01.35.03.52l10.33-10.54L2.01 1.46zM13.18 12.7l3.18-3.18-10.34-5.97c-.4-.23-.82-.25-1.2-.08L13.18 12.7z" />
      </svg>
      <span className="store-btn-text">
        <span className="store-btn-sub">Get it on</span>
        <span className="store-btn-main">Google Play</span>
      </span>
    </a>
  )
}

export default function App() {
  return (
    <div className="page">
      {/* ── Hero ── */}
      <header className="hero">
        <div className="hero-glow" aria-hidden="true" />

        <div className="logo-lockup">
          <img src="/icon.png" alt="Bourbon Dojo icon" className="app-icon" />
          <div className="wordmark">
            <h1 className="app-name">Bourbon Dojo</h1>
            <p className="app-tagline">Master your collection.</p>
          </div>
        </div>

        <p className="hero-copy">
          Track every bottle, log every pour, discover what to hunt next — and share
          the best finds with your crew.
        </p>

        <div className="store-row">
          <AppleButton />
          <GooglePlayButton />
        </div>

        <p className="store-note">Available for iOS &amp; Android</p>
      </header>

      {/* ── Divider ── */}
      <div className="section-divider" aria-hidden="true">
        <span className="divider-ornament">&#12288;&#10022;&#12288;</span>
      </div>

      {/* ── Features ── */}
      <section className="features" aria-label="Features">
        <h2 className="features-heading">Everything a bourbon enthusiast needs</h2>
        <div className="feature-grid">
          {features.map((f) => (
            <article key={f.title} className="feature-card">
              <div className="feature-icon" aria-hidden="true">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-body">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <p className="footer-name">Bourbon Dojo</p>
        <nav className="footer-links" aria-label="Footer links">
          <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <span className="footer-sep" aria-hidden="true">·</span>
          <a href="mailto:ryankolsen@gmail.com">Contact</a>
        </nav>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Bourbon Dojo. All rights reserved.</p>
      </footer>

      <style>{`
        .page {
          display: flex;
          flex-direction: column;
          min-height: 100dvh;
        }

        /* ── Hero ── */
        .hero {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 96px 24px 80px;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212, 135, 10, 0.18) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 50% 0%, rgba(240, 168, 48, 0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .logo-lockup {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
        }

        .app-icon {
          width: 80px;
          height: 80px;
          border-radius: 18px;
          box-shadow:
            0 0 0 1px rgba(212, 135, 10, 0.3),
            0 8px 32px rgba(0, 0, 0, 0.6);
        }

        .wordmark {
          text-align: left;
        }

        .app-name {
          font-size: clamp(2.4rem, 6vw, 3.6rem);
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.05;
          background: linear-gradient(135deg, var(--amber-light) 0%, var(--cream) 60%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .app-tagline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(0.95rem, 2.5vw, 1.15rem);
          color: var(--amber);
          font-style: italic;
          margin-top: 4px;
          letter-spacing: 0.02em;
        }

        .hero-copy {
          position: relative;
          max-width: 520px;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          line-height: 1.65;
          color: var(--cream-muted);
          margin-bottom: 40px;
        }

        /* ── Store buttons ── */
        .store-row {
          position: relative;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .store-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          background: var(--bourbon-card);
          border: 1px solid rgba(212, 135, 10, 0.35);
          border-radius: 12px;
          color: var(--cream);
          cursor: pointer;
          transition: background 0.18s, border-color 0.18s, transform 0.12s;
          text-decoration: none;
          min-width: 180px;
        }

        .store-btn:hover {
          background: #4A2510;
          border-color: rgba(212, 135, 10, 0.65);
          transform: translateY(-2px);
        }

        .store-btn:active {
          transform: translateY(0);
        }

        .store-icon {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          color: var(--cream);
        }

        .store-btn-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .store-btn-sub {
          font-size: 0.7rem;
          color: var(--cream-muted);
          letter-spacing: 0.04em;
          line-height: 1.2;
        }

        .store-btn-main {
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .store-note {
          position: relative;
          margin-top: 16px;
          font-size: 0.8rem;
          color: var(--cream-faint);
          letter-spacing: 0.04em;
        }

        /* ── Divider ── */
        .section-divider {
          text-align: center;
          padding: 8px 0;
        }

        .divider-ornament {
          font-size: 1.1rem;
          color: var(--amber);
          opacity: 0.5;
          letter-spacing: 0.5em;
        }

        /* ── Features ── */
        .features {
          padding: 64px 24px 80px;
          max-width: 960px;
          margin: 0 auto;
          width: 100%;
        }

        .features-heading {
          text-align: center;
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 48px;
          letter-spacing: -0.01em;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .feature-card {
          background: var(--bourbon-card);
          border: 1px solid var(--divider);
          border-radius: 16px;
          padding: 28px 24px;
          transition: border-color 0.18s, transform 0.15s;
        }

        .feature-card:hover {
          border-color: rgba(212, 135, 10, 0.4);
          transform: translateY(-3px);
        }

        .feature-icon {
          color: var(--amber);
          margin-bottom: 16px;
        }

        .feature-title {
          font-size: 1.1rem;
          font-weight: 600;
          font-family: 'Playfair Display', Georgia, serif;
          color: var(--cream);
          margin-bottom: 8px;
        }

        .feature-body {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--cream-muted);
        }

        /* ── Footer ── */
        .footer {
          margin-top: auto;
          border-top: 1px solid var(--divider);
          padding: 36px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .footer-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          color: var(--amber);
          letter-spacing: 0.04em;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.875rem;
          color: var(--cream-muted);
        }

        .footer-links a {
          color: var(--cream-muted);
          transition: color 0.15s;
        }

        .footer-links a:hover {
          color: var(--amber-light);
        }

        .footer-sep {
          color: var(--cream-faint);
        }

        .footer-copy {
          font-size: 0.78rem;
          color: var(--cream-faint);
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .logo-lockup {
            flex-direction: column;
            align-items: center;
          }
          .wordmark {
            text-align: center;
          }
          .store-btn {
            min-width: 160px;
          }
        }
      `}</style>
    </div>
  )
}
