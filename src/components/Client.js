import React from "react";

const Client = (props) => {
  return (
    <>
      <div className="mi-resume-client">
        <h6>
          {props.clientName} {props.clientDetails} ({props.clientPeriod})
        </h6>
        <p> {props.responsibilities}</p>
      </div>
    </>
  );
};

export default Client;
