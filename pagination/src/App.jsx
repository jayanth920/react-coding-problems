import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pageData from "./data/data";
import './App.css';

function App() {
  const [n, setN] = useState(10);
  const navigate = useNavigate();

  const handleSliderChange = (e) => {
    setN(parseInt(e.target.value));
  };

  const handleNext = () => {
    if(n< 1 || n> pageData.length) return ;
    navigate("/pagination", {
      state: {
        data: {
          n: parseInt(n),
          pData: pageData,
        },
      },
    });
  }






  return (
    <div className='App'>
      <h1>Pagination</h1>
      <div>
        <label>* Enter the number of data elements to be rendered per page. * <br/></label>
        <br/>
        <input 
          type="range" 
          min="1" 
          max={pageData.length} 
          step="1" 
          value={n} 
          onChange={handleSliderChange} 
          className="slider" 
        />
        <span>{n}</span>
      </div>
      <button className="nextButton" onClick={handleNext}>NEXT</button>
      {/* <Page n={n} data={data} /> */}
    </div>
  );
}

export default App;
