import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
    return (
        <section className="px-28 flex flex-col justify-center gap-9 my-14">
            <h1 className="text-4xl font-bold text-center mb-6">Pourquoi travaillez avec moi ?</h1>
            <div className="flex justify-center gap-9">
                <ServiceCard
                    span="01. "
                    title="Design"
                    description="Le rendu graphique joue un rôle clé dans la transmission des valeurs de votre entreprise. Ne le négligez pas ! Faites la différence en optant pour un design unique et authentique, qui reflète votre identité et vous démarque de la concurrence."
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                />
                <ServiceCard
                    span="01. "
                    title="Design"
                    description="Le rendu graphique joue un rôle clé dans la transmission des valeurs de votre entreprise. Ne le négligez pas ! Faites la différence en optant pour un design unique et authentique, qui reflète votre identité et vous démarque de la concurrence."
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                />
            </div>
        </section>
    )
}  