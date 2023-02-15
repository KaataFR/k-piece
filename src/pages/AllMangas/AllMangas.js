import React from "react";
import ListMangas from "../../components/ListMangas/ListMangas";
import { useLocation } from "react-router-dom";
import "./AllMangas.css"

function AllMangas(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search') || '';

    return (
        <div className="all-mangas">
            <ListMangas searchTerm={searchTerm} />
        </div>
    )
};

export default AllMangas;
