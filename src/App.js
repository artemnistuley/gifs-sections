import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import "./styles.css";

// 1. Both sections use same logic but different design,
//    what would be a good way to make this logic reusable?
//    make the components have same logic from same place.

// 2. what is wrong with search field? how can it affect the received results?
//    how would you implement a solution for this?

export default function App() {
  return (
    <div className="App">
      <h1>Gifs Sections!</h1>
      <SectionOne />
      <SectionTwo />
    </div>
  );
}
