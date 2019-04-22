import React from "react";

function NavbarLeftSection(props){
  var myStyledComponentStyles = {
    backgroundColor: 'white',
    color: 'grey',
    fontFamily: 'sans-serif',
    padding: '20px',
    fontSize: '12pt'
  }
  return(
    <button style={myStyledComponentStyles}>{props.title}</button>
  );
}

export default NavbarLeftSection;
