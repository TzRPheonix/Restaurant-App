import "./Contact.css"
import React from "react";

export default function Home() {
  return (
    <div className="contactContainer">
        <div className="formContainer">
            <h2>Contact</h2>
            <form>
                <div className="formGroup">
                    <label htmlFor="nom">Nom:</label>
                    <input type="text" id="nom" name="nom" />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="formGroup">
                    <label htmlFor="sujet">Sujet:</label>
                    <input type="text" id="sujet" name="sujet" />
                </div>
                <div className="formGroup">
                    <label htmlFor="contenu">Contenu:</label>
                    <textarea id="contenu" name="contenu" />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
        <div className="mapContainer">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.938031174665!2d3.149281515221969!3d50.73162337951114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2e6af146444f7%3A0xd1a2a4a4e622bc14!2s297%20Chauss%C3%A9e%20Fernand%20Forest%2C%2059200%20Tourcoing%2C%20France!5e0!3m2!1sen!2sus!4v1658093583938!5m2!1sen!2sus"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"/>
            <p>297 Chau. Fernand Forest, 59200 Tourcoing, France</p>
            <p>N° tel : 03 20 23 84 65</p>
        </div>
    </div>
);
};
