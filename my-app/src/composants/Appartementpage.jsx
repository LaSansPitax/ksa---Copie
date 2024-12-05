import React, { useEffect, useState } from 'react';
import '../styles/Appartementpage.css';
import { useLocation, useNavigate } from "react-router-dom";

function Appartementpage(props) {
  const Location = useLocation();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState(null); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); 
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  useEffect(() => {
    fetchAppartementElements();
  }, []); 

  function fetchAppartementElements() {
    // Vérifier si l'ID est présent dans les paramètres de la route
    if (!Location.state || !Location.state.appartementId) {
      // Si l'ID est manquant, rediriger vers la page d'erreur
      navigate('/error', { replace: true });
      return;
    }

    fetch("api.json")
      .then(res => res.json())
      .then((tabs) => {
        // Recherche de l'appartement correspondant à l'ID
        const selectedTab = tabs.find(tab => tab.id === Location.state.appartementId);

        if (!selectedTab) {
          // Si l'appartement n'est pas trouvé, rediriger vers la page d'erreur
          navigate('/error', { replace: true });
          return; // Arrêter l'exécution si l'appartement n'est pas trouvé
        }

        setSelectedTab(selectedTab); // Mettre à jour l'état avec l'appartement sélectionné
        navigate(`/Appartements/${selectedTab.id}`, { replace: true }); // Mettre à jour l'URL avec l'ID de l'appartement
      })
      .catch((error) => {
        console.error("Erreur de récupération des données:", error);
        navigate('/error', { replace: true }); // Rediriger vers la page d'erreur en cas d'erreur de récupération
      });
  }

  // Si l'appartement n'est pas encore sélectionné (avant la récupération des données), rien n'est affiché.
  if (selectedTab == null) return null;

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedTab.pictures.length) % selectedTab.pictures.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedTab.pictures.length);
  };

  const hasMultipleImages = selectedTab.pictures.length > 1;

  return (
    <div className='main_container'>
      {/* Carrousel d'images */}
      <div className="carousel-container">
        {hasMultipleImages && (
          <div className="carousel-button prev" onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        )}

        <div className="carousel-image-container">
          <img
            className='apartement_img'
            src={selectedTab.pictures[currentImageIndex]}
            alt={`Appartement_image_${currentImageIndex}`}
          />
          {hasMultipleImages && (
            <div className="image-counter">
              {currentImageIndex + 1} / {selectedTab.pictures.length}
            </div>
          )}
        </div>

        {hasMultipleImages && (
          <div className="carousel-button next" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        )}
      </div>

      {/* Informations sur l'appartement */}
      <div className='Appartement_group'>
        <div className='Appartement_describ'>
          <h1>{selectedTab.title}</h1>
          <h2>{selectedTab.location}</h2>
          <div className='Tags'>
            {selectedTab.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className='appartement_owner'>
          <div className='ownerpp'>
            <h3 className='Ad'>
              <span className='host'>{selectedTab.host.name}</span>
            </h3>
            <img className='pp' src={selectedTab.host.picture} alt="proprio" />
          </div>

          <div className='raiting'>
            {[1, 2, 3, 4, 5].map((num) => (
              <span className={selectedTab.rating >= num ? "on" : ""} key={num}>★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Sections déroulantes */}
      <div className='dropdown'>
        <div className='description'>
          <p className='title_description' onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
            <span>Description</span>
            <span>
              <i className={`fas ${isDescriptionOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
            </span>
          </p>
          {isDescriptionOpen && <p className="description_content">{selectedTab.description}</p>}
        </div>

        <div className="equipements">
          <p className="title_description" onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}>
            <span>Équipements</span>
            <span><i className={`fas ${isEquipmentsOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i></span>
          </p>
          {isEquipmentsOpen && (
            <ul className="list">
              {selectedTab.equipments.map((equipment, index) => (<li key={index}>{equipment}</li>))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appartementpage;
