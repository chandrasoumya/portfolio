import React, { useState } from "react";

const Menu = ()=>{
    const [visibility,setVisibility] = useState(false);

    const visible =()=>{
        document.getElementById("ul").style.display="flex";
        setVisibility(true);
        setMenu("/photos/menu-open.png");
    }

    const inVisible =()=>{
        document.getElementById("ul").style.display="none";
        setVisibility(false);
        setMenu("/photos/menu.png");
    }

    const [menu,setMenu] = useState("/photos/menu.png");
    return(
        <div className="menu" onClick={()=>{
            if(visibility === false){
                visible();
            }
            else{
                inVisible();
            }
        }}>
            <img src={menu} alt="Menu"/>
        </div>
    )
}

export default Menu;