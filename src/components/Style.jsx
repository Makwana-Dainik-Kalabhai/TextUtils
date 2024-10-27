import React, { useState } from "react";

export default function Style() {
  let [mode, setMode] = useState({
    color: "black",
    backgroundColor: "white",
    padding: "2% 3%",
    border: "1px solid black"
  });
  let [btnText, setBtnText] = useState("Light Mode");

  let toggleMode = () => {
    if (mode.color === "white") {
      setMode({
        color: "black",
        backgroundColor: "white",
        padding: "2% 3%",
        border: "1px solid black"
      });
      setBtnText("Dark Mode");
    } else {
      setMode({
        color: "white",
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: "2% 3%",
        border: "1px solid red"
      });
      setBtnText("Light Mode");
    }
  };
  return (
    <>
      <p style={mode}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius
        quibusdam perferendis commodi nostrum quia natus? Recusandae, ullam
        beatae. Nulla ad illo aliquam impedit totam minus accusantium, et quam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        debitis ab enim. Perferendis obcaecati ipsam beatae voluptate similique
        earum veritatis asperiores. Consequuntur et error neque tenetur quae
        maiores amet quisquam.beatae. Nulla ad illo aliquam impedit totam minus accusantium, et quam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        debitis ab enim. Perferendis obcaecati ipsam beatae voluptate similique
        earum veritatis asperiores. Consequuntur et error neque tenetur quae
        maiores amet quisquam.beatae. Nulla ad illo aliquam impedit totam minus accusantium, et quam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        debitis ab enim. Perferendis obcaecati ipsam beatae voluptate similique
        earum veritatis asperiores. Consequuntur et error neque tenetur quae
        maiores amet quisquam.
      </p>
      <br />
      <hr />
      <button className="btn btn-primary" onClick={toggleMode}>
        {btnText}
      </button>
    </>
  );
}
