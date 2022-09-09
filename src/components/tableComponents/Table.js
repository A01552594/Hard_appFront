import React from 'react';
import TableRow from './TableRow';

function Table() {

    const table = [
        { titulo: "Billy Eliot", duracion: 123, rating: 5, genero: ["Drama", "Comedia"], premios: 2 },
        { titulo: "Alicia en el País de las Maravillas", duracion: 142, rating: 4.8, genero: ["Drama", "Acción", "Comedia"], premios: 3 },
    ];

    return (
        <table className='tableFormat'>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
            </thead>
            <tbody>
                {table.map((pelicula, index) => (
                    <TableRow key={pelicula.titulo + index} titulo={pelicula.titulo} duracion={pelicula.duracion} rating={pelicula.rating} genero={pelicula.genero} premios={pelicula.premios} />
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Título</td>
                    <td>Duración</td>
                    <td>Rating</td>
                    <td>Género</td>
                    <td>Premios</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default Table;