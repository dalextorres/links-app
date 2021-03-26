import './App.css';
import Button from "./components/elements/Button";
import IG from "./assets/instagram-logo.svg"
import FB from "./assets/facebook-logo.svg"
import WP from "./assets/whatsapp-logo.svg"
import G from "./assets/globe.svg"
import SC from "./assets/streetclub-white.svg"

function App() {
  return (
    <div className="main-wrapper">
          <img src={SC} style={{height:180}} className="logo"/>
          <div className="buttons-wrapper">
            <Button id="black-background" icon={G} link="https://google.com" />
            <Button icon={FB} link="https://google.com" description="Síguenos en Facebook"/>
            <Button id="black-background" icon={IG} link="https://google.com"/>
            <Button icon={WP} link="https://wa.me/5218119106600" />
          </div>
    </div>
  );
}

export default App;
