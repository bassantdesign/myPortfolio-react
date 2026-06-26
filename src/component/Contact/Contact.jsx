import React, { useEffect } from 'react'
import Arrow_Black from '../Arrow_Black/Arrow_Black';

export default function Contact() {
  useEffect(() => {
      document.title = "Contact";
    }, []);
  return (
    <section id="contact" className="py-5">
    <div className="contact_content text-center">
        <h2>CONTACT ME</h2>
        <Arrow_Black></Arrow_Black>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-7 mx-auto">
                <form>
                    <div className="control-group">
                        <div className="form-group controls mb-0 pb-2">
                            <label className="fs-4 one">Name</label>
                            <input className='form-control' type="text" />
                        </div>
                        <div className="form-group controls mb-0 mt-3 pb-2">
                            <label className="fs-4 one">Email Address</label>
                            <input className='form-control' type="text" />
                        </div>
                        <div className="form-group controls mb-0 mt-3 pb-2">
                            <label className="fs-4 one">Phone Number</label>
                            <input className='form-control' type="text" />
                        </div>
                        <div className="form-group controls mb-0 mt-3 pb-2">
                            <label className="fs-4 one">Message</label>
                            <textarea className="form-control" rows="5"></textarea>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-lg py-3 px-4 mt-3" type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}
