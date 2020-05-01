import React from 'react';

import { Wrapper, Content } from './styles';

import logo from '../../assets/images/covid19.jpg';

export default function Head() {
    return (
        <Wrapper>
            <img src={logo} alt="logo"/>
            <Content>
                <h1>COVID19</h1>
                <h3>WORLD</h3>
            </Content>
        </Wrapper>
    )
}
