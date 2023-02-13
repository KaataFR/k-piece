import React from "react";
import data from "../../assets/data/data.json";
import Tuile from "../Tuile/Tuile";
import "./TopMangas.css";

function TopMangas() {
  return (
    <section className="top-mangas">
      <h2>Top Mangas</h2>
      <div className="top-mangas-list">
        <ul>
          {data.map((manga, index) => (
            <li key={index}>
              <Tuile mangas={manga} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TopMangas;
