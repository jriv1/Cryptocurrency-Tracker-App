import { useState ,useEffect} from 'react'
import Crypto from "./Crypto"
import axios from 'axios'
import './App.css'


function App() {


  const [crypto, setCrypto] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
      )
      .then(res => {
        setCrypto(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);





  return (
    <div className="App">
      <header className="App-header">  
        <h1 className='nameOfApp'>CryptoTracker</h1>
        
          <a  className="togglebtn">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        </a>
      </header>
    
              <div className='cryptoCard'>
                {crypto.map(c => {
                return (
            
                  <Crypto
                    key={c.id}
                    image = {c.image}
                    name={c.name}
                    price={c.current_price}
                    symbol={c.symbol}
                    volume = {c.total_volume}
                    marketcap = {c.market_cap}
                    priceChange = {c.price_change_percentage_24h}
            
                  />
                
                );
                })}
              </div>
         
    </div>
  )
}

export default App
