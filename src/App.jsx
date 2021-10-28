//import React from "react";
import { Navigation } from "./components/navigation";
import { Photo } from "./components/photo";
import { Contact } from "./components/contact";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <Photo />
      <Contact />
    </div>
  );
};

export default App;
