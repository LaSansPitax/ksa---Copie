// Importation des bibliothèques nécessaires
import React from 'react'; // Importation de React pour pouvoir créer des composants.
import Navbar from './Navbar'; // Importation du composant Navbar pour l'inclure dans la page d'erreur.
import '../styles/Errorpage.css'; // Importation du fichier CSS pour styliser la page d'erreur.
import { NavLink } from 'react-router-dom'; // Importation de NavLink pour créer des liens de navigation.

// Définition du composant fonctionnel ErrorPage
function ErrorPage() {
  return (
    <>
      {/* Inclusion du composant Navbar en haut de la page */}
      <Navbar />
      
      {/* Conteneur principal pour la page d'erreur avec une classe CSS 'Error_page_container' */}
      <div className='Error_page_container'>
        
        {/* Affichage du numéro d'erreur, ici 404 */}
        <p className='Error_page_number'>404</p>
        
        {/* Texte expliquant l'erreur */}
        <p className='Error_page_txt'>Oups! La page que vous demandez n'existe pas.</p>
        
        {/* Lien pour retourner à la page d'accueil, avec une classe CSS pour le style */}
        <NavLink to='/' className='Error_page_link'>Retourner sur la page d’accueil</NavLink>
      </div>
    </>
  );
}

// Exportation du composant ErrorPage pour qu'il puisse être utilisé dans d'autres parties de l'application
export default ErrorPage;
