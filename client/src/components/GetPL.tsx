"use client"
import Link from 'next/link'
import axios from 'axios'

const GetPL = () => {

    const getPL = () => {
        // const axios = require('axios');

        const url = 'https://api.upstox.com/v2/trade/profit-loss/data';
        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_JWT}`
        };

        const params = {
            'from_date': '01-03-2024',
            'to_date': '30-07-2024',
            'segment': 'FO',
            'financial_year': '2425',
            'page_number': '1',
            'page_size': '4'
        };

        axios.get(url, { headers, params })
            .then(response => {
                console.log(response.status);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error.message || error);
            });

    }

    return (
        <Link className='bg-gray-600 px-3 rounded-full py-1' href={""} onClick={() => getPL()}>
            Get PL
        </Link>
    )
}

export default GetPL