import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
        <section id="projects" className="px-28 flex flex-col justify-center gap-9 my-14">
            <h1 className="text-4xl font-bold text-center mb-6">Mes projets</h1>
            <ProjectCard
                title="Guild Open Tech"
                tags={["intégration", "site vitrine", "HTML.CSS.JS"]}
                image="/Screenshot_GOT_Web.png"
                description="Intégration du site vitrine pour l’association Guild Open Tech(GOT)"
                site="https://guildopentech.org/"
            />
            <ProjectCard
                title="GOT Associate"
                tags={["user research", "wireframe", "prototytage"]}
                image="/GOT_Associate.png"
                description="Conception d’une application web pour mettre en relation des porteurs de projets et des associés dans l’équipe d’UX Design pour l’association GOT."
            />
            <ProjectCard
                title="Space Tourism"
                tags={["intégration", "site vitrine", "HTML.CSS.JS"]}
                image="/Space_screenshot.png"
                description="Intégration HTML, CSS, Javascript et maquette Figma pour Frontend Mentor"
                site="https://space-tourism-seven-ruby.vercel.app/"
            />
        </section>
    )
}    