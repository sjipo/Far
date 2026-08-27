
// ============================================================
// PRISER
// ============================================================
function renderPrices() {
  const grid = document.getElementById("priceGrid");
  if (!grid) return;

  grid.innerHTML = priceItems.map(item => `
    <div class="price-card">
      <div class="price-icon">${item.icon}</div>
      <strong>${item.name}</strong>
      <div class="price-old">${item.old}</div>
      <div class="price-now">${item.now}</div>
    </div>
  `).join("");
}

renderPrices();

const timeline = document.getElementById("timeline");

function songLink(service, artist, song){
  const q = encodeURIComponent(`${artist} ${song}`);
  return service === "spotify"
    ? `https://open.spotify.com/search/${q}`
    : `https://www.youtube.com/results?search_query=${q}`;
}
function sourceButtons(m){
  let out = "";
  if(m.source) out += `<a class="pill-link" target="_blank" rel="noopener" href="${m.source}">Les mer · ${m.source_label} ↗</a>`;
  if(m.source2) out += `<a class="pill-link" target="_blank" rel="noopener" href="${m.source2}">Les mer · ${m.source_label2} ↗</a>`;
  return out;
}
function songCards(m){
  if(!m.songs || !m.songs.length){
    return `<div class="song"><div><strong>2026</strong><small>Her kan dere legge inn årets eller jubilantens egne favoritter.</small></div></div>`;
  }
  return m.songs.map(([song,artist]) => `
    <div class="song">
      <div><strong>${song}</strong><small>${artist}</small></div>
      <div class="song-actions">
        <a target="_blank" rel="noopener" href="${songLink("spotify",artist,song)}" title="Åpne i Spotify">S</a>
        <a target="_blank" rel="noopener" href="${songLink("youtube",artist,song)}" title="Finn på YouTube">▶</a>
      </div>
    </div>`).join("");
}

milestones.forEach((m,i)=>{
  const el=document.createElement("article");
  el.className="milestone";
  el.id=`year-${m.year}-${i}`;
  el.innerHTML=`
    <span class="dot"></span>
    <div class="m-card">
      <div class="m-main" role="button" tabindex="0" aria-expanded="false">
        <div class="yearbox"><div class="year">${m.year}</div><span class="age">året han fylte ${m.age}</span></div>
        <div class="m-title"><strong>${m.title}</strong><span>${m.text}</span></div>
        <div class="m-icon">${m.icon}</div>
      </div>
      <div class="m-more">
        <div class="m-more-inner">
          <div class="source-links">${sourceButtons(m)}</div>
          <div class="music-label">Musikk fra tiden</div>
          <div class="songs">${songCards(m)}</div>
        </div>
      </div>
    </div>`;
  const main=el.querySelector(".m-main");
  const toggle=()=>{
    el.classList.toggle("open");
    main.setAttribute("aria-expanded",el.classList.contains("open"));
  };
  main.addEventListener("click",toggle);
  main.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle()}});
  timeline.appendChild(el);
});

document.getElementById("randomBtn").addEventListener("click",()=>{
  const i=Math.floor(Math.random()*milestones.length);
  const m=milestones[i];
  const el=document.getElementById(`year-${m.year}-${i}`);
  el.classList.add("open");
  el.querySelector(".m-main").setAttribute("aria-expanded","true");
  el.scrollIntoView({behavior:"smooth",block:"center"});
});





const historyGrid = document.getElementById("musicHistoryGrid");
const historyFilters = document.getElementById("historyFilters");

function renderDecadeStories(filter="all"){
  historyGrid.innerHTML = "";
  decadeStories
    .filter(d => filter === "all" || d.key === filter)
    .forEach(d => {
      const article = document.createElement("article");
      article.className = "decade-story";
      const tags = d.tags.map(t => `<span class="genre-tag">${t}</span>`).join("");
      const playlistUrl = youtubePlaylists[d.key];
      const playlist = playlistUrl
        ? `<a class="playlist-btn" target="_blank" rel="noopener" href="${playlistUrl}">▶ Åpne YouTube-spillelisten</a>`
        : `<span class="playlist-btn disabled">▶ YouTube-spilleliste kommer her</span>`;
      const source = d.source
        ? `<span class="music-source">Kilde / videre lesning: <a target="_blank" rel="noopener" href="${d.source}">${d.sourceLabel} ↗</a></span>`
        : "";
      article.innerHTML = `
        <div class="decade-side">
          <div class="decade-year">${d.label}</div>
          <div class="decade-sub">${d.sub}</div>
        </div>
        <div class="decade-body">
          <h3>${d.title}</h3>
          <p>${d.p1}</p>
          <p>${d.p2}</p>
          <div class="turning-point"><strong>Hvorfor det betydde noe:</strong> ${d.highlight}</div>
          <div class="genre-tags">${tags}</div>
          <div class="decade-actions">${playlist}${source}</div>
        </div>`;
      historyGrid.appendChild(article);
    });
}

historyFilters.addEventListener("click", e => {
  const btn = e.target.closest("[data-history-filter]");
  if(!btn) return;
  historyFilters.querySelectorAll(".chip").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderDecadeStories(btn.dataset.historyFilter);
});

renderDecadeStories();
