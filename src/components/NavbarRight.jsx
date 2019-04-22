import React from "react";

function NavbarRight(){
  var myStyledComponentStyles = {
    color: 'grey',
    fontFamily: 'sans-serif',
    padding: '12px',
    fontSize: '11pt',
    border: '2px solid blue',
    borderRadius: '20px',
    margin: '10px',
    float: 'right'
  }
  return (
    <div>
      <button style={myStyledComponentStyles}>Tweet</button>
      <form>
        <input type="text" style={myStyledComponentStyles} placeholder="Search"></input>
      </form>

    </div>
  );
}

export default NavbarRight;
