import React from 'react'

export default function NavBar() {
  return (
    <nav>
        <ul className="flex justify-between items-center gap-6">
            <li>
                <a href="#"> Accueil</a>
            </li>
            <li>
                <a href="#"> Projets</a>
            </li>
            <li>
                <a href="#"> Services</a>
            </li>
            <li>
                <a href="#"> Contact</a>
            </li>
            <li>
                <a href="#"> A propos</a>
            </li>
        </ul>
    </nav>
  )
}
