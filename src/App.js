import React from "react";
import CustomNav from "./components/header";
import SectionHome from "./components/home_sec";
import SectionAbout from "./components/about_sec";

function App() {

  return (

    <div>
      <SectionHome/>
      <SectionAbout/>
      <CustomNav />
    </div>
  );
}
export default App;