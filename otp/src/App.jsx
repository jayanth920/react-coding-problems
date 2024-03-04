import "./App.css";
import Phone from "./components/Phone";
import DraggableCard from "./components/DraggableCard";

function App() {

  return (
    <div className="App">
      <div className="AppWrapper">
        <Phone />
        <DraggableCard/>
      </div>
    </div>
  );
}

export default App;
