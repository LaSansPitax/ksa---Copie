import React from "react";
import Banner from "./Banner"; // Importation du composant Banner
import Dropdown from "./Dropdown"; // Importation du composant Dropdown
import "../styles/About.css"; // Importation des styles

function About() {
  return (
    <div className="main_container">
      {/* Bannière avec une image spécifique et texte masqué */}
      <Banner 
        image="./About_banner.png" // Image spécifique pour About
        hideText={true} // Masquer le texte
        customClassName="about-banner"
      />

      <div className="breakdown_group">
        {/* Dropdown pour Fiabilité */}
        <Dropdown
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          customClassName="about-collaps"
        />
        
        {/* Dropdown pour Respect */}
        <Dropdown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          customClassName="about-collaps"
        />
        
        {/* Dropdown pour Service */}
        <Dropdown
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          customClassName="about-collaps"
        />
        
        {/* Dropdown pour Sécurité */}
        <Dropdown
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          customClassName="about-collaps"
        />
      </div>
    </div>
  );
}

export default About;
