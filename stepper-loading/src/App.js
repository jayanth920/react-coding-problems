import "./App.css";
import Stepper from "./components/stepper";
import Draggable from "react-draggable";

function App() {
  return (
    <div className="App">
      <div className="panel">
        <h1 style={{ textAlign: "center" }}>STEPPER-LOADING</h1>
        <Stepper />
      </div>
      <Draggable>
        <div className="card" style={{ cursor: "default" }}>
          <article>
            <p>
              <a
                href="https://github.com/jayanth920"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                Github
              </a>{" "}
              <br />
              <a
                href="https://www.linkedin.com/in/jayanth920/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                LinkedIn
              </a>
              <br />
              <a
                href="https://jayanth920.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                Portfolio
              </a>
            </p>
          </article>
        </div>
      </Draggable>
    </div>
  );
}

export default App;
