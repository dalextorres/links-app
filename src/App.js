import './App.css';
import Button from "./components/elements/Button";
import IG from "./assets/instagram-logo.svg"
import FB from "./assets/facebook-logo.svg"
import WP from "./assets/whatsapp-logo.svg"

function App() {
  return (
    <div className="main-wrapper">
          <h1 className="main-title">Just for Kicks</h1>
          <Button icon={IG} link="https://google.com"/>
          <Button icon={FB} link="https://google.com"/>
          <Button icon={IG} link="https://google.com"/>
          <Button icon={WP} link="https://google.com"/>
    </div>
  );
}

export default App;
