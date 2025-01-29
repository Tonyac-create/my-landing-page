import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
    return <section className="px-28 flex justify-center gap-9">
    <TestimonialCard
      name="Fabienne"
      role="PO/Scrum Master"
      testimonial="J'ai eu l'opportunité de travailler avec Angélique sur la création d'un site web responsive, vitrine pour notre association d'inclusion informatique GUILD OPEN TECH, et notre collaboration a été une véritable réussite. Angélique se distingue par son excellent esprit de collaboration, sa capacité à faire des choix techniques judicieux et à trouver des solutions efficaces face aux défis rencontrés. Toujours prête à partager ses connaissances, elle a joué un rôle clé dans la réussite de notre projet. Sa rigueur, son organisation et son enthousiasme ont rendu le travail avec elle à la fois agréable et productif. Je recommande vivement Angélique pour tout projet nécessitant une développeuse web compétente, engagée et ayant un sens aigu de l'esprit collaboratif."
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      linkedinUrl="https://www.linkedin.com/in/fabienne-lamouroux-fl/"
    />
    <TestimonialCard
      name="Hamza"
      role="Dévelopeur Full Stack"
      testimonial="J'ai eu le plaisir de collaborer avec Angélique sur plusieurs projets où elle a brillamment alterné entre UX Designer et Développeuse. En UX, elle a su comprendre les besoins des utilisateurs et créer des interfaces intuitives qui ont nettement amélioré l'expérience utilisateur. En tant que développeuse, elle a apporté des solutions techniques solides et fiables, tout en respectant les délais et exigences du projet. Sa polyvalence et son expertise à la fois en design et en développement en font un atout précieux pour toute équipe. Je la recommande vivement pour des rôles mêlant UX et développement."
      color={["#4ECDC4", "#45B7D1", "#FDCB6E"]}
      linkedinUrl="https://www.linkedin.com/in/hamza-abid-dev/"
    />
  </section>;
}