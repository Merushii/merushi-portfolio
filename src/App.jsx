import { useState } from 'react'
import './App.css'

function App() {
  const [isShowMenu, setisShowMenu] = useState(false)
  const showMenu = () =>{
    setisShowMenu(!isShowMenu)
  }

  return (
    <>
      <main className="container">

        <header>
          <button className="go--up" type="button">
              <a href="#"><i className='bx bx-up-arrow-alt'></i></a>
            </button>

            <div className="navbar--menu__icon">
              <button onClick={showMenu} type = "button" className="navbar--list">
                <i className="bx bx-menu button--icon"></i>
              </button>
            </div>

          {isShowMenu ? <nav className="container__nav-web">
              <a href="#home">Home</a>
              <a href="#about">Acerca de Mí</a>
              <a href="#habilities">Mis habilidades</a>
              <a href="#experience">Experiencia</a>
              <a href="#portfolio">Portafolio</a>
              <a href="#contact">Contacto</a>
          </nav> : <p></p>}

          <nav className="container__nav-web-desktop">
              <a href="#home">Home |</a>
              <a href="#about">Acerca de Mí |</a>
              <a href="#habilities">Mis habilidades |</a>
              <a href="#experience">Experiencia |</a>
              <a href="#portfolio">Portafolio |</a>
              <a href="#contact">Contacto</a>
          </nav>

          <div className="container__profile-card" id="home">
            <div className="container__profile-card-person">
              <img loading="lazy" src='\images\youwu.jpg'/>
              <h3>Hola, soy Mercedes</h3>
              <h1>Diseñadora y desarrolladora web</h1>
            </div>

            <div className="container__profile-card__icons">
              <a href="https://www.linkedin.com/in/mercedes-flores-moreno-71524513a/" target='_blanket'><i className='bx bxl-linkedin-square'></i></a>
              <a href="https://github.com/Merushii" target='_blanket'><i className='bx bxl-github'></i></a>
              <a href="mailto:pikapikagow@gmail.com" target='_blanket'><i className='bx bxs-envelope' ></i></a>
            </div>
          </div>
        </header>

        <section className="container__section-about" id="about">
          <h2>Acerca de mí</h2>
          <p>
            ¡Hola! Mi nombre es Mercedes, soy desarrolladora web Full-Stack, con conocimientos también en Python, desarrollo en android, java, etc. Ya que estoy haciendo mi carrera en Ingeniería en Tecnología de Software. Actualmente cuento con 20 años. Un gusto que te puedas pasear por acá, donde puedo mostrarte mi trayectoria :D.
          </p>
        </section>

        <section className="container__section-habilities" id="habilities">
          <h2>Mis habilidades</h2>
          
          <div className="container__section-habilities__icons">
            <i className='bx bx-desktop'><p>Web Full Stack Developer</p></i>

            <i className='bx bxl-android' ><p>Android Developer</p></i>

            <i className='bx bx-message-rounded-dots'>
              <p>Inglés B2</p>
            </i>
          </div>
        </section>

        <section className="container__section-experience" id="experience">
          <h2>Experiencia</h2>
          <div className="container__section-experience__experiences">
            <a href="https://certificates.academlo.com/en/verify/74896771684443" target='_blanket'>Certificado Academlo Módulo de Fundamentos</a>
            <br />
            <br />
            <a href="https://certificates.academlo.com/en/verify/93747101225403" target='_blanket'>Certificado de Academlo de Desarrollo de Aplicaciones web con React</a>
            <br />
            <br />
            <a href="https://certificates.academlo.com/en/verify/12008489546102" target='_blanket'>Academlo Certificado Back-end Node</a>
            <br />
            <br />
            <a href=""></a>
          </div>
        </section>

        <section className="container__section-portfolio" id="portfolio">
          <h2>Portafolio</h2>
          <div className="container__section-portfolio__img">
            <a href="https://coruscating-salamander-ba0d3f.netlify.app" target='_blanket'><img src="images/weather-app.png" alt="" /></a>

            <a href="https://steady-fairy-353e60.netlify.app" target='_blanket'><img src="images/perfume.png" alt="" /></a>

            <a href="https://jovial-croquembouche-dde99c.netlify.app" target='_blanket'><img src="images/users-crud.png" alt="" /></a>

            <a href="https://adorable-sprinkles-cd9752.netlify.app" target='_blanket'><img src="images/rick-morty.png" alt="" /></a>

            <a href="https://thriving-bubblegum-7d58f9.netlify.app/pokedex" target='_blanket'><img src="images/pokedex.png" alt="" /></a>

            <a href="https://creative-heliotrope-a15d40.netlify.app" target='_blanket'><img src="images/portfolio.png" alt="" /></a>
          </div>

          <h3>Repositorios</h3>
          <a href="https://github.com/Merushii/weather-app.git" target='_blanket'><i className='bx bxl-github'>Weather App</i></a>
          <br />
          <a href="https://github.com/Merushii/pokedex.git" target='_blanket'><i className='bx bxl-github'></i>Pokedex</a>
          <br />
          <a href="https://github.com/Merushii/portafolio7.git" target='_blanket'><i className='bx bxl-github'></i>Portafolio</a>
          <br />
          <a href="https://github.com/Merushii/rick-and-morty.git" target='_blanket'><i className='bx bxl-github'>Rick And Morty API</i></a>
          <br />
          <a href="https://github.com/Merushii/users-api.git" target='_blanket'><i className='bx bxl-github'></i>Users API</a>
        </section>

        <footer id='contact'> 
          <h2>Contacto</h2>
          
          <div className="container__section-contact__email">
            <div className="icon">
              
            </div>
            <p>Email</p>
            <a href='mailto:pikapikagow@gmail.com'>pikapikagow@gmail.com</a>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
