import CalendlyWidget from "./CalendlyWidget";

export default function ContactSection() {
    return (
        <section id="contact" className="px-28 flex flex-col justify-center gap-9 my-14">
            <h1 className="text-4xl font-bold text-center mb-2">Vous voulez en discuter ?</h1>
            <CalendlyWidget />
        </section>
    )
}
