import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

export default function About() {
    return (
        <div>   <section className="section_3 my-5 pt-lg-5" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className data-aos="fade-left" data-aos-duration={3000}>
                            <h2 className="text-white h1_banner text-lg-start text-center pt-5">
                                About
                            </h2>
                            <p className="text-white text-lg-start text-center fs_small2 pt-4"><b>The Community</b></p>
                            <p className="text-white text-lg-start text-center fs_small2 pt-4">
                                Powered by a team of educators, artists and designers, our project will help children and adults develop skills to manage anxiety and develop life-long skills.
                            </p>
                            <a href="#" className="btn btn-outline-success text-white fs-16 px-4 rounded_border border_green h1_banner">Join our Discord</a>
                            <p className="text-white text-lg-start text-center fs_small2 pt-4">
                                Or follow us on:
                            </p>
                            <ul className="text-white">
                                <li><a href="https://www.facebook.com/thinkyblinkymonsters/"><BsFacebook className=" text-white fs-5" /></a></li><a href="https://www.facebook.com/thinkyblinkymonsters/">
                                </a>
                                <li><a href="https://www.facebook.com/thinkyblinkymonsters/" /><a href="https://twitter.com/Thinkyblinky_mo"><BsTwitter className=" text-white fs-5" /></a></li>
                                <li><a href="https://www.instagram.com/thinkyblinkymonstersnft/"><BsInstagram className=" text-white fs-5" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-lg-center justify-content-center" data-aos="fade-right" data-aos-duration={3000}>
                            <img src="assets/img/img_sec4.png" alt="" className="w-60" />
                        </div>
                    </div>
                </div>
            </div>
        </section></div>
    )
}
