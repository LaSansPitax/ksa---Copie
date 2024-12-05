// Importation de la bibliothèque React et du fichier CSS nécessaire pour la mise en style
import React from "react"; // Importation de React pour créer le composant fonctionnel.
import '../styles/aboutbanner.css'; // Importation du fichier CSS pour styliser le composant Banner.

function AboutBanner() {
    return (
        // Conteneur principal pour la bannière spécifique à la page About, avec la classe CSS 'AboutBanner' pour la mise en page
        <div className="AboutBanner">      
            
            {/* Image de la bannière, avec une classe CSS pour le style */}
            <img className="Aboutimg" src="./kalen-emsley-Bkci_8qcdvQ-unsplash 2.png" alt="About Page Banner" /> 
  
        </div>
    );
}

// Exportation du composant Banner pour qu'il puisse être utilisé dans d'autres parties de l'application
export default AboutBanner;