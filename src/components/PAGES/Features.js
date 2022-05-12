import React from 'react'
import { Container } from 'react-bootstrap'

function Features() {
  return (
    // <!-- ======= Features Section ======= -->
    <section id="features" className="features">
      <Container data-aos="fade-up">
      <div className="section-title">
          <h2>Features</h2>
          <p>La 3W Academy, école de référence dans le métier du digital, fête ses 1 an d’existence au Maroc sous le thème de : l'inclusion par le numérique. Alors qu'une nouvelle décennie commence, ce moment marque l'engagement de L’académie du digital  pour un impact durable sur l'employabilité des jeunes au Maroc.</p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
            <div className="icon-box mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
              <ion-icon name="ribbon"></ion-icon>
              <h4>HARD WORK</h4>
              <p>5 an d’existence. +1000 lauréats formés 100% insérés, avec Un taux d’insertion (Stage, CDD, CDI, Auto-entrepreneuriat) de 100%.</p>
            </div>
            <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="200">
              <ion-icon name="sparkles"></ion-icon>
              <h4>La Marque de Formation Degital</h4>
              <p>1ère école de formation “coding bootcamp” en France depuis 2012, labellisée “Grande École du Numérique”</p>
            </div>
            <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="300">
              <ion-icon name="location"></ion-icon>
              <h4>Nos Locaux</h4>
              <p>Présente dans 2 villes du royaume au Casablanca, et aussi a Rabat avec attention d'ajouter plus de ville a l'avenir.</p>
            </div>
            <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="400">
              <ion-icon name="heart"></ion-icon>
              <h4>Socaile </h4>
              <p>Une mission citoyenne développée à travers de nombreuses actions : caravanes d’orientation et d'initiation, prêts d'honneur à des étudiants de milieu social défavorisé +1000 jeunes marocains initiés gratuitement au coding…</p>
            </div>
          </div>
          <div className="image col-lg-6 order-1 order-lg-2 " data-aos="zoom-in" data-aos-delay="100">
            <img src="assets/img/features.svg" alt="" className="img-fluid"/>
          </div>
        </div>

      </Container>
    </section>
    //* <!-- End Features Section --> */
  )
}

export default Features