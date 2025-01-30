import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import linkedin from "@/public/linkedin.svg"

export default function Footer() {
  return (
    <footer className='flex justify-between items-center w-full px-8 py-4'>
      <Image src="/free.png" alt="logo" width={80} height={80} />
      <div className='flex flex-col gap-2'>
        <p>© 2025 Angelique Copere. All rights reserved.</p>
        <h1>Créatrice de site web</h1>
      </div>
      <div className='flex items-center gap-3'>
        <Image src={linkedin} alt="logo" width={24} height={24} />
        <Link href="https://www.linkedin.com/in/angelique-copere-dev/" className='text-xl hover:text-blue-600'>Linkedin</Link>
      </div>
    </footer>
  )
}
