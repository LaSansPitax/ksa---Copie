import React from 'react'
import './Appartementpage.css'

function Appartementpage() {
  return (
    <div className='Appartement_containeur'>
        <div>
            <img className='apartement_img' src="./Background.png" alt="Appartement_image" /> 
        </div>
        <div className='Appartement_group'>
            <div className='Appartement_describ'>
                <h1>Cozy loft on the Canal Saint-Martin</h1>
                <h2>Paris, Île-de-France</h2>
                <div className='Tags'>
                    <span >Cozy</span>
                    <span >Canal</span>
                    <span >Paris 10</span>  
                </div>
            </div>
            
             <div className='appartement_owner'>
                <div className='ownerpp'> 
                    <h3 className='Ad'>
                        <span>Alexandre</span> 
                        <span>Dumas</span>
                    </h3>
                    <div className='pp'></div>
                </div>
               
                   
                <div className='raiting'>
                    <span className='on'>★ </span>
                    <span className='on'>★ </span>
                    <span className='on'>★ </span>
                    <span className='off'>★ </span>
                    <span className='off'>★ </span>
                </div>
            </div> 
        </div>
        
         
       
            <div className='dropdown'>
                <div className='description'>
                    <p className='title_description'>description</p>
                    <p className='description_content'>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
                </div>
                <div className='equipements'>
                    <p className='title_description'>Équipements</p>
                    <p>Climatisation
                        Wi-Fi
                        Cuisine
                        Espace de travail
                        Fer à repasser
                        Sèche-cheveux
                        Cintres 
                        </p>
                </div>
            </div>
          
             
    </div>
  )
}

export default Appartementpage