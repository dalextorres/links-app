import './App.css';
import Button from "./components/elements/Button";
import IG from "./assets/instagram-logo.svg"
import FB from "./assets/facebook-logo.svg"
import WP from "./assets/whatsapp-logo.svg"
import G from "./assets/globe.svg"

function App() {
  return (
    <div className="main-wrapper">
          <h1 className="main-title">Just for Kicks</h1>
          <Button icon={G} link="https://google.com" description="Haz tu compra en nuestra página web"/>
          <Button icon={FB} link="https://google.com" description="Síguenos en Facebook"/>
          <Button icon={IG} link="https://google.com" description="Síguenos en Instagram"/>
          <Button icon={WP} link="https://google.com" description="81 1212 3390"/>
    </div>
  );
}

export default App;
