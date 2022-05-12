import React from 'react'
import { Container } from 'react-bootstrap'

function About() {
  return (
    // <!-- ======= About Section ======= -->
    <section id="about" className="about">
      <Container>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2 text-center justify-content-center" data-aos="zoom-in" data-aos-delay="150">
              
            <iframe className="video" src="https://www.youtube.com/embed/chYDVoGO7Qw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>La 3W Academy Maroc</h3>
            <p className="fst-italic">
              La 3W Academy, l’école de référence dans les métiers du digital, a ouvert ses portes au Maroc en 2018. Notre formation phare est le Bootcamp, une formation innovante, courte et intensive, qui s’adresse aux étudiants, salariés et chercheurs d’emploi souhaitant se transformer en Développeurs WEB en seulement 4 mois.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> La 3W Academy est labellisée en France “Grande École du Numérique” et délivre des certifications reconnue par l’Etat Français.</li>
              <li><i className="bi bi-check-circle"></i>Notre mission est de profiter de l’expansion mondiale du secteur IT pour créer des opportunités socio-économiques</li>
              <li><i className="bi bi-check-circle"></i>plus de compétitivité pour les entreprises IT et plus d’emplois pour les jeunes marocains.</li>
            </ul>
            <a href="/#" className="read-more">Read More <i className="bi bi-long-arrow-right"></i></a>
          </div>
        </div>

      </Container>
    </section>
    // <!-- End About Section -->
  )
}

export default About