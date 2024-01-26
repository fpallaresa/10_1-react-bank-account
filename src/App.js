import React from "react";
import BankAccount from './components/BankAccount/BankAccount';
import Bidder from './components/Bidder/Bidder';
import "./App.css"

function App() {
  const [bidderList, setBidderList] = React.useState([100]);

  const addBidder = (increment) => {
    const newBidderList = [...bidderList, bidderList[bidderList.length - 1] + increment];
    setBidderList(newBidderList);
  }

  return (
    <div className="App">
      <div className="app__bank-account">
        <h2>Cuenta bancaria:</h2>
        <BankAccount></BankAccount>
      </div>
      <div className="app__bidder">
        <h2>Listado de pujas:</h2>
        <ul>
          {bidderList.map((bidder, index) => (
            <li key={index}>{bidder.toString()}€</li>
          ))}
        </ul>

        <h2>Pujadores:</h2>
        <Bidder name="Pedro" offer={10} addBidder={() => addBidder(10)}></Bidder>
        <Bidder name="Gonzalo" offer="5" addBidder={() => addBidder(5)}></Bidder>
        <Bidder name="Edu" offer="5" addBidder={() => addBidder(5)}></Bidder>
      </div>
    </div>
  );
}

export default App;
