# Les enchères gadget — Série ClaudIA

Une application web par série de leçons sur les enchères gadget du bridge.
Chaque leçon suit la même structure : un cours qui s'imprime sur deux pages,
25 donnes commentées, et un quiz de cinq donnes tirées au hasard parmi les 25,
dont les notes successives sont conservées.

Le cadre est prévu pour 20 à 30 leçons.

## Leçons

| N° | Titre | Fichier de données |
|----|-------|--------------------|
| 1 | Le Roudi (check-back Stayman) | `lecons/01-roudi.js` |
| 2 | Le Puppet Stayman | `lecons/02-puppet.js` |

## Ajouter une leçon

1. Copier un fichier de `lecons/` sous le nom `NN-slug.js`.
2. Y remplir les métadonnées (`id`, `numero`, `titre`, `sousTitre`, `resume`),
   le cours (deux blocs `<div class="page">`) et les 25 donnes.
3. Lancer :

       node outils/construire.js

Le générateur écrit `lecon-NN-slug.html`, met l'accueil à jour et régénère `sw.js`.
Il contrôle au passage chaque donne : 13 cartes, points d'honneur conformes à ce
qui est déclaré, réponse présente parmi les choix, pas de doublon. Toute anomalie
est signalée dans la console.

### Format d'une donne

    {id:"pup-01", role:"Répondant", seq:["2SA","?"],
     main:{p:"R 9 7 4", c:"8 5 3", k:"A 6 2", t:"D 7 5"}, h:9,
     question:"Quatre Piques, 9 H. Que dites-vous ?",
     rep:"3♣", options:["3♣","3SA","3♥","Passe"],
     com:"Commentaire, <em>enchère</em> mise en valeur.",
     alt:"Autre lecture, facultatif."}

`seq` commence toujours par l'ouvreur et se termine par `"?"`.
`role` vaut `"Ouvreur"` ou `"Répondant"`. `h` est vérifié par le générateur.

## Mise en ligne

Les pages publiées sont **autonomes** : styles et moteur y sont recopiés par le
générateur. Le dépôt ne contient que des fichiers à plat, sans sous-dossier à
téléverser.

À déposer à la racine du dépôt, et rien d'autre :

    index.html
    lecon-01-roudi.html
    lecon-02-puppet.html
    manifest.webmanifest
    sw.js
    icon-180.png  icon-192.png  icon-512.png

Puis *Settings → Pages*, source **Deploy from a branch**, branche `main`,
dossier `/ (root)`.

Les dossiers `assets/`, `lecons/` et `outils/` sont les **sources** : le
générateur s'en sert, le site publié n'en dépend pas. Les téléverser ne gêne
pas, les oublier non plus.

### Si la page s'affiche sans mise en forme

C'est le signe que la page cherche un fichier absent. Avec des pages autonomes
cela ne devrait plus arriver ; le cas échéant, vérifier que les huit fichiers
ci-dessus sont bien à la racine, et non dans un sous-dossier créé par le
téléversement.

## Données

Notes et progression sont enregistrées sur l'appareil, sous le préfixe
`gadget:`. Rien n'est envoyé nulle part. Chaque leçon a son propre historique,
et l'accueil affiche la dernière et la meilleure note de chacune.

## Mise à jour

`sw.js` est régénéré à chaque construction, avec un numéro de cache égal au
nombre de leçons : les appareils déjà installés reçoivent la nouvelle version
dès qu'une leçon est ajoutée.
