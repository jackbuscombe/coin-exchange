import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
border: 1px solid #cccccc;
width: 25vh;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    /*
    componentDidMount() {
        const callback = () => {
            // set the state to a new random variable
            const randomPercentage = 0.995 + Math.random() * 0.01;

            this.setState( function(oldState) {
                return {
                    price: (oldState.price * randomPercentage)
                };
            });
        }
        setInterval(callback, 5000);
    }
    */


    handleClick(event) {
        // We have to prevent the default action from submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
/*
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState( function(oldState) {
            return {
                price: (oldState.price * randomPercentage)
            };
        });
        */
    }

    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                <td><Button onClick = {this.handleClick}>Refresh</Button></td>
            </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}