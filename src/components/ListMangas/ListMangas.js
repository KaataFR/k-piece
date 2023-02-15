import React from "react";
import data from "../../assets/data/data.json";
import { Link } from "react-router-dom";
import './ListMangas.css'

function ListMangas({ searchTerm }) {
  const filteredData = data.filter(manga =>
    manga.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="list-mangas">
      <h2> Liste des Mangas : </h2>
      <ul className="list-mangas-body">
        {filteredData.map((manga, index) => (
          <li key={index}>
            <Link to={`/${manga.name}`}>
              <img src={manga.image} alt={manga.alt} />
              <h3>{manga.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListMangas;
