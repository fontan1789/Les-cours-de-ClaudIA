/* Enchères gadget — générateur du site.
   Usage : node outils/construire.js
   Lit lecons/*.js, écrit une page par leçon, l'accueil et sw.js. */

const fs = require("fs");
const path = require("path");

const RACINE = path.join(__dirname, "..");
const DOSSIER_LECONS = path.join(RACINE, "lecons");

/* Les pages publiées sont autonomes : styles et moteur y sont recopiés.
   Le dépôt ne contient ainsi que des fichiers à plat, sans sous-dossier à
   téléverser — c'est la source d'erreur la plus fréquente sur GitHub Pages. */
const CSS = fs.readFileSync(path.join(RACINE, "assets/gadget.css"), "utf8");
const MOTEUR = fs.readFileSync(path.join(RACINE, "assets/gadget.js"), "utf8");
const ACCUEIL_JS = fs.readFileSync(path.join(RACINE, "assets/accueil.js"), "utf8");

/* Installation sur l'écran d'accueil + fonctionnement hors ligne.
   Le bouton reste visible même quand Chrome ne propose pas l'invite :
   il affiche alors la marche à suivre au lieu de ne rien faire. */
const INSTALL = `
let inviteInstall = null;
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); inviteInstall = e; });
function installer(){
  if(inviteInstall){ inviteInstall.prompt(); inviteInstall = null; return; }
  const z = document.getElementById("aide-install");
  if(z) z.hidden = !z.hidden;
}
if("serviceWorker" in navigator && location.protocol.indexOf("http") === 0){
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
`;
const AIDE_INSTALL = `    <div id="aide-install" class="aide-install" hidden>
      <strong>Android</strong> — menu ⋮ de Chrome, puis « Ajouter à l'écran d'accueil ».<br>
      <strong>iPhone</strong> — bouton Partager de Safari, puis « Sur l'écran d'accueil ».
    </div>`;

/* ---------- petits utilitaires ---------- */
const COULEUR = {"♠":"n","♥":"r","♦":"r","♣":"n"};
const col = t => String(t).replace(/[♠♥♦♣]/g, s => '<b class="'+COULEUR[s]+'">'+s+'</b>');

function encheres(seq){
  let l = "";
  for(let i = 0; i < seq.length; i += 2){
    const g = seq[i] !== undefined ? seq[i] : "";
    const d = seq[i+1] !== undefined ? seq[i+1] : "";
    l += '<div class="ligne"><span'+(g==="?"?' class="attente"':'')+'>'+col(g)+'</span>'
       + '<span'+(d==="?"?' class="attente"':'')+'>'+col(d)+'</span></div>';
  }
  return '<div class="encheres"><div class="entete"><span>Ouvreur</span><span>Répondant</span></div>'+l+'</div>';
}
function mainHtml(m){
  return '<div class="main">'
    + '<div><span class="sym n">♠</span>'+m.p+'</div>'
    + '<div><span class="sym r">♥</span>'+m.c+'</div>'
    + '<div><span class="sym r">♦</span>'+m.k+'</div>'
    + '<div><span class="sym n">♣</span>'+m.t+'</div></div>';
}
function donnesHtml(banque){
  return banque.map((d,i) =>
      '      <article class="donne">\n'
    + '        <div class="num">Donne '+String(i+1).padStart(2,"0")+' <span class="role">· vous êtes '
    + (d.role === "Ouvreur" ? "l'ouvreur" : "le répondant")+' · '+d.h+' H</span></div>\n'
    + '        <div class="duo">'+encheres(d.seq)+mainHtml(d.main)+'</div>\n'
    + '        <p class="question">'+d.question+'</p>\n'
    + '        <details class="reveler-bloc"><summary>Afficher la réponse</summary>\n'
    + '          <div class="reponse-bloc"><div class="verdict bon">'+col(d.rep)+'</div>\n'
    + '          <div class="commentaire">'+col(d.com)+'</div>\n'
    + (d.alt ? '          <div class="alt">Autre lecture — '+col(d.alt)+'</div>\n' : '')
    + '          </div>\n        </details>\n      </article>'
  ).join("\n");
}

/* ---------- contrôle des données ---------- */
function controler(l){
  const pb = [];
  if(!l.id || !l.titre) pb.push("métadonnées incomplètes");
  if(!Array.isArray(l.banque) || l.banque.length !== 25)
    pb.push("banque de " + (l.banque ? l.banque.length : 0) + " donnes au lieu de 25");
  const val = {A:4, R:3, D:2, V:1};
  (l.banque || []).forEach(d => {
    const cartes = [d.main.p, d.main.c, d.main.k, d.main.t].join(" ").trim().split(/\s+/);
    if(cartes.length !== 13) pb.push(d.id + " : " + cartes.length + " cartes");
    const h = cartes.reduce((s,c) => s + (val[c] || 0), 0);
    if(h !== d.h) pb.push(d.id + " : " + h + " H comptés, " + d.h + " déclarés");
    if(!d.options.includes(d.rep)) pb.push(d.id + " : la réponse n'est pas dans les choix");
    if(new Set(d.options).size !== d.options.length) pb.push(d.id + " : choix en double");
  });
  return pb;
}

/* ---------- gabarit d'une page de leçon ---------- */
function pageLecon(l){
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#17492f">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>Leçon ${l.numero} — ${l.titre} · Les enchères gadget</title>
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icon-180.png">
<link rel="icon" href="icon-192.png">
<style>
${CSS}
</style>
</head>
<body>

<input type="radio" name="onglet" id="r-lecon" class="onglet-radio" checked>
<input type="radio" name="onglet" id="r-donnes" class="onglet-radio">
<input type="radio" name="onglet" id="r-quiz" class="onglet-radio">

<header class="top">
  <div class="wrap">
    <p class="serie"><a class="retour" href="index.html">‹ Les enchères gadget</a></p>
    <h1><span class="num">Leçon ${l.numero}.</span> ${l.titre}</h1>
    <p class="soustitre">${l.sousTitre}</p>
    <button id="installer" class="installer" onclick="installer()">Installer l'application</button>
${AIDE_INSTALL}
  </div>
</header>

<nav class="tabs">
  <div class="wrap">
    <label for="r-lecon">Leçon</label>
    <label for="r-donnes">Les 25 donnes</label>
    <label for="r-quiz">Quiz de 5</label>
  </div>
</nav>

<section class="panel" id="panel-lecon">
<div class="wrap lecon">
${l.cours.trim()}
</div>
</section>

<section class="panel" id="panel-donnes">
<div class="wrap">
  <p class="intro-quiz">Les 25 donnes de la leçon. Réfléchissez, puis dépliez la réponse.</p>
  <div id="liste-donnes">
${donnesHtml(l.banque)}
  </div>
</div>
</section>

<section class="panel" id="panel-quiz">
<div class="wrap">
  <div id="zone-quiz">
    <p class="intro-quiz" id="attente-quiz">Chargement du quiz…<br>
    <span style="font-size:13.5px">Si ce message reste affiché, le navigateur n'exécute pas le JavaScript :
    ouvrez la page depuis son adresse web. La leçon et les 25 donnes, elles, restent lisibles.</span></p>
  </div>
  <noscript>
    <p class="alerte">Le JavaScript est désactivé : le quiz ne peut pas fonctionner.
    La leçon et les 25 donnes restent consultables dans les deux premiers onglets.</p>
  </noscript>
</div>
</section>

<script>
window.LECON = {
  id: ${JSON.stringify(l.id)},
  titre: ${JSON.stringify(l.titre)},
  banque: ${JSON.stringify(l.banque)}
};
</script>
<script>
${MOTEUR}
${INSTALL}
</script>
</body>
</html>
`;
}

/* ---------- gabarit de l'accueil ---------- */
function pageAccueil(lecons, aVenir){
  const cartes = lecons.map(l => `      <a class="carte-lecon" href="${l.fichier}" data-lecon="${l.id}">
        <span class="numero">Leçon ${l.numero}</span>
        <span class="titre-lecon">${l.titre}</span>
        <span class="resume-lecon">${l.resume}</span>
        <span class="note-lecon" hidden></span>
      </a>`).join("\n");

  const suite = aVenir.map(t => `      <span class="carte-lecon future"><span class="numero">À venir</span>
        <span class="titre-lecon">${t}</span></span>`).join("\n");

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#17492f">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>Les enchères gadget · Série ClaudIA</title>
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icon-180.png">
<link rel="icon" href="icon-192.png">
<style>
${CSS}
</style>
</head>
<body class="accueil">

<header class="top">
  <div class="wrap">
    <p class="serie">Série ClaudIA</p>
    <h1>Les enchères <span class="num">gadget</span></h1>
    <p class="soustitre">Une convention par leçon : le cours en deux pages, 25 donnes, un quiz de cinq.</p>
    <button id="installer" class="installer" onclick="installer()">Installer l'application</button>
${AIDE_INSTALL}
  </div>
</header>

<div class="wrap">
  <section class="sommaire">
    <h2>Leçons disponibles</h2>
${cartes}
  </section>

  <section class="sommaire">
    <h2>Prochaines leçons</h2>
${suite}
  </section>

  <p class="mention">Les notes des quiz sont conservées sur cet appareil seul. Chaque leçon
  s'imprime sur deux pages depuis l'onglet « Leçon ».</p>
</div>

<script>
${ACCUEIL_JS}
${INSTALL}
</script>
</body>
</html>
`;
}

/* ---------- service worker ---------- */
function serviceWorker(fichiers, version){
  return `/* Les enchères gadget — fonctionnement hors ligne. Fichier généré par outils/construire.js */
const CACHE = "gadget-v${version}";
const FICHIERS = ${JSON.stringify(["./"].concat(fichiers), null, 2)};

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS))
    .then(() => self.skipWaiting()).catch(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(cles => Promise.all(cles.filter(c => c !== CACHE).map(c => caches.delete(c))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(rep => rep || fetch(e.request).then(res => {
    const copie = res.clone();
    caches.open(CACHE).then(c => c.put(e.request, copie)).catch(() => {});
    return res;
  }).catch(() => caches.match("./index.html"))));
});
`;
}

/* ---------- construction ---------- */
const A_VENIR = [
  "Le Texas et les transferts",
  "Le Blackwood 5 clés",
  "Le contre Spoutnik",
  "Le Drury",
  "La quatrième couleur forcing"
];

const fichiers = fs.readdirSync(DOSSIER_LECONS).filter(f => f.endsWith(".js")).sort();
const lecons = [];
let alertes = 0;

fichiers.forEach(f => {
  const l = require(path.join(DOSSIER_LECONS, f));
  const pb = controler(l);
  if(pb.length){ alertes += pb.length; console.log("  ⚠ " + l.id + " → " + pb.join(" ; ")); }
  const nomFichier = "lecon-" + l.id + ".html";
  fs.writeFileSync(path.join(RACINE, nomFichier), pageLecon(l));
  lecons.push({id:l.id, numero:l.numero, titre:l.titre, resume:l.resume, fichier:nomFichier});
  console.log("  ✓ " + nomFichier + " (" + l.banque.length + " donnes)");
});

lecons.sort((a,b) => a.numero - b.numero);
fs.writeFileSync(path.join(RACINE, "index.html"), pageAccueil(lecons, A_VENIR));
console.log("  ✓ index.html (" + lecons.length + " leçons)");

const actifs = ["index.html", "manifest.webmanifest",
                "icon-180.png", "icon-192.png", "icon-512.png"]
                .concat(lecons.map(l => l.fichier));
fs.writeFileSync(path.join(RACINE, "sw.js"), serviceWorker(actifs, lecons.length));
console.log("  ✓ sw.js (cache gadget-v" + lecons.length + ")");
console.log(alertes ? "\n" + alertes + " alerte(s) sur les données." : "\nDonnées contrôlées, rien à signaler.");
