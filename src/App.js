import React, { useState } from "react";
import "./styles.css";
import Pictures from "./Pictures";

export default function App() {
  const [value, setValue] = useState(0);

  let mypictures = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKAT770HFdj9P56nvxmYaSPRA057VcCoNBsw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEaeIIKr7wBXtNe5ecW_-FP555yUXECpWBmQ&usqp=CAU",
    "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9I14rV_Z52uoBWHbruHsl84HI13mv66EW8A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpOjPb6hODqD7dr8cMii_VeBEaJPVtanlSJQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeS1zmHqpsdUPl7hyEi6ytz4hei-wZ143peA&usqp=CAU"
  ];
  setindex = () => {
    setValue(value + 1);
    if (value > 5) setValue(0);
  };
  console.log(value);
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Pictures gallery !</h2>
        <button onClick={this.setindex}>click here</button>

        <p> {<img src={mypictures[value]} alt="./" />}</p>
      </div>
    </>
  );
}
