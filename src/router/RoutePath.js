import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil/Accueil";
import Erreur404 from "../pages/404/404";
import Layout from "../layouts/Layout"
import AllMangas from "../pages/AllMangas/AllMangas";
import MangaListScan from "../pages/Manga/MangaListScan";
import Scan from "../pages/Scan/Scan";

function RoutesPath() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/all-mangas" element={<AllMangas />} />
          <Route path="*" element={<Erreur404 />} />
          <Route path="/:mangaName" element={<MangaListScan />} />
          <Route path="/:mangaName/:folder" element={<Scan />} /> 

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default RoutesPath;
