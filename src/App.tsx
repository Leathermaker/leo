import "./App.css";
import { Router } from "./router";
import AnimatedCursor from "react-animated-cursor";
import useNavbarStore from "./store/NavbarStore";
import React from "react";
import MobileNavbar from "./components/MobileNavbar";

const App:React.FC=()=> {
  const { isOpen} = useNavbarStore();

  React.useEffect(() => {
    console.log(isOpen);
    
  })
  return (
    <>
      <div className="w-full h-full relative ">
        <Router />
        <AnimatedCursor
          innerSize={8}
          outerSize={25}
          color="194, 30, 55"
          outerAlpha={0.1}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        {isOpen && <MobileNavbar />}
      </div>
    </>
  );
}

export default App;
