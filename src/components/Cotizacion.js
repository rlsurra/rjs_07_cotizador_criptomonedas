import React from 'react';

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null; //si el objeto llega vacio no muestra nada
    return ( 
        <div>
            <p>El precio es: <span>{resultado.PRICE}</span></p>
        </div>
     );
}
 
export default Cotizacion;