import Button from './Button';
import styles from './css/App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers') //
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? (
        <strong>loading... </strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol} : {coin.quotes.USD.price})
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
