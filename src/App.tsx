import { useMemo, useState } from 'react'
import profileImage from './content/JariPicture.jpg'
import cvFile from './content/JTY_CV_ENG.pdf'
import HobbiesPage from './pages/Hobbies'

const profile = {
  name: 'Jari Tynkkynen',
  headline: 'Henkilöbrändi, joka yhdistää luovuuden ja teknisen osaamisen',
  intro:
    'Tervetuloa henkilöbrändisivulleni. Tässä esittelen osaamistani, kokemukseni ja sen, miten voin auttaa projekteissasi.',
  skills: [
    'Testi automaation arkkitehtuurit ja työkalut',
    'Testi automaation suunnittelu ja toteutus',
    'Automatisointi ja AI-agentit',
    'Testaus ja laadunvarmistus',
    'Projektinhallinta ja tiimityöskentely',
    'Ketterä kehitys ja projektinhallinta',
    'React ja modernit web-teknologiat',
    'UI/UX-suunnittelu ja käyttäjäkokemus',
    'AI-agenttien ja automaation prototypointi',
    'Sisällön ja brändin viestintä'
  ],
  details: [
    { label: 'Sijainti', value: 'Muurame, Suomi' },
    { label: 'Erikoisala', value: 'Automaatioa testaus ympäristöt, testaus, ohjelmistökehitys ja AI-integraatiot' },
    { label: 'Kokemus', value: '28 vuotta kokemusta testiautomaatio järjestelmien kehityksestä ja ohjelmistokehityksesta' }
  ]
}

const aiQuestions = [
  {
    question: 'Kerro minulle palveluistani',
    answer:
      'Tarjoan testiautomaatiojärjestelmien suunnittelua, toteutusta ja optimointia. Lisäksi autan AI-agenttien prototypoinnissa ja integroinnissa osaksi liiketoimintaprosesseja. Vahvuuteni ovat dynaamisesti suunnitellut arkitehtuurit, jotka skaalautuvat ja mukautuvat asiakkaiden tarpeisiin. Lisäksi suurien datamäärien käsittely ja analysointi on erikoisalaani, mikä mahdollistaa tehokkaiden ja älykkäiden automaatioratkaisujen luomisen.'
  },
  {
    question: 'Mikä on vahvuuteni?',
    answer:
      'Analyyttinen ja luova lähestymistapani ongelmanratkaisuun, vahva tekninen osaamiseni ja kyky kommunikoida monimutkaisia konsepteja selkeästi. Olen myös erittäin motivoitunut oppimaan uutta ja pysymään ajan tasalla alan kehityksestä. Päättäväisyyteni ja sitoutumiseni laatuun näkyvät kaikessa työssäni, ja pyrin aina ylittämään asiakkaiden odotukset. Kyky viedä vaikeatkin asiat maaliin ja löytää innovatiivisia ratkaisuja.'
  },
  {
    question: 'Miten voin ottaa sinuun yhteyttä?',
    answer:
      'Yhteydenottotiedot löytyvät sivun alareunasta. Voit myös ladata CV:ni ja kertoa tarkemmin projektista.'
  }
]

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [page, setPage] = useState<'home' | 'hobbies'>('home')
  const selectedAnswer = useMemo(() => {
    if (activeIndex === null) return ''
    return aiQuestions[activeIndex].answer
  }, [activeIndex])

  return (
    <div className="page-shell">
      {page === 'home' && (
        <header className="hero">
          <div className="hero-top">
            <img className="profile-image" src={profileImage} alt={`${profile.name} kuva`} />
            <div>
              <span className="eyebrow">Henkilöbrändi</span>
              <h1>{profile.name}</h1>
              <p>{profile.headline}</p>
              <div className="button-row">
                <a className="download-button" href={cvFile} download="JariTynkkynen_CV.pdf">
                  Lataa CV
                </a>
                <button className="secondary-button" type="button" onClick={() => setPage('hobbies')}>
                  Harrastukset
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {page === 'home' ? (
        <main className="content">
          <section className="section card">
            <h2>Minusta</h2>
          <p>{profile.intro}</p>
          <div className="details-grid">
            {profile.details.map((detail) => (
              <div key={detail.label} className="detail-item">
                <strong>{detail.label}</strong>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section card">
          <h2>Osaaminen</h2>
          <ul>
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="section card">
          <h2>AI-agentti: kysy minusta</h2>
          <p>Valitse kysymys ja näet lyhyen vastauksen profiilista. Tämä toimii aiemmin käytetyn agenttitoiminnon perustana.</p>
          <div className="qa-list">
            {aiQuestions.map((item, index) => (
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
        <HobbiesPage onBack={() => setPage('home')} />
      )}

      {page === 'home' && (
        <footer className="footer card">
          <h2>Yhteystiedot</h2>
        <p>Sähköposti: jari.tynkkynen@elisanet.fi</p>
        <p>LinkedIn: linkedin.com/in/jari-tynkkynen</p>
        <p>Puhelin: +358 456535235</p>
      </footer>
      )}
    </div>
  )
}

export default App
