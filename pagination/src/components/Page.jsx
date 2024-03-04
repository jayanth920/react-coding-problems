import { useRef, useState } from "react"
import { useLocation } from "react-router-dom";

const Page = () => {
  const location = useLocation();
  const receivedData = location.state?.data;
  const n = receivedData.n;
  const data = receivedData.pData;
  let buttonNumMax = Math.ceil((data.length)/n)
  const buttonLabels = Array.from({ length: buttonNumMax }, (_, index) => `${index + 1}`);
  const left = useRef(0)
  const right = useRef(n)
  const [newData, setNewData] = useState(data.slice(left.current,right.current))


  const clickHandler = (pageNum) => {
    left.current = n * (pageNum - 1)
    right.current = Math.min(n * pageNum, data.length);
    setNewData(data.slice(left.current,right.current))
  }


  return (
    <div className="page">
      <div className="renderedData">
        {newData.map((item, index) => {
          return <div className={index} key={index}>{item.id}. {item.name}</div>
        })}
      </div>
      <div className="numberButtons">
        {buttonLabels.map((label, index) =>{
          return <button onClick={() => clickHandler(parseInt(label))} className={index} key={index}>{label}</button>
        })}
      </div>
    </div>
  )
}

export default Page

//---------------------BELOW IS THE PROGRAM WITHOUT REFS !!--------------------------------

//  import { useState } from "react"

// const Page = ({n, data}) => {
//   let buttonNumMax = Math.floor((data.length)/n)
//   const buttonLabels = Array.from({ length: buttonNumMax }, (_, index) => `${index + 1}`);
//   const [newData, setNewData] = useState(data.slice(0,10))


//   const clickHandler = (pageNum) => {
//     const newLeft = n * (pageNum - 1);
//     const newRight = n * pageNum;
//     setNewData(data.slice(newLeft, newRight));
//   }


//   return (
//     <div className="page">
//       <div className="renderedData">
//         {newData.map((item, index) => {
//           return <div className={index} key={index}>{item.id}. {item.name}</div>
//         })}
//       </div>
//       <div className="numberButtons">
//         {buttonLabels.map((label, index) =>{
//           return <button onClick={() => clickHandler(parseInt(label))} className={index} key={index}>{label}</button>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Page