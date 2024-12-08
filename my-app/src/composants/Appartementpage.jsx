import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Appartementpage.css';
import Dropdown from './Dropdown';
import Carousel from './Carousel';
import Owner from './Owner';
import Tag from './Tag';

function Appartementpage() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    fetchAppartementElements();
  }, [id]); // Recharger les données si l'ID change

  function fetchAppartementElements() {
    if (!id) {
      navigate('/error', { replace: true }); // Redirige si l'ID est manquant
      return;
    }

    fetch('/api.json')
      .then((res) => res.json())
      .then((tabs) => {
        const selectedTab = tabs.find(tab => tab.id === id);

        if (!selectedTab) {
          navigate('/error', { replace: true }); // Redirige si l'ID est incorrect
          return;
        }

        setSelectedTab(selectedTab);
      })
      .catch((error) => {
        console.error('Erreur de récupération des données:', error);
        navigate('/error', { replace: true });
      });
  }

  if (selectedTab == null) return null;

  return (
    <div className="main_container">
      <Carousel pictures={selectedTab.pictures} />
      <div className="Appartement_group">
        <div className="Appartement_describ">
          <h1>{selectedTab.title}</h1>
          <h2>{selectedTab.location}</h2>
          <div className="Tags">
            {selectedTab.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>
        <Owner host={selectedTab.host} rating={selectedTab.rating} />
      </div>
      <div className="dropdown">
        <Dropdown title="Description" content={selectedTab.description} />
        <Dropdown title="Équipements" content={selectedTab.equipments} isList />
      </div>
    </div>
  );
}

export default Appartementpage;
