'use client'

import React from 'react';
import ParticleScene from './ParticleScene';
import seabagsImg from '../public/stores/seabags.jpg';
import duluthpackImg from '../public/stores/duluthpack.jpg';
import craftcellarsImg from '../public/stores/craftcellars.jpg';
import lorisshoesImg from '../public/stores/lorisshoes.jpg';
import artikaImg from '../public/stores/artika.jpg';
import thecoopImg from '../public/stores/thecoop.jpg';

const featured = {
  title: 'Sea Bags — Salesforce → Shopify Migration',
  badge: 'Official Shopify Case Study',
  detail:
    '37 POS locations migrated for the iconic Maine brand. +114% net sales, 5.65% conversion rate. Recognized by Shopify as an official case study.',
  href: 'https://www.shopify.com/case-studies/sea-bags',
};

const work = [
  {
    title: 'Applink — Banglalink',
    detail: 'Scaled a telco innovation platform from zero to eight-figure revenue. 500+ developer community.',
    href: 'https://applink.com.bd/',
  },
  {
    title: 'Cowboy Carter — Sony Music',
    detail: 'Facilitated the launch of a Grammy-winning album for Beyoncé’s official store.',
    href: 'https://www.shop.beyonce.com',
  },
  {
    title: 'Portless — 3PL Platform',
    detail: 'Owned the product roadmap. 200% faster merchant onboarding, 40% fewer support tickets.',
    href: 'https://www.portless.com/',
  },
  {
    title: 'Crypto Exchange',
    detail: 'Led development to 20,000 active users and $50K daily transaction volume at peak.',
  },
  {
    title: 'AI-Agent PM Workflows',
    detail: 'Automated delivery pipelines — tasks in hours instead of days, 95% faster turnaround.',
  },
];

const stores = [
  { name: 'Sea Bags', domain: 'seabags.com', url: 'https://seabags.com/', img: seabagsImg.src },
  { name: 'Duluth Pack', domain: 'duluthpack.com', url: 'https://duluthpack.com/', img: duluthpackImg.src },
  { name: 'Craft Cellars', domain: 'craftcellars.ca', url: 'https://craftcellars.ca/', img: craftcellarsImg.src },
  { name: "Lori's Shoes", domain: 'lorisshoes.com', url: 'https://www.lorisshoes.com/', img: lorisshoesImg.src },
  { name: 'Artika Pro', domain: 'pro.artika.com', url: 'https://pro.artika.com/', img: artikaImg.src },
  { name: 'The Coop — Harvard/MIT', domain: 'thecoop.com', url: 'https://thecoop.com/', img: thecoopImg.src },
];

const achievements = [
  { text: 'Featured in an official Shopify case study', href: 'https://www.shopify.com/case-studies/sea-bags' },
  { text: 'Published research — ACM SAC 2022', href: 'https://dl.acm.org/doi/10.1145/3477314.3507173' },
  { text: 'KL-YES U.S. Dept. of State Exchange Alumnus' },
];

const setAccent = (on) =>
  window.dispatchEvent(new CustomEvent('particle-accent', { detail: on }));

export default function Home() {
  return (
    <main>
      <ParticleScene />

      <section className="hero">
        <p className="kicker">Portfolio</p>
        <h1>Labib<br />Bin Rahman</h1>
        <p className="sub">Lead Project Manager — eCommerce &amp; Digital Transformation</p>
        <p className="hint">scroll · drag the particles</p>
      </section>

      <section>
        <div className="repel">
          <p className="kicker">About</p>
          <h2>
            I lead, leverage and deliver transformative initiatives for businesses.
          </h2>
          <p className="body">
            5+ years delivering end-to-end eCommerce transformations and digital
            strategy for enterprise clients — ABG Brand Group, Harvard/MIT, Sony
            Music Group and Universal Music Group. Currently leading project
            delivery at Bevy Commerce.
          </p>
          <div className="stats">
            <div><span>5+</span>years</div>
            <div><span>18+</span>projects in 2025</div>
            <div><span>95%</span>on-time delivery</div>
            <div><span>0→8</span>figure SaaS growth</div>
          </div>
        </div>
      </section>

      <section>
        <div className="repel">
        <p className="kicker">Selected Work</p>

        <a
          className="featured"
          href={featured.href}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setAccent(true)}
          onMouseLeave={() => setAccent(false)}
        >
          <span className="badge">{featured.badge}</span>
          <h3>{featured.title} ↗</h3>
          <p>{featured.detail}</p>
        </a>

        <ul className="work">
          {work.map((item) => (
            <li
              key={item.title}
              onMouseEnter={() => setAccent(true)}
              onMouseLeave={() => setAccent(false)}
            >
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer">
                  <h3>{item.title} ↗</h3>
                  <p>{item.detail}</p>
                </a>
              ) : (
                <>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </>
              )}
            </li>
          ))}
        </ul>
        </div>
      </section>

      <section className="stores-section">
        <p className="kicker">Storefronts Launched</p>
        <div className="stores">
          {stores.map((store) => (
            <a
              key={store.domain}
              href={store.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setAccent(true)}
              onMouseLeave={() => setAccent(false)}
            >
              <img src={store.img} alt={`${store.name} storefront`} loading="lazy" />
              <figcaption>
                <span>{store.name}</span>
                <span className="domain">{store.domain} ↗</span>
              </figcaption>
            </a>
          ))}
        </div>
      </section>

      <section className="contact">
        <p className="kicker">Contact</p>
        <h2>Let&apos;s build something.</h2>
        <div className="links">
          <a href="mailto:labibstar@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/labib-bin-rahman-751106217/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Labibstar/" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <footer className="site-footer">
          <ul>
            {achievements.map((item) => (
              <li key={item.text}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">{item.text} ↗</a>
                ) : (
                  item.text
                )}
              </li>
            ))}
          </ul>
          <p>Labib Bin Rahman — Dhaka, Bangladesh</p>
        </footer>
      </section>
    </main>
  );
}
