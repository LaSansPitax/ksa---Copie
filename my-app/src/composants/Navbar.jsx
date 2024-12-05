// Importation des bibliothèques React et des modules nécessaires
import React from "react"; // Importation de la bibliothèque React pour créer des composants.
import { NavLink } from "react-router-dom"; // Importation de NavLink pour créer des liens de navigation avec des fonctionnalités avancées.
import '../styles/Navbar.css'; // Importation du fichier CSS pour styliser la barre de navigation.

// Définition du composant fonctionnel Navbar
function Navbar() {
    return (
        // Élément <nav> qui sert de conteneur principal pour la barre de navigation
        <nav className="Navbar">
            {/* Lien vers la page d'accueil, avec un logo */}
            <NavLink to="/"> 
                <div className="Nav_Logo">
                    {/* Affichage du logo de l'application */}
                    <img className="logo" src="./LOGO (1).png" alt="Logo" />
                </div>
            </NavLink>

            {/* Lien vers la page d'accueil avec le texte "Accueil" */}
            <NavLink to="/">
                <div>Accueil</div>
            </NavLink>

            {/* Lien vers la page "À Propos" avec le texte "A Propos" */}
            <NavLink to="/About">
                <div>A Propos</div>
            </NavLink>
        </nav>
    );
}

// Exportation du composant Navbar pour qu'il puisse être utilisé dans d'autres fichiers
export default Navbar;