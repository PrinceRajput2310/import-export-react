import React from "react";
import './App.css';
import Heading from "./components/Heading";
import SubmitButton from "./components/SubmitButton";
import InputQuery from "./components/InputQuery";
import SubHeading from "./components/SubHeading";

function App() {
  return (
     <React.Fragment>
         <h1>Hello fom App js</h1>
             <Heading />
             <SubmitButton />
             <InputQuery />
             <SubHeading />
     </React.Fragment>
  );
}

export default App;
