import React from 'react'
import { Container } from 'react-bootstrap'

function Faq() {
  return (
    //<!-- ======= Frequently Asked Questions Section ======= -->
    <section id="faq" className="faq">
      <Container data-aos="fade-up">

        <div className="section-title">
          <h2>Questions fréquentes</h2>
          {/* <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
               Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit 
               in iste officiis commodi quidem hic quas.</p> --> */}
        </div>

        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Qui est la 3W Academy Maroc ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                <p>
                  La 3W Academy, l’école de référence dans les métiers du digital, a ouvert ses portes au Maroc en 2018. Notre formation phare est le Bootcamp, une formation innovante, courte et intensive, qui s’adresse aux étudiants, salariés et chercheurs d’emploi souhaitant se transformer en Développeurs WEB en seulement 4 mois. La 3W Academy est labellisée en France “Grande École du Numérique” et délivre des certifications reconnue par l’Etat Français. Notre mission est de profiter de l’expansion mondiale du secteur IT pour créer des opportunités socio-économiques : plus de compétitivité pour les entreprises IT et plus d’emplois pour les jeunes marocains.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Une Formation en mode Bootcamp, c’est quoi ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Le Bootcamp est une mode de formation intensive et accélérée de trois à six mois qui simule les conditions de travail dans le milieu professionnel afin de vous permettre de développer simultanément et de manière efficace toutes les zones de compétence requises pour réussir dans les métiers du digital : compétences techniques, soft-skills, méthodologie et éthique de travail, culture métier, capacité à s’auto-former… et ce en se basant en grande partie sur de la pratique travers des projets des études de cas pratiques.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Peut-on devenir développeur Web en 4 mois ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Oui, c’est possible de devenir un développeur Web, en 4 mois, capable d’être embauché en tant que junior à la fin de votre formation chez la 3W Academy. De ce fait, le programme de formation demande énormément de travail et d’investissement. Nos apprenants font 50 à 60h de travail par semaine, en salle de cours et à la maison. Vous n’allez donc pas devenir développeur Web en 4 mois si vous codez une heure par jour !
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Qui sont les formateurs chez la 3W Academy Maroc ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Nos formateurs ou Team Leaders comme on les appelle à la 3WA, sont de très bon développeurs professionnels ayant plus de deux ans d’expérience en agence digitale, en start-up ou en freelance où ils ont travaillé sur pleins de projets à base des technologies qu’ils enseignent. Ce qui leur permet d’enseigner et de coacher les participants à partir de leurs proximité du marché d’emploi. Les Candidats-Formateurs passent une formation des “Formateurs” où ont met à leur disposition des plateformes et ressources dédiées à les préparer à l’animation des cours. Après avoir réussi la formation, les candidats-Formateurs deviennent des coachs assistants dans nos classe afin de leur donner l’occasion de se familiariser petit à petit avec l’ambiance d’une classe 3WA. Les Candidats-Formateurs passent un dernier entretien de validation avant de prendre en charge une classe 3WA.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Pourquoi un Bootcamp plutôt qu’une formation classique ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Les formations classiques mettent l’accent sur le côté théorique et durent beaucoup plus longtemps. Un bootcamp, par contre, vous permet de développer des compétences réelles et sortir avec un portfolio solide à la fin d’un parcours qui dure de trois à six mois. Les programmes de formation des Bootcamps sont purement pratiques et en parfaite adaptation avec les besoins des recruteurs. Également, les formateurs sont des développeurs professionnels qui ont avant tout pratiqué en entreprise ce qu’ils transmettent aux apprenants et utilisent leur vécu opérationnel pour illustrer leur cours.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Quelles sont les débouchés de vos formations ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Les métiers du développement informatique ont de quoi séduire : ils s’accaparent plus de 13% de part moyenne des offres d’emploi au Maroc. Le secteur apporte des conditions d’emploi favorables et une insertion dans l’emploi stable et durable. Sur Casablanca uniquement, il existe un besoin de 2.000 à 3.000 développeurs juniors par an. Nos lauréats trouvent un emploi en tant que développeur WEB junior dans différentes structures : de la startup locale aux grands groupes, en passant par les PME et les agences digitales. Ils travaillent en tant que salarié, freelance ou les deux en même temps !
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Je n'ai jamais touché au code auparavant, est-ce fait pour moi ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Que vous ayez un Background en développement web ou pas, nos formations ne nécessitent aucun prérequis technique. Par contre, nous allouons une semaine “ La semaine 0” à des tests de logique et à l’évaluation de votre motivation et engagement à fournir l’effort qu’il faut pour bien réussir la formation. La semaine 0 est une occasion pour vous aussi de prendre goût de notre méthode de formation avant de commencer l’aventure ensemble.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Comment se fait l’évaluation des acquis des apprenants ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Le mode Bootcamp permet une évaluation quotidienne à travers les livrables de la journée. Mais n’empêche qu’à cela s’ajoute une série d’évaluations technique et Soft Skills qui nous permet d’avoir une idée de près de l’évolution de l’apprentissage de chaque participant.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Quelle est la différence entre une formation en téléprésentiel et une formation en ligne classique ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Les formations en téléprésentiel n’ont rien à voir avec les formations en ligne classiques comme les MOOCs par exemple. Le format téléprésentiel fait en sorte que la formation se déroule à distance, mais en interactivité permanente entre le formateur et les apprenants. Les cours se font en direct, le formateur échange avec les apprenants et les apprenants échangent entre eux. En d’autres termes, il s’agit d’une formation présentielle, mais en télétravail.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">De quoi j’ai besoin pour suivre une formation en téléprésentiel ? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Pour suivre une formation en téléprésentiel dans de bonnes conditions, il faut un débit minimum de 5 Mbps. Quant à votre ordinateur, il est nécessaire d’avoir un processeur i5, 8 Go de RAM et un disque dur de 256 Go. Mais si vous avez plus, c’est toujours mieux. Pour le reste, un micro-casque et une webcam sont de rigueur.
                </p>
              </div>
            </li>

          </ul>
        </div>

      </Container>
    </section>
    //<!-- End Frequently Asked Questions Section -->
  )
}

export default Faq