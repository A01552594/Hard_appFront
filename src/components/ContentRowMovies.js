import React from 'react'
import CardForMovies from './CardForMovies';

function ContentRowMovies(){

    const dash = [
        { titulo: "Movies in Data Base", colorBorde: "primary", cantidad: 21, icon: "fa-film" },
        { titulo: "Total awards", colorBorde: "success", cantidad: 79, icon: "fa-award" },
        { titulo: "Actors quantity", colorBorde: "warning", cantidad: 49, icon: "fa-user" },
    ];

    return (
        <div className="row">
            {dash.map((movie,index)=>(
                <CardForMovies key = {movie.titulo+index} {...movie}></CardForMovies>
            ))}

           
        </div>
    )
}
export default ContentRowMovies