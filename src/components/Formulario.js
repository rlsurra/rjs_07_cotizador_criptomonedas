import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326ac0;
        cursor:pointer;
    }
`;

const Formulario = () => {

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de EEUU'},
        { codigo: 'MXN', nombre: 'Peso Mexicano'},
        { codigo: 'EUR', nombre: 'Euro'},
        { codigo: 'GBP', nombre: 'Libra Esterlina'},
    ]
    
    //State del estado de conversion
    const [error,guardarError] = useState(false);

    //State del listado de criptomonedas
    const [listaCriptomonedas,guardarCriptomonedas] = useState([]);

    //Utilizamos el custom hook useMoneda
    const [moneda,SeleccionarMoneda,actualizarMoneda] = useMoneda('Elige tu Moneda',MONEDAS);

    //Custom hook para visualizar el selector de criptomoneda
    const [criptomoneda,SeleccionarCriptomoneda,actualizarCriptomoneda] = useCriptomoneda('Elige tu Criptomoneda',listaCriptomonedas);


    //Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    //cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();
        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

    }

    return ( 
        <form onSubmit={cotizarMoneda}>

            {error ? "Hubo un error" : null}

            <SeleccionarMoneda/>
            <SeleccionarCriptomoneda/>
            <Boton
                type="submit"
                value="CALCULAR"
            />
        </form>
     );
}
 
export default Formulario;