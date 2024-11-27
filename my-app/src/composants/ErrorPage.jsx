import React from 'react'
import Navbar from './Navbar'
import './Errorpage.css'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
    <Navbar/>
    <div className='Error_page_container'>
        <p className='Error_page_number'>404</p>
        <p className='Error_page_txt'>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink  to='/' className='Error_page_link'>Retourner sur la page d’accueil</NavLink>
    </div>
    </>
     
  
  )
}

export default ErrorPage