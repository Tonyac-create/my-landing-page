import { ShineBorder } from "@/components/ui/shine-border";
import { Linkedin, Quote } from "lucide-react";
import Link from "next/link";

interface TestimonialCardProps {
    name: string;
    role: string;
    testimonial: string;
    color?: string[];
    linkedinUrl: string;
}

export default function TestimonialCard({
    name = "Fabienne",
    role = "PO/Scrum Master",
    testimonial = "J'ai eu l'opportunité de travailler avec Angélique sur la création d'un site web responsive, vitrine pour notre association d'inclusion informatique GUILD OPEN TECH, et notre collaboration a été une véritable réussite. Angélique se distingue par son excellent esprit de collaboration, sa capacité à faire des choix techniques judicieux et à trouver des solutions efficaces face aux défis rencontrés. Toujours prête à partager ses connaissances, elle a joué un rôle clé dans la réussite de notre projet. Sa rigueur, son organisation et son enthousiasme ont rendu le travail avec elle à la fois agréable et productif. Je recommande vivement Angélique pour tout projet nécessitant une développeuse web compétente, engagée et ayant un sens aigu de l'esprit collaboratif.",
    color = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
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
                        <Linkedin className="text-blue-600"/> Profil LinkedIn
                    </Link>
                )}
            </ShineBorder>
        </article>
    )
}