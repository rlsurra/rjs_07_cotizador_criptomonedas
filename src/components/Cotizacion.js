import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const ResultadoParrafo = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: bold;
    }
`;



const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null; //si el objeto llega vacio no muestra nada
    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <ResultadoParrafo>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></ResultadoParrafo>
            <ResultadoParrafo>Precio más bajo del día: <span>{resultado.LOWDAY}</span></ResultadoParrafo>
            <ResultadoParrafo>Variación últimas 24HS: <span>{resultado.CHANGEPCT24HOUR}</span></ResultadoParrafo>
            <ResultadoParrafo>Última actualización: <span>{resultado.LASTUPDATE}</span></ResultadoParrafo>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;