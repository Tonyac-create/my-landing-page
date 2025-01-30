import Link from 'next/link';
import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <ul className="flex justify-between items-center gap-[7rem] text-2xl">
                <li>
                    <Link href="/" className='hover:text-blue-600'>Accueil</Link>
                </li>
            </ul>
        </nav>
    )
}