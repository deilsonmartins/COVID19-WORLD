import React, {useState, useEffect} from 'react';

import NumberFormat from 'react-number-format';

import api from '../../services/api';

import {Wrapper} from './styles';

export default function Painel() {
    const [cases, setCases] = useState([]);
    const [deaths, setDeaths] = useState([]);

    
    useEffect(() => {
        var sumCases = 0
        var sumDeaths = 0
        api.get('countries').then(response => {
            response.data.data.map(countrie => (
                sumCases = sumCases + countrie.cases,
                sumDeaths = sumDeaths + countrie.deaths,
                setCases(sumCases),
                setDeaths(sumDeaths)
                
            ))
        })
    }, []);
    
    return (
        
        <Wrapper>
            <ul>
                <li>
                    <span><NumberFormat value={Number(cases)} displayType={'text'} thousandSeparator={true}/></span>
                    <span>Confirmed Cases</span>
                </li>
                <li>
                    <span><NumberFormat value={Number(deaths)} displayType={'text'} thousandSeparator={true}/></span>
                    <span>Deaths</span>
                </li>
                <li>
                    <span><NumberFormat value={Number(100 * deaths/cases).toFixed(3)} displayType={'text'} thousandSeparator={true}/>%</span>
                    <span>Lethality</span>
                </li>
            </ul>
        </Wrapper>
    )
}