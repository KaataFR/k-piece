import React, { useEffect, useState } from "react";
import "./ListScan.css";
import mangaData from "../../assets/data/data.json";
import { Link } from "react-router-dom";

function ListScan() {
  const [folders, setFolders] = useState([]);
  const [manga, setManga] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const path = decodeURIComponent(window.location.pathname.slice(1));
      const foundManga = mangaData.find((manga) => manga.name === path);
      if (foundManga) {
        const scans = foundManga.scans;
        setFolders(scans);
        setManga(foundManga);
      } else {
        setFolders([]);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="listscan">
      <h2>Liste des scans :</h2>
      <ul>
        {folders.map((folder) => (
          <li key={folder}>
            <Link to={`/${manga.name}/${folder}`}>
             <h3> Scan n°{folder} </h3> 
              {manga && (
                <img
                  src={`${process.env.PUBLIC_URL}/scan/${manga.name}/${folder}/01.png`}
                  alt={`Illustration du scan ${folder}`}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListScan;
