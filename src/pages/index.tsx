import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="body-container">
      <Navbar />
      {/* <HomepageHeader /> */}
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="navbar w-full">
      <Link to="/">
        <div className="navbar-logo-container">
          <img className="logo mobile-logo" src="/img/authwave-logo.png" alt="Auth Wave" />
          <p className="navbar-logo-text mobile-text">
            Auth Wave <span className="text-gradient font-semibold"> Docs</span>
          </p>
        </div>
      </Link>
      <div className="navbar-links-container">
        <Link href="/docs/intro" className="navbar-link hide-mobile">
          Documentation
        </Link>
        <Link href="https://github.com/Auth-Wave" className="navbar-link">
          GitHub
        </Link>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <div className="w-full grow flex-center flex-col">
      <div className="title-container">
        <p className="hero-title text-gradient">Auth Wave</p>
        <p className="hero-subtitle">DOCUMENTATION</p>
      </div>
      <p className="hero-welcome-text">
        Everything you need to integrate secure authentication into your
        applications
      </p>
      <Link
        to="/docs/Getting%20Started/create-project"
        className="quick-start-button"
      >
        Quick Start
      </Link>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <Link to="/docs/intro" className="footer-link">
            Documentation
          </Link>
          <Link to="/docs/API%20Reference/" className="footer-link">
            API Reference
          </Link>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Open Source</h3>
          <Link to="https://github.com/Auth-Wave" className="footer-link">
            Product repository
          </Link>
          <Link to="https://authwave.in" className="footer-link">
            Product website
          </Link>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Developer</h3>
          <Link
            to="https://github.com/Abhijeet-Gautam5702"
            className="footer-link"
          >
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/abhijeet-gautam-a413b1211/"
            className="footer-link"
          >
            LinkedIn
          </Link>
          <Link to="https://x.com/abhijeet_gautam" className="footer-link">
            X (Twitter)
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2024 Auth Wave. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------- */
export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
