import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Appartement.css';

function Appartement({ id, imageUrl, appartement_card_title }) {
  return (
    <div className='Appart'>
      <NavLink to={`/Appartements/${id}`}>
        <img className='image_appartement' src={imageUrl} alt="image_appartement" />
        <div className='Appartement_txt'>{appartement_card_title}</div>
      </NavLink>
    </div>
  );
}

export default Appartement;
