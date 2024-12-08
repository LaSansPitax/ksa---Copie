import React from 'react';
import '../styles/Tag.css'; // Assurez-vous de créer un fichier CSS pour les styles du composant

const Tag = ({ text }) => {
  if (!text) return null;

  return <span className="tag">{text}</span>;
};

export default Tag;
