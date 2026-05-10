import './style.css';

const teamData = {
  otago: [
    { name: 'Dr Jo Nunnerley', email: 'jo.nunnerley@otago.ac.nz' },
    { name: 'Dr Bronwyn Lennox Thompson', email: 'bronwyn.thompson@otago.ac.nz' },
    { name: 'Dea Dauphinee PhD', email: 'dea.dauphinee@otago.ac.nz' }
  ],
  partners: [
    { name: 'Dr Beth Messenger', role: 'Sexual Health Aotearoa', email: 'beth.messenger@sexualwellbeing.org.nz' },
    { name: 'Dr Rachel Springer', role: 'Te Whatu Ora Waitaha Canterbury', email: 'rachel.springer2@cdhb.health.nz' },
    { name: 'Lana Shields', role: 'Moana Va', email: 'info@moanava.org' },
    { name: 'Dr Karen Joseph', email: 'karenannejoseph@gmail.com' }
  ],
  auckland: [
    { name: 'Chung-Hsuan Kuo', email: 'ckuo914@aucklanduni.ac.nz' },
    { name: 'Zhuang Chang', email: 'zcha621@aucklanduni.ac.nz' },
    { name: 'Prof. Mark Billinghurst', email: 'mark.billinghurst@auckland.ac.nz' }
  ]
};

const createPeopleList = (people) =>
  people
    .map(
      (person) => `
      <li class="person-card">
        <h4>${person.name}</h4>
        ${person.role ? `<p class="role">${person.role}</p>` : ''}
        <a href="mailto:${person.email}">${person.email}</a>
      </li>
    `
    )
    .join('');

document.querySelector('#app').innerHTML = `
  <header class="site-header" id="home">
    <div class="container nav-wrap">
      <div class="logo-group" aria-label="University logos">
        <div class="logo-badge">University of Otago</div>
        <div class="logo-badge">University of Auckland</div>
      </div>
      <nav aria-label="Main navigation">
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
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
    <section class="section" id="about">
      <div class="container">
        <h2>About the Study</h2>
        <div class="content-grid">
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
        </div>

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
    </section>

    <section class="section alt" id="team">
      <div class="container">
        <h2>Research Team</h2>
        <div class="team-grid">
          <article class="team-card">
            <h3>University of Otago</h3>
            <ul class="person-list">${createPeopleList(teamData.otago)}</ul>
          </article>
          <article class="team-card">
            <h3>Clinical & Community Partners</h3>
            <ul class="person-list">${createPeopleList(teamData.partners)}</ul>
          </article>
          <article class="team-card">
            <h3>University of Auckland</h3>
            <ul class="person-list">${createPeopleList(teamData.auckland)}</ul>
          </article>
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
