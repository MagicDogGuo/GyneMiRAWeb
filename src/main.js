import './style.css';
import otagoLogo from '../Source/uoo-logo-rgb-horz-gold-rev.png';
import aucklandLogo from '../Source/UoA-Logo-Primary-RGB-Small.png';
import annaGif from '../Source/Anna-virtual-character.gif';
import metaQuest3Image from '../Source/meta-quest-3.png';
import metaQuest3sImage from '../Source/meta-quest-3s.png';
import xrealOneImage from '../Source/xreal-one.webp';
import drJoPhoto from '../Source/dr-jo.jpg';
import drBronwynPhoto from '../Source/bronwyn-lennox-thompson.jpg';
import drBethPhoto from '../Source/dr-beth-messenger.jpg';
import lanaShieldsPhoto from '../Source/lana-shields.avif';
import drKarenJosephPhoto from '../Source/dr-karen-joseph.jpg';
import chungHsuanPhoto from '../Source/chung-hsuan.jpg';
import zhuangPhoto from '../Source/Zhuang-570-2.jpg';
import markPhoto from '../Source/Mark1-570x5701.png';

const annaGifPath = annaGif;
const youtubeEmbedUrl = 'https://www.youtube.com/embed/Do-Pp7nUHbQ?si=wcmJ77Q_3CxQgK3i';

const teamMembers = [
  {
    name: 'Dr Jo Nunnerley',
    institution: 'University of Otago',
    email: 'jo.nunnerley@otago.ac.nz',
    photo: drJoPhoto
  },
  {
    name: 'Dr Bronwyn Lennox Thompson',
    institution: 'University of Otago',
    email: 'bronwyn.thompson@otago.ac.nz',
    photo: drBronwynPhoto
  },
  {
    name: 'Dea Dauphinee PhD',
    institution: 'University of Otago',
    email: 'dea.dauphinee@otago.ac.nz'
  },
  {
    name: 'Dr Beth Messenger',
    institution: 'Partner - Sexual Health Aotearoa',
    email: 'beth.messenger@sexualwellbeing.org.nz',
    photo: drBethPhoto
  },
  {
    name: 'Cate Grace',
    institution: 'Partner - Whānau Whanake'
  },
  {
    name: 'Dr Rachel Springer',
    institution: 'Partner - Te Whatu Ora - Waitaha Canterbury',
    email: 'rachel.springer2@cdhb.health.nz'
  },
  {
    name: 'Lana Shields',
    institution: 'Partner - Moana Vā',
    email: 'info@moanava.org',
    photo: lanaShieldsPhoto
  },
  {
    name: 'Dr Karen Joseph',
    institution: 'Partner - Te Whatu Ora - Waitaha Canterbury',
    email: 'karenannejoseph@gmail.com',
    photo: drKarenJosephPhoto
  },
  {
    name: 'Chung-Hsuan Kuo',
    institution: 'University of Auckland',
    email: 'ckuo914@aucklanduni.ac.nz',
    photo: chungHsuanPhoto
  },
  {
    name: 'Dr Zhuang Chang',
    institution: 'University of Auckland',
    email: 'zcha621@aucklanduni.ac.nz',
    photo: zhuangPhoto
  },
  {
    name: 'Prof. Mark Billinghurst',
    institution: 'University of Auckland',
    email: 'mark.billinghurst@auckland.ac.nz',
    photo: markPhoto
  }
];

const toInitials = (name) =>
  name
    .replace('Prof. ', '')
    .replace('Dr ', '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

const createTeamCards = (members) =>
  members
    .map(
      (member) => `
        <article class="team-profile">
          <div class="portrait">
            ${
              member.photo
                ? `<img class="portrait-image" src="${member.photo}" alt="${member.name}" loading="lazy" />`
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
              : `<span class="profile-mail placeholder">Contact info coming soon</span>`
          }
        </article>
      `
    )
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
          <li><a href="#about">About the Study</a></li>
          <li><a href="#team">Research Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="container hero">
      <p class="eyebrow">Research Study</p>
      <h1>Acceptability of a Mixed Reality Tool to Support Pain and Anxiety During Minor Gynaecological Procedures</h1>
      <p class="subtitle">
        A research study exploring how mixed reality technology may support comfort, breathing,
        and anxiety management during outpatient gynaecological procedures.
      </p>
      <a class="cta" href="#about">Learn About the Study</a>
    </div>
  </header>

  <main>
    <section class="section experience-section" id="experience">
      <div class="container">
        <h2>See the Mixed Reality Experience</h2>
        <p class="section-intro">
          Watch a short demonstration of the mixed reality prototype designed to support pain and
          anxiety management during outpatient gynaecological procedures.
        </p>
        <div class="video-shell">
          ${
            youtubeEmbedUrl
              ? `<iframe
                  src="${youtubeEmbedUrl}"
                  title="Mixed Reality Experience"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>`
              : `<div class="video-placeholder">
                  <p>Youtube video placeholder</p>
                  <p class="helper-text">Set <code>youtubeEmbedUrl</code> in <code>src/main.js</code> to display the video.</p>
                </div>`
          }
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <h2>About the Study</h2>
        <div class="about-layout">
          <aside class="anna-visual">
            <img src="${annaGifPath}" alt="Anna virtual character demonstration" loading="lazy" />
          </aside>
          <div class="about-content">
            <article class="card">
              <h3>Study Overview</h3>
              <p>
                This study explores the acceptability and feasibility of a mixed reality (MR) tool
                designed to support pain and anxiety management during minor gynaecological procedures.
              </p>
            </article>
            <article class="card">
              <h3>What is Mixed Reality?</h3>
              <p>
                The MR experience uses a headset that overlays a virtual avatar coach into the real
                clinical environment, guiding users through calming breathing exercises while still
                allowing interaction with clinicians.
              </p>
            </article>
            <article class="card">
              <h3>Devices Used</h3>
              <p>This study uses the following mixed reality and augmented reality devices:</p>
              <ul>
                <li>Meta Quest 3</li>
                <li>Meta Quest 3S</li>
                <li>XREAL One AR glasses</li>
              </ul>
              <div class="device-grid" aria-label="Device images">
                <figure class="device-item">
                  <img class="device-image" src="${metaQuest3Image}" alt="Meta Quest 3 headset" loading="lazy" />
                  <figcaption>Meta Quest 3</figcaption>
                </figure>
                <figure class="device-item">
                  <img class="device-image" src="${metaQuest3sImage}" alt="Meta Quest 3S headset" loading="lazy" />
                  <figcaption>Meta Quest 3S</figcaption>
                </figure>
                <figure class="device-item">
                  <img class="device-image" src="${xrealOneImage}" alt="XREAL One AR glasses" loading="lazy" />
                  <figcaption>XREAL One AR glasses</figcaption>
                </figure>
              </div>
            </article>
            <div class="content-grid">
              <article class="card">
                <h3>Study Goals</h3>
                <ul>
                  <li>Understand participant experiences</li>
                  <li>Evaluate usability and comfort</li>
                  <li>Explore potential clinical integration</li>
                  <li>Investigate anxiety and pain support strategies</li>
                </ul>
              </article>
              <article class="card">
                <h3>Participation</h3>
                <p>Participants will:</p>
                <ul>
                  <li>Trial the MR prototype</li>
                  <li>Experience a guided breathing exercise</li>
                  <li>Share feedback through a short interview</li>
                </ul>
                <p class="duration">Session Duration: Approximately 20-30 minutes</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section team-section" id="team">
      <div class="container">
        <h2>Research Team</h2>
        <div class="team-showcase">
          ${createTeamCards(teamMembers)}
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container contact-card">
        <h2>Contact</h2>
        <p>
          For participant questions, collaboration opportunities, or research inquiries, please
          contact the research team.
        </p>
        <p>
          <strong>Mixed Reality Research Team</strong><br />
          <a href="mailto:mixedrealityforgynaecologicalprocedures@otagouni.onmicrosoft.com">
            mixedrealityforgynaecologicalprocedures@otagouni.onmicrosoft.com
          </a>
        </p>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>
        &copy; <span id="year"></span> Mixed Reality Clinical Study
        <span class="divider">|</span>
        University of Otago & University of Auckland
      </p>
    </div>
  </footer>
`;

document.querySelector('#year').textContent = new Date().getFullYear().toString();
