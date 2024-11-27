import './App.css';
import Banner from "./composants/Banner.jsx"
import AppartementGrid from "./composants/AppartementGrid.jsx"

function Appart() {
  return (
    <div className='main_container'>
      <Banner/>
      <AppartementGrid/>
    </div>
   
  );
}

export default Appart;