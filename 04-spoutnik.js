/* Leçon 4 — Le contre Spoutnik */
module.exports = {
  id: "04-spoutnik",
  numero: 4,
  titre: "Le contre Spoutnik",
  sousTitre: "Répondre après l'intervention adverse sans perdre les majeures",
  resume: "Le contre du répondant après une intervention n'est plus punitif : il montre les couleurs non annoncées, majeures d'abord, avec une force croissante selon le palier.",
  etat: "prête",
  colonnes: ["Ouvreur", "Adversaire", "Répondant"],

  cours: `
    <div class="page">
      <p class="titre-impression">Les enchères gadget — Leçon 4 : le contre Spoutnik</p>
      <p class="sous-impression">Page 1 / 2 — le principe et les forces exigées</p>

      <p class="chapo">Une intervention adverse vole au répondant l'enchère qu'il voulait faire. Le contre Spoutnik la lui rend : il cesse d'être punitif pour devenir un contre d'appel, qui montre les couleurs que l'adversaire vient de lui interdire.</p>

      <h2>Le problème</h2>
      <p>Partenaire ouvre de 1♦, l'adversaire intervient à 1♥, et vous tenez quatre Piques avec 8 H. Sans convention, il ne reste rien : 1♠ promettrait cinq cartes, 1SA une tenue à Cœur, 2♦ un vrai soutien. La couleur quatrième, celle qui vaut le plus, est perdue.</p>
      <p>Le contre punitif, lui, n'a presque aucune utilité à ce niveau : il faudrait tenir la couleur adverse avec une main forte, situation rare. On échange donc l'usage rare contre l'usage fréquent.</p>

      <h2>Le principe</h2>
      <div class="encadre">
        <strong>Le contre du répondant est d'appel</strong>, jamais punitif. Il montre les couleurs non annoncées, <strong>les majeures d'abord</strong>, et ne promet aucune tenue dans la couleur adverse. Sa force dépend du palier atteint.
      </div>
      <div class="duo">
        <div class="encheres trois" aria-label="1 Carreau, 1 Coeur, Contre">
          <div class="entete"><span>Ouvreur</span><span>Adversaire</span><span>Répondant</span></div>
          <div class="ligne"><span>1<b class="r">♦</b></span><span class="adv">1<b class="r">♥</b></span><span class="attente">Contre</span></div>
        </div>
        <div style="flex:1;min-width:200px">
          <p style="margin-top:0">Ici, le contre annonce exactement <em>quatre Piques</em> : avec cinq, on dit 1♠, qui les promet.</p>
        </div>
      </div>

      <h2>Ce que le contre montre, selon l'intervention</h2>
      <table class="reponses">
        <tr><th>Séquence</th><th>Le contre montre</th></tr>
        <tr><td>1♣ ou 1♦ – (1♥)</td><td>Quatre Piques exactement.</td></tr>
        <tr><td>1♣ ou 1♦ – (1♠)</td><td>Quatre Cœurs au moins — cinq avec une main trop faible pour 2♥.</td></tr>
        <tr><td>1♣ – (1♦)</td><td>Les deux majeures, au moins quatre cartes dans chacune.</td></tr>
        <tr><td>1♥ – (1♠)</td><td>Des valeurs sans soutien à Cœur ni tenue à Pique, en général les deux mineures.</td></tr>
        <tr><td>1♠ – (2♥)</td><td>Des valeurs et les deux mineures, ou de quoi jouer la manche ailleurs qu'à Pique.</td></tr>
      </table>

      <h2>La force exigée</h2>
      <p>Elle monte avec le palier, comme pour toute enchère du répondant : ce n'est pas une convention qui autorise à parler sur rien.</p>
      <table class="reponses">
        <tr><th>Palier</th><th>Force</th></tr>
        <tr><td>Palier de 1</td><td>6 H et plus.</td></tr>
        <tr><td>Palier de 2</td><td>8 à 9 H.</td></tr>
        <tr><td>Palier de 3</td><td>10 à 11 H.</td></tr>
      </table>
      <p>Vers le haut, en revanche, le contre n'est pas limité : avec 16 H et quatre Piques, on contre d'abord, et l'on montre la force au tour suivant par un saut ou un cue-bid.</p>
      <p class="pied-page" style="color:#9a9382;margin-top:18px">Page 1 / 2</p>
    </div>

    <div class="page">
      <p class="sous-impression">Page 2 / 2 — les réponses de l'ouvreur, les pièges, les limites</p>

      <h2>Les réponses de l'ouvreur</h2>
      <table class="reponses">
        <tr><th>Enchère</th><th>Signification</th></tr>
        <tr><td>La majeure demandée,<br>au palier minimum</td><td>Quatre cartes, ouverture minimum. Avec les deux majeures quatrièmes, on nomme la moins chère.</td></tr>
        <tr><td>Saut dans cette majeure</td><td>Quatre cartes et 16-17 H.</td></tr>
        <tr><td>Répétition de sa couleur<br>ou 1SA</td><td>Pas la majeure demandée, ouverture minimum. 1SA suppose une tenue dans la couleur adverse.</td></tr>
        <tr><td>Cue-bid dans la couleur<br>adverse</td><td>18 H et plus, forcing de manche : on cherche encore le contrat.</td></tr>
      </table>
      <p>L'ouvreur n'est jamais dispensé de répondre : le contre est forcing pour un tour, sauf si l'adversaire suivant parle et lui rend la liberté.</p>

      <h2>Trois pièges</h2>
      <ul>
        <li><strong>Cinq cartes dans la majeure ?</strong> On la nomme, on ne contre pas — sauf main trop faible pour le palier exigé : après 1♦ – (1♠), 2♥ demanderait 10 H, alors que le contre se contente de 6.</li>
        <li><strong>Un vrai soutien ?</strong> On soutient. Le contre nie le fit dans la majeure d'ouverture.</li>
        <li><strong>L'envie de punir ?</strong> Le contre ne le permet plus. On passe, en laissant le partenaire rouvrir par un contre d'appel que l'on convertira en punitif en passant à son tour.</li>
      </ul>

      <h2>Jusqu'où ?</h2>
      <p>Le contre reste d'appel <strong>jusqu'à 3♠ inclus</strong>. Au-delà — sur 4♥ adverse par exemple — il redevient punitif : à ce niveau, la pénalité rapporte plus souvent que la recherche d'un fit. C'est une convention de partenariat : certains s'arrêtent à 2♠, d'autres montent jusqu'à 4♦. L'essentiel est d'en avoir parlé.</p>

      <h2>Pourquoi « Spoutnik »</h2>
      <p>Le nom vient du satellite soviétique de 1957 : la convention, née à la même époque, a paru aussi révolutionnaire. Les Anglo-Saxons l'appellent <em>negative double</em>, ce qui décrit mieux ce qu'elle fait.</p>

      <h2>À retenir</h2>
      <ul>
        <li>Le contre du répondant est d'appel, jamais punitif, et ne promet pas de tenue.</li>
        <li>Il montre les couleurs non annoncées, majeures d'abord.</li>
        <li>6 H au palier de 1, 8-9 au palier de 2, 10-11 au palier de 3, sans limite vers le haut.</li>
        <li>Pour punir, on passe et l'on attend la réouverture du partenaire.</li>
      </ul>
      <p class="pied-page" style="color:#9a9382;margin-top:18px">Page 2 / 2</p>
      <p class="no-print" style="font-family:-apple-system,sans-serif;font-size:13px;color:var(--ink-soft)">
        Cette leçon s'imprime sur deux pages (Fichier → Imprimer).
      </p>
    </div>
  `,

  banque: [
{id:"spo-01",role:"Répondant",seq:["1♦","1♥","?"],
 main:{p:"R 9 6 4",c:"8 5",k:"D 10 7",t:"A 8 5 3"},h:9,
 question:"Neuf points et quatre Piques. Que dites-vous ?",
 rep:"Contre",options:["Contre","1♠","1SA","2♦"],
 com:"<em>Contre</em> : quatre Piques exactement, 9 H. 1♠ promettrait cinq cartes, 1SA une tenue à Cœur que vous n'avez pas. C'est la donne type de la convention."},

{id:"spo-02",role:"Répondant",seq:["1♦","1♥","?"],
 main:{p:"A V 9 7 3",c:"6 4",k:"R 8 5",t:"9 7 2"},h:8,
 question:"Cinq Piques, 8 H. Que dites-vous ?",
 rep:"1♠",options:["1♠","Contre","1SA","2♠"],
 com:"<em>1♠</em>, naturel. Le contre est réservé aux couleurs quatrièmes : avec cinq cartes on nomme, c'est plus précis et cela n'a rien coûté."},

{id:"spo-03",role:"Répondant",seq:["1♦","1♥","?"],
 main:{p:"D 8 6 5",c:"9 7 3",k:"10 8 4",t:"V 7 2"},h:3,
 question:"Quatre Piques, mais trois points. Que dites-vous ?",
 rep:"Passe",options:["Passe","Contre","1♠","2♦"],
 com:"<em>Passe</em>. Même au palier de 1, le contre demande 6 H : la convention ne dispense pas d'avoir des valeurs, sinon l'ouvreur enchérirait dans le vide."},

{id:"spo-04",role:"Répondant",seq:["1♣","1♦","?"],
 main:{p:"R 9 7 5",c:"A 8 6 3",k:"9 4",t:"10 7 2"},h:7,
 question:"Les deux majeures quatrièmes, 7 H. Que dites-vous ?",
 rep:"Contre",options:["Contre","1♥","1♠","1SA"],
 com:"<em>Contre</em> : sur une intervention à 1♦, il montre les deux majeures. Nommer l'une des deux vous ferait perdre l'autre ; l'ouvreur choisira la sienne."},

{id:"spo-05",role:"Répondant",seq:["1♣","1♦","?"],
 main:{p:"9 6 3",c:"R V 8 5",k:"D 7 2",t:"A 4 3"},h:10,
 question:"Une seule majeure quatrième, 10 H. Que dites-vous ?",
 rep:"1♥",options:["1♥","Contre","1SA","2♦"],
 com:"<em>1♥</em>, naturel. Le contre sur 1♦ promet les <em>deux</em> majeures : avec une seule, on la nomme, l'espace est encore libre au palier de 1."},

{id:"spo-06",role:"Répondant",seq:["1♥","1♠","?"],
 main:{p:"8 4",c:"9 5",k:"A V 7 3",t:"R 10 8 6 2"},h:8,
 question:"Huit points, les deux mineures, aucun soutien. Que dites-vous ?",
 rep:"Contre",options:["Contre","2♣","1SA","Passe"],
 com:"<em>Contre</em> : des valeurs, pas de soutien à Cœur, pas de tenue à Pique. Il montre ici les deux mineures et laisse l'ouvreur décrire sa main."},

{id:"spo-07",role:"Répondant",seq:["1♠","2♥","?"],
 main:{p:"7 4",c:"9 3",k:"R V 8 5",t:"A D 9 6 2"},h:10,
 question:"L'intervention est au palier de 2. Que dites-vous ?",
 rep:"Contre",options:["Contre","3♣","2SA","Passe"],
 com:"<em>Contre</em> : 10 H, au-dessus des 8-9 exigés au palier de 2. 3♣ enfermerait la donne dans une seule mineure alors que vous en avez deux."},

{id:"spo-08",role:"Répondant",seq:["1♦","1♠","?"],
 main:{p:"9 5",c:"R V 8 3",k:"D 10 6",t:"9 7 4 2"},h:6,
 question:"Quatre Cœurs, six points. Que dites-vous ?",
 rep:"Contre",options:["Contre","2♥","1SA","Passe"],
 com:"<em>Contre</em> : après une intervention à 1♠, il montre quatre Cœurs. 2♥ demanderait 10 H et vous n'en avez que six."},

{id:"spo-09",role:"Répondant",seq:["1♦","1♠","?"],
 main:{p:"8 4",c:"R 10 8 6 3",k:"D 9 5",t:"V 6 2"},h:6,
 question:"Cinq Cœurs, mais six points seulement. Que dites-vous ?",
 rep:"Contre",options:["Contre","2♥","1SA","Passe"],
 com:"<em>Contre</em>, malgré la cinquième carte : 2♥ exigerait 10 H. C'est la seule entorse admise à la règle des quatre cartes — la force commande avant la longueur."},

{id:"spo-10",role:"Répondant",seq:["1♦","2♣","?"],
 main:{p:"V 5",c:"R 8 3",k:"A 7 4",t:"D V 10 9 6"},h:11,
 question:"Onze points et cinq Trèfles derrière l'intervenant. Que dites-vous ?",
 rep:"Passe",options:["Passe","Contre","2SA","3♦"],
 com:"<em>Passe</em>. Vous rêvez de punir, mais le contre ne le permet plus : il est d'appel. On passe, le partenaire rouvrira souvent par un contre, et c'est en passant à votre tour que la pénalité arrivera."},

{id:"spo-11",role:"Ouvreur",seq:["1♦","1♥","Contre","?"],
 main:{p:"A 8 6 5",c:"9 4",k:"A D 10 7 3",t:"R 2"},h:13,
 question:"Votre partenaire a contré. Que dites-vous ?",
 rep:"1♠",options:["1♠","2♠","1SA","2♦"],
 com:"<em>1♠</em> : quatre Piques, ouverture minimum. Le contre demandait cette couleur, vous l'avez — inutile d'en dire plus avec 13 H."},

{id:"spo-12",role:"Ouvreur",seq:["1♦","1♥","Contre","?"],
 main:{p:"R D 9 5",c:"A 4",k:"A R 10 8 3",t:"9 6"},h:16,
 question:"Seize points et quatre Piques. Que dites-vous ?",
 rep:"2♠",options:["2♠","1♠","2♥","3♠"],
 com:"<em>2♠</em>, le saut : quatre Piques et 16-17 H. Le partenaire peut n'avoir que 6 H, mais il peut aussi en avoir 11 — le saut lui permet de conclure."},

{id:"spo-13",role:"Ouvreur",seq:["1♦","1♥","Contre","?"],
 main:{p:"8 5",c:"D 3",k:"A R 10 9 6",t:"R 8 4 2"},h:12,
 question:"Pas de quatrième Pique. Que dites-vous ?",
 rep:"2♦",options:["2♦","1SA","2♣","Passe"],
 com:"<em>2♦</em>, la répétition minimum. 1SA promettrait une tenue à Cœur, et la Dame sèche n'en est pas une. Surtout pas Passe : le contre est forcing."},

{id:"spo-14",role:"Ouvreur",seq:["1♦","1♥","Contre","?"],
 main:{p:"A D 9 5",c:"6",k:"A R 10 8 4",t:"A D 3"},h:19,
 question:"Dix-neuf points. Que dites-vous ?",
 rep:"2♥",options:["2♥","2♠","3♠","4♠"],
 com:"<em>2♥</em>, cue-bid dans la couleur adverse : forcing de manche. Le saut à 2♠ plafonnerait à 17 H et le partenaire pourrait passer."},

{id:"spo-15",role:"Répondant",seq:["1♠","3♦","?"],
 main:{p:"9 6",c:"A V 8 5",k:"10 7 3",t:"D 9 4 2"},h:7,
 question:"L'intervention est au palier de 3. Que dites-vous ?",
 rep:"Passe",options:["Passe","Contre","3♥","3SA"],
 com:"<em>Passe</em>. Au palier de 3, le contre demande 10 à 11 H : avec sept, contrer inviterait le partenaire à jouer une manche qui n'existe pas."},

{id:"spo-16",role:"Répondant",seq:["1♠","3♦","?"],
 main:{p:"8 5",c:"A D 9 6",k:"V 7 4",t:"R V 8 3"},h:11,
 question:"Onze points au palier de 3. Que dites-vous ?",
 rep:"Contre",options:["Contre","3♠","3SA","4♥"],
 com:"<em>Contre</em> : la force y est. Vous montrez des valeurs et vos Cœurs quatrièmes, sans vous enfermer dans 3SA que rien ne garantit."},

{id:"spo-17",role:"Répondant",seq:["1♦","1♥","?"],
 main:{p:"A D 9 5",c:"8 4",k:"R V 3",t:"A D 7 2"},h:16,
 question:"Seize points et quatre Piques. Que dites-vous ?",
 rep:"Contre",options:["Contre","2♥","1♠","3SA"],
 com:"<em>Contre</em> d'abord. Il n'a pas de limite supérieure : vous montrerez les 16 H au tour suivant, par un saut ou un cue-bid, une fois la couleur trouvée."},

{id:"spo-18",role:"Répondant",seq:["1♥","1♠","?"],
 main:{p:"9 6 3",c:"R 8 5",k:"A 10 7 4",t:"8 6 2"},h:7,
 question:"Trois Cœurs et sept points. Que dites-vous ?",
 rep:"2♥",options:["2♥","Contre","1SA","Passe"],
 com:"<em>2♥</em>. Le contre nie le soutien : avec trois atouts en face d'une ouverture majeure, on soutient, c'est l'information la plus utile."},

{id:"spo-19",role:"Répondant",seq:["1♣","1♥","?"],
 main:{p:"R V 8 5",c:"9 3",k:"A D 7 4",t:"R 6 2"},h:13,
 question:"Treize points et quatre Piques. Que dites-vous ?",
 rep:"Contre",options:["Contre","1♠","2SA","3SA"],
 com:"<em>Contre</em>. Avec quatre Piques la convention s'applique quelle que soit la force ; le palier de la manche sera fixé après la réponse de l'ouvreur."},

{id:"spo-20",role:"Répondant",seq:["1♦","1♥","Contre","1♠","Passe","?"],
 main:{p:"R 9 6 4",c:"8 5",k:"D 10 7",t:"A 8 5 3"},h:9,
 question:"L'ouvreur a nommé vos Piques. Que dites-vous ?",
 rep:"2♠",options:["2♠","3♠","1SA","Passe"],
 com:"<em>2♠</em>, le soutien simple : le fit 4-4 est trouvé et vous avez 9 H, de quoi soutenir sans inviter. L'ouvreur poursuivra s'il a mieux qu'un minimum."},

{id:"spo-21",role:"Ouvreur",seq:["1♣","1♦","Contre","?"],
 main:{p:"A 9 7 3",c:"R 8 5 2",k:"6",t:"A D 9 4"},h:13,
 question:"Le contre montre les deux majeures. Que dites-vous ?",
 rep:"1♥",options:["1♥","1♠","2♣","1SA"],
 com:"<em>1♥</em> : avec les deux majeures quatrièmes, on nomme la moins chère. Le partenaire pourra encore proposer les Piques au palier de 1, ce qu'un 1♠ immédiat aurait interdit."},

{id:"spo-22",role:"Répondant",seq:["1♦","2♠","?"],
 main:{p:"7",c:"A V 9 5",k:"R 8 4 3",t:"D 10 6 2"},h:10,
 question:"Intervention à 2♠, dix points. Que dites-vous ?",
 rep:"Contre",options:["Contre","3♥","3♦","Passe"],
 com:"<em>Contre</em> : au-dessus des 8-9 H exigés, il montre vos Cœurs et laisse ouverte la mineure. 3♥ promettrait cinq cartes."},

{id:"spo-23",role:"Répondant",seq:["1♦","1♥","?"],
 main:{p:"9 6 5",c:"R V 7",k:"D 8 4",t:"A 10 7 3"},h:10,
 question:"Dix points, pas de majeure quatrième, la tenue à Cœur. Que dites-vous ?",
 rep:"1SA",options:["1SA","Contre","2♦","2SA"],
 com:"<em>1SA</em>, naturel : 6 à 10 H avec la tenue dans la couleur adverse. Le contre annoncerait des Piques que vous n'avez pas — il décrit, il ne sert pas à dire « j'ai des points »."},

{id:"spo-24",role:"Ouvreur",seq:["1♠","2♥","Contre","Passe","?"],
 main:{p:"A D 8 6 5",c:"8 3",k:"R 9 4",t:"A 7 2"},h:13,
 question:"Votre partenaire a contré au palier de 2. Que dites-vous ?",
 rep:"2♠",options:["2♠","3♠","2SA","3♣"],
 com:"<em>2♠</em>, la répétition minimum. Le contre promettait 8-9 H : avec 13 H et cinq Piques, on décrit sans s'emballer, le partenaire parlera encore s'il a mieux."},

{id:"spo-25",role:"Répondant",seq:["1♦","1♥","?"],
 main:{p:"R 9 6 4",c:"8",k:"7 3",t:"A D 10 8 5 2"},h:9,
 question:"Quatre Piques et six Trèfles, neuf points. Que dites-vous ?",
 rep:"Contre",options:["Contre","2♣","1♠","3♣"],
 com:"<em>Contre</em> : les majeures d'abord. Un fit 4-4 à Pique vaut mieux qu'une longue mineure, et les Trèfles se diront au tour suivant si les Piques ne mènent nulle part.",
 alt:"2♣ se défend avec une main plus faible en Piques ou une septième carte à Trèfle ; ici les quatre Piques honorées passent devant."}
  ]
};
