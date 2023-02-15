import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer"

function Layout({children}) {
    return (
      <div className="App">
        <Header logo="https://stickers-addict.fr/1223-large_default/stickers-logo-one-piece.jpg" />
        <main> {children} </main>
        <Footer />
      </div>
    );
  }
  
  export default Layout;