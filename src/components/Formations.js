import React from 'react'
import { Container } from 'react-bootstrap'

function Formations() {
  return (
    // <!-- ======= Services Section ======= -->
    <section id="formations" className="services section-bg">
      <Container data-aos="fade-up">

        <div className="section-title">
          <h2>NOS FORMATIONS</h2>
          <h3>Pourquoi nos <strong>en développement informatique
            sont si uniques</strong></h3>
        </div>

        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch border-rounded" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-blue">
              <div className="icon">
                <i><ion-icon name="rocket"></ion-icon></i>
              </div>
              <h4><a href="">Bootcamp intensif</a></h4>
              <p>Nos formations spécialisées et de courte durée te permettent d’acquérir les compétences clés pour intégrer le marché en un temps record, en allant droit à l’essentiel</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-orange ">
              <div className="icon">
                
                <i><ion-icon name="pulse"></ion-icon></i>
              </div>
              <h4><a href="">90% de pratique</a></h4>
              <p>Du 1er au dernier jour de formation, tu vas travailler sur des projets réels  afin de construire ton portfolio et prouver aux recruteurs que tu es compétent.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box iconbox-pink">
              <div className="icon">
                
                <i><ion-icon name="person"></ion-icon></i>
              </div>
              <h4><a href="">Formateurs</a></h4>
              <p>Nos formateurs sont des Développeurs Seniors passionnés par le métier et par la transmission des compétences.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center pt-4">
          <button className="btn p-4 align-items-center"><ion-icon className="fs-1 p-0 m-0" name="power"></ion-icon><h5 className="p-0 m-0">   Je découvre les formations</h5> </button>
          </div>
        </div>

      </Container>
    </section>
    // <!-- End Services Section -->
  )
}

export default Formations