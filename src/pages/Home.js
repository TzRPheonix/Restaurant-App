import './Home.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fond1 from '../imgBackground/fond1.jpg'
import fond2 from '../imgBackground/fond2.jpg'
import fond3 from '../imgBackground/fond3.jpg'
import photoDisplay from '../logo/photoDisplay.png'
import olivier from '../logo/olivier.png'

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div>
      <div className="home">
        <div className="carousel-wrapper">
          <Slider {...settings}>
            <div className="image-container">
              <img src={fond1} alt="fond 1" />
            </div> 
            <div className="image-container">
              <img src={fond2} alt="fond 2" />
            </div>
            <div className="image-container">
              <img src={fond3} alt="fond 3" />
            </div>
          </Slider>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div className="description">
        <h2>Bienvenue à La table de Chantal</h2>
        <p>Notre restaurant est situé au nord de Tourcoing et propose des plats du terroir dans une bonne ambiance d'auberge.</p>
        <p>Venez nous rendre visite et goûter à notre vin réputé dans toute la région.</p>
      </div>
      <div className="flexbox">
        <img src={photoDisplay} alt="Photo Display" className="displayPhoto"/>
        <img src={olivier} alt="Photo Olivier" className="displayPhoto"/>
      </div>
      <div className="description">
        <p>Le service à La Table de Chantale est également de première classe, avec une équipe de professionnels passionnés par leur métier.</p>
        <p>Cela est en grande partie grâce au talent du chef Olivier passionner par la cuisine traditionnelle.</p>
      </div>
      <br></br>
      <hr></hr>
    </div>
  );
};
