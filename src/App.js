import React, { useState, useEffect } from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';
import axios from 'axios';
import { symbol } from 'prop-types';

const Div = styled.div`
  text-align: center;
  background-color: rgb(24, 24, 71);
  color: #cccccc;
`

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(price).toFixed(2)

function App(props) {
  const [balance, setBalance] = React.useState(10000);
  const [showBalance, setShowBalance] = React.useState(true);
  const [coinData, setCoinData] = React.useState([]);

  const componentDidMount = async () => {
    if (coinData.length === 0) {
      const response = await axios.get('https://api.coinpaprika.com/v1/coins')
      const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
      const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
      const promises = coinIds.map(id => axios.get(tickerUrl + id));
      const coinData = await Promise.all(promises);
      const coinPriceData = coinData.map(function(response) {
        const coin = response.data;
        return {
          key: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          balance: 0,
          price: formatPrice(coin.quotes.USD.price)
        };
      })
      //Retrieve the prices
      setCoinData(coinPriceData);
    }
  }

  useEffect(function() {
    componentDidMount();
  });



  const handleToggleShowBalance = () => {
    setShowBalance(oldValue => !oldValue);
  }

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map(function(values) {
      let newValues = {...values};
      if (valueChangeId === values.key) {
          newValues.price = newPrice
      }

      return newValues;
    });
    setCoinData(newCoinData);
  }

  return (
    <Div>
      <ExchangeHeader/>
      <AccountBalance 
        amount = {balance} 
        showBalance = {showBalance} 
        handleToggleShowBalance = {handleToggleShowBalance}/>
      <CoinList 
        coinData = {coinData} 
        handleRefresh = {handleRefresh} 
        showBalance = {showBalance}/>
    </Div>
  );
}
    
export default App;