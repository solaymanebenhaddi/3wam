import React from 'react';

const Hero = () => {
    return (
        <>
         <section id="hero" className="d-flex align-items-center">

<div className="container-fluid" data-aos="fade-up">
  <div className="row justify-content-center">
    <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
     <h1 className="text-light">Ta carrière dans la Tech commence ici.</h1>
      <p className="shadow-sm p-3 mb-5 bg-transparent rounded text-dark">3W Academy est le spécialiste des <strong> formations accélérées en développement web avec un objectif d’insertion rapide sur le marché.</strong>

      En présentiel ou en ligne, en cours du jour ou du soir, 250+ jeunes ont déjà réussi le défi.
      <br/>

      Si toi aussi tu veux concrétiser tes ambitions et prendre ton avenir en main – Marhba bik ! </p>
      <div><a href="#about" className="btn-get-started scrollto">Get Started</a></div>
    </div>
    <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
      <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>
<svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
  <defs>
    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
  </defs>
  <g className="wave1">
    <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"/>
  </g>
  <g className="wave2">
    <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"/>
  </g>
  <g className="wave3">
    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"/>
  </g>
</svg>
</section>
        </>
    );
}

export default Hero;
