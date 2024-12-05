import '../styles/App.css';
import Banner from "./Banner.jsx"
import AppartementGrid from "./AppartementGrid.jsx"



function Appart() {
  return (
    <div className='main_container'>
      <Banner/>
      <AppartementGrid/>
    </div>
   
  );
}

export default Appart;