import '../styles.css';
import photoHistoire from '../assets/images/photoHistoire.jpg';
import photoAbeillesTravail from '../assets/images/photoAbeillesTravail.jpg'; 
import photoProduits from '../assets/images/photoProduits.jpg';
import photoFleurs from '../assets/images/photoFleurs.jpg';
import photoRencontre from '../assets/images/photoRencontre.jpg';

function About() {
  return (
    <section id="about-section">
      <h2>Notre Histoire et Notre Passion pour les Abeilles</h2>
      <p>Bienvenue dans notre univers dédié à l'apiculture, un monde fascinant où la nature et le travail acharné des abeilles se rencontrent pour créer de véritables trésors. Notre aventure a commencé en 2010, d'une simple fascination pour ces créatures ingénieuses et leur rôle crucial dans notre écosystème, lors d'une rencontre fortuite avec un apiculteur local en Île-de-France. Ce qui n'était au départ qu'une curiosité s'est rapidement transformé en une véritable passion, un engagement profond envers la protection des abeilles et la production d'un miel d'exception, ancré dans le terroir de notre belle région.</p>
      <div className="about-image-container">
        <img src={photoHistoire} alt="Notre Histoire en Île-de-France" />
      </div>
      <p>Au cœur de notre démarche apicole se trouvent des valeurs fortes : le respect de la nature, le bien-être des abeilles et la qualité artisanale. Nous pratiquons une apiculture douce et respectueuse, en veillant à minimiser notre impact sur l'environnement et à offrir à nos colonies, principalement de race Buckfast, les meilleures conditions de vie possibles. Nous croyons en une approche sans utilisation de produits chimiques de synthèse pour le traitement des ruches et en une gestion durable des essaims par division naturelle, ce qui permet aux abeilles de s'épanouir naturellement, produisant ainsi un miel pur et authentique, reflet de la richesse de la flore variée de l'Île-de-France.</p>
      <div className="about-image-container">
        <img src={photoAbeillesTravail} alt="Abeilles Buckfast au travail" />
      </div>
      <h2>Nos Miels et Nos Produits de la Ruche</h2>
      <p>Notre passion se traduit dans la diversité et la qualité des produits que nous proposons. Nos miels, récoltés avec soin au fil des saisons, offrent une palette de saveurs uniques, allant du miel de printemps, délicat et floral, au miel d'été, plus corsé et fruité, en passant par le miel d'automne, riche et ambré avec des notes de châtaignier. Chaque pot est le fruit d'un terroir spécifique et du travail inlassable de nos abeilles butinant les fleurs de notre région. Mais notre engagement ne s'arrête pas au miel. Nous proposons également du pollen frais, riche en nutriments, de la propolis brute aux propriétés protectrices, et de la cire d'abeille naturelle, idéale pour la fabrication de bougies artisanales, tous récoltés dans le respect de l'équilibre de la ruche.</p>
      <div className="about-image-container">
        <img src={photoProduits} alt="Nos Miels et Produits d'Île-de-France" />
      </div>
      <p>La qualité de nos produits est notre priorité absolue. De la surveillance attentive de nos ruches à l'extraction du miel à froid et à la mise en pot artisanale, chaque étape est réalisée avec le plus grand soin et dans le respect des méthodes traditionnelles. Nous veillons à ce que nos miels conservent toutes leurs propriétés naturelles, leur saveur et leurs arômes délicats. Nous sommes fiers de notre démarche de traçabilité et de notre engagement envers une production locale et responsable.</p>
      <h2>Notre Engagement pour la Protection des Abeilles</h2>
      <p>Conscients du rôle essentiel des abeilles dans la pollinisation et la biodiversité de notre écosystème francilien, nous sommes activement engagés dans leur protection. Les défis auxquels elles font face aujourd'hui, tels que la perte d'habitat et l'utilisation de pesticides, nous préoccupent profondément, et c'est pourquoi nous participons à des initiatives locales de plantation de fleurs mellifères et sensibilisons le public à l'importance des pollinisateurs lors de marchés et d'événements. Nous croyons qu'une apiculture responsable est une partie de la solution, et nous aspirons à partager notre passion et notre engagement avec vous.</p>
      <div className="about-image-container">
        <img src={photoFleurs} alt="Protection des Abeilles en Île-de-France" />
      </div>
      <h2>Rencontrez-nous !</h2>
      <p>Nous sommes toujours ravis de partager notre passion pour les abeilles et nos produits authentiques d'Île-de-France. N'hésitez pas à nous contacter pour organiser une visite de notre petite exploitation apicole située à [Indique une ville ou un village si tu souhaites] (sous réserve de disponibilité), à venir nous retrouver sur les marchés locaux de [Mentionne les lieux et jours de marché si pertinent], ou à nous suivre sur nos réseaux sociaux [Indique tes réseaux sociaux]. Nous sommes impatients de vous faire découvrir le merveilleux monde des abeilles et les saveurs uniques de nos récoltes locales.</p>
      <div className="about-image-container">
        <img src={photoRencontre} alt="Rencontre sur un marché en Île-de-France" />
      </div>
    </section>
  );
}

export default About;