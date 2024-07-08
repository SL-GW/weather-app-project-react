import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search Engine</h1>

        <footer>
          This project was created by Sarah Gray. It is open-sourced on{" "}
          <a
            href="https://github.com/SL-GW/weather-app-project-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and is hosted on{" "}
          <a
            href="https://weather-app-project-with-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
