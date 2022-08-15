import React from 'react'

const CoinItem = (props) => {
  return (
    <div className='grid grid-cols-6 justify-between px-8 py-4 text-white items-center rounded-2xl border border-gray-700 bg-slate-800 mb-6 hover:scale-105 transition-all duration-300'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='flex flex-row items-center gap-2'>
            <img src={props.coins.image} alt='coin image' height='32px' width="32px" />
            <p className=''>{props.coins.symbol}</p>
        </div>
        <p>€ {props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)} %</p>
        <p>€ {props.coins.total_volume.toLocaleString()}</p>
        <p className='text-right'>€ {props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem