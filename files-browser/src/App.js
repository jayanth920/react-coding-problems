import "./App.css";
import { useState } from "react";
import data from "./files/filesData";
import Folder from "./components/Folder";
import Draggable from "react-draggable";

function App() {
  const [filesData] = useState(data);

  return (
    <div className="App">
          <div className="panel">
            <div className="render-div">
              <Folder filesData={filesData} />
            </div>
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
