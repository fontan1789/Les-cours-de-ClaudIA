/* Leçon 3 — Le Drury */
module.exports = {
  id: "03-drury",
  numero: 3,
  titre: "Le Drury",
  sousTitre: "Se protéger des ouvertures légères de troisième et quatrième position",
  resume: "2♣ par une main ayant passé, après une ouverture majeure en troisième ou quatrième position : soutien et 10-12 H, sans dépasser le palier de 2 si l'ouverture était légère.",
  etat: "prête",

  cours: `
    <div class="page">
      <p class="titre-impression">Les enchères gadget — Leçon 3 : le Drury</p>
      <p class="sous-impression">Page 1 / 2 — le principe et les réponses de l'ouvreur</p>

      <p class="chapo">En troisième position, on ouvre léger : 11 H, parfois moins avec une belle couleur. Le Drury permet au répondant de dire « j'ai le fit et de bons points » sans engager le camp au palier de 3 quand l'ouverture n'était qu'un coup de bluff mesuré.</p>

      <h2>Le problème</h2>
      <p>Après deux passes, l'ouverture en troisième position poursuit deux buts : indiquer une entame, et gêner les adversaires. On ouvre donc de 1♠ avec ♠ A D 10 8 5 ♥ 9 4 ♦ R V 7 ♣ 8 6 2 — 10 H — ce que personne ne ferait en première position.</p>
      <p>Le répondant, lui, a passé au premier tour : il a donc au plus 11 ou 12 H. S'il soutient à 3♠ pour montrer son fit et ses valeurs, le camp se retrouve au palier de 3 avec 21 points à deux. S'il se contente de 2♠, il enterre les donnes où l'ouverture était vraie et la manche à portée.</p>

      <h2>Le principe</h2>
      <div class="encadre">
        <strong>2♣ est artificiel et forcing.</strong> Par une main <strong>ayant déjà passé</strong>, après une ouverture de 1♥ ou 1♠ en <strong>troisième ou quatrième position</strong>, il montre un soutien d'au moins trois cartes et 10 à 12 points de soutien. Il ne promet aucun Trèfle. Sa question tient en un mot : <em>ton ouverture était-elle vraie ?</em>
      </div>
      <div class="duo">
        <div class="encheres" aria-label="Passe, 1 Pique, 2 Trèfle">
          <div class="entete"><span>Ouvreur</span><span>Répondant</span></div>
          <div class="ligne"><span></span><span>Passe</span></div>
          <div class="ligne"><span>1<b class="n">♠</b></span><span class="attente">2<b class="n">♣</b></span></div>
        </div>
        <div style="flex:1;min-width:200px">
          <p style="margin-top:0">Le passe initial est ce qui rend l'enchère possible : un 2♣ naturel et forcing n'a plus lieu d'être dans une main qui a déjà renoncé à ouvrir.</p>
        </div>
      </div>

      <h2>Les réponses de l'ouvreur</h2>
      <table class="reponses">
        <tr><th>Enchère</th><th>Signification</th></tr>
        <tr><td>2 de sa majeure</td><td>Ouverture légère, aucune ambition : on s'arrête là. Le répondant passe.</td></tr>
        <tr><td>2♦</td><td>Vraie ouverture, 12 H et plus, intérêt de manche. Artificiel, ne dit rien des Carreaux. Forcing un tour.</td></tr>
        <tr><td>Nouvelle couleur</td><td>Naturel, vraie ouverture avec une seconde couleur — au palier de 2 en dessous de sa majeure, au palier de 3 au-dessus.</td></tr>
        <tr><td>4 de sa majeure</td><td>Vraie ouverture, distribution, rien à demander : à jouer.</td></tr>
      </table>
      <div class="encadre">
        <strong>C'est le Drury inversé</strong>, aujourd'hui le plus répandu : la répétition de la majeure est l'enchère faible, 2♦ l'enchère forte. Le Drury d'origine faisait l'inverse. Les deux se jouent ; l'essentiel est de savoir lequel votre partenaire a en tête.
      </div>
      <p class="pied-page" style="color:#9a9382;margin-top:18px">Page 1 / 2</p>
    </div>

    <div class="page">
      <p class="sous-impression">Page 2 / 2 — les suites, les limites, les variantes</p>

      <h2>Le deuxième tour du répondant</h2>
      <p>Sur 2 de la majeure, il passe : l'ouvreur a dit qu'il n'y avait rien à espérer, et l'on est déjà au bon contrat. Sur 2♦, il précise sa fourchette.</p>
      <table class="reponses">
        <tr><th>Enchère</th><th>Le répondant</th></tr>
        <tr><td>2 de la majeure</td><td>Bas de fourchette : 10-11 H, trois atouts. L'ouvreur passe ou conclut.</td></tr>
        <tr><td>3 de la majeure</td><td>12 H, ou 11 H avec un quatrième atout.</td></tr>
        <tr><td>4 de la majeure</td><td>12 H, quatre atouts et une courte : la manche se joue.</td></tr>
      </table>

      <h2>Ce que le Drury n'est pas</h2>
      <ul>
        <li><strong>Sans soutien</strong>, on répond naturellement : 1SA, ou sa couleur. Le 2♣ naturel ayant disparu, une main de passe avec de longs Trèfles dit 3♣, naturel et non forcing.</li>
        <li><strong>Moins de 10 H</strong> avec un fit : soutien simple à 2. Le seuil compte — sans lui, le 2♦ de l'ouvreur ne voudrait plus rien dire.</li>
        <li><strong>En première ou deuxième position</strong>, le Drury n'existe pas : le répondant n'a pas passé, et l'ouverture est normale. On revient au soutien limite ordinaire.</li>
        <li><strong>Après une intervention</strong>, il disparaît également : les enchères redeviennent naturelles, et le contre ou le cue-bid prennent le relais.</li>
      </ul>

      <h2>Pourquoi cela vaut la peine</h2>
      <p>Le gain est double. On s'arrête à 2♠ sur les donnes où l'ouverture était légère — là où le soutien limite classique aurait payé un palier de trop. Et l'on garde tout l'espace nécessaire quand l'ouverture était vraie : après 2♦, la manche s'explore sans jamais dépasser le contrat de repli.</p>

      <h2>Une variante fréquente</h2>
      <p>Le <strong>Drury à deux paliers</strong> distingue la qualité du fit : 2♣ pour un soutien à trois cartes, 2♦ pour un soutien à quatre cartes, avec les mêmes suites. Il renseigne mieux l'ouvreur sur les chances de manche, au prix d'une enchère supplémentaire à mémoriser. La série conserve le Drury simple.</p>

      <h2>À retenir</h2>
      <ul>
        <li>2♣ par une main de passe, ouverture majeure en troisième ou quatrième : soutien 3+ et 10-12 H.</li>
        <li>2 de la majeure = ouverture légère, on s'arrête · 2♦ = vraie ouverture, forcing.</li>
        <li>Sur 2♦ : 2M avec 10-11, 3M avec 12, 4M avec 12 et une courte.</li>
        <li>Ni en première position, ni après intervention, ni sans soutien.</li>
      </ul>
      <p class="pied-page" style="color:#9a9382;margin-top:18px">Page 2 / 2</p>
      <p class="no-print" style="font-family:-apple-system,sans-serif;font-size:13px;color:var(--ink-soft)">
        Cette leçon s'imprime sur deux pages (Fichier → Imprimer).
      </p>
    </div>
  `,

  banque: [
{id:"dru-01",role:"Répondant",seq:["","Passe","1♠","?"],
 main:{p:"R 9 6 4",c:"A 8 3",k:"D V 5",t:"9 7 2"},h:10,
 question:"Votre partenaire ouvre de 1♠ en troisième position. Que dites-vous ?",
 rep:"2♣",options:["2♣","2♠","3♠","1SA"],
 com:"<em>2♣</em> : quatre atouts et 10 H, exactement la main du Drury. 3♠ engagerait le camp au palier de 3 alors que l'ouverture peut n'être qu'un 10 H de position."},

{id:"dru-02",role:"Répondant",seq:["","Passe","1♠","?"],
 main:{p:"D 8 7 3",c:"9 5 2",k:"R 6 4",t:"8 5 3"},h:5,
 question:"Cinq points et quatre atouts. Que dites-vous ?",
 rep:"2♠",options:["2♠","2♣","Passe","3♠"],
 com:"<em>2♠</em>, le soutien simple. Le Drury commence à 10 H : l'annoncer avec 5 H ferait chercher une manche imaginaire et priverait le 2♦ de l'ouvreur de tout sens."},

{id:"dru-03",role:"Répondant",seq:["","Passe","1♠","?"],
 main:{p:"8 5",c:"R V 9 6",k:"A D 7 4",t:"10 6 3"},h:10,
 question:"Dix points, mais deux Piques seulement. Que dites-vous ?",
 rep:"1SA",options:["1SA","2♣","2♦","2♠"],
 com:"<em>1SA</em>, naturel. Le Drury promet un soutien : sans trois atouts, il n'a rien à demander. Vos Cœurs et vos Carreaux se diront au tour suivant si l'occasion se présente."},

{id:"dru-04",role:"Répondant",seq:["","Passe","1♠","?"],
 main:{p:"R 10 8 5",c:"D 3",k:"A V 9 4",t:"D 6 2"},h:12,
 question:"Douze points et quatre atouts. Que dites-vous ?",
 rep:"2♣",options:["2♣","3♠","4♠","2♠"],
 com:"<em>2♣</em>. Vous êtes au maximum de votre passe initial, mais la manche dépend entièrement de l'ouvreur : c'est à lui de dire si son ouverture était vraie."},

{id:"dru-05",role:"Ouvreur",seq:["","Passe","1♠","2♣","?"],
 main:{p:"A D 10 8 5",c:"9 4",k:"R V 7",t:"8 6 2"},h:10,
 question:"Vous avez ouvert léger en troisième. Que répondez-vous ?",
 rep:"2♠",options:["2♠","2♦","3♠","4♠"],
 com:"<em>2♠</em> : ouverture légère, on s'arrête. C'est exactement ce que le Drury cherchait à savoir, et le partenaire passera. Sans la convention, vous seriez déjà à 3♠."},

{id:"dru-06",role:"Ouvreur",seq:["","Passe","1♠","2♣","?"],
 main:{p:"R V 9 7 3",c:"A D 5",k:"8 4",t:"R 6 2"},h:13,
 question:"Que répondez-vous à la demande ?",
 rep:"2♦",options:["2♦","2♠","3♠","2SA"],
 com:"<em>2♦</em> : vraie ouverture. L'enchère est artificielle et ne dit rien des Carreaux ; elle rend la parole au répondant, qui précisera s'il a 10 ou 12 H."},

{id:"dru-07",role:"Ouvreur",seq:["","Passe","1♠","2♣","?"],
 main:{p:"A R 10 6 4",c:"R D 8",k:"A 9 3",t:"7 5"},h:16,
 question:"Seize points en face d'un Drury. Que dites-vous ?",
 rep:"4♠",options:["4♠","2♦","2♠","3♠"],
 com:"<em>4♠</em>. Le Drury garantit un soutien et 10 H au moins : 26 points à deux et neuf atouts, il n'y a plus rien à demander. 2♦ ferait perdre du temps sans rien apprendre."},

{id:"dru-08",role:"Ouvreur",seq:["","Passe","1♠","2♣","?"],
 main:{p:"R D 9 7 5",c:"6",k:"A R 10 8 4",t:"A 3"},h:16,
 question:"Bicolore fort. Que répondez-vous ?",
 rep:"3♦",options:["3♦","2♦","4♠","2♠"],
 com:"<em>3♦</em>, naturel et forcing. 2♦ étant devenu conventionnel, une vraie couleur de Carreau doit se dire au palier de 3. Le répondant pourra montrer un honneur utile avant de choisir le contrat."},

{id:"dru-09",role:"Répondant",seq:["","Passe","1♠","2♣","2♠","?"],
 main:{p:"R 9 6 4",c:"A 8 3",k:"D V 5",t:"9 7 2"},h:10,
 question:"L'ouvreur annonce une ouverture légère. Que dites-vous ?",
 rep:"Passe",options:["Passe","3♠","2SA","4♠"],
 com:"<em>Passe</em>. Vingt points à deux, huit atouts : 2♠ est le contrat. La convention a rempli son office — sans elle vous seriez à 3♠, un palier trop haut."},

{id:"dru-10",role:"Répondant",seq:["","Passe","1♠","2♣","2♦","?"],
 main:{p:"R 9 6",c:"A 8 3",k:"D V 5 4",t:"9 7 2"},h:10,
 question:"L'ouverture était vraie. Que dites-vous ?",
 rep:"2♠",options:["2♠","3♠","4♠","2SA"],
 com:"<em>2♠</em> : bas de fourchette, dix points et trois atouts seulement. L'ouvreur passera avec 12-13 H et conclura avec 15 H — c'est lui qui a le dernier mot."},

{id:"dru-11",role:"Répondant",seq:["","Passe","1♠","2♣","2♦","?"],
 main:{p:"R 10 8 5",c:"D 3",k:"A V 9 4",t:"D 6 2"},h:12,
 question:"L'ouverture était vraie. Que dites-vous ?",
 rep:"3♠",options:["3♠","2♠","4♠","3SA"],
 com:"<em>3♠</em> : haut de fourchette, douze points et quatre atouts. Sans courte, la manche n'est pas certaine ; l'ouvreur conclura avec 13 H et plus."},

{id:"dru-12",role:"Répondant",seq:["","Passe","1♠","2♣","2♦","?"],
 main:{p:"R 10 8 5",c:"4",k:"A R 9 6 3",t:"D 7 2"},h:12,
 question:"Douze points, quatre atouts, un singleton. Que dites-vous ?",
 rep:"4♠",options:["4♠","3♠","2♠","3♦"],
 com:"<em>4♠</em>. Le singleton Cœur vaut mieux qu'un point de plus : quatre atouts et une courte en face d'une vraie ouverture, la manche se joue."},

{id:"dru-13",role:"Ouvreur",seq:["","Passe","1♠","2♣","2♦","2♠","?"],
 main:{p:"R V 9 7 3",c:"A D 5",k:"8 4",t:"R 6 2"},h:13,
 question:"Le répondant annonce le bas de sa fourchette. Que dites-vous ?",
 rep:"Passe",options:["Passe","3♠","4♠","2SA"],
 com:"<em>Passe</em>. Treize points en face de dix, huit atouts, deux doubletons mal placés : 23 points à deux ne font pas une manche. Vous aviez interrogé, la réponse est claire."},

{id:"dru-14",role:"Ouvreur",seq:["","Passe","1♠","2♣","2♦","3♠","?"],
 main:{p:"A D 10 7 2",c:"R 9 4",k:"A 8 3",t:"D 5"},h:15,
 question:"Le répondant annonce le haut de sa fourchette. Que dites-vous ?",
 rep:"4♠",options:["4♠","Passe","4♣","3SA"],
 com:"<em>4♠</em>. Quinze points en face de douze et neuf atouts : la manche est là. C'est le second bénéfice du Drury — s'arrêter bas quand il le faut n'empêche pas de conclure quand la manche existe."},

{id:"dru-15",role:"Répondant",seq:["","Passe","1♠","?"],
 main:{p:"9 4",c:"8 6",k:"R V 5",t:"A D 10 8 6 3"},h:10,
 question:"Dix points et six Trèfles. Que dites-vous ?",
 rep:"3♣",options:["3♣","2♣","1SA","2♠"],
 com:"<em>3♣</em>, naturel et non forcing. Le 2♣ naturel a disparu, avalé par la convention : une vraie couleur de Trèfle se dit désormais au palier de 3.",
 alt:"1SA reste jouable avec une main plus équilibrée ; ici les six Trèfles méritent d'être nommés."},

{id:"dru-16",role:"Répondant",seq:["1♠","?"],
 main:{p:"D 9 7 5",c:"R 8 3",k:"A 10 6",t:"9 4 2"},h:9,
 question:"Cette fois l'ouverture est en première position et vous n'avez pas encore parlé. Que dites-vous ?",
 rep:"3♠",options:["3♠","2♣","2♠","4♠"],
 com:"<em>3♠</em>, le soutien limite ordinaire. Le Drury suppose une main ayant passé : ici l'ouverture est normale, il n'y a rien à vérifier et la convention ne s'applique pas."},

{id:"dru-17",role:"Répondant",seq:["","Passe","1♥","?"],
 main:{p:"R 8 5",c:"D 9 4",k:"A 10 7 6",t:"V 8 3"},h:10,
 question:"Ouverture de 1♥ en quatrième position. Que dites-vous ?",
 rep:"2♣",options:["2♣","2♥","3♥","1SA"],
 com:"<em>2♣</em>. La quatrième position appelle la même prudence que la troisième : on n'y ouvre pas sans raison, mais souvent léger. La convention s'y applique de la même façon."},

{id:"dru-18",role:"Répondant",seq:["","Passe","1♠","?"],
 main:{p:"R 10 6",c:"A 9 5 3",k:"D V 4",t:"7 6 2"},h:10,
 question:"Votre partenaire ouvre de 1♠ en troisième, mais l'adversaire à votre droite intervient à 2♥. Que dites-vous ?",
 rep:"3♠",options:["3♠","2♣","2♠","Contre"],
 com:"<em>3♠</em>. L'intervention annule le Drury : les enchères redeviennent naturelles, et le soutien limite reprend son sens ordinaire."},

{id:"dru-19",role:"Ouvreur",seq:["","Passe","1♠","2♣","?"],
 main:{p:"R V 9 6 3",c:"A 7 5",k:"D 4",t:"10 8 2"},h:10,
 question:"Dix points d'ouverture de position. Que répondez-vous ?",
 rep:"2♠",options:["2♠","2♦","3♠","Passe"],
 com:"<em>2♠</em>, et surtout pas Passe : 2♣ est forcing, il faut répondre. La répétition de la majeure est justement là pour avouer l'ouverture légère sans monter d'un palier."},

{id:"dru-20",role:"Ouvreur",seq:["","Passe","1♠","2♣","?"],
 main:{p:"A D 8 6 2",c:"9 5",k:"R V 7",t:"D 6 3"},h:12,
 question:"Douze points tout juste. Que répondez-vous ?",
 rep:"2♦",options:["2♦","2♠","3♠","2SA"],
 com:"<em>2♦</em> : douze points, c'est une vraie ouverture, celle que vous auriez faite en première position. Le partenaire dira 2♠ avec 10 H, et vous passerez sans dommage."},

{id:"dru-21",role:"Répondant",seq:["","Passe","1♠","2♣","2♠","?"],
 main:{p:"R 10 8 5",c:"D 3",k:"A V 9 4",t:"D 6 2"},h:12,
 question:"Vous aviez douze points, l'ouvreur avoue une ouverture légère. Que dites-vous ?",
 rep:"Passe",options:["Passe","3♠","4♠","2SA"],
 com:"<em>Passe</em>. Douze en face de dix ou onze fait 22 ou 23 points : la manche n'y est pas. Insister reviendrait à ne pas croire la réponse que l'on venait de demander."},

{id:"dru-22",role:"Ouvreur",seq:["","Passe","1♠","2♣","?"],
 main:{p:"A D 10 7 5",c:"R V 9 8 3",k:"A 4",t:"6"},h:14,
 question:"Cinq-cinq en majeures, quatorze points. Que répondez-vous ?",
 rep:"2♥",options:["2♥","2♦","2♠","4♠"],
 com:"<em>2♥</em>, naturel et forcing. Toute enchère autre que 2♦ ou la répétition de la majeure décrit une vraie ouverture : le partenaire choisira la meilleure des deux majeures."},

{id:"dru-23",role:"Répondant",seq:["","Passe","1♠","2♣","2♥","?"],
 main:{p:"R 9 6",c:"8 3",k:"A D V 5",t:"9 7 4 2"},h:10,
 question:"L'ouvreur montre cinq Cœurs à côté de ses Piques. Que dites-vous ?",
 rep:"2♠",options:["2♠","3♠","2SA","3♥"],
 com:"<em>2♠</em>, retour à la majeure d'ouverture : c'est là qu'est le fit, deux Cœurs ne valent rien en face de cinq. Restez bas, vous n'avez que dix points."},

{id:"dru-24",role:"Répondant",seq:["","Passe","1♠","?"],
 main:{p:"D 10 7 4",c:"R 8 5",k:"9 6 3",t:"A 7 2"},h:9,
 question:"Neuf points et quatre atouts. Que dites-vous ?",
 rep:"2♠",options:["2♠","2♣","3♠","1SA"],
 com:"<em>2♠</em>. Neuf points ne suffisent pas, même avec un quatrième atout : le seuil du Drury est à dix. Les fourchettes ne valent que si on les respecte."},

{id:"dru-25",role:"Répondant",seq:["","Passe","1♠","2♣","2♦","?"],
 main:{p:"D 9 5",c:"A R 6",k:"V 8 4 3",t:"V 6 2"},h:11,
 question:"L'ouverture était vraie. Que dites-vous ?",
 rep:"2♠",options:["2♠","3♠","4♠","2SA"],
 com:"<em>2♠</em>. Onze points, mais trois atouts seulement et des valeurs plates : c'est le bas de la fourchette. 3♠ demanderait douze points, ou onze avec un quatrième atout."}
  ]
};
