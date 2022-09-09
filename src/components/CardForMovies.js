import React from 'react';
import PropTypes from 'prop-types'; // ES6
//Aquí es dónde importas prop-types

//Recuerda recibir como parámetros props
function CardForMovies(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.colorBorde} shadow py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            {/* En la línea de abajo hay dos elementos que hay que interpolar */}
                            <div className={`text-xs font-weight-bold text-${props.titulo} text-uppercase mb-1`}>{props.titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cantidad}</div>
                        </div>
                        <div className="col-auto">
                            {/* Hay que interpolar el tipo de ícono para que este sea dinámico */}
                            <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//Falta agregar la propiedad del color del borde y del titulo
CardForMovies.propTypes = {
    titulo: PropTypes.string.isRequired,
    colorBorde: PropTypes.string.isRequired,
    cantidad: PropTypes.number.isRequired,
    icon: PropTypes.oneOf(['fa-film', 'fa-award', 'fa-user']).isRequired,
};

//Completar las default props pendientes
CardForMovies.defaultProps = {
    colorBorde: ''
}

export default CardForMovies;