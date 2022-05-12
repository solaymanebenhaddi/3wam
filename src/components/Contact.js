import React from 'react'
import { Container,Form,Button } from 'react-bootstrap'

function Contact() {
  return (
    //<!-- ======= Contact Section ======= -->
    <section id="contact" className="contact section-bg">
      <Container data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p className="fs-2">Tu as d’autres questions ?<br/>
            Nos équipes sont là pour y répondre.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Notre Addresse :</h3>
              <p>3W Academy Maroc, 1er étage, Avenue des FAR, Tour des habous, Casablanca</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email :</h3>
              <p>contact@example.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>TelePhone :</h3>
              <p><span>Casablanca</span>(+212) 707-143-777</p>
              <p><span>Rabat</span>(+212) 665-279-092</p>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-6 ">
            <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6646.679959003054!2d-7.615151416700404!3d33.59648221642487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3731f922c01%3A0x5e46c1e1fc83142d!2s3W%20Academy%20Maroc!5e0!3m2!1sfr!2sma!4v1650768300276!5m2!1sfr!2sma" frameBorder="0" style={{'border':0, 'width': '100%', 'height': '384px',}} allowFullScreen title="maps"></iframe>
          </div>

          <div className="col-lg-6">
            <Form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="input" name="name" className="form-control"  placeholder="Nom et Prenom" required />
                  </Form.Group>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" name="enail" className="form-control"  placeholder="Enter Your E-mail" required />
                  </Form.Group>
                </div>
              </div>
              <div className="form-group mt-3">
              <Form.Group className="mb-3" controlId="sujet">
                <Form.Control type="input" name="sujet" className="form-control"  placeholder="Sujet" required />
              </Form.Group>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Votre Message a été bien envoyer. Merci a vous !</div>
              </div>
              <div className="text-center"><Button variant="primary" type="submit">
                Envoyer Message
              </Button></div>
            </Form>
          </div>

        </div>

      </Container>
    </section>
    //<!-- End Contact Section -->
  )
}

export default Contact