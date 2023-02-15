import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ScanCarroussel.css";

function ScanCarroussel() {
  const { mangaName, folder } = useParams();
  const filteredName = mangaName.replace(/%20/g, " ");

  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    let page = 1;
    let lastPage = 1;

    const loadImage = () => {
      const img = new Image();
      img.onload = () => {
        lastPage = page;
        page += 1;
        img.src = `${process.env.PUBLIC_URL}/scan/${filteredName}/${folder}/${page
          .toString()
          .padStart(2, "0")}.png`;
      };
      img.onerror = () => {
        setMaxPage(lastPage);
      };
      img.src = `${process.env.PUBLIC_URL}/scan/${filteredName}/${folder}/${page
        .toString()
        .padStart(2, "0")}.png`;
    };

    loadImage();
  }, [filteredName, folder]);

  const handleClick = () => {
    const newPage = currentPage + 1;
    if (newPage <= maxPage) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="scan-carroussel">
      <p>
        Page {currentPage} / {maxPage}
      </p>
      <div
        className={`scan-arrow arrow-left ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        &#10094;
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/scan/${filteredName}/${folder}/${currentPage
          .toString()
          .padStart(2, "0")}.png`}
        alt={`Scan ${currentPage} de ${mangaName}`}
        onClick={handleClick}
      />
      <div
        className={`scan-arrow arrow-right ${
          currentPage === maxPage ? "disabled" : ""
        }`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        &#10095;
      </div>
    </div>
  );
}

export default ScanCarroussel;
