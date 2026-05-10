import './style.css';
import otagoLogo from '../Source/uoo-logo-rgb-horz-gold-rev.png';
import aucklandLogo from '../Source/UoA-Logo-Primary-RGB-Small.png';
import projectLogo from '../Source/logo.png';
import annaGif from '../Source/Anna-virtual-character.gif';
import metaQuest3Image from '../Source/meta-quest-3.webp';
import metaQuest3sImage from '../Source/meta-quest-3s.webp';
import xrealOneImage from '../Source/xreal-one.webp';
import questViewImage from '../Source/questview.JPG';
import xrealViewImage from '../Source/xrealview.JPEG';
import drJoPhoto from '../Source/dr-jo.jpg';
import drBronwynPhoto from '../Source/bronwyn-lennox-thompson.jpg';
import drBethPhoto from '../Source/dr-beth-messenger.jpg';
import cateGracePhoto from '../Source/cate-grace.jpg';
import lanaShieldsPhoto from '../Source/lana-shields.avif';
import drKarenJosephPhoto from '../Source/dr-karen-joseph.jpg';
import drRachelSpringerPhoto from '../Source/dr-rachel-springer.png';
import chungHsuanPhoto from '../Source/chung-hsuan.jpg';
import zhuangPhoto from '../Source/Zhuang-570-2.jpg';
import markPhoto from '../Source/Mark1-570x5701.png';
import content from './content.json';

const annaGifPath = annaGif;
const { youtubeEmbedUrl } = content;

const teamPhotoMap = {
  drJoPhoto,
  drBronwynPhoto,
  drBethPhoto,
  cateGracePhoto,
  lanaShieldsPhoto,
  drKarenJosephPhoto,
  drRachelSpringerPhoto,
  chungHsuanPhoto,
  zhuangPhoto,
  markPhoto
};

const deviceImageMap = {
  metaQuest3Image,
  metaQuest3sImage,
  xrealOneImage,
  questViewImage,
  xrealViewImage
};

const toInitials = (name) =>
  name
    .replace('Prof. ', '')
    .replace('Dr ', '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

const createNavLinks = (links) =>
  links.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join('');

const createGoals = (goals) => goals.map((goal) => `<li>${goal}</li>`).join('');

const createInsights = (insights) =>
  insights
    .map(
      (insight) => `
        <li>
          <strong>${insight.title}:</strong>
          ${insight.description}
        </li>
      `
    )
    .join('');

const createDevices = (devices) =>
  devices
    .map((device) => {
      const defaultImage = deviceImageMap[device.defaultImageKey];
      const hoverImage = deviceImageMap[device.hoverImageKey];

      return `
        <figure class="device-item">
          <div class="device-image-stack">
            <img class="device-image default-image" src="${defaultImage}" alt="${device.defaultImageAlt}" loading="lazy" />
            <img class="device-image hover-image" src="${hoverImage}" alt="${device.hoverImageAlt}" loading="lazy" />
          </div>
          <figcaption>${device.name}</figcaption>
          <p class="device-note">
            ${device.note}
          </p>
        </figure>
      `;
    })
    .join('');

const createTeamCards = (members) =>
  members
    .map((member) => {
      const memberPhoto = member.photoKey ? teamPhotoMap[member.photoKey] : undefined;

      return `
        <article class="team-profile">
          <div class="portrait">
            ${
              memberPhoto
                ? `<img class="portrait-image" src="${memberPhoto}" alt="${member.name}" loading="lazy" />`
                : `<span class="portrait-initials" aria-hidden="true">${toInitials(member.name)}</span>`
            }
            <div class="profile-meta">
              <h3>${member.name}</h3>
              <span>${member.institution}</span>
            </div>
          </div>
          ${
            member.email
              ? `<a class="profile-mail" href="mailto:${member.email}">${member.email}</a>`
              : `<span class="profile-mail placeholder">${content.team.contactInfoPending}</span>`
          }
        </article>
      `;
    })
    .join('');

document.querySelector('#app').innerHTML = `
  <header class="site-header" id="home">
    <div class="container nav-wrap">
      <div class="logo-group" aria-label="University logos">
        <div class="logo-badge">
          <img class="logo-image" src="${otagoLogo}" alt="University of Otago logo" />
        </div>
        <div class="logo-badge">
          <img class="logo-image" src="${aucklandLogo}" alt="University of Auckland logo" />
        </div>
      </div>
      <nav aria-label="Main navigation">
        <ul class="nav-links">
          ${createNavLinks(content.navigation)}
        </ul>
      </nav>
    </div>
    <div class="container hero">
      <p class="eyebrow">${content.hero.eyebrow}</p>
      <div class="hero-title-row">
        <img class="hero-project-logo" src="${projectLogo}" alt="Project logo" />
        <h1>${content.hero.title}</h1>
      </div>
      <p class="subtitle">
        ${content.hero.subtitle}
      </p>
      <a class="cta" href="${content.hero.ctaHref}">${content.hero.ctaLabel}</a>
    </div>
  </header>

  <main>
    <section class="section experience-section" id="experience">
      <div class="container">
        <h2>${content.experience.title}</h2>
        <p class="section-intro">
          ${content.experience.intro}
        </p>
        <div class="video-shell">
          ${
            youtubeEmbedUrl
              ? `<iframe
                  src="${youtubeEmbedUrl}"
                  title="${content.experience.videoTitle}"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>`
              : `<div class="video-placeholder">
                  <p>${content.experience.placeholderTitle}</p>
                  <p class="helper-text">${content.experience.placeholderHint}</p>
                </div>`
          }
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <h2>${content.about.title}</h2>
        <div class="about-layout">
          <aside class="anna-visual">
            <img src="${annaGifPath}" alt="Anna virtual character demonstration" loading="lazy" />
          </aside>
          <div class="about-content">
            <article class="card">
              <h3>${content.about.overviewTitle}</h3>
              <p>
                ${content.about.overviewText}
              </p>
            </article>
            <div class="content-grid">
              <article class="card">
                <h3>${content.about.goalsTitle}</h3>
                <ul>
                  ${createGoals(content.about.goals)}
                </ul>
              </article>
              <article class="card">
                <h3>${content.about.insightsTitle}</h3>
                <ul>
                  ${createInsights(content.about.insights)}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt" id="devices">
      <div class="container">
        <h2>${content.devices.title}</h2>
        <p class="devices-intro">
          ${content.devices.intro}
        </p>
        <div class="device-grid" aria-label="Device images">
          ${createDevices(content.devices.items)}
        </div>
      </div>
    </section>

    <section class="section team-section" id="team">
      <div class="container">
        <h2>${content.team.title}</h2>
        <div class="team-showcase">
          ${createTeamCards(content.team.members)}
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container contact-card">
        <h2>${content.contact.title}</h2>
        <p>
          ${content.contact.description}
        </p>
        <p>
          <strong>${content.contact.teamName}</strong><br />
          <a href="mailto:${content.contact.email}">
            ${content.contact.email}
          </a>
        </p>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>
        &copy; <span id="year"></span> ${content.footer.studyName}
        <span class="divider">|</span>
        ${content.footer.institutions}
      </p>
    </div>
  </footer>
`;

document.querySelector('#year').textContent = new Date().getFullYear().toString();
