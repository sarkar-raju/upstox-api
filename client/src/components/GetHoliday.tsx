"use client"
import Link from 'next/link'
import axios from 'axios'

const GetHoliday = () => {

const getHoliday = () => {
    // const axios = require('axios');

const url = 'https://api.upstox.com/v2/market/holidays';
const headers = {
  'Accept': 'application/json'
};

axios.get(url, { headers })
  .then(response => {
    // Process the JSON response
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

  return (
   <Link className='bg-gray-600 px-3 rounded-full py-1' href={""} onClick={() => getHoliday()}>
    Get holiday
   </Link>
  )
}

export default GetHoliday