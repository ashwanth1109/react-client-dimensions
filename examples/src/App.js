import React from "react";
import useClientDimensions from "react-client-dimensions";

export default () => {
  const { vw, vh } = useClientDimensions();
  return (
    <>
      <h1>React Client Dimensions Example</h1>
      <p>Your current viewport width is: {vw}</p>
      <p>Your current viewport height is: {vh}</p>
    </>
  );
};
