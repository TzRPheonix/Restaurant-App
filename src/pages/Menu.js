import './Menu.css';
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import entree1 from '../imgRepas/entree1.png'
import entree2 from '../imgRepas/entree2.png'
import entree3 from '../imgRepas/entree3.png'
import plat1 from '../imgRepas/plat1.jpg';
import plat2 from '../imgRepas/plat2.jpg';
import plat3 from '../imgRepas/plat3.jpg';
import dessert1 from '../imgRepas/dessert1.jpg';
import dessert2 from '../imgRepas/dessert2.jpg';
import dessert3 from '../imgRepas/dessert3.jpg';
import {v4 as uuidv4} from 'uuid';

export default function Menu() {
  const [selectedEntree, setSelectedEntree] = useState(null);
  const [selectedPlat, setSelectedPlat] = useState(null);
  const [selectedDessert, setSelectedDessert] = useState(null);

  const sliderRef = useRef(null);

  const entrees = [
    { id:uuidv4(), name: "Salade de tomates à l'andalouse", image: entree1, price: 10},
    { id:uuidv4(), name: "Salade de quinoa aux crevettes", image: entree2, price: 12},
    { id:uuidv4(), name: "Salade de tomates à la feta", image: entree3, price: 15},
  ];

  const plats = [
    { id:uuidv4(), name: "Saumon aux épices", image: plat1, price: 20},
    { id:uuidv4(), name: "Burger de poisson", image: plat2, price: 22},
    { id:uuidv4(), name: "Poulet tikka massala", image: plat3, price: 25},
  ];

  const desserts = [
    { id:uuidv4(), name: "Trianon", image: dessert1, price: 8},
    { id:uuidv4(), name: "Gâteau courgette chocolat", image: dessert2, price: 10},
    { id:uuidv4(), name: "Tiramisu framboises et amandes", image: dessert3, price: 12},
  ];

  const handleSelect = (item, type) => {
    if(item === "entree"){
      setSelectedEntree(type);
      sliderRef.current.slickNext();
    }
    else{
      if(item === "plat"){
        setSelectedPlat(type);
        sliderRef.current.slickNext();
      }
      else{
        if(item === "dessert"){
          setSelectedDessert(type);
        }
      }
    }
  };
  

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {entrees.map((entree) => (
          <div className="itemMenu" key={entree.id} onClick={() => handleSelect("entree", entree)}>
            <h3>{entree.name}</h3>
            <img src={entree.image} alt={entree.name} />
            <p>{entree.price}€</p>
          </div>
        ))}
        {plats.map((plat) => (
          <div className="itemMenu" key={plat.id} onClick={() => handleSelect("plat", plat)}>
            <h3>{plat.name}</h3>
            <img src={plat.image} alt={plat.name} />
            <p>{plat.price}€</p>
          </div>
        ))}
        {desserts.map((dessert) => (
          <div className="itemMenu" key={dessert.id} onClick={() => handleSelect("dessert", dessert)}>
            <h3>{dessert.name}</h3>
            <img src={dessert.image} alt={dessert.name} />
            <p>{dessert.price}€</p>
          </div>
        ))}
      </Slider>
  
      <div className="recap">
        <h2>Récapitulatif de la commande</h2>
        {selectedEntree && (
          <div>
            <h3>{selectedEntree.name}</h3>
            <button onClick={() => setSelectedEntree(null)}>Supprimer</button>
            <img
              onClick={() => handleSelect(selectedEntree, "entree")}
              src={selectedEntree.image}
              alt={selectedEntree.name}
            />
            <p>{selectedEntree.price}€</p>
            {console.log("ouiiii",selectedEntree)}
          </div>
        )}
        {selectedPlat && (
          <div>
            <h3>{selectedPlat.name}</h3>
            <button onClick={() => setSelectedPlat(null)}>Supprimer</button>
            <img
              onClick={() => handleSelect(selectedPlat, "plat")}
              src={selectedPlat.image}
              alt={selectedPlat.name}
            />
            <p>{selectedPlat.price}€</p>
          </div>
        )}
        {selectedDessert && (
          <div>
            <h3>{selectedDessert.name}</h3>
            <button onClick={() => setSelectedDessert(null)}>Supprimer</button>
            <img
              onClick={() => handleSelect(selectedDessert, "dessert")}
              src={selectedDessert.image}
              alt={selectedDessert.name}
            />
            <p>{selectedDessert.price}€</p>
          </div>
        )}
      </div>
    </div>
  );
}