import { ShineBorder } from "@/components/ui/shine-border";
import { Quote } from "lucide-react";
import Link from "next/link";
import Image from 'next/image'
import linkedin from "@/public/linkedin.svg"

interface TestimonialCardProps {
    name: string;
    role: string;
    testimonial: string;
    color?: string[];
    linkedinUrl: string;
}

export default function TestimonialCard({
    name,
    role,
    testimonial,
    color,
    linkedinUrl
}: TestimonialCardProps) {
    return (
        <article>
            <ShineBorder
                className="relative flex h-[600px] w-[450px] flex-col items-center py-8 overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={color}
            >
                <h3 className="text-2xl font-bold">{name}</h3>
                <h3 className="text-xl font-medium mb-5">{role}</h3>
                <Quote className="flex mr-auto text-blue-800" />
                <span className="pointer-events-none px-3 whitespace-pre-wrap bg-gradient-to-b from-black to-black bg-clip-text text-xl italic font-medium leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    {testimonial}
                </span>
                <Quote className="flex ml-auto text-blue-800" />
                {linkedinUrl && (
                    <Link
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors flex items-center gap-2 mt-auto"
                    >
                        <Image src={linkedin} alt="logo" width={24} height={24} />
                        Profil LinkedIn
                    </Link>
                )}
            </ShineBorder>
        </article>
    )
}