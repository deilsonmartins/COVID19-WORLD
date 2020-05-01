import React, {useEffect, useState} from 'react';

import NumberFormat from 'react-number-format';

import {Wrapper, Content} from './styles'

import api from '../../services/api';

export default function Table() {

    const [coutries, setCountries] = useState([])

    useEffect(() => {
        api.get('countries').then(response => {
            
            setCountries(response.data.data)
           
        })
    }, []);
    console.log(coutries)
    return (
        <Wrapper>
            {coutries.map((countrie, i) => (
                <li>
                <h1>{countrie.country}</h1>
                <Content>
                    <li>
                        <table>
                            <tr>
                                <th><span >Cases</span></th>
                                <th><span >Deaths</span></th>
                            </tr>
                            <tr>
                                <td><NumberFormat value={Number(countrie.cases)} displayType={'text'} thousandSeparator={true}/></td>
                                <td><NumberFormat value={Number(countrie.deaths)} displayType={'text'} thousandSeparator={true}/></td>
                            </tr>
                        </table>
                    </li>
                </Content>
            </li>
            ))}
        </Wrapper>
    )
}