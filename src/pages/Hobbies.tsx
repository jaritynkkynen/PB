import profileImage from '../content/JariPicture.jpg'
import gymImage from '../content/gym.jpg'
import view1 from '../content/view1.jpg'

type HobbiesPageProps = {
  onBack: () => void
}

function HobbiesPage({ onBack }: HobbiesPageProps) {
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
          <img className="profile-image hobby-image" src={profileImage} alt="Harrastuskuva" />
          <div>
            <span className="eyebrow">Harrastukset</span>
            <h1>Mitkä asiat tuovat motivaationi esiin</h1>
            <p>Liikunta, rakentaminen ja pelaaminen kuuluvat arkeeni. Tässä on muutama suosikkiharrastus, jotka pitävät mielen virkeänä ja tuovat energiaa myös työprojekteihin.</p>
            {/* small landscape persona photos removed */}
            <button className="download-button" type="button" onClick={onBack}>
              Takaisin pääsivulle
            </button>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section card hobby-grid">
          <article className="hobby-card">
            <img src={gymImage} alt="Kuntosali" className="hobby-thumb" />
            <h2>Kuntosali</h2>
            <p>Salilla treenaaminen auttaa kehittämään kestävyyttä, motivaatiota ja keskittymiskykyä. Se on tärkeä osa hyvinvointiani.</p>
          </article>

          <article className="hobby-card">
            <h2>Tennis</h2>
            <p>Tennis kehittää ketteryyttä, taktiikkaa ja reaktiokykyä. Laji tarjoaa mukavaa monipuolisuutta liikuntaan.</p>
          </article>

          <article className="hobby-card">
            <h2>Rakennushommat</h2>
            <p>Rakennushommat ja tekeminen paikan päällä antavat konkreettisen tunteen työn tuloksesta ja sparraavat ongelmanratkaisukykyä.</p>
          </article>

          <article className="hobby-card">
            <h2>E-sport</h2>
            <p>Pelimaailmassa pidän Counter-Strikesta. Se vaatii taktista ajattelua, tiimityötä ja nopeaa reagointia.</p>
            <a className="link-button" href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="_blank" rel="noreferrer">
              Counter-Strike Steamissä
            </a>
          </article>
        </section>
      </main>
    </>
  )
}

export default HobbiesPage
