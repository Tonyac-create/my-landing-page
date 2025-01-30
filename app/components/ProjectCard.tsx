'use client'

import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";

interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
    site?: string;
    tags: string[];
}

export default function ProjectCard({ title, image, description, site, tags }: ProjectCardProps) {
    const handleOpenWebsite = () => {
        if (site) {
            window.open(site, "_blank", "noopener,noreferrer");
        }
    };
    return (
        <article className="flex gap-4">
            <Image src={image} alt="logo" width={500} height={300} className="rounded-md" style={{ width: 'auto', height: 'auto' }}/>
            <div>
                <h1 className="text-4xl font-bold">{title}</h1>
                {tags.length > 0 && (
                    <div className="flex gap-6 text-lg text-blue-600 font-semibold mb-4">
                        {tags.map((tag, index) => (
                            <span key={index}>/{tag}</span>
                        ))}
                    </div>
                )}
                <p className="text-2xl">{description}</p>
                {site && (
                    <ShimmerButton className="shadow-2xl mt-10 hover:scale-110" onClick={handleOpenWebsite}>
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                            Voir le site
                        </span>
                    </ShimmerButton>
                )}
            </div>
        </article>
    )
}