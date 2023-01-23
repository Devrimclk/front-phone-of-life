import { useRef, useState } from "react";

function Dropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const handleDropDownFocus = (state: boolean) => {
      setOpen(!state);
    };
    
    const handleClickOutsideDropdown =(e:any)=>{
      if(open && !dropdownRef.current?.contains(e.target as Node)){
        setOpen(false)
        
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener("click",handleClickOutsideDropdown)
    }
    console.log(open);
  
    return (
      <div className="App">
        <div className="app-drop-down-container" ref={dropdownRef}>
          <button onClick={(e) => handleDropDownFocus(open)}>Select Color</button>
          {open && (
            <ul>
              <li>Transparent</li>
              <li>Bleu</li>
              <li>Rose</li>
              <li>Noir</li>
              <li>Blanc</li>
            </ul>
          )}
        </div>
      </div>
    );
  }

export default Dropdown;