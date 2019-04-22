import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

function Header() {
  var myStyle = {
    margin: '15px'
  }
  return(
    <div style={myStyle}>
      <NavbarLeft/>
        <p></p>
      <NavbarRight/>
    </div>
  );
}

export default Header;
