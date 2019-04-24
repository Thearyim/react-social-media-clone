import React from "react";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import NetworkConnection from "./NetworkConnection";

const Connections = [
  {image: image3, name: 'John'},
  {image: image4, name: 'Mary'}
  ];

function Network() {
  return(
    <div>
      <h4>Network</h4>
      {Connections.map((connection, index) =>
        <NetworkConnection
          image={connection.image}
          name={connection.name}
          key={index}
          />
      )}
    </div>
  );
}

export default Network;
