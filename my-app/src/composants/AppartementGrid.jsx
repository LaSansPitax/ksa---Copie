// Importation des bibliothèques nécessaires et des composants
import React, { useEffect, useState } from 'react'; // Importation de React, useEffect et useState pour la gestion de l'état et des effets de bord.
import '../styles/AppartementGrid.css'; // Importation du fichier CSS pour styliser la grille des appartements.
import Appartement from "./Appartement.jsx"; // Importation du composant Appartement pour afficher les cartes des appartements.

// Définition du composant AppartementGrid
function AppartementGrid() {

  // Déclaration de l'état pour stocker les appartements récupérés depuis l'API
  const [appartements, setAppartement] = useState([]); 

  // Utilisation du hook useEffect pour charger les appartements après le rendu initial
  useEffect(fetchAppartements, []); // La fonction fetchAppartements est appelée une seule fois lors du premier rendu.

  // Fonction pour récupérer les données des appartements depuis le fichier 'api.json'
  function fetchAppartements(){
    fetch("api.json") // Récupération des données du fichier JSON via une requête fetch
      .then(res => res.json()) // Parsing de la réponse en JSON
      .then((res) => setAppartement(res)) // Mise à jour de l'état 'appartements' avec les données récupérées
      .catch(console.error); // Gestion des erreurs si la requête échoue
  }

  return (
    // Conteneur principal de la grille d'appartements
    <div className='grid'>
      {/* Boucle sur le tableau 'appartements' pour afficher chaque appartement sous forme de carte */}
      {appartements.map((appartement) => (
        // Pour chaque appartement, un composant 'Appartement' est rendu avec les données nécessaires
        <Appartement 
          appartement_card_title={appartement.title} // Titre de l'appartement
          imageUrl={appartement.cover} // Image de couverture de l'appartement
          id={appartement.id} // ID unique de l'appartement
          key={appartement.id} // Ajout d'une clé unique pour chaque élément de la liste (important pour la gestion de la liste en React)
        />
      ))}
    </div>
  );
}

// Exportation du composant AppartementGrid pour qu'il puisse être utilisé dans d'autres parties de l'application
export default AppartementGrid;
