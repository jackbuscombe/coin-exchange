import React from 'react';
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

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      // {
      //   name: "Bitcoin",
      //   ticker: "BTC",
      //   balance: 0.5,
      //   price: 9999.99
      // },
      // {
      //   name: "Ethereum",
      //   ticker: "ETH",
      //   balance: 32,
      //   price: 5000
      // },
      // {
      //   name: "Litecoin",
      //   ticker: "LTC",
      //   balance: 0,
      //   price: 2000
      // }
    ]
  }

  componentDidMount = async () => {
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
    this.setState({coinData: coinPriceData});
  }

  handleToggleShowBalance = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance : !oldState.showBalance
      }
    });
  }

  handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = this.state.coinData.map(function(values) {
      let newValues = {...values};
      if (valueChangeId === values.key) {
          newValues.price = newPrice
      }

      return newValues;
    });
    this.setState({coinData: newCoinData});
  }

  render() {
    return (
      <Div>
        <ExchangeHeader/>
        <AccountBalance 
          amount = {this.state.balance} 
          showBalance = {this.state.showBalance} 
          handleToggleShowBalance = {this.handleToggleShowBalance}/>
        <CoinList 
          coinData = {this.state.coinData} 
          handleRefresh = {this.handleRefresh} 
          showBalance = {this.state.showBalance}/>
      </Div>
    );
  }
}
    
export default App;