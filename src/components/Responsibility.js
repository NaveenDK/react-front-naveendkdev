import React from "react";

const Responsibility = (props) => {
  return (
    <div>
      {Responsibilities && Responsiblities.map((e) => e.responsibility)}
    </div>
  );
};

export default Responsibility;
