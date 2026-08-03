/* Leçon 1 — Le Roudi (check-back Stayman) */
module.exports = {
  id: "01-roudi",
  numero: 1,
  titre: "Le Roudi",
  sousTitre: "Retrouver le fit majeur après la redemande de 1SA",
  resume: "2♣ artificiel et forcing sur la redemande de 1SA, à partir de 11 H, pour retrouver le soutien à trois cartes ou la seconde majeure quatrième.",
  etat: "prête",

  cours: `<div class="page">
    <p class="titre-impression">Les enchères gadget — Leçon 1 : le Roudi <span style="font-size:10pt;color:#555">(check-back Stayman)</span></p>
    <p class="sous-impression">Page 1 / 2 — le principe et les réponses de l'ouvreur</p>

    <p class="chapo">Le Roudi est un 2♣ artificiel qui, après la redemande de 1SA, redonne au répondant les deux renseignements que cette redemande lui a fait perdre : l'ouvreur a-t-il trois cartes dans ma majeure, ou quatre cartes dans l'autre&nbsp;?</p>

    <h2>Le problème</h2>
    <p>Après 1♦ – 1♠ – 1SA, l'ouvreur annonce 12-14 H et une main régulière. Le répondant qui détient 11 H et cinq Piques est dans une impasse : 3SA peut être le bon contrat, 4♠ aussi si l'ouvreur a trois Piques, et il se peut que le coup se joue seulement à la manche partielle. Toutes les enchères naturelles le forcent à choisir en aveugle.</p>
    <p>La redemande de 1SA a en effet nié quatre Piques — sans quoi l'ouvreur aurait dit 1♠ — mais elle n'a rien dit de son soutien à trois cartes, ni de ses quatre Cœurs éventuels.</p>

    <h2>Le principe</h2>
    <div class="encadre">
      <strong>2♣ est artificiel et forcing.</strong> Il ne promet aucun Trèfle, demande à l'ouvreur de préciser sa distribution dans les majeures, et se déclenche à partir de <strong>11 H</strong>. En dessous, on passe ou on signe.
    </div>
    <div class="duo">
      <div class="encheres" aria-label="Séquence 1 Carreau, 1 Pique, 1 Sans-Atout, 2 Trèfle">
        <div class="entete"><span>Ouvreur</span><span>Répondant</span></div>
        <div class="ligne"><span>1<b class="r">♦</b></span><span>1<b class="n">♠</b></span></div>
        <div class="ligne"><span>1SA</span><span class="attente">2<b class="n">♣</b></span></div>
      </div>
      <div style="flex:1;min-width:200px">
        <p style="margin-top:0">Le 2♣ ne dit rien de la force exacte : il annonce seulement que le répondant a de quoi inviter. C'est son <em>deuxième</em> tour d'enchères, après la réponse de l'ouvreur, qui fixera le palier.</p>
      </div>
    </div>

    <h2>Les réponses de l'ouvreur</h2>
    <table class="reponses">
      <tr><th>Enchère</th><th>Signification</th></tr>
      <tr><td>2♦</td><td>Négatif : ni trois cartes dans la majeure du répondant, ni quatre cartes dans l'autre majeure. C'est une enchère de rencontre, elle ne promet pas de Carreaux supplémentaires.</td></tr>
      <tr><td>2 de l'autre majeure</td><td>Quatre cartes dans cette majeure (et pas de soutien à trois cartes).</td></tr>
      <tr><td>2 de la majeure<br>du répondant</td><td>Soutien à trois cartes, main minimum (12-13 H).</td></tr>
      <tr><td>3 de la majeure<br>du répondant</td><td>Soutien à trois cartes et maximum (14 H). Le saut décrit la force, pas une carte de plus.</td></tr>
    </table>
    <div class="encadre">
      <strong>Priorité au fit.</strong> Avec à la fois trois cartes dans la majeure du répondant et quatre cartes dans l'autre, on annonce le soutien. Le fit 5-3 est connu tout de suite ; le 4-4 dans l'autre majeure, s'il existe, sera retrouvé au tour suivant.
    </div>

    <h2>Ce que le 2♣ libère</h2>
    <p>C'est le bénéfice caché de la convention : puisque toutes les mains fortes passent par 2♣, les redemandes naturelles du répondant deviennent franchement faibles et non forcing.</p>
    <ul>
      <li><strong>2♦, 2♥, 2♠ directs</strong> : mains de 5 à 10 H, on cherche à jouer là et nulle part ailleurs. L'ouvreur passe.</li>
      <li><strong>Passe</strong> : main régulière sans ambition, jusqu'à 10 H.</li>
      <li><strong>3SA</strong> direct : 13-15 H réguliers, sans intérêt pour un fit majeur (majeure quatrième, ou cinquième sans distribution).</li>
    </ul>

    <p class="pied-page" style="color:#9a9382;margin-top:18px">Page 1 / 2</p>
  </div>

  <div class="page">
    <p class="sous-impression">Page 2 / 2 — les suites, les cas particuliers, les extensions</p>

    <h2>Le deuxième tour du répondant</h2>
    <p>La réponse reçue, le répondant place le contrat. C'est là que 11-12 H se distinguent de 13 H et plus.</p>
    <table class="reponses">
      <tr><th>Après</th><th>Le répondant</th></tr>
      <tr><td>2♦ (négatif)</td><td>2SA avec 11-12 H · 3SA avec 13-15 H · 3 de sa majeure avec six cartes et 11-12 H (invitation) · 2 de sa majeure avec cinq cartes et rien de plus à dire.</td></tr>
      <tr><td>Fit annoncé<br>(2♠ ou 2♥)</td><td>3 de la majeure avec 11-12 H (invitation) · 4 de la majeure avec 13 H et plus.</td></tr>
      <tr><td>3 de sa majeure<br>(fit + maximum)</td><td>4 de la majeure, même avec 11 H : 14 H en face de 11 H avec neuf atouts, la manche se joue.</td></tr>
      <tr><td>2 de l'autre<br>majeure (4 cartes)</td><td>Fit 4-4 trouvé : 3 de cette majeure avec 11-12 H, 4 avec 13 H et plus. Sinon 2SA ou 3SA.</td></tr>
    </table>

    <h2>Cas particulier : après une réponse de 1♥</h2>
    <div class="duo">
      <div class="encheres" aria-label="Séquence 1 Carreau, 1 Coeur, 1 Sans-Atout, 2 Trèfle">
        <div class="entete"><span>Ouvreur</span><span>Répondant</span></div>
        <div class="ligne"><span>1<b class="r">♦</b></span><span>1<b class="r">♥</b></span></div>
        <div class="ligne"><span>1SA</span><span class="attente">2<b class="n">♣</b></span></div>
      </div>
      <div style="flex:1;min-width:200px">
        <p style="margin-top:0">La redemande de 1SA a déjà nié quatre Piques : avec quatre Piques, l'ouvreur aurait annoncé 1♠. Le 2♣ ne pose donc plus qu'une seule question — <em>as-tu trois Cœurs ?</em> — et l'ouvreur répond 2♥ avec trois Cœurs, 3♥ avec trois Cœurs et 14 H, 2♦ sinon.</p>
      </div>
    </div>

    <h2>Deux extensions naturelles</h2>
    <p><strong>Après une ouverture majeure.</strong> Dans 1♥ – 1♠ – 1SA, l'ouvreur a cinq Cœurs et une main irrégulière de 12-14 H. Le 2♣ du répondant demande le soutien : 2♠ avec trois Piques, 2♥ avec six Cœurs, 2♦ sinon.</p>
    <p><strong>Après une redemande de 2SA.</strong> Sur 1♣ – 1♠ – 2SA (18-19 H), la manche est acquise dès 6 H et la seule question qui vaille est celle du fit. Le Roudi se déplace d'un palier : <strong>3♣</strong>, avec les mêmes réponses — 3♠ pour trois Piques, 3♥ pour quatre Cœurs, 3♦ pour le négatif.</p>

    <h2>Une variante, écartée ici</h2>
    <p>Certains jouent la « nouvelle mineure forcing » : la demande se fait dans la mineure non annoncée, ce qui conserve 2♣ naturel après une ouverture de 1♦. La série retient le 2♣ quelle que soit la mineure d'ouverture — une seule enchère à mémoriser, au prix du 2♣ naturel faible, qui se perd rarement.</p>

    <h2>À retenir</h2>
    <ul>
      <li>2♣ artificiel, forcing, à partir de 11 H, et lui seul est fort.</li>
      <li>2♦ négatif · 2 de l'autre majeure = quatre cartes · 2 de la majeure du répondant = trois cartes · saut = trois cartes et 14 H.</li>
      <li>Le fit passe avant la seconde majeure.</li>
      <li>Toutes les enchères naturelles du répondant à 2 deviennent faibles.</li>
    </ul>

    <p class="pied-page" style="color:#9a9382;margin-top:18px">Page 2 / 2</p>
    <p class="no-print" style="font-family:-apple-system,sans-serif;font-size:13px;color:var(--ink-soft)">
      Cette leçon s'imprime sur deux pages (Fichier → Imprimer).
    </p>
  </div>`,

  banque: [
{id:"cbs-01",role:"Répondant",seq:["1♦","1♠","1SA","?"],
 main:{p:"A D 9 6 4",c:"R 8 3",k:"7 2",t:"D 10 5"},h:11,
 question:"Vous avez 11 H et cinq Piques. Que dites-vous ?",
 rep:"2♣",options:["2♣","2♠","2SA","3SA"],
 com:"Pile le cas de la convention. <em>2♣</em> demande les trois Piques ou les quatre Cœurs ; le palier sera fixé au tour suivant. 2SA immédiat renoncerait au fit 5-3, 2♠ enterrerait une main invitante."},

{id:"cbs-02",role:"Répondant",seq:["1♦","1♠","1SA","?"],
 main:{p:"R V 8 7 5",c:"9 6 4 2",k:"8",t:"10 7 3"},h:4,
 question:"Quatre points, cinq Piques, un singleton Carreau. Que dites-vous ?",
 rep:"2♠",options:["Passe","2♣","2♠","2♥"],
 com:"<em>2♠</em>, naturel et faible : c'est exactement ce que la convention libère. Avec un singleton dans la couleur d'ouverture, 1SA se jouerait mal. L'ouvreur passe."},

{id:"cbs-03",role:"Répondant",seq:["1♦","1♠","1SA","?"],
 main:{p:"A D 8 6 3",c:"R V 5",k:"A 9 4",t:"7 2"},h:14,
 question:"14 H et cinq Piques en face de 12-14 H. Que dites-vous ?",
 rep:"2♣",options:["2♣","3SA","4♠","3♠"],
 com:"La manche est acquise, mais laquelle ? <em>2♣</em> d'abord : avec trois Piques en face, 4♠ vaut mieux que 3SA. Vous direz 3SA au tour suivant si la réponse est 2♦."},

{id:"cbs-04",role:"Répondant",seq:["1♦","1♠","1SA","?"],
 main:{p:"R V 9 7 2",c:"A 10 8 5",k:"R 6",t:"8 4"},h:11,
 question:"Cinq Piques, quatre Cœurs, 11 H. Que dites-vous ?",
 rep:"2♣",options:["2♣","2♥","2SA","3SA"],
 com:"<em>2♣</em> interroge sur les deux majeures à la fois : trois Piques ou quatre Cœurs, l'une des deux réponses vous donne un fit. 2♥ ici serait faible et non forcing."},

{id:"cbs-05",role:"Ouvreur",seq:["1♦","1♠","1SA","2♣","?"],
 main:{p:"R 8 5",c:"A V 4",k:"A D 9 7 3",t:"8 2"},h:14,
 question:"Votre partenaire demande. Que répondez-vous ?",
 rep:"3♠",options:["2♠","3♠","2♦","2SA"],
 com:"Trois Piques et 14 H : le saut à <em>3♠</em> dit les deux d'un coup. Le partenaire ayant au moins 11 H, il conclura à 4♠ sans autre question. 2♠ sous-évaluerait la main."},

{id:"cbs-06",role:"Ouvreur",seq:["1♦","1♠","1SA","2♣","?"],
 main:{p:"7 4",c:"R D 8 5",k:"A V 9 6 3",t:"R 2"},h:13,
 question:"Que répondez-vous à la demande ?",
 rep:"2♥",options:["2♥","2♦","2SA","3♥"],
 com:"Deux Piques seulement, mais quatre Cœurs : <em>2♥</em>. Si le partenaire a quatre Cœurs à côté de ses cinq Piques, le fit 4-4 est trouvé ; sinon il rectifie à SA."},

{id:"cbs-07",role:"Ouvreur",seq:["1♦","1♠","1SA","2♣","?"],
 main:{p:"D 8 3",c:"R 9 5",k:"A D 10 6 4",t:"V 7"},h:12,
 question:"Que répondez-vous à la demande ?",
 rep:"2♠",options:["2♠","3♠","2♦","2SA"],
 com:"Trois Piques et un minimum strict : <em>2♠</em>, sans saut. Le partenaire invitera à 3♠ avec 11-12 H et conclura à 4♠ avec 13 H et plus."},

{id:"cbs-08",role:"Ouvreur",seq:["1♦","1♠","1SA","2♣","?"],
 main:{p:"D 6 5",c:"A V 8 3",k:"A D 9 7 2",t:"4"},h:13,
 question:"Trois Piques et quatre Cœurs à la fois. Que répondez-vous ?",
 rep:"2♠",options:["2♠","2♥","2♦","3♠"],
 com:"<em>2♠</em> : la priorité va au fit. Le 5-3 est certain, le 4-4 seulement possible. Le partenaire pourra encore nommer ses Cœurs au tour suivant s'il les a.",
 alt:"2♥ n'est pas absurde et se joue dans certaines écoles, mais la convention retenue ici tranche en faveur du soutien."},

{id:"cbs-09",role:"Ouvreur",seq:["1♦","1♠","1SA","2♣","?"],
 main:{p:"8 2",c:"D 7 5",k:"A R V 9 6",t:"A 10 3"},h:14,
 question:"Que répondez-vous à la demande ?",
 rep:"2♦",options:["2♦","2SA","3♦","3SA"],
 com:"Ni trois Piques ni quatre Cœurs : <em>2♦</em>, la réponse négative. Elle ne promet pas de Carreaux de plus que l'ouverture. Vos 14 H parleront ensuite, sur l'invitation à 2SA."},

{id:"cbs-10",role:"Répondant",seq:["1♦","1♠","1SA","2♣","2♦","?"],
 main:{p:"A D 9 6 4",c:"R 8 3",k:"7 2",t:"D 10 5"},h:11,
 question:"La réponse est négative. Que dites-vous ?",
 rep:"2SA",options:["2SA","3SA","2♠","Passe"],
 com:"Pas de fit : on revient à SA au palier que la force autorise. 11 H en face de 12-14 H, c'est l'invitation — <em>2SA</em>. L'ouvreur passe avec 12-13 H, conclut à 3SA avec 14 H."},

{id:"cbs-11",role:"Répondant",seq:["1♦","1♠","1SA","2♣","2♦","?"],
 main:{p:"A D 8 6 3",c:"R V 5",k:"A 9 4",t:"7 2"},h:14,
 question:"La réponse est négative. Que dites-vous ?",
 rep:"3SA",options:["3SA","2SA","4♠","3♠"],
 com:"Pas de fit Pique, pas de fit Cœur, mais 26 H au moins à deux : <em>3SA</em>. Les cinq Piques ne mènent nulle part quand l'ouvreur en a deux."},

{id:"cbs-12",role:"Répondant",seq:["1♦","1♠","1SA","2♣","2♠","?"],
 main:{p:"R V 10 7 3",c:"A 9 4",k:"D V 2",t:"6 5"},h:11,
 question:"L'ouvreur montre trois Piques et un minimum. Que dites-vous ?",
 rep:"3♠",options:["3♠","4♠","2SA","Passe"],
 com:"Fit huitième trouvé, mais l'ouvreur s'est limité à 12-13 H. Avec 11 H, on invite : <em>3♠</em>. Il passera avec 12 H, conclura avec 13 H bien placés."},

{id:"cbs-13",role:"Répondant",seq:["1♦","1♠","1SA","2♣","3♠","?"],
 main:{p:"A 10 8 6 2",c:"R 7 3",k:"D 9 5",t:"R 4"},h:12,
 question:"L'ouvreur saute à 3♠. Que dites-vous ?",
 rep:"4♠",options:["4♠","Passe","3SA","4♣"],
 com:"Le saut annonçait le fit <em>et</em> 14 H. 12 H en face, huit atouts au moins : <em>4♠</em>. C'est tout l'intérêt du saut, il évite une invitation de plus."},

{id:"cbs-14",role:"Répondant",seq:["1♦","1♠","1SA","2♣","2♥","?"],
 main:{p:"A D 6 5 3",c:"R 9 8 2",k:"D 4",t:"9 6"},h:11,
 question:"L'ouvreur montre quatre Cœurs. Que dites-vous ?",
 rep:"3♥",options:["3♥","4♥","2SA","3SA"],
 com:"Le fit 4-4 est trouvé, il vaut mieux que 3SA avec deux doubletons. Avec 11 H seulement, on invite : <em>3♥</em>."},

{id:"cbs-15",role:"Répondant",seq:["1♦","1♥","1SA","?"],
 main:{p:"D V 4",c:"A R 8 6 2",k:"D 5",t:"10 7 3"},h:12,
 question:"Cinq Cœurs, 12 H. Que dites-vous ?",
 rep:"2♣",options:["2♣","2SA","3SA","2♥"],
 com:"<em>2♣</em>, mais avec une seule question : la redemande de 1SA a déjà nié quatre Piques, donc vous demandez uniquement le troisième Cœur. Réponse 2♥ ou 3♥ s'il l'a, 2♦ sinon."},

{id:"cbs-16",role:"Ouvreur",seq:["1♦","1♥","1SA","2♣","?"],
 main:{p:"R D 5",c:"V 7 4",k:"A D 10 8 3",t:"9 2"},h:12,
 question:"Que répondez-vous à la demande ?",
 rep:"2♥",options:["2♥","2♦","2♠","2SA"],
 com:"Trois Cœurs et un minimum : <em>2♥</em>. Vos beaux Piques ne servent à rien ici — vous en avez trois, pas quatre, et de toute façon vous les avez déjà niés en disant 1SA."},

{id:"cbs-17",role:"Ouvreur",seq:["1♦","1♥","1SA","2♣","?"],
 main:{p:"A D 8",c:"9 5",k:"R V 10 6 4",t:"R 7 3"},h:13,
 question:"Que répondez-vous à la demande ?",
 rep:"2♦",options:["2♦","2SA","2♠","3♦"],
 com:"Deux Cœurs : <em>2♦</em>, négatif. Le partenaire choisira entre 2SA et 3SA, ou reviendra à ses Cœurs avec une sixième."},

{id:"cbs-18",role:"Répondant",seq:["1♥","1♠","1SA","?"],
 main:{p:"A D 9 6 3",c:"8 4",k:"R V 7",t:"D 5 2"},h:12,
 question:"L'ouverture est majeure. Que dites-vous ?",
 rep:"2♣",options:["2♣","2SA","3SA","2♠"],
 com:"L'extension de la convention : <em>2♣</em> demande le soutien à trois Piques. L'ouvreur répond 2♠ avec trois Piques, 2♥ avec six Cœurs, 2♦ sinon."},

{id:"cbs-19",role:"Répondant",seq:["1♣","1♠","2SA","?"],
 main:{p:"R 10 8 6 2",c:"D 9 4",k:"8 5 3",t:"V 7"},h:6,
 question:"L'ouvreur redemande 2SA (18-19 H). Que dites-vous ?",
 rep:"3♣",options:["3♣","3SA","4♠","3♠"],
 com:"La manche est acquise, reste à choisir laquelle : le Roudi se déplace d'un palier, <em>3♣</em>. Avec trois Piques en face, 4♠ vaudra mieux que 3SA avec cette main pauvre en points."},

{id:"cbs-20",role:"Ouvreur",seq:["1♣","1♠","2SA","3♣","?"],
 main:{p:"A D 5",c:"R V 4",k:"A D 9",t:"R 10 8 3"},h:19,
 question:"Que répondez-vous à la demande ?",
 rep:"3♠",options:["3♠","3SA","3♥","4♠"],
 com:"<em>3♠</em> : trois Piques. Les réponses sont les mêmes qu'au palier de 2, décalées d'un cran. Le partenaire posera 4♠."},

{id:"cbs-21",role:"Répondant",seq:["1♦","1♠","1SA","?"],
 main:{p:"A D 10 8 6 4",c:"R 9 3",k:"R 2",t:"8 5"},h:12,
 question:"Six Piques, 12 H. Que dites-vous ?",
 rep:"2♣",options:["2♣","3♠","4♠","2SA"],
 com:"<em>2♣</em> d'abord : avec trois Piques en face vous avez neuf atouts et la manche devient jouable, sans quoi vous vous arrêterez à 3♠. Le détour ne coûte rien.",
 alt:"3♠ immédiat, invitation avec six cartes, reste jouable et se pratique couramment ; il renseigne simplement moins bien."},

{id:"cbs-22",role:"Répondant",seq:["1♦","1♠","1SA","?"],
 main:{p:"R V 9 5 3",c:"A 8 4",k:"D 6 2",t:"9 7"},h:10,
 question:"Dix points, cinq Piques. Que dites-vous ?",
 rep:"Passe",options:["Passe","2♣","2♠","2SA"],
 com:"<em>Passe</em>. Le seuil de la convention est à 11 H, et il est là pour être tenu : 10 H en face de 12-14 H font au mieux 24 H, sous la manche. La main est régulière, 1SA se joue très bien."},

{id:"cbs-23",role:"Répondant",seq:["1♦","1♠","1SA","?"],
 main:{p:"V 10 8 7 4",c:"R D 9 6 2",k:"5",t:"8 3"},h:6,
 question:"Cinq-cinq en majeures, six points. Que dites-vous ?",
 rep:"2♥",options:["2♥","2♣","2♠","Passe"],
 com:"<em>2♥</em>, naturel, faible, non forcing : le partenaire choisira entre 2♥ et 2♠. Cette enchère n'existerait pas sans le Roudi, qui a récupéré toutes les mains fortes."},

{id:"cbs-24",role:"Répondant",seq:["1♦","1♠","1SA","2♣","2♦","?"],
 main:{p:"A D 10 8 6 4",c:"R 9 3",k:"R 2",t:"8 5"},h:12,
 question:"La réponse est négative. Que dites-vous ?",
 rep:"3♠",options:["3♠","2♠","4♠","2SA"],
 com:"Deux Piques en face, mais vous en avez six : <em>3♠</em>, invitation. L'ouvreur conclura à 4♠ avec 14 H et un honneur troisième, passera sinon."},

{id:"cbs-25",role:"Répondant",seq:["1♦","1♠","1SA","2♣","2♥","?"],
 main:{p:"A D 9 7 3",c:"R V 8 5",k:"A 4",t:"9 2"},h:14,
 question:"L'ouvreur montre quatre Cœurs. Que dites-vous ?",
 rep:"4♥",options:["4♥","3♥","3SA","4♠"],
 com:"Fit 4-4 et 14 H : <em>4♥</em> directement. Avec deux doubletons de part et d'autre, la manche à la couleur est plus sûre que 3SA."}
  ]
};
