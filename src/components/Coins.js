import React from 'react'
import CoinItem from './CoinItem'
import {Link} from 'react-router-dom'
import Coin from '../routes/Coin'

const Coins = ({coins}) => {
  return (
    <div className='container'>
        <div>
            <div className='heading grid grid-cols-6 w-full justify-between bg-slate-800 text-white px-8 py-4 rounded-xl'>
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='text-center mr-6'>Volume</p>
                <p className='text-end'>Mkt Cap</p>
            </div>

            <div className='mt-12'>
                {
                    coins.map(coins => {
                        return (
                            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} >
                                <CoinItem
                                    coins={coins}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        
    </div>
  )
}

export default Coins