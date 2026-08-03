/* Enchères gadget — page d'accueil : rappel des notes déjà obtenues. */
(function(){
  function lire(cle){
    try{
      const v = localStorage.getItem(cle);
      return v ? JSON.parse(v) : null;
    }catch(e){ return null; }
  }
  async function lireAsync(cle){
    try{
      if(window.storage && window.storage.get){
        const r = await Promise.race([
          window.storage.get(cle),
          new Promise(r2 => setTimeout(() => r2(null), 1500))
        ]);
        return r ? JSON.parse(r.value) : null;
      }
    }catch(e){}
    return lire(cle);
  }
  async function afficher(){
    const cartes = document.querySelectorAll(".carte-lecon[data-lecon]");
    for(const c of cartes){
      const r = await lireAsync("gadget:resume:" + c.getAttribute("data-lecon"));
      const z = c.querySelector(".note-lecon");
      if(!z) continue;
      if(r && r.series){
        z.textContent = r.series + " série" + (r.series > 1 ? "s" : "")
          + " · dernière " + r.derniere + "/5 · meilleure " + r.meilleure + "/5";
        z.hidden = false;
      }
    }
  }
  afficher();
})();
