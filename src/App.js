import './App.css';
import Button from "./components/elements/Button";
import IG from "./assets/instagram-logo.svg"
import FB from "./assets/facebook-logo.svg"
import WP from "./assets/whatsapp-logo.svg"
import G from "./assets/globe.svg"
import SC from "./assets/streetclub-white.svg"
import TT from "./assets/tik-tok.svg"
import StreeClub from "./assets/street_club_mx_logo.jpg"

function App() {
  return (
    <div className="main-wrapper">
          <img src={StreeClub} style={{height:180}} className="logo"/>
          <div className="buttons-wrapper">
            <Button id="black-background" icon={G} link="https://streetclub.mx" />
            <Button icon={FB} link="https://www.facebook.com/St.Clubmx" description="Síguenos en Facebook"/>
            <Button id="black-background" icon={IG} link="https://www.instagram.com/streetclub_mx/?hl=es-la"/>
            <Button icon={WP} link="https://wa.me/message/24DVKGCIDNCFI1" />
            <Button icon={TT} link = "https://vm.tiktok.com/ZMefeYTp2" id="tiktok-logo"/>
          </div>
    </div>
  );
}

export default App;
