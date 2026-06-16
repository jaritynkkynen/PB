import profileImage from '../content/JariPicture.jpg'
import gymImage from '../content/gym.jpg'
import view1 from '../content/view1.jpg'

type HobbiesPageProps = {
  onBack: () => void
  language: 'fi' | 'en'
}

const texts = {
  fi: {
    eyebrow: 'Harrastukset',
    title: 'Mitkä asiat tuovat motivaationi esiin',
    intro:
      'Liikunta, rakentaminen ja pelaaminen kuuluvat arkeeni. Tässä on muutama suosikkiharrastus, jotka pitävät mielen virkeänä ja tuovat energiaa myös työprojekteihin.',
    back: 'Takaisin pääsivulle',

    gymTitle: 'Kuntosali',
    gymText:
      'Salilla treenaaminen auttaa kehittämään kestävyyttä, motivaatiota ja keskittymiskykyä. Se on tärkeä osa hyvinvointiani.',

    tennisTitle: 'Tennis',
    tennisText:
      'Tennis kehittää ketteryyttä, taktiikkaa ja reaktiokykyä. Laji tarjoaa mukavaa monipuolisuutta liikuntaan.',

    buildTitle: 'Rakennushommat',
    buildText:
      'Rakennushommat ja tekeminen paikan päällä antavat konkreettisen tunteen työn tuloksesta ja sparraavat ongelmanratkaisukykyä.',

    esportTitle: 'E-sport',
    esportText:
      'Pelimaailmassa pidän Counter-Strikesta. Se vaatii taktista ajattelua, tiimityötä ja nopeaa reagointia.',
    csLink: 'Counter-Strike Steamissä'
  },

  en: {
    eyebrow: 'Hobbies',
    title: 'What keeps me motivated',
    intro:
      'Sports, building things and gaming are part of my daily life. Here are a few hobbies that keep my mind sharp and bring energy to my work as well.',
    back: 'Back to main page',

    gymTitle: 'Gym',
    gymText:
      'Training at the gym helps build endurance, motivation and focus. It is an important part of my well-being.',

    tennisTitle: 'Tennis',
    tennisText:
      'Tennis develops agility, tactics and reaction speed. It adds enjoyable variety to physical activity.',

    buildTitle: 'Building & DIY',
    buildText:
      'Building and hands-on work give a concrete sense of progress and strengthen problem‑solving skills.',

    esportTitle: 'E-sports',
    esportText:
      'In gaming, I enjoy Counter-Strike. It requires tactical thinking, teamwork and quick reactions.',
    csLink: 'Counter-Strike on Steam'
  }
}

function HobbiesPage({ onBack, language }: HobbiesPageProps) {
  const t = texts[language]

  return (
    <>
      <header
        className="hero hero-small"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.64), rgba(15,23,42,0.24)), url(${view1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-top hero-overlay">
          <img className="profile-image hobby-image" src={profileImage} alt="Profile" />
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h1>{t.title}</h1>
            <p>{t.intro}</p>

            <button className="download-button" type="button" onClick={onBack}>
              {t.back}
            </button>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section card hobby-grid">
          <article className="hobby-card">
            <img src={gymImage} alt="Gym" className="hobby-thumb" />
            <h2>{t.gymTitle}</h2>
            <p>{t.gymText}</p>
          </article>

          <article className="hobby-card">
            <h2>{t.tennisTitle}</h2>
            <p>{t.tennisText}</p>
          </article>

          <article className="hobby-card">
            <h2>{t.buildTitle}</h2>
            <p>{t.buildText}</p>
          </article>

          <article className="hobby-card">
            <h2>{t.esportTitle}</h2>
            <p>{t.esportText}</p>
            <a
              className="link-button"
              href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
              target="_blank"
              rel="noreferrer"
            >
              {t.csLink}
            </a>
          </article>
        </section>
      </main>
    </>
  )
}

export default HobbiesPage
