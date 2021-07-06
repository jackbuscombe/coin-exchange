import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';

const Applic = styled.div`
  text-align: center;
  background-color: rgb(24, 24, 71);
  color: #cccccc;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 9999.99
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 5000
        },
        {
          name: "Litecoin",
          ticker: "LTC",
          price: 2000
        }
      ]
    } 
  }
  render() {
    return (
      <Applic>
        <ExchangeHeader/>
        <AccountBalance amount = {this.state.balance} />
        <CoinList coinData = {this.state.coinData}/>
      </Applic>
    );
  }
}
    
export default App;