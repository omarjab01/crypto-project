import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DOMPurify from 'dompurify'


const Coin = () => {

    const params = useParams();
    const [coin, setCoin] = useState({});

    const url = `
        https://api.coingecko.com/api/v3/coins/${params.coinId}
    `

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className='grid grid-cols-1 gap-4'>
            <div className='w-full py-12 bg-slate-800 rounded-3xl'>
                <h1 className='text-white text-center text-3xl font-semibold'>
                    {coin.id}
                </h1>
            </div>
            <div className='grid grid-cols- gap-8'>
                <div className='py-6 bg-slate-800 rounded-3xl flex relative flex-row items-center text-center gap-2 w-full mt-4 pb-10'>
                    <div>
                        <h2 className='text-white text-2xl px-4 py-2 bg-purple-600 rounded-xl absolute top-[-20px] left-[40px]'><span className='text-lg text-gray-300'>Rank</span> # {coin.market_cap_rank}</h2>
                    </div>
                    <div className='flex flex-row gap-2 justify-between mt-8 w-full mx-8 items-center'>
                        <div className='coin-heading text-white  bg-gray-900 px-12 py-6 rounded-xl flex flex-row items-center'>
                            <img src={coin.image?.small} className='mr-10 scale-150 my-2' />
                            <div className='text-left'>
                                <p className='text-2xl font-semibold'>{coin.name}</p>
                                <p className='text-xl'>{coin.symbol}/Eur</p>
                            </div>
                        </div>
                        <div className='bg-gray-900 px-4 py-2 rounded-xl'>
                            {coin.market_data?.current_price ? <h1 className='py-2  rounded-2xl text-5xl text-white'>€ {coin.market_data.current_price.eur}</h1> : null}
                        </div>
                    </div>
                </div>

                <div className=' grid grid-cols-2 gap-8'>
                    <div className='py-12 bg-slate-800 rounded-3xl flex flex-row w-full justify-between px-10'>
                        <div className='flex flex-col gap-4 items-center'>
                            <h3 className='text-2xl font-semibold text-white'>24 Hour Low</h3>
                            {coin.market_data?.low_24h ? <p className='text-gray-400 text-xl'>{coin.market_data.low_24h.eur}</p> : null}

                        </div>
                        <div className='flex flex-col gap-4 items-center'>
                            <h3 className='text-2xl font-semibold text-white'>24 Hour High</h3>
                            {coin.market_data?.high_24h ? <p className='text-gray-400 text-xl'>{coin.market_data.high_24h.eur}</p> : null}

                        </div>
                    </div>
                    <div className='w-full py-12 bg-slate-800 rounded-3xl flex flex-col justify-center'>
                        <div className='flex flex-col gap-4 mx-auto'>
                            <h3 className='text-white text-2xl text-center' >Market Cap</h3>
                            {coin.market_data ? <p className='text-gray-400 text-xl text-center'>{coin.market_data.market_cap.eur}</p> : null}
                        </div>
                        {/* <div className='flex flex-row gap-4'>
                            <h3>Circulating Supply</h3>
                            {coin.market_data ? <p>{coin.market_data.circulating_supply.eur}</p> : null}
                        </div> */}
                    </div>
                </div>

                {/* <div className='w-full py-6 bg-slate-800 rounded-3xl col-span-2 flex justify-center'>
                    <table>
                        <thead className='text-xl font-semibold text-white flex flex-col gap-2'>
                            <tr className='flex flex-row justify-between'>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1y</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='flex flex-row justify-between text-gray-400 gap-4'>
                                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.eur}</p> : null }</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.eur}</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_1d_in_currency ? <p>{coin.market_data.price_change_percentage_1d_in_currency.eur}</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.eur}</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.eur}</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.eur}</p> : null}</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}

            </div>

            <div className='w-full p-8 bg-slate-800 rounded-3xl mt-4'>
                <h4 className='font-semibold text-white text-3xl mb-8'>About</h4>
                <p className='text-gray-400 text-xl leading-9'
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(coin.description ? coin.description.en : '')
                    }}>
                </p>
            </div>
        </div>
    )
}

export default Coin