import React from 'react'
import Image from 'next/image'
import NavBar from './NavBar'

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full px-8 py-4">
        <Image src="/free.png" alt="logo" width={80} height={80} />
        <NavBar />
    </header>
  )
}
