import Link from 'next/link'
import React from 'react'

const Signin = () => {
    return (
        <Link href={`https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=${process.env.CLIENT_ID_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}`} className='bg-gray-600 px-3 rounded-full py-1'>
            Signin
        </Link>
    )
}

export default Signin