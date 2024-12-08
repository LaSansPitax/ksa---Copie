import '../styles/App.css';
import Banner from "./Banner.jsx";
import AppartementGrid from "./AppartementGrid.jsx";

function Appart() {
  return (
    <div className='main_container'>
      {/* Bannière avec une image spécifique pour la page Appart */}
      <Banner 
        image="./Main_banner.png" 
      />
      <AppartementGrid />
    </div>
  );
}

export default Appart;
