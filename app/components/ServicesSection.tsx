import ServiceCard from "./ServiceCard";
import { PenTool, Braces, SearchCheck } from "lucide-react";

export default function ServicesSection() {
    return (
        <section id="services" className="px-28 flex flex-col justify-center gap-9 my-14">
            <h1 className="text-4xl font-bold text-center mb-6">Pourquoi travaillez avec moi ?</h1>
            <div className="flex justify-center gap-9">
                <ServiceCard
                    icon={PenTool}
                    span="01. "
                    title="Design"
                    description="Le rendu graphique joue un rôle clé dans la transmission des valeurs de votre entreprise. Ne le négligez pas ! Faites la différence en optant pour un design unique et authentique, qui reflète votre identité et vous démarque de la concurrence."
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                />
                <ServiceCard
                    icon={Braces}
                    span="02. "
                    title="Développement"
                    description="Que ce soit pour une refonte ou la création d’un site internet, je suis à vos côtés à chaque étape de votre projet. Ensemble, nous construisons une présence en ligne solide pour développer et faire grandir votre activité."
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                />
                <ServiceCard
                    icon={SearchCheck}
                    span="03. "
                    title="Référencement"
                    description="Votre site est en ligne, mais le trafic attendu n’est pas au rendez-vous ? Améliorez votre visibilité avec une prestation SEO sur mesure. Ensemble, analysons et optimisons votre contenu ainsi que votre site pour vous propulser en tête des résultats des moteurs de recherche."
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                />
            </div>
        </section>
    )
}  