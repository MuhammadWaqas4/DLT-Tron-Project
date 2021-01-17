import HeaderPage from './Components/HeaderPage';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import TokenSale from './Components/TokenSale';
import RoadMap from './Components/RoadMap';
import Team from './Components/Team';
import Affiliate from './Components/Affiliate';
import Exchange from './Components/Exchange';
import Footer from './Components/Footer';


import './landing.css';

function LandingPage() {
  return (
    <div style={{backgroundColor:"#1C232F" ,color:"#ffff"}}>
   <HeaderPage/>
   <Home/>
   <AboutUs/>
   <TokenSale/>
   <RoadMap/>
   <Team/>
   <Affiliate/>
   <Exchange/>
   <Footer/>
   </div>
  );
}

export default LandingPage;