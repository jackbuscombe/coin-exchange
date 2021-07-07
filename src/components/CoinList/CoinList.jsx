import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`

export default function CoinList(props) {
        return (
                <CoinTable>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    {props.showBalance ? <th>Balance</th> : null}
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.coinData.map(value =>
                    <Coin   key = {value.key}
                            handleRefresh = {props.handleRefresh}
                            name = {value.name}
                            ticker = {value.ticker}
                            balance = {value.balance}
                            showBalance = {props.showBalance}
                            price = {value.price}
                            tickerId = {value.key}/>
                        )
                    }
                </tbody>
                </CoinTable>
        )
}
