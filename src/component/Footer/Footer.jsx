import React from 'react'

export default function Footer() {
  return (
    <footer className="text-white text-center">
    <div className="experience py-5">
        <div className="container px-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-12">
                    <div className="userDetails">
                        <h3 className="mb-4">LOCATION</h3>
                        <p className="mb-0">2215 John Daniel Drive</p>
                        <p className="mb-0">Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="userDetails">
                        <h3 className="mb-4">AROUND THE WEB</h3>
                        <div className="social-icon d-flex justify-content-center">
                            <div className="icon d-flex align-items-center justify-content-center mx-1">
                                <a href="" className="text-white"><i className="fa-brands fa-facebook-f fa-1x fa-fw"></i></a>
                            </div>
                            <div className="icon d-flex align-items-center justify-content-center mx-1">
                                <a href="" className="text-white"><i className="fa-brands fa-twitter fa-1x fa-fw"></i></a>
                            </div>
                            <div className="icon d-flex align-items-center justify-content-center mx-1">
                                <a href="" className="text-white"><i className="fa-brands fa-linkedin-in fa-1x fa-fw"></i></a>
                            </div>
                            <div className="icon d-flex align-items-center justify-content-center mx-1">
                                <a href="" className="text-white"><i className="fa-brands fa-dribbble fa-1x fa-fw"></i></a>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="userDetails">
                        <h3 className="mb-4">ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="end text-center py-4">
        <div className="container">
            <p className="mb-0">Copyright © Your Website 2021</p>
        </div>
    </div>
</footer>   
  )
}
