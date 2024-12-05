// Importation des bibliothèques nécessaires
import React, { useState } from "react"; // Importation de React pour créer le composant et de useState pour gérer l'état local.
import AboutBanner from "./Aboutbanner.jsx"; // Importation du composant Banner, utilisé dans le composant About (bien qu'il ne soit pas inclus dans ce code).
import "../styles/About.css"; // Importation du fichier CSS pour styliser le composant About.

// Définition du composant About
function About() {
  // Déclaration des états pour contrôler l'ouverture de chaque section (Description, Respect, Service, Sécurité).
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); // L'état est initialisé à false, signifiant que la section est fermée par défaut.
  const [isRespectOpen, setIsRespectOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);

  return (
    // Conteneur principal du composant avec la classe CSS 'main_container'
    <div className="main_container">
        <AboutBanner/>
      <div className="breakdown_group">
        {/* Section Description */}
        <div className="breakdown_name">
          {/* Titre de la section "Description", avec un gestionnaire d'événements pour alterner l'état de la section */}
          <p
            className="breakdown_description"
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)} // On inverse l'état de la section lors du clic
          >
            <span>Fiabilité</span>
            <span>
              <i
                className={`fas ${
                  isDescriptionOpen ? "fa-chevron-up" : "fa-chevron-down" // Changement de l'icône en fonction de l'état de la section
                }`}
              ></i>
            </span>
          </p>
          {/* Affichage du contenu de la section Description uniquement si isDescriptionOpen est true */}
          {isDescriptionOpen && (
            <p className="description_content">
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </p>
          )}
        </div>

        {/* Section Respect */}
        <div className="breakdown_name">
          <p
            className="breakdown_description"
            onClick={() => setIsRespectOpen(!isRespectOpen)} // Alterne l'état de la section Respect
          >
            <span>Respect</span>
            <span>
              <i
                className={`fas ${
                  isRespectOpen ? "fa-chevron-up" : "fa-chevron-down" // Icône qui change selon l'état de la section
                }`}
              ></i>
            </span>
          </p>
          {/* Contenu de la section Respect, visible uniquement si isRespectOpen est true */}
          {isRespectOpen && (
            <p className="description_content">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          )}
        </div>

        {/* Section Service */}
        <div className="breakdown_name">
          <p
            className="breakdown_description"
            onClick={() => setIsServiceOpen(!isServiceOpen)} // Alterne l'état de la section Service
          >
            <span>Service</span>
            <span>
              <i
                className={`fas ${
                  isServiceOpen ? "fa-chevron-up" : "fa-chevron-down" // Icône changeante en fonction de l'état
                }`}
              ></i>
            </span>
          </p>
          {/* Affichage du contenu de la section Service uniquement si isServiceOpen est true */}
          {isServiceOpen && (
            <p className="description_content">
             Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
            </p>
          )}
        </div>

        {/* Section Sécurité */}
        <div className="breakdown_name">
          <p
            className="breakdown_description"
            onClick={() => setIsSecurityOpen(!isSecurityOpen)} // Alterne l'état de la section Sécurité
          >
            <span>Sécurité</span>
            <span>
              <i
                className={`fas ${
                  isSecurityOpen ? "fa-chevron-up" : "fa-chevron-down" // Icône changeante en fonction de l'état
                }`}
              ></i>
            </span>
          </p>
          {/* Affichage du contenu de la section Sécurité uniquement si isSecurityOpen est true */}
          {isSecurityOpen && (
            <p className="description_content">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
