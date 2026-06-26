import React from 'react'
import avatarImage from'../../assets/images/avataaars.svg'
import Arrow_White from '../Arrow_White/Arrow_White'

export default function Home() {
  return (
    <div id="home" className="py-5">
        <div className="container">
            <div className="img-profile d-flex flex-column align-items-center text-white text-center">
                <img src={avatarImage} className="img-profile mb-5"  alt="" />
                <h1>START ANGULAR</h1>
                <Arrow_White></Arrow_White>
                <p className="fs-4">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </div>
  )
}
