import React from 'react'

export default function Team() {
  return (
    <div>
          <section className="section_9_5 my-5 pt-lg-5" id="team">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h3 className="text-white h1_banner  text-lg-center text-center" style={{textAlign: 'center'}}>
                  Team (Principal Artists)
                </h3>
              </div>
              <div className="col-lg-12">
                <div className="d-flex justify-content-center " style={{textAlign: 'center'}}>
                  <p className="text-white fs_small text-lg-center w-75">
                    The team is composed of independent companies/artists who hold project supervision
                    responsibilities as well as production duties. This is reflected in the budget allocation.
                    The “producers” are operating for $0 because they are also the production staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-4">
            <div className="d-flex justify-content-lg-evenly justify-content-center  flex-wrap mt-5">
              <div className="w-40 my-lg-0 my-2">
                <div className="d-flex justify-content-center">
                  <img className="w-25" src="assets/img/fuse relay 350 3_edited.webp" data-aos="flip-up" data-aos-duration={3000} alt="" />
                </div>
                <h6 className="text-white text-center h1_banner mt-2">Stephen Atkins </h6>
                <p className="text-center text-muted h1_banner fs_small">Producer, Writer and Character Design</p>
                <p className="text-center text-white h1_banner fs_small pt-3">Stephen is a producer, writer, director
                  and devised theatre practitioner based in BC, Canada, in the faculty of Capilano University.
                  Since 1995 he has been developing web-based projects from the very first days of HTML 1.0. He
                  also carries out his performance and film production projects in the UK and Australia. With over
                  30 years of experience in the creative industries, Stephen brings his knowledge of storytelling,
                  multimedia development and audience engagement to this project. He trained in acting, directing
                  for theatre and writing for film in Canada at Simon Fraser University. He recently completed a
                  PhD in acting pedagogy multimodal learning at the University of Kent, Canterbury, UK.</p>
              </div>
              <div className="w-40 my-lg-0 my-2">
                <div className="d-flex justify-content-center">
                  <img className="w-25 " src="assets/img/fuse relay 350 2_edited.webp" data-aos="flip-right" data-aos-duration={3000} alt="" />
                </div>
                <h6 className="text-white text-center h1_banner mt-2">Charity Russel </h6>
                <p className="text-center text-muted h1_banner fs_small">Book Illustrator</p>
                <p className="text-center text-white pt-3 h1_banner fs_small">Charity is an award winning illustrator of
                  multiple children’s literature books. She completed her Masters Degree in Illustration and
                  Design at the University of Sunderland, UK with a Distinction in 2012 and a few years prior
                  gained an Illustration Bachelor's Degree from Falmouth University College, U.K. Her work all
                  begins with sketches in traditional pencil and ink, then they are digitally completed,
                  amalgamating the textures created with the original pencil and ink drawings. She is originally
                  from Zambia and now lives in Bath, UK.</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
