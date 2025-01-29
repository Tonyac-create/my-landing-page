'use client'

import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function ProjectCard() {
    const handleOpenWebsite = () => {
        window.open("https://guildopentech.org/", "_blank", "noopener,noreferrer");
    };
    return (
        <article className="flex flex-row">
            <Image src="/Screenshot_GOT_Web.png" alt="logo" width={80} height={80} />
            <div>
                <h1>Site internet Guild Open Tech</h1>
                <p>Intégration du site vitrine pour l’association Guild Open Tech(GOT)</p>
            </div>
            <ShimmerButton className="shadow-2xl mt-10 hover:scale-110" onClick={handleOpenWebsite}>
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    {/* <a href="https://guildopentech.org/" target="_blank" rel="noopener noreferrer" > */}
                        Voir le site
                    {/* </a> */}
                </span>
            </ShimmerButton>
        </article>
    )
}