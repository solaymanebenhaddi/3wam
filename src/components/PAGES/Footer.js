import React from 'react'
import { Container,Form } from 'react-bootstrap'

function Footer() {
    return (
        // <!-- ======= Footer ======= -->
        <footer id="footer">

            <div className="footer-top">
                <Container>
                    <div className="row">
                         
                         <div className="col-lg-4 col-md-6 footer-contact">
                            <h3>3W Academie</h3>
                            <p>
                                3W Academy Maroc, 1er étage,<br />
                                Avenue des FAR, Tour des habous,<br />
                                Casablanca<br /><br />
                                <strong>Phone :</strong>Casablanca<br />
                                +212 707-143-777<br/>
                                    <strong>Phone :</strong>Rabat<br />
                                +212 665-279-092<br/>
                                <strong>Email:</strong> info@example.com<br />
                            </p>
                        </div>
                          
                        <div className="col-lg-4 col-md-6 footer-links">
                                    <h4>Links</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right"></i> <a href="/#">L’académie</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Formations</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="/#">News & Blog</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Espace Entreprises</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Contact</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Terms of service</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Privacy policy</a></li>
                                    </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                                    <h4>SUIVEZ Notre Newsletter :</h4>
                                    <p>Restez informé sur toutes nos actualités et évènements de notre 3W academy Maroc</p>
                                    <Form action="" method="post">
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Control type="email" name="enail" className="form-control" placeholder="Enter Your E-mail" required />
                                        </Form.Group>
                                    </Form>
                        </div>

                    </div>
                </Container>
            </div>

            <Container>

                <div className="copyright-wrap d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>3WA</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                          <h6>Designed by Solaymane Ben Haddi</h6>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="/#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="/#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="/#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        <a href="/#" className="youtube"><i className="bx bxl-youtube"></i></a>
                    </div>
                </div>

            </Container>
        </footer>
    //<!-- End Footer --> 
  )
}

export default Footer