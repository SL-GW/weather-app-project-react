import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sheffield" />

        <footer>
          This project was created by <span className="bold">Sarah Gray</span>.
          It is open-sourced on{" "}
          <a
            className="links"
            href="https://github.com/SL-GW/weather-app-project-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and is hosted on{" "}
          <a
            className="links"
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
