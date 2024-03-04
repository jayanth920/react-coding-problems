
const DraggableCard = () => {
  return (
        <div className="card" style={{ cursor: "default" }}>
          <article>
            <p style={{margin: "0.75rem 0 0"}}>
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
  );
};

export default DraggableCard;
