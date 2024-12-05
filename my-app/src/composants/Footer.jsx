// Importation des bibliothèques et des styles nécessaires
import React from 'react'; // Importation de React pour utiliser les composants.
import '../styles/Footer.css'; // Importation du fichier CSS pour styliser le pied de page.

// Définition du composant fonctionnel Footer
function Footer() {
  return (
    // Conteneur principal pour le pied de page avec la classe CSS 'footer'
    <div className='footer'>
        {/* Affichage du logo du pied de page */}
        <img className='footer_logo' src="./LOGO (2).png" alt="Logo" />
        {/* Texte indiquant les droits réservés */}
        <div>© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

// Exportation du composant Footer pour qu'il puisse être utilisé dans d'autres fichiers
export default Footer;
