import React from 'react'
import {NavLink} from "react-router-dom"
import './Appartement.css'


function Appartement() {
  return (
    <div className='Appart'>
      <NavLink to = "/Appartements">
      <div className='Appartement_txt'>Titre de la location</div>
      </NavLink>
       
        </div>
  )
}

export default Appartement