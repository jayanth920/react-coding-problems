import { useState } from "react";

export default function Folder({filesData}) {
    const [expand, setExpand] = useState(false);
    const [data, setData] = useState(filesData);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });
    const [open, setOpen] = useState(false);

    let newFile = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.00024 7H3.00024V4H0.000244141V3H3.00024V0H4.00024V3H7.00024V4H4.00024V7ZM10.5002 1.09998L13.9003 4.59998L14.0002 5V13.5L13.5002 14H3.50024L3.00024 13.5V8H4.00024V13H13.0002V6H9.00024V2H5.00024V1H10.2002L10.5002 1.09998ZM10.0002 2V5H12.9003L10.0002 2Z" fill="#424242"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="16" height="16" fill="white" transform="translate(0.000244141)"/>
    </clipPath>
    </defs>
    </svg>

    let newFolder = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.00024 3H4.00024V0H3.00024V3H0.000244141V4H3.00024V7H4.00024V4H7.00024V3ZM5.50024 7H5.00024V6H5.30024L6.10024 5.1L6.50024 5H14.0002V4H8.00024V3H14.5002L15.0002 3.5V13.5L14.5002 14H1.50024L1.00024 13.5V6.5V6V5H2.00024V6V6.5V13H14.0002V7V6H6.70024L5.90024 6.9L5.50024 7Z" fill="#424242"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="16" height="16" fill="white" transform="translate(0.000244141)"/>
    </clipPath>
    </defs>
    </svg>

    let activeFolder = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5002 3H7.71021L6.86023 2.15002L6.51025 2H1.51025L1.01025 2.5V6.5V13.5L1.51025 14H14.5103L15.0103 13.5V9V3.5L14.5002 3ZM13.9902 11.49V13H1.99023V11.49V7.48999V7H6.48022L6.8302 6.84998L7.69019 5.98999H14.0002V7.48999L13.9902 11.49ZM13.9902 5H7.49023L7.14026 5.15002L6.28027 6.01001H2.00024V3.01001H6.29028L7.14026 3.85999L7.50024 4.01001H14.0002L13.9902 5Z" fill="#424242"/>
    </svg>

    let openFolder = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.50024 14H12.5002L12.9802 13.63L15.6102 6.63L15.1302 6H14.0002V3.5L13.5002 3H7.71021L6.85022 2.15002L6.50024 2H1.50024L1.00024 2.5V13.5L1.50024 14ZM2.00024 3H6.29028L7.15027 3.84998L7.50024 4H13.0002V6H8.50024L8.15027 6.15002L7.29028 7H3.50024L3.03027 7.33997L2.03027 10.42L2.00024 3ZM12.1302 13H2.19019L3.86023 8H7.50024L7.85022 7.84998L8.71021 7H14.5002L12.1302 13Z" fill="#424242"/>
    </svg>

    let file = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5702 1.14L13.8502 4.44L14.0002 4.8V14.5L13.5002 15H2.50024L2.00024 14.5V1.5L2.50024 1H10.2202L10.5702 1.14ZM10.0002 5H13.0002L10.0002 2V5ZM3.00024 2V14H13.0002V6H9.50024L9.00024 5.5V2H3.00024ZM11.0002 7H5.00024V8H11.0002V7ZM5.00024 9H11.0002V10H5.00024V9ZM11.0002 11H5.00024V12H11.0002V11Z" fill="#424242"/>
    </svg>

    const handleNewFolder = (e, isTrue) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder: isTrue
        });
    }

    const onAddFolder = (e) => {
        if(e.keyCode === 13 && e.target.value){
            const newFolder = {
                id: new Date().getTime(),
                name: e.target.value,
                isFolder: showInput.isFolder,
                items:[]
            }

            data.items.unshift(newFolder);
            // setfilesData(data);
            setShowInput({...showInput, visible: false});
        }

    }

    const onExpand = () => {
        setExpand(!expand)
        setOpen(!open)
    }

    if(filesData.isFolder){
        return (
          <div style={{marginTop : 5}}>
              <div style={{cursor: "default", userSelect: "none"}} className="folder" onClick={onExpand}>
                  <span>{open ? openFolder : activeFolder} {filesData.name}</span>
                  <div>
                    <button style={{cursor: "pointer"}} className="newFolder" title="Add a folder" onClick={(e) => handleNewFolder(e, true)}>{newFolder}</button>
                    <button style={{cursor: "pointer"}} className="newFile" title="Add a file" onClick={(e) => handleNewFolder(e, false)}>{newFile}</button>
                </div>
              </div>
      
              <div style={{display: expand ? "block" : "none", paddingLeft: "10px"}}>
                {
                    showInput.visible && (<div className="inputContainer">
                        <span>{showInput.isFolder ? activeFolder : file }</span>
                        <input onKeyDown={onAddFolder} autoFocus className="inputContainer__input" onBlur={() => setShowInput({...showInput, visible:false})} />
                    </div>
                        )
                }
                  {filesData.items.map((exp)=> {
                      return <Folder filesData={exp} setfilesData={setData} key={exp.id}/>
                  })}
              </div>
          </div>
        )

    } else {
        return <span className="file">📄 {filesData.name}</span>
    }
}
