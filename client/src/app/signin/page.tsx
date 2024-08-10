import Link from 'next/link'
import React from 'react'

const Signin = () => {
  return (
    <main>
        <div className='flex justify-center mt-40'>
            <Link href={`https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=${process.env.CLIENT_ID_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}`} className='bg-orange-600 px-3 rounded hover:bg-orange-700 transition'>
                Signin
            </Link>
        </div>
    </main>
  )
}

export default Signin

// Sameple URL:- https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=615b1297-d443-3b39-ba19-1927fbcdddc7&redirect_uri=https%3A%2F%2Fwww.trading.tech%2Flogin%2Fupstox-v2&state=RnJpIERlYyAxNiAyMDIyIDE1OjU4OjUxIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKQ%3D%3D
