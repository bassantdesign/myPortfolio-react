import React, { useEffect, useState } from 'react'
import Arrow_Black from '../Arrow_Black/Arrow_Black';
import cabin from '../../assets/images/cabin.png'
import cake from '../../assets/images/cake.png'
import circus from '../../assets/images/circus.png'
import game from '../../assets/images/game.png'
import safe from '../../assets/images/safe.png'
import submarine from '../../assets/images/submarine.png'

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  const [selectedItem, setSelectedItem] = useState(null);

  const images = [
    { src: cabin, title: "LOG CABIN" },
    { src: cake, title: "TASTY CAKE" },
    { src: circus, title: "CIRCUS TENT" },
    { src: game, title: "CONTROLLER" },
    { src: safe, title: "LOCKED SAFE" },
    { src: submarine, title: "SUBMARINE" },
  ];
  return (
 <section id="portfolio" className="py-5">
    <div className="portfolio_content text-center">
        <h2>PORTFOLIO</h2>
        <Arrow_Black></Arrow_Black>
    </div>
    <div className="container px-5">
        <div className="row g-5">
          {images.map((item, index) => (
          <div className="col-lg-4" key={index}>
            <div className="porfolio-info position-relative">
              <img src={item.src} className="w-100 rounded-3"
              
            />
            <div className="overlay position-absolute top-0 left-0" 
            onClick={() => setSelectedItem(item)}
            style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
            </div>
          </div>
        ))}
        </div> 

        {selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content text-center">
            <h2>{selectedItem.title}</h2>
            <Arrow_Black></Arrow_Black>
            <img src={selectedItem.src} className="w-100 my-4 rounded-3" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
            <button
              className="btn btn-secondary rounded-3"
              onClick={() => setSelectedItem(null)}
            >
              <i class="fa-sharp fa-solid fa-xmark"></i>
              Close Window
            </button>
          </div>
        </div>
      )}     
    </div>
</section>
  )
}