import React from 'react';
import PropTypes from 'prop-types';

function TableRow(props) {

    return (
        <tr>
            <td>{props.titulo}</td>
            <td>{props.duracion}</td>
            <td>{props.rating}</td>
            <td><ul>{props.genero.map((genre, index) => (
                <li key={genre + index}>{genre}</li>
            ))}</ul></td>
            <td>{props.premios}</td>
        </tr>
    );
}

TableRow.defaultProps = {
    genero: ["No asignado"],
    rating: 0,
    premios: 0,
}

TableRow.propTypes = {
    titulo: PropTypes.string.isRequired,
    duracion: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    genero: PropTypes.oneOf(["Drama", "Acción", "Comedia"]).isRequired,
    premios: PropTypes.number.isRequired,
};

export default TableRow;