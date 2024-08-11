"use client"
import Link from 'next/link'
import axios from 'axios'

const GetOptionChain = () => {

    const getOptionChain = () => {
        // const axios = require('axios');

        const url = 'https://api.upstox.com/v2/option/chain';
        const params = {
            instrument_key: 'NSE_INDEX|Nifty 50',
            expiry_date: '2024-08-14'
        };
        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_JWT}`
        };
        
        axios.get(url, { params, headers })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
        <Link className='bg-gray-600 px-3 rounded-full py-1' href={""} onClick={() => getOptionChain()}>
            Get option chain data
        </Link>
    )
}

export default GetOptionChain