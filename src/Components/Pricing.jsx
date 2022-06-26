import React from 'react'

export default function Pricing() {
  return (
    <div>
                <section className="section_2_6 my-5 pt-lg-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="d-flex justify-content-lg-center justify-content-center" data-aos="fade-right" data-aos-duration={3000}>
                  <img src="assets/img/sec3_img.png" alt="" className="w-75" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className data-aos="fade-left" data-aos-duration={3000}>
                  <p className="text-white text-lg-start text-center fs_small2 pt-4"><b>Pricing:</b></p>
                  <ul className="text-white">
                    <li>1-500 priced at 0.015</li>
                    <li>501-2000 priced at 0.0175</li>
                    <li>2001-3500 priced at 0.02</li>
                    <li>3501-6000 priced at 0.0225</li>
                    <li>6001-8500 priced at 0.025</li>
                    <li>8501-10,000 priced at .0275</li>
                  </ul>
                  <h2 className="text-white h1_banner text-lg-start text-center pt-5">
                    Link to Physical Product Sales
                  </h2>
                  <p className="text-white text-lg-start text-center fs_small2 pt-4">
                    40% of profit from the book and games will be used to purchase ETH. This will be turned over to the DOA to strengthen the community, achieve goals or have community lotteries. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
