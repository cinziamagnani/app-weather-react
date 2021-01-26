import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Amsterdam"/>
      <footer>
      <a href="https://github.com/cinziamagnani/app-weather-react" target="_blank" rel="noreferrer">
        Open-source code
      </a> by  
      <a href="https://cinziamagnani.com/" target="_blank" rel="noreferrer">
         Cinzia Magnani
        </a>
        </footer>
        </div>
    </div>
  );
}

