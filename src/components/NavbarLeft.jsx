import React from "react";
import NavbarLeftSection from "./NavbarLeftSection";

function NavbarLeft(){
  return(
    <div>
      <NavbarLeftSection title="Home"/>
      <NavbarLeftSection title="Notification"/>
      <NavbarLeftSection title="Messages"/>
    </div>
  );
}

export default NavbarLeft;
