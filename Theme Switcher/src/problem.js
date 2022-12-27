import React, { useState } from "react";

const GrandChild = (props) => {
  return (
    <div>
      <h3>Grand child:</h3>
      <Child brand={props.brand}></Child>
    </div>
  );
};

const Child = (props) => {
  return (
    <div>
      <h2>Child: {props.brand}</h2>
    </div>
  );
};

const App = () => {
  const [brandName] = useState("Amazon");
  return (
    <div>
      <h1>Hello</h1>
      <GrandChild brand={brandName}></GrandChild>
    </div>
  );
};

export default App;
