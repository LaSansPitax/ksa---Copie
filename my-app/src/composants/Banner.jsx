// Importation de la bibliothèque React et du fichier CSS nécessaire pour la mise en style
import React from "react"; // Importation de React pour créer le composant fonctionnel.
import '../styles/Banner.css'; // Importation du fichier CSS pour styliser le composant Banner.

function Banner() {
    return (
        // Conteneur principal pour la bannière, avec la classe CSS 'Banner' pour la mise en page
        <div className="Banner">      
            
            {/* Image de la bannière, avec une classe CSS pour le style et un attribut 'alt' pour l'accessibilité */}
            <img className="Banner_img" src="./iii.png" alt="BannerImg" /> 
            
            {/* Texte affiché sur la bannière, avec une classe CSS 'banner_txt' pour la personnalisation du style */}
            <span className="banner_txt">Chez vous, partout et ailleurs</span>
        </div>
    );
}

// Exportation du composant Banner pour qu'il puisse être utilisé dans d'autres parties de l'application
export default Banner;
