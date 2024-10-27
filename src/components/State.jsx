import React, { useState } from "react";

export default function State(props) {
  const [text, setText] = useState("Enter the Text: ");

  let style = {
    fontWeight: props.mode === "light" ? "white" : "600",
    backgroundColor: props.mode === "light" ? "white" : "#b3b3b3",
  };

  return (
    <>
      <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        Enter Text Here...
      </h1>
      <textarea
        id="textBox"
        style={style}
        className={`form-control text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        cols="100"
        rows="5"
      ></textarea>
      <hr />
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my-2"
        onClick={() => {
          let i = 0;
          while (text.charAt(i) !== "") {
            if (text.charAt(i) >= 'a' && text.charAt(i) <= 'z') {
              setText(text.toUpperCase());
              props.setMyAlert("CONVERTED TO UPPERCASE", "success");

              return;
            }
            i++;
          }
          
        }}
      >
        UpperCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my-2"
        onClick={() => {
          let i = 0;
          // if(text.includes())
          while (i<text.length) {
            if (text.charAt(i) >= 'A' && text.charAt(i) <= 'Z') {
              setText(text.toLowerCase());
              props.setMyAlert("converted to lowerCase", "success");
              break;
            }
            i++;
          }
        }}
      >
        LowerCase
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary"
        onClick={() => {
          let str = text.split(/[  ]+/);
          setText(str.join(" "));

          props.setMyAlert("Extra white space removed", "success");
        }}
      >
        Remove Extra Space
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my-2"
        onClick={() => {
          navigator.clipboard.writeText(text);

          props.setMyAlert("Text copied Successfully", "success");
        }}
      >
        Copy
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary mx-2 my-2"
        onClick={() => {
          setText("");
        }}
      >
        Clear
      </button>
      <br />
      <br />
      <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        Your Text Summary
      </h1>
      <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        {
          text.split(/\s+/).filter((e) => {
            return e.length != 0;
          }).length
        }
        &nbsp; Words, {text.length} Characters
      </p>
      <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        {0.008 *
          text.split(" ").filter((e) => {
            return e.length != 0;
          }).length}
        &nbsp;Minutes to read
      </p>
      <h2 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        Preview
      </h2>
      <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        {text === "" ? "Nothing to Preview!" : text}
      </p>
    </>
  );
}
