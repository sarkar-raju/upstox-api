"use client"
import axios from 'axios'
import Link from 'next/link'
import dotenv from "dotenv"

// dotenv.config({
//     path: "../.env"
// })

const GetToken = () => {





    const onClick = async () => {
        const client_id = process.env.NEXT_PUBLIC_CLIENT_ID_API_KEY
        const url = 'https://api.upstox.com/v2/login/authorization/token';
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        const data = {
            'code': 'sBhqQo',
            'client_id': `${process.env.NEXT_PUBLIC_CLIENT_ID_API_KEY}`,
            'client_secret': `${process.env.NEXT_PUBLIC_API_SECRET}`,
            'redirect_uri': `${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
            'grant_type': 'authorization_code',
        };
        console.log(data.client_id);


        await axios.post(url, new URLSearchParams(data), { headers })
            .then(response => {
                console.log(response.status);
                // console.log(response.data);
                const res = response.data
                console.log(res);
                
                console.log(res.access_token);
                
            })
            .catch(error => {
                console.error(error.response.status);
                console.error(error.response.data);
            });
    }

    return (
        <Link className='bg-gray-600 px-3 rounded-full py-1' href={""} onClick={() => onClick()}>
            Get token
        </Link>
    )
}

export default GetToken