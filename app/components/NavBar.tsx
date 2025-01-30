import React from 'react'

export default function NavBar() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return (
        <nav>
            <ul className="flex justify-between items-center gap-[7rem] text-2xl">
                <li>
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('projects');
                        }}
                        className='hover:text-blue-600'
                    > Projets</a>
                </li>
                <li>
                    <a
                        href="#services"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('services');
                        }}
                        className='hover:text-blue-600'
                    > Services</a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('contact');
                        }}
                        className='hover:text-blue-600'
                    > Contact</a>
                </li>
            </ul>
        </nav>
    )
}
