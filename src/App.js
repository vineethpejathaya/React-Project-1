import "./styles.css";
import HTML from "./Images/HTML_Logo.jpg";
import CSS from "./Images/CSS_Logo.jpg";
import JS from "./Images/JavaScript_Logo.png";
export default function App() {
  return (
    <div className="App">
      <img className="html" src={HTML} />
      <img src={CSS} />
      <img src={JS} />
    </div>
  );
}
