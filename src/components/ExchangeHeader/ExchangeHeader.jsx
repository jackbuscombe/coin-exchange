import React, { Component } from 'react';
import logo from './logo.svg'
import styled from 'styled-components';
    const AppTitle = styled.h1`
    font-size: 4rem;
    `;

    const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
    `

    const AppLogo = styled.img`
    height: 8rem;
    pointer-events: none;
    `

    export default class ExchangeHeader extends Component {
        render() {
            return (
                <AppHeader>
                    <AppLogo src={logo} alt="React Logo"/>
                    <AppTitle>
                    Coin Exchange
                    </AppTitle>
                </AppHeader>
            )
        }
    }



