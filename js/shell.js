// Shared header and footer for the concept pages (prototype only; in WordPress this is the Blocksy header/footer builder)
(function(){
  const here=location.pathname.split('/').pop()||'index.html';
  const nav=[["category.html","Canapele"],["#","Colțare"],["#","Paturi"],["#","Fotolii"],["#","Mese"],["lemn-masiv.html","Lemn masiv"],["showroom.html","Showroom-uri","hl"]];
  const ic={search:'<svg viewBox="0 0 24 24" aria-label="Căutare"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    fav:'<svg class="opt" viewBox="0 0 24 24" aria-label="Favorite"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>',
    cart:'<svg viewBox="0 0 24 24" aria-label="Coș"><path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>'};
  const top=`<div class="topbar"><div class="wrap"><span><span class="sr">Creator Mall: </span><b>+373 79 900 027</b> · <span class="sr">Decor Park: </span><b>+373 78 300 027</b></span><span class="langs"><a class="on" href="#">RO</a><a href="#">RU</a><a href="#">EN</a></span></div></div>
<header><div class="wrap"><button class="burger" aria-label="Meniu"><svg viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg></button>
<a class="logo" href="index.html" aria-label="Di'vani"><img src="img/logo.svg" alt="Di'vani"></a>
<nav class="main" aria-label="Catalog">${nav.map(([h,t,c])=>`<a href="${h}" class="${[c,h===here?'on':''].join(' ').trim()}">${t}</a>`).join('')}</nav>
<div class="icons"><a href="404.html">${ic.search}</a>${ic.fav}<a href="cos.html" class="cartlink">${ic.cart}<i>2</i></a></div></div></header>`;
  const foot=`<footer><div class="wrap">
<div><a class="logo" href="index.html" style="display:inline-block"><img src="img/logo.svg" alt="Di'vani"></a><p style="color:var(--muted);max-width:300px">Mobilier tapițat fabricat în Moldova.</p></div>
<div><h4>Catalog</h4><ul><li><a href="category.html">Canapele extensibile</a></li><li>Colțare</li><li>Paturi</li><li>Fotolii</li><li><a href="lemn-masiv.html">Lemn masiv</a></li></ul></div>
<div><h4>Cumpărători</h4><ul><li><a href="livrare.html#livrare">Livrare</a></li><li><a href="livrare.html#credit">Mobilă în credit</a></li><li><a href="livrare.html#garantie">Returnare și garanție</a></li><li><a href="designeri.html">Pentru designeri</a></li><li><a href="blog.html">Blog</a></li><li><a href="despre.html">Despre noi</a></li></ul></div>
<div><h4>Contacte</h4><ul><li><a href="showroom.html">Creator Mall, Calea Ieșilor 91</a></li><li><a href="showroom.html">Decor Park, Nadejda Russo 17</a></li><li>+373 79 900 027</li><li>info@divani.md</li></ul></div>
<div class="copy">© 2026 Di'vani · Concept, versiunea 1</div></div></footer>
<a class="concept-tag" href="mobile.html">CONCEPT v1 · Mobil →</a>`;
  document.getElementById('shell-top').outerHTML=top;
  document.getElementById('shell-foot').outerHTML=foot;
})();
