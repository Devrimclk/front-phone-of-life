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
      <div className="App1">
        <div className="app-drop-down-container1" ref={dropdownRef}>
          <button onClick={(e) => handleDropDownFocus(open)}>Phone Models</button>
          {open && (
            <ul>
              <li>Iphone 12 Mini</li>
              <li>Iphone 12 pro</li>
              <li>Iphone 12 Pro Max</li>
              <li>Iphone 13 Mini</li>
              <li>Iphone 13 </li>
              <li>Iphone 13 Pro</li>
              <li>Iphone 14 </li>
              <li>Iphone 14 Pro </li>
              <li>Iphone 14 Pro Max</li>
            </ul>
          )}
        </div>
      </div>
    );
  }

export default Dropdown;