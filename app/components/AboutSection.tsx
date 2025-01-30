export default function AboutSection() {
    return (
        <section className="px-28 flex flex-col justify-center gap-9 my-40">
            <h2 className="text-6xl font-bold">A propos</h2>
            <article>
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Editeur du site</h2>
                <p>FreeDev</p>
                <p>Numéro de SIRET : 93331317300017</p>
                <p>Responsable editorial : Angélique Copéré</p>
                <p>149 Rue Général Leclerc 69430 Beaujeu</p>
                <p>Téléphone : 06 63 70 48 67</p>
                <p>Email : angelique.copere@free-dev.fr</p>
                <p>Site Web : free-dev.fr</p>
            </article>
            <article>
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Hébergement</h2>
                <p>Vercel Inc.</p>
                <p>340 S Lemon Ave #4133</p>
                <p>Walnut, CA 91789</p>
                <p>États-Unis</p>
                <p>Email : support@vercel.com</p>
                <p>Site Web : https://vercel.com</p>
            </article>
            <article>
                <h2 className="text-2xl font-bold text-blue-600 mb-4">{`Conditions d'utilisation`}</h2>
                <p className="mb-6">{`Ce site (www.free-dev.fr) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…)
                    pour un meilleur confort d'utilisation et un graphisme plus agréable,
                    nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc…
                    Angélique Copéré met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet.
                    Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations auprès de ,
                    et signaler toutes modifications du site qu'il jugerait utile. n'est en aucun cas responsable de l'utilisation faite de ces informations,
                    et de tout préjudice direct ou indirect pouvant en découler.`}</p>
                <p className="mb-6">{`Liens hypertextes : Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres ressources
                    disponibles sur Internet. Angélique Copéré ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites
                    internet. ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue
                    pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes,
                    et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments.
                    Les risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se conformer à leurs conditions d'utilisation.`}</p>
                <p className="mb-6">{`Les utilisateurs, les abonnés et les visiteurs des sites internet de ne peuvent mettre en place un hyperlien en direction de ce site
                    sans l'autorisation expresse et préalable de Angélique copéré.`}</p>
                <p>{`Dans l'hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites internet
                    de Angélique Copéré, il lui appartiendra d'adresser un email accessible sur le site afin de formuler sa demande de mise en place
                    d'un hyperlien. Angélique Copéré se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.`}</p>
            </article>
            <article>
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Propriété intellectuelle</h2>
                <p className="mb-6">{`Tout le contenu du présent sur le site www.free-dev.fr, incluant, de façon non limitative,
                    les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont
                    la propriété exclusive de la société à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.`}</p>
                <p>{`Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle,
                    de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Bénard Maxime. Cette représentation ou reproduction,
                    par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété
                    intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du
                    contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.`}</p>
            </article>
        </section>
    )
}