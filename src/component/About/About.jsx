import React, { useEffect } from 'react'
import Arrow_White from '../Arrow_White/Arrow_White';

export default function About() {
  useEffect(() => {
      document.title = "About";
    }, []);
  return (
    <section id="about" className="py-5">
    <div className="about-content text-center">
        <h2>ABOUT</h2>
        <Arrow_White></Arrow_White>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-4 ms-auto">
                <div className="about-info">
                    <p className="text-white fs-2">Freelancer is a free bootstrap theme created by Route.
                        The download includes the complete source files including HTML,
                         CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                </div>
            </div>
            <div className="col-lg-4 me-auto">
                <div className="about-info">
                    <p className="text-white fs-2">You can create your own custom avatar for the masthead,
                         change the icon in the dividers, and add your email address to the contact
                          form to make it fully functional!
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

