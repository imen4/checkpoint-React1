import "./App.css";
//import { Button, Form, Row, Col } from "react-bootstrap";
import FullName from "./Component/Profile/FullName";
import Photo from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <div className="info">
      <div class="div1">
        <FullName />
      </div>
      <div class="div2">
        <Address />
      </div>
      </div>
      <div class="div3">
        <Photo />
      </div>
    </div>
  );
}

export default App;
