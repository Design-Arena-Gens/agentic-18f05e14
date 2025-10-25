export const metadata = {
  metadataBase: new URL('https://agentic-18f05e14.vercel.app'),
  title: {
    default: 'Upskill Foundarly — Result-Oriented, Future-Proof Skills',
    template: '%s · Upskill Foundarly'
  },
  description:
    'Upskill Foundarly is an edtech platform focused on Technical, Interpersonal, and Entrepreneurship skills — with a results-first approach: portfolios, placements, and prototypes.',
  openGraph: {
    title: 'Upskill Foundarly — Result-Oriented, Future-Proof Skills',
    description:
      'Master Technical, Interpersonal, and Entrepreneurship skills. Build proof-of-work portfolios, launch prototypes, and accelerate your career.',
    url: 'https://agentic-18f05e14.vercel.app',
    siteName: 'Upskill Foundarly',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upskill Foundarly — Result-Oriented, Future-Proof Skills',
    description:
      'Master Technical, Interpersonal, and Entrepreneurship skills. Build proof-of-work portfolios and launch prototypes.',
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container nav">
            <div className="brand">
              <span className="brand-badge">UF</span>
              Upskill Foundarly
            </div>
            <nav>
              <a className="btn secondary" href="#apply">Apply Now</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <div>© {new Date().getFullYear()} Upskill Foundarly</div>
            <div>
              <a href="#curriculum">Curriculum</a> · <a href="#faq">FAQ</a> ·{' '}
              <a href="mailto:hello@foundarly.com">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import './globals.css';
