import React from "react";
import TopMangas from "../../components/TopMangas/TopMangas";
import Banner from "../../components/Banner/Banner";

function Accueil() {
  return (
    <div className="App">
        <Banner image="https://i.pinimg.com/originals/1a/7b/32/1a7b326d22f3c2e4bdd7aae09c85789e.jpg" />
        <TopMangas />
    </div>
  );
}

export default Accueil;
