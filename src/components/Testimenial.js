import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Container } from 'react-bootstrap';


// import required modules
import { Autoplay, Pagination } from "swiper";


function Testimenial() {
    return (
        <>
            <section id="testimonials" className="testimonials section-bg">
                <Container data-aos="fade-up">

                    <div className="section-title">
                        <h2>Ce que nos étudiants disent de nous</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className='swipper-wrapper'>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper"
                            >

                                <SwiperSlide><div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>

                                        Graphiste de formation, j’ai réussi à évoluer vers un poste UX Designer / Développeur Front-End grâce au Bootcamp Développeur WEB Full-Stack de la 3W Academy.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/rochid.png" className="testimonial-img" alt="" />
                                    <h3>Nabil Rochdi</h3>
                                    <h4>UX Designer / Développeur Front-End </h4>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        J’ai eu mon Bac+5, mais je n’arrivais pas à trouver un emploi. Grâce au programme JOB IN TECH de la 3W Academy, j’ai réussi à me reconvertir et à intégrer le secteur IT chez l’une des entreprises leader du marché.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/maryam.png" className="testimonial-img" alt="" />
                                    <h3>Nabila Abrak</h3>
                                    <h4>Développeur JAVA chez Capgemini</h4>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>

                                        Licencié de FST Mohammedia, mon choix d’orientation ne m’ayant pas satisfait, j'ai décidé de me réorienter vers Le développement web. Aujourd’hui, je travaille en tant que Développeur WEB freelance et coach/formateur à la 3WA.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/karim.png" className="testimonial-img" alt="" />
                                    <h3>Omar Assade</h3>
                                    <h4>Développeur Web Freelance et Coach</h4>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="testimonial-item">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                </div></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </Container>
            </section> {/*<!-- End Testimonials Section --> */}
        </>
    )
}

export default Testimenial