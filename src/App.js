import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// import Props from "./components/Props";
import State from "./components/State";
// import Style from "./components/Style";

function App() {
  let [mode, setMode] = useState("light");

  let [alert, setAlert] = useState("");

  let setMyAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";

      setMyAlert("Dark mode has been enabled successfully", "success");
    }
    //
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";

      setMyAlert("Light mode has been enabled successfully", "success");
    }
  };

  alert &&
    setTimeout(() => {
      setAlert("");
    }, 1500);

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div style={{ width: "90%", height: "50px", margin: "1% auto" }}>
        <Alert alert={alert} />
      </div>
      <main style={{ margin: "3% 5%", padding: "0 3%" }}>
        {/* <div>
        <Style />
      </div> */}
        {/* <div>
        <Props title="This is props title" num={100} />
      </div> */}
        <State mode={mode} setMyAlert={setMyAlert} />
      </main>
    </>
  );
}

export default App;
