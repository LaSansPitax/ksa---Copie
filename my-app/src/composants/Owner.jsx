import React from 'react';
import '../styles/Owner.css'; // Assurez-vous d'avoir un fichier CSS pour styliser le composant

const Owner = ({ host, rating }) => {
  if (!host) return null;

  return (
    <div className="owner-container">
      <div className="owner-info">
        <div className='owner-name-container'>
          <h3 className="owner-name">{host.name}</h3>
        </div>
        <img className="owner-picture" src={host.picture} alt={`${host.name}`} />
      </div>

      <div className="owner-rating">
        {[1, 2, 3, 4, 5].map((num) => (
          <span className={rating >= num ? 'rating-star on' : 'rating-star'} key={num}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Owner;
