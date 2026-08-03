/* Enchères gadget — moteur commun à toutes les leçons.
   La page de leçon définit window.LECON = {id, titre, banque} avant d'appeler ce fichier. */
/* =========================================================
   Persistance : window.storage si disponible, sinon localStorage
   ========================================================= */
const LECON = window.LECON || {id:"lecon", titre:"", banque:[]};
const PREFIX = "gadget:" + LECON.id + ":";
// une lecture qui ne répond pas ne doit jamais retarder l'affichage
function delai(promesse, ms){
  return Promise.race([
    promesse,
    new Promise(r => setTimeout(() => r(null), ms))
  ]);
}
const store = {
  async get(cle){
    try{
      if(window.storage && window.storage.get){
        const r = await delai(window.storage.get(PREFIX+cle), 1500);
        return r ? JSON.parse(r.value) : null;
      }
      const v = localStorage.getItem(PREFIX+cle);
      return v ? JSON.parse(v) : null;
    }catch(e){ return null; }
  },
  async set(cle, val){
    try{
      if(window.storage && window.storage.set){
        await delai(window.storage.set(PREFIX+cle, JSON.stringify(val)), 1500);
        return;
      }
      localStorage.setItem(PREFIX+cle, JSON.stringify(val));
    }catch(e){ /* sans persistance, le quiz fonctionne quand même */ }
  }
};

/* =========================================================
   Banque : 25 donnes
   p = Pique, c = Cœur, k = Carreau, t = Trèfle
   seq commence toujours par l'ouvreur
   ========================================================= */
const BANQUE = LECON.banque || [];

/* =========================================================
   Rendu
   ========================================================= */
const COULEUR = {"♠":"n","♥":"r","♦":"r","♣":"n"};
function colorise(txt){
  return String(txt).replace(/[♠♥♦♣]/g, s => '<b class="'+COULEUR[s]+'">'+s+'</b>');
}
function htmlEncheres(seq){
  let lignes = "", i = 0;
  while(i < seq.length){
    const g = seq[i] !== undefined ? seq[i] : "";
    const d = seq[i+1] !== undefined ? seq[i+1] : "";
    lignes += '<div class="ligne">'
      + '<span'+(g==="?"?' class="attente"':'')+'>'+colorise(g)+'</span>'
      + '<span'+(d==="?"?' class="attente"':'')+'>'+colorise(d)+'</span></div>';
    i += 2;
  }
  return '<div class="encheres"><div class="entete"><span>Ouvreur</span><span>Répondant</span></div>'+lignes+'</div>';
}
function htmlMain(m){
  return '<div class="main">'
    + '<div><span class="sym n">♠</span>'+m.p+'</div>'
    + '<div><span class="sym r">♥</span>'+m.c+'</div>'
    + '<div><span class="sym r">♦</span>'+m.k+'</div>'
    + '<div><span class="sym n">♣</span>'+m.t+'</div>'
    + '</div>';
}

/* =========================================================
   Quiz de 5
   ========================================================= */
let quiz = null;
let historique = {};   // id -> {vus, rates}
let cumul = {series:0, questions:0, justes:0};
let notes = [];        // notes des séries successives : [{n, date}]

function melange(t){
  const a = t.slice();
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function tirer5(){
  // pondération douce : une donne déjà ratée revient plus souvent
  const poids = BANQUE.map(d => {
    const h = historique[d.id];
    return 1 + (h && h.rates ? Math.min(h.rates,3)*1.5 : 0);
  });
  const choisies = [], dispo = BANQUE.map((d,i)=>i);
  while(choisies.length < 5 && dispo.length){
    const total = dispo.reduce((s,i)=>s+poids[i],0);
    let r = Math.random()*total, k = 0;
    while(k < dispo.length-1 && r > poids[dispo[k]]){ r -= poids[dispo[k]]; k++; }
    choisies.push(BANQUE[dispo[k]]);
    dispo.splice(k,1);
  }
  return choisies;
}
function nouvelleSerie(){
  quiz = {donnes: tirer5(), index:0, justes:0, repondu:false};
  rendreQuiz();
}
function rendreQuiz(){
  const z = document.getElementById("zone-quiz");
  if(!quiz){
    z.innerHTML = '<p class="intro-quiz">Cinq donnes tirées au hasard parmi les vingt-cinq de la leçon. '
      + 'Une donne manquée a plus de chances de revenir dans les séries suivantes, '
      + 'et la note de chaque série est conservée ci-dessous.</p>'
      + '<button class="primaire" onclick="nouvelleSerie()">Commencer une série</button>'
      + '<div class="stats" id="stats"></div>';
    majStats();
    return;
  }
  if(quiz.index >= quiz.donnes.length){
    z.innerHTML = '<div class="bilan"><div class="score">'+quiz.justes+'<small> / 5</small></div>'
      + '<p>'+commentaireScore(quiz.justes)+'</p>'
      + '<button class="primaire" onclick="nouvelleSerie()">Nouvelle série</button></div>'
      + '<div class="stats" id="stats"></div>';
    majStats();
    return;
  }
  const d = quiz.donnes[quiz.index];
  const opts = melange(d.options);
  z.innerHTML = '<div class="barre"><span>Donne '+(quiz.index+1)+' / 5</span>'
    + '<span class="jauge"><i style="width:'+(quiz.index/5*100)+'%"></i></span>'
    + '<span>'+quiz.justes+' juste'+(quiz.justes>1?'s':'')+'</span></div>'
    + '<article class="donne">'
    + '<div class="num">Vous êtes '+(d.role==="Ouvreur"?"l'ouvreur":"le répondant")+' <span class="role">· '+d.h+' H</span></div>'
    + '<div class="duo">'+htmlEncheres(d.seq)+htmlMain(d.main)+'</div>'
    + '<p class="question">'+d.question+'</p>'
    + '<div class="choix" id="choix">'
    +   opts.map(o => '<button onclick="repondre(this,\''+o.replace(/'/g,"\\'")+'\')">'+colorise(o)+'</button>').join("")
    + '</div>'
    + '<div class="reponse-bloc" id="verdict" hidden></div>'
    + '</article>';
}
function repondre(bouton, choix){
  if(quiz.repondu) return;
  quiz.repondu = true;
  const d = quiz.donnes[quiz.index];
  const juste = (choix === d.rep);
  document.querySelectorAll("#choix button").forEach(b => {
    b.disabled = true;
    if(b.textContent === d.rep) b.classList.add("juste");
  });
  if(!juste) bouton.classList.add("faux");
  if(juste) quiz.justes++;

  const h = historique[d.id] || {vus:0, rates:0};
  h.vus++; if(!juste) h.rates++;
  historique[d.id] = h;
  cumul.questions++; if(juste) cumul.justes++;
  sauver();

  const v = document.getElementById("verdict");
  v.hidden = false;
  v.innerHTML = '<div class="verdict '+(juste?'bon':'mauvais')+'">'
    + (juste ? 'Juste — ' : 'Raté — la réponse était ') + colorise(d.rep) + '</div>'
    + '<div class="commentaire">'+colorise(d.com)+'</div>'
    + (d.alt ? '<div class="alt">Autre lecture — '+colorise(d.alt)+'</div>' : '')
    + '<p style="margin:14px 0 0"><button class="primaire" onclick="suivante()">'
    + (quiz.index === 4 ? 'Voir le bilan' : 'Donne suivante') + '</button></p>';
}
function suivante(){
  quiz.index++; quiz.repondu = false;
  if(quiz.index >= 5){
    cumul.series++;
    notes.push({n: quiz.justes, date: Date.now()});
    if(notes.length > 60) notes = notes.slice(-60);
    sauver();
  }
  rendreQuiz();
  window.scrollTo({top:0, behavior:"smooth"});
}
function commentaireScore(n){
  if(n === 5) return "Série parfaite. Les réponses de l'ouvreur et le choix du palier sont en place.";
  if(n === 4) return "Une seule erreur — relisez le commentaire de la donne manquée, elle reviendra.";
  if(n === 3) return "La convention est comprise, les suites méritent un tour de plus.";
  if(n === 2) return "Reprenez le tableau des réponses de l'ouvreur, page 1 de la leçon.";
  return "Relisez la leçon avant la prochaine série : le seuil de 11 H et les quatre réponses de l'ouvreur.";
}
function majStats(){
  const s = document.getElementById("stats");
  if(!s) return;
  if(!notes.length && !cumul.questions){
    s.innerHTML = '<p style="color:#9a9382">Les notes de vos séries s\'afficheront ici.</p>';
    return;
  }
  let html = "";
  if(cumul.questions){
    const pct = Math.round(cumul.justes / cumul.questions * 100);
    html += '<p style="margin:0">' + cumul.justes + ' réponses justes sur ' + cumul.questions
          + ' (' + pct + ' %)</p>';
  }
  if(notes.length) html += htmlHistorique();
  s.innerHTML = html;
}
function htmlHistorique(){
  const vues = notes.slice(-24);
  const total = notes.reduce((a,b) => a + b.n, 0);
  const moy = (total / notes.length).toFixed(1).replace(".", ",");
  const best = notes.reduce((a,b) => Math.max(a, b.n), 0);
  const debut = notes.length - vues.length;
  const colonnes = vues.map((s,i) => {
    const cls = s.n >= 4 ? "haut" : (s.n <= 2 ? "bas" : "");
    const h = 12 + s.n / 5 * 62;
    const derniere = (i === vues.length - 1) ? " derniere" : "";
    return '<div class="col'+derniere+'" title="'+dateCourte(s.date)+'">'
         + '<span class="val">'+s.n+'</span>'
         + '<span class="bar '+cls+'" style="height:'+h+'px"></span>'
         + '<span class="rang">'+(debut + i + 1)+'</span></div>';
  }).join("");
  return '<div class="historique">'
    + '<h3>Notes des séries</h3>'
    + '<p class="resume">' + notes.length + ' série' + (notes.length>1?'s':'')
    + ' · moyenne ' + moy + ' / 5 · meilleure ' + best + ' / 5'
    + ' · dernière ' + notes[notes.length-1].n + ' / 5 le ' + dateCourte(notes[notes.length-1].date) + '</p>'
    + '<div class="courbe">' + colonnes + '</div>'
    + '<button class="effacer" onclick="effacerNotes()">Effacer les notes</button>'
    + '</div>';
}
function dateCourte(ts){
  try{
    return new Date(ts).toLocaleDateString("fr-FR", {day:"2-digit", month:"2-digit"});
  }catch(e){ return ""; }
}
function effacerNotes(){
  if(!confirm("Effacer les notes de toutes les séries ?")) return;
  notes = [];
  cumul = {series:0, questions:0, justes:0};
  historique = {};
  sauver();
  majStats();
}
async function publierResume(){
  // résumé lisible par la page d'accueil : dernière note, meilleure note, nombre de séries
  const best = notes.reduce((a,b) => Math.max(a, b.n), 0);
  const resume = {
    titre: LECON.titre || "",
    series: notes.length,
    derniere: notes.length ? notes[notes.length-1].n : null,
    meilleure: notes.length ? best : null,
    date: notes.length ? notes[notes.length-1].date : null
  };
  try{
    if(window.storage && window.storage.set){
      await delai(window.storage.set("gadget:resume:" + LECON.id, JSON.stringify(resume)), 1500);
    }else{
      localStorage.setItem("gadget:resume:" + LECON.id, JSON.stringify(resume));
    }
  }catch(e){}
}
async function sauver(){
  await store.set("historique", historique);
  await store.set("cumul", cumul);
  await store.set("notes", notes);
  await publierResume();
}
async function charger(){
  const h = await store.get("historique"); if(h) historique = h;
  const c = await store.get("cumul"); if(c) cumul = c;
  const n = await store.get("notes"); if(Array.isArray(n)) notes = n;
}

/* =========================================================
   Onglets
   ========================================================= */
// les onglets sont en CSS ; on se contente de redessiner le quiz s'il est vide
function surOngletQuiz(){
  const z = document.getElementById("zone-quiz");
  if(z && (!z.innerHTML.trim() || document.getElementById("attente-quiz"))){
    try{ rendreQuiz(); }catch(e){ secours(z, e); }
  }
  window.scrollTo({top:0});
}
function secours(zone, e){
  zone.innerHTML = '<p class="intro-quiz">Le quiz n\'a pas pu se charger. Rechargez la page.</p>'
    + '<button class="primaire" onclick="nouvelleSerie()">Commencer une série</button>';
  if(window.console) console.error(e);
}

/* =========================================================
   Contrôle de la banque (13 cartes, options cohérentes)
   ========================================================= */
function controlerBanque(){
  const erreurs = [];
  const vus = new Set();
  BANQUE.forEach((d,i) => {
    const n = ["p","c","k","t"].reduce((s,k) => s + d.main[k].trim().split(/\s+/).length, 0);
    if(n !== 13) erreurs.push(d.id + " : " + n + " cartes");
    if(!d.options.includes(d.rep)) erreurs.push(d.id + " : la réponse n'est pas dans les choix");
    if(new Set(d.options).size !== d.options.length) erreurs.push(d.id + " : choix en double");
    if(vus.has(d.id)) erreurs.push(d.id + " : identifiant en double");
    vus.add(d.id);
  });
  if(BANQUE.length !== 25) erreurs.push("banque : " + BANQUE.length + " donnes au lieu de 25");
  if(erreurs.length){
    const div = document.createElement("div");
    div.className = "alerte";
    div.innerHTML = "<strong>Contrôle de la banque</strong><br>" + erreurs.join("<br>");
    const hote = document.getElementById("liste-donnes");
    if(hote) hote.before(div);
  }
}

/* =========================================================
   Installation sur l'écran d'accueil (Android) et hors ligne
   ========================================================= */
let inviteInstall = null;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  inviteInstall = e;
  const b = document.getElementById("installer");
  if(b) b.hidden = false;
});
window.addEventListener("appinstalled", () => {
  const b = document.getElementById("installer");
  if(b) b.hidden = true;
  inviteInstall = null;
});
function installer(){
  if(!inviteInstall) return;
  inviteInstall.prompt();
  inviteInstall = null;
  const b = document.getElementById("installer");
  if(b) b.hidden = true;
}
if("serviceWorker" in navigator && location.protocol.indexOf("http") === 0){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

/* =========================================================
   Démarrage
   ========================================================= */
(function(){
  const rq = document.getElementById("r-quiz");
  if(rq) rq.addEventListener("change", surOngletQuiz);
  // affichage immédiat, sans attendre le stockage
  try{ controlerBanque(); }catch(e){ if(window.console) console.error(e); }
  const z = document.getElementById("zone-quiz");
  try{ rendreQuiz(); }catch(e){ secours(z, e); }
  // puis reprise des notes enregistrées, si le stockage répond
  charger().then(() => {
    try{ if(!quiz) rendreQuiz(); else majStats(); }catch(e){ if(window.console) console.error(e); }
  }).catch(e => { if(window.console) console.error(e); });
})();
