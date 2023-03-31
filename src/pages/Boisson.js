import "./Boisson.css"
import React from "react";
import Boisson1 from '../imgBoisson/Boisson1.png';
import Boisson2 from '../imgBoisson/Boisson2.png';
import Boisson3 from '../imgBoisson/Boisson3.png';
import Boisson4 from '../imgBoisson/Boisson4.png';
import Boisson5 from '../imgBoisson/Boisson5.png';
import {v4 as uuidv4} from 'uuid';

export default function Home() {
  return (
    <div>
      <h1>Boisson</h1>
      <div className="boissonDisplay">
        <img key={uuidv4()} src={Boisson1} alt="Boisson 1" />
        <img key={uuidv4()} src={Boisson2} alt="Boisson 2" />
      </div>
      <br></br>
      <div className="boissonDisplay">
        <img key={uuidv4()} src={Boisson3} alt="Boisson 3" />
        <img key={uuidv4()} src={Boisson4} alt="Boisson 4" />
        <img key={uuidv4()} src={Boisson5} alt="Boisson 5" />
      </div>
    </div>
  );
};
