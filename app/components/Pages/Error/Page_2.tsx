import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ErrorImage from '../../../components/assets//pages/error.png'

const Page_2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-8">
        <Image
          src={ErrorImage}
          alt="404 Error"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 capitalize">Maybe this page has broken or not created. Come back to the Homepage</p>
        <Link href="/" className="w-full px-[15vw] py-3 bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] text-white rounded-md font-semibold capitalize transition duration-300 transform hover:brightness-110">
          back to home page
        </Link>
      </div>
    </div>
  )
}

export default Page_2