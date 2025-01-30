'use client'

import React from 'react'
import Image from 'next/image'
import NavBar from './NavBar'
import { ShimmerButton } from '@/components/ui/shimmer-button'

export default function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <header className="flex justify-between items-center w-full px-8 py-4 fixed top-0 z-50 bg-white">
      <Image src="/free.png" alt="logo" width={80} height={80} />
      <NavBar />
      <ShimmerButton className="shadow-2xl hover:scale-110" onClick={scrollToContact}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Contactez moi
        </span>
      </ShimmerButton>
    </header>
  )
}
