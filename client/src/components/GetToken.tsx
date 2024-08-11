"use client"
import axios from 'axios'


const GetToken = () => {

    const client_id = process.env.CLIENT_ID_API_KEY
    // console.log(client_id);
    


    const onClick = async () => {
        const url = 'https://api.upstox.com/v2/login/authorization/token';
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        const data = {
            'code': 'LNqPFR',
            'client_id': "02c5daed-5e78-4293-9b08-a247acb4170a",
            'client_secret': "e5tzw37vnw",
            'redirect_uri': "https://didactic-adventure-q7qrr65xgvjvh66q7-3000.app.github.dev",
            'grant_type': 'authorization_code',
        };
        console.log(data.client_id);
        

            await axios.post(url, new URLSearchParams(data), { headers })
            .then(response => {
                console.log(response.status);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error.response.status);
                console.error(error.response.data);
            });
    }

    return (
        <button onClick={() => onClick()}>Get token</button>
    )
}

export default GetToken