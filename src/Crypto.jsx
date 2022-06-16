import React from 'react'
import "./Crypto.css"


const abvCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

const crypto = ({ 
    image,
    name,
    price,
    symbol,
    volume,
    marketcap,
    priceChange
   
}) => {
    return( 
      /*in each card crpyto background
       will be chart and color change
       based on 24h change in vlaue \\

       click on crpyto will bring up supply info
       and general info and bigger chart

       
       
       */

       

        <div className='cryptoI'>
           <img className = "cryptoImage" src = {image}/>

           <div className='nameSymbol'>
           <p className='cryptoSymbol'>{symbol.toUpperCase()}</p>
           <p className='cryptoName'>{name}</p>
           </div>

           <p className='cryptoPrice'>$  {price.toLocaleString() }</p>

           <div className='cryptoInfo'>

           <p className='cryptoVolume'>Vol ${abvCash(volume)}</p>
           <p className='cryptoCap'>Cap ${abvCash(marketcap)}</p>
          
           {priceChange < 0 ? (
                        <p className='crypto-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='crypto-percent green'>{priceChange.toFixed(2)}%</p>
                    )}
        
          
           </div>
        </div>
         
    )
}



export default crypto;
