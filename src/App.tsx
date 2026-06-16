import { useMemo, useState } from 'react'
import profileImage from './content/JariPicture.jpg'
import cvFile from './content/cv.pdf'
import HobbiesPage from './pages/Hobbies'

const profile = {
  fi: {
    name: 'Jari Tynkkynen',
    headline: 'Henkilöbrändi, joka yhdistää luovuuden ja teknisen osaamisen',
    intro:
      'Tervetuloa henkilöbrändisivulleni. Tässä esittelen osaamistani, kokemukseni ja sen, miten voin auttaa projekteissasi.',
    skills: [
      'Testiautomaation arkkitehtuurit ja työkalut',
      'Testiautomaation suunnittelu ja toteutus',
      'Automatisointi ja AI-agentit',
      'Testaus ja laadunvarmistus',
      'Projektinhallinta ja tiimityöskentely',
      'Ketterä kehitys ja projektinhallinta',
      'AI-agenttien ja automaation prototypointi',
      'Ohjelmistokehitys'
    ],
    details: [
      { label: 'Sijainti', value: 'Muurame, Suomi' },
      { label: 'Erikoisala', value: 'Automaatio- ja testausympäristöt, ohjelmistokehitys ja AI-integraatiot' },
      { label: 'Kokemus', value: '28 vuotta kokemusta testiautomaatiojärjestelmien ja ohjelmistokehityksen parissa' }
    ],
    aiTitle: 'AI-agentti: kysy minusta',
    aiIntro: 'Valitse kysymys ja näet lyhyen vastauksen profiilista.',
    download: 'Lataa CV',
    hobbies: 'Harrastukset',
    about: 'Minusta',
    skillsTitle: 'Osaaminen',
    contact: 'Yhteystiedot'
  },

  en: {
    name: 'Jari Tynkkynen',
    headline: 'A personal brand combining creativity and technical expertise',
    intro:
      'Welcome to my personal brand page. Here I present my skills, experience and how I can support your projects.',
    skills: [
      'Test automation architectures and tools',
      'Test automation design and implementation',
      'Automation and AI agents',
      'Testing and quality assurance',
      'Project management and teamwork',
      'Agile development and project coordination',
      'AI agent prototyping and automation',
      'Software development'
    ],
    details: [
      { label: 'Location', value: 'Muurame, Finland' },
      { label: 'Specialty', value: 'Automation test environments, testing, software development and AI integrations' },
      { label: 'Experience', value: '28 years of experience in test automation systems and software development' }
    ],
    aiTitle: 'AI Agent: Ask me anything',
    aiIntro: 'Choose a question to see a short answer from my profile.',
    download: 'Download CV',
    hobbies: 'Hobbies',
    about: 'About me',
    skillsTitle: 'Skills',
    contact: 'Contact'
  }
}

const aiQuestions = {
  fi: [
    {
      question: 'Kerro minulle palveluistani',
      answer:
        'Tarjoan testiautomaatiojärjestelmien suunnittelua, toteutusta ja optimointia sekä AI-agenttien prototypointia ja integrointia.'
    },
    {
      question: 'Mikä on vahvuuteni?',
      answer:
        'Analyyttinen ja luova lähestymistapa, vahva tekninen osaaminen ja kyky viedä haastavatkin asiat maaliin.'
    },
    {
      question: 'Miten voin ottaa sinuun yhteyttä?',
      answer: 'Yhteystiedot löytyvät sivun alareunasta. Voit myös ladata CV:ni.'
    }
  ],

  en: [
    {
      question: 'Tell me about your services',
      answer:
        'I provide test automation system design, implementation and optimization, as well as AI agent prototyping and integration.'
    },
    {
      question: 'What are your strengths?',
      answer:
        'An analytical and creative approach, strong technical expertise and the ability to deliver even demanding work reliably.'
    },
    {
      question: 'How can I contact you?',
      answer: 'You can find my contact details at the bottom of the page. You can also download my CV.'
    }
  ]
}

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [page, setPage] = useState<'home' | 'hobbies'>('home')
  const [language, setLanguage] = useState<'fi' | 'en'>('en')

  const selectedAnswer = useMemo(() => {
    if (activeIndex === null) return ''
    return aiQuestions[language][activeIndex].answer
  }, [activeIndex, language])

  return (
    <div className="page-shell">

      {/* 🌍 Kielivalitsin lippuikoneilla */}
      <div className="language-switcher">
        <button
          className={language === 'fi' ? 'active' : ''}
          onClick={() => setLanguage('fi')}
        >
          <img src="https://flagcdn.com/w20/fi.png" alt="FI" />
          FI
        </button>

        <button
          className={language === 'en' ? 'active' : ''}
          onClick={() => setLanguage('en')}
        >
          <img src="https://flagcdn.com/w20/gb.png" alt="EN" />
          EN
        </button>
      </div>

      {page === 'home' && (
        <header className="hero">
          <div className="hero-top">
            <img className="profile-image" src={profileImage} alt={`${profile[language].name} picture`} />
            <div>
              <span className="eyebrow">Henkilöbrändi</span>
              <h1>{profile[language].name}</h1>
              <p>{profile[language].headline}</p>
              <div className="button-row">
                <a className="download-button" href={cvFile} download="JariTynkkynen_CV.pdf">
                  {profile[language].download}
                </a>
                <button className="secondary-button" type="button" onClick={() => setPage('hobbies')}>
                  {profile[language].hobbies}
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {page === 'home' ? (
        <main className="content">
          <section className="section card">
            <h2>{profile[language].about}</h2>
            <p>{profile[language].intro}</p>
            <div className="details-grid">
              {profile[language].details.map((detail) => (
                <div key={detail.label} className="detail-item">
                  <strong>{detail.label}</strong>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section card">
            <h2>{profile[language].skillsTitle}</h2>
            <ul>
              {profile[language].skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="section card">
            <h2>{profile[language].aiTitle}</h2>
            <p>{profile[language].aiIntro}</p>
            <div className="qa-list">
              {aiQuestions[language].map((item, index) => (
                <button
                  key={item.question}
                  className={index === activeIndex ? 'active' : ''}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  {item.question}
                </button>
              ))}
            </div>
            {selectedAnswer && <p className="answer">{selectedAnswer}</p>}
          </section>
        </main>
      ) : (
        <HobbiesPage onBack={() => setPage('home')} language={language} />
      )}

      {page === 'home' && (
        <footer className="footer card">
          <h2>{profile[language].contact}</h2>
          <p>Email: jari.tynkkynen@elisanet.fi</p>
          <p>LinkedIn: linkedin.com/in/jari-tynkkynen</p>
          <p>Phone: +358 456535235</p>
        </footer>
      )}
    </div>
  )
}

export default App
