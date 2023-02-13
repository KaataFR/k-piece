import React from "react";
import Header from "../../layouts/Header/Header";
import TopMangas from "../../components/TopMangas/TopMangas";
import Banner from "../../components/Banner/Banner";


function Accueil() {
    return (
      <div className="App">
        <Header image="https://stickers-addict.fr/1223-large_default/stickers-logo-one-piece.jpg" />
        <Banner image="https://i.pinimg.com/originals/1a/7b/32/1a7b326d22f3c2e4bdd7aae09c85789e.jpg" />
        <TopMangas />
      </div>
    );
  }
  
  export default Accueil;