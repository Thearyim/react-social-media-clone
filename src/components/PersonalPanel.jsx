import React from "react";
import PersonalLink from "./PersonalLink";
import person from "../assets/images/person.png";

function PersonalPanel() {
  var myStyle = {
    display: 'grid',
    gridTemplateRows: '100px 100px',
    border: '1px solid grey',
    margin: '5px'
  }
  var headerStyle={
    backgroundColor: '#3A8CDF'
  }
  var imgStyle={
    backgroundColor: '#3A8CDF',
    border: '2px solid white',
    borderRadius: '15px',
    width: '100px',
    marginTop: '50px',
    marginLeft: '10px',
    float: 'left'
  }
  var nameStyle={
    marginLeft: '150px'
  }
  var linkGrid={
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    padding: '15px'
  }
  return (
    <div style={myStyle}>
      <div style={headerStyle}>
        <img style={imgStyle} src={person}/>
      </div>
      <div>
        <p style={nameStyle}>Kellie A. Corrigan</p>
        <div style={linkGrid}>
          <div>
            <PersonalLink
              name="tweet"/>
          </div>
          <div>
            <PersonalLink
              name="following"/>
          </div>
          <div>
            <PersonalLink
              name="followers"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalPanel;
