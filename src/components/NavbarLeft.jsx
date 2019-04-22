import React from "react";
import NavbarLeftSection from "./NavbarLeftSection";

function NavbarLeft(){
  var myStyledComponentStyles = {
    float: 'left'
  }
  return(
    <div style={myStyledComponentStyles}>
      <NavbarLeftSection title="Home"/>
      <NavbarLeftSection title="Notification"/>
      <NavbarLeftSection title="Messages"/>
    </div>
  );
}

export default NavbarLeft;
