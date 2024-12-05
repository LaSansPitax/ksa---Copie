// Importation des bibliothèques nécessaires
import React from 'react'; // Importation de React pour créer le composant.
import { NavLink } from "react-router-dom"; // Importation du composant NavLink pour la navigation entre les pages.
import '../styles/Appartement.css'; // Importation du fichier CSS pour styliser le composant Appartement.

// Définition du composant Appartement
function Appartement(props) {
  // Création d'un objet `state` contenant l'ID de l'appartement, passé en prop.
  const state = {
    appartementId: props.id // On récupère l'ID de l'appartement via les props et on le place dans le state pour la navigation.
  };

  return (
    // Conteneur principal pour chaque appartement avec la classe CSS 'Appart'
    <div className='Appart'>
      {/* Utilisation de NavLink pour naviguer vers la page des appartements en passant l'ID de l'appartement via l'état */}
      <NavLink to="/Appartements" state={state}>
        {/* Affichage de l'image de l'appartement avec la classe CSS 'image_appartement' */}
        <img className='image_appartement' src={props.imageUrl} alt="image_appartement" />
        {/* Affichage du titre de l'appartement avec la classe CSS 'Appartement_txt' */}
        <div className='Appartement_txt'>{props.appartement_card_title} </div>
      </NavLink>
    </div>
  );
}

// Exportation du composant Appartement pour qu'il puisse être utilisé dans d'autres fichiers
export default Appartement;
