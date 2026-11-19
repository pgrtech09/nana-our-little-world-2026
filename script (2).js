/* =====================================================
   SETTINGS (edit these)
   ===================================================== */
const CONFIG = {
  startDate: [2026, 7, 21],            // year, month, day of "Our Beginning" (for the day counter)
  whatsapp: "",                        // her reply goes to you: country code + number, e.g. "919876543210". Empty = she picks the contact
  replyText: "I opened all our memories ❤️ ",
  song: "",                            // e.g. "assets/song.mp3" (only if you own it or have the right to use it). Empty = soft built-in music
  secret: {
    enabled: true,                     // set false to remove the question
    question: "What was the first gift I gave you? 🎁",
    answers: ["earrings", "earring"],  // lowercase
    hint: "Hint: you wore your yellow dress that day 💛"
  }
};
/* Photos: put files in /photos named 01.jpg, 02.jpg ... 13.jpg (or set photo:"photos/any-name.png" on a memory).
   Voice notes: put files in /voice named 01.mp3 ... 13.mp3 (or set voice:"voice/any.m4a"). Missing files are simply hidden. */

/* =====================================================
   EDIT YOUR MEMORIES HERE
   info: [icon, label, value] shown as small chips
   fx:   emojis that fall softly when the memory opens
   ===================================================== */
const MEMORIES = [
  { icon:"🎂", title:"Her Birthday", date:"13 June 2007", time:"7:22 PM", info:[], fx:["🎂","✨","🎈"],
    message:"Ee world loki naa life lo special place occupy chese person vachina roju idhi. 13 June naaku just oka date kadhu Nana, nuvvu puttina special day. Ee date ni gurthupettukovadam naaku chala important." },
  { icon:"❤️", title:"Our Beginning", date:"21 July 2026", info:[], fx:["❤️","✨","💗"],
    message:"Mana journey start ayina roju. Appudu teliyadhu kada, ee small beginning future lo inni beautiful memories ki reason avuthundhi ani. Oka normal day laga start ayina mana journey, slowly chala special ga marindhi." },
  { icon:"🎁", title:"First Gift from Me", date:"16 August 2026", time:"4:34 PM",
    info:[["💎","Gift","Earrings"],["👗","Dress","Yellow dress"]], fx:["🎁","💛","✨"],
    message:"First time neeku gift ichina roju idhi. Yellow dress lo unna nuvvu, nenu ichina earrings... aa moment naaku inka gurthundhi. Gift value kanna neeku edho special ga ivvali ane naa happiness chala ekkuva. Aa day lo nee happiness chudadam naaku chala special." },
  { icon:"📞", title:"First Time You Called Me Nanna", date:"20 August 2026", time:"6:11 PM",
    info:[["💬","On the call","You called me “Nanna” for the first time"]], fx:["📞","💗","✨"],
    message:"Aa call lo nuvvu first time nannu “Nanna” ani pilichina roju. Call chesindhi nuvve, kani aa okka matha naa heart ni touch chesindhi. Chinna call lo vinna aa pilupu naaku inka gurthundhi. Appati nunchi aa “Nanna” anna matha naaku chala special, naa memories lo eppatiki alane untundhi." },
  { icon:"💙", title:"Our First Meet", date:"2 September 2026", time:"12:37 PM", photos:["photos/05.jpg","photos/05b.jpg"],
    info:[["👗","Dress","Blue dress"]], fx:["💙","✨","🦋"],
    message:"First time ninnu direct ga kalisina roju. Blue dress lo bus stand nunchi naa daggariki vasthunna nee image inka naaku clear ga gurthundhi. Appati varaku calls, messages lo unna person ni first time naa mundhu chudadam chala special feeling. Aa moment naa memories lo eppatiki untundhi." },
  { icon:"📱", title:"Our First Long Video Call", date:"13 September 2026",
    info:[["⏱️","Duration","1 hour, 52 minutes, 9 seconds"]], fx:["📱","💜","✨"],
    message:"Mana first longest video call. Time ela ayipoyindho kuda teliyantha sepu matladukunnam. Almost two hours call lo unna kuda inka matladali anipinchindhi. Aa call duration kanna, aa time lo share chesukunna happiness naaku ekkuva special." },
  { icon:"🚌", title:"Our First Bus Journey", date:"27 September 2026", time:"9:00 AM",
    info:[["🛣️","Route","Hyderabad to Karimnagar"]], fx:["🚌","✨","💗"],
    message:"Mana first bus journey. Hyderabad nunchi Karimnagar varaku travel chesina aa day naaku chala special. Journey ante just oka place nunchi inko place ki velladam kadhu, mana memories lo oka beautiful chapter add avvadam. Aa journey ni eppatiki marchipolenu." },
  { icon:"🤗", title:"Our First Hug", date:"28 October 2026",
    info:[["📍","Location","Dam"]], fx:["🤗","💞","✨"],
    message:"Mana first hug. Mana journey lo oka special moment. Aa roju jarigina ee memory ni gurthuchesukunnappudalla aa day malli mind loki vasthundhi. Konni moments ni words lo explain cheyalem, just heart lo special ga save chesukovali." },
  { icon:"💗", title:"Our First Kiss", date:"28 October 2026",
    info:[["📍","Location","Dam"]], fx:["💗","💖","✨"],
    message:"Mana first kiss kuda same day jarigindhi. Oke roju mana memories lo rendu special moments add ayyayi. 28 October naaku just calendar date kadhu, mana journey lo unforgettable chapter." },
  { icon:"🍽️", title:"First Time I Fed You", date:"4 November 2026",
    info:[["🍛","Food","Mandi"]], fx:["🍽️","❤️","✨"],
    message:"First time neeku naa chethulatho food thinipinchina moment. Mandi thintunnappudu jarigina aa chinna moment kuda naaku chala special ga anipinchindhi. Care anedhi pedda gifts lo matrame undadhu, ilanti chinna chinna moments lo kuda untundhi." },
  { icon:"❤️", title:"First Time I Lifted You", date:"6 November 2026",
    info:[["📍","Location","Dam"]], fx:["❤️","💫","✨"],
    message:"First time ninnu lift chesina roju. Aa moment sudden ga vachina, naa memories lo matram special ga undipoyindhi. Mana journey lo inko beautiful memory add ayyindhi." },
  { icon:"🎁", title:"First Gift from You", date:"18 November 2026", time:"2:07 PM", photos:["photos/12.jpg","photos/12b.jpg"],
    info:[["👕","Gift","Shirt"],["🏬","Shop","WROGN Showroom"]], fx:["🎁","❤️","✨"],
    message:"Finally, nuvvu naaku first gift ichina roju. Nenu neeku gifts ivvadam okati, nuvvu naaku gift ivvadam inkoti Nana. Aa shirt value entha anedhi important kadhu, nuvvu naaku konichav ane feeling chala special. Ee shirt chusinappudalla nee gift, aa time, aa day anni gurthosthayi. Naa life lo nuvvu ichina first gift kabatti eppatiki special." },
  { icon:"🌍", title:"Today – Our Little World", date:"19 November 2026",
    info:[["💻","Gift","This little website"]], fx:["🌍","❤️","✨"],
    message:"Ee roju nenu neeku ichina inko gift, mana memories anni okka chota. Nuvvu ee page open chesina prathi sari, mana journey malli oka sari gurthostundhi. Idhi just start Nana, inka enno first moments ee world lo add avvali." }
];

const LETTER = [
  { c:"hi",  t:"Dear Nana ❤️" },
  { t:"Mana journey lo enno small small moments unnayi. Konni days navvukunnam, konni moments special ga feel ayyayi, inkonni memories life long gurthundipothayi." },
  { t:"Nuvvu naaku ichina gifts, mana first meet, mana calls, mana journeys... ivanni naaku just memories kadhu." },
  { t:"Prathi moment lo oka beautiful story undhi." },
  { t:"Nenu perfect person kakapovachu, kani mana bond lo happiness, care, understanding and respect eppatiki undalani korukuntunna." },
  { t:"Future lo inka enno beautiful memories create chesukovali. Ippudu unna memories kanna future lo manam create chesukune memories inka special avvali." },
  { t:"Thank you Nana, mana life lo ee beautiful moments anni share chesinandhuku." },
  { c:"key", t:"You are a very special part of my life. ❤️" },
  { c:"sig", t:"With lots of love,<br>Your Nana ❤️" }
];

/* =====================  APP  ===================== */
const $ = s => document.querySelector(s);
const TOTAL = MEMORIES.length;
const store = {
  get(){ try { return JSON.parse(sessionStorage.getItem("olw-opened") || "[]"); } catch { return []; } },
  set(v){ try { sessionStorage.setItem("olw-opened", JSON.stringify(v)); } catch {} }
};
let opened = store.get().filter(n => n >= 0 && n < TOTAL);
let cur = 0;

/* ---------- screens ---------- */
function show(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.toggle("active", s.id === id));
  $("#" + id).scrollTop = 0;
}
let toastT;
function toast(msg){
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- audio (original, generated in-browser; no files) ---------- */
let ctx, master, musicOn = false, sfxOn = false, musicTimer, bar = 0;
const CHORDS = [[261.63,329.63,392],[220,261.63,329.63],[174.61,220,261.63],[196,246.94,293.66]];
function audio(){
  if (!ctx){ const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
    ctx = new AC(); master = ctx.createGain(); master.gain.value = .6; master.connect(ctx.destination); }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}
function tone(f, t0, dur, vol, type = "sine"){
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.value = f;
  g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(vol, t0 + .06);
  g.gain.exponentialRampToValueAtTime(.0001, t0 + dur);
  o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + dur + .1);
}
function playBar(){
  const t = ctx.currentTime + .05, ch = CHORDS[bar++ % 4];
  ch.forEach(f => tone(f / 2, t, 4.6, .05));
  for (let i = 0; i < 8; i++) tone(ch[(i * 2) % 3] * 2, t + i * .5, 1.8, .03, "triangle");
}
function setBtn(el, on){ el.setAttribute("aria-pressed", on); }
let songEl;
$("#musicBtn").onclick = () => {
  if (CONFIG.song){
    songEl = songEl || Object.assign(new Audio(CONFIG.song), { loop:true, volume:.5 });
    musicOn = !musicOn; setBtn($("#musicBtn"), musicOn);
    if (musicOn) songEl.play().catch(() => { musicOn = false; setBtn($("#musicBtn"), false); toast("Couldn't play the song"); });
    else songEl.pause();
    return toast(musicOn ? "Music on 🎵" : "Music off");
  }
  if (!audio()) return toast("Sound isn't supported on this device");
  musicOn = !musicOn; setBtn($("#musicBtn"), musicOn);
  clearInterval(musicTimer);
  if (musicOn){ playBar(); musicTimer = setInterval(playBar, 4000); toast("Music on 🎵"); } else toast("Music off");
};
function bindMedia(el, src){
  el.pause(); el.hidden = true; el.onerror = () => { el.hidden = true; };
  el.onloadedmetadata = () => { el.hidden = false; };
  if (src){ el.src = src; el.load(); } else el.removeAttribute("src");
}
function pauseVoices(){ ["#mVoice","#lVoice"].forEach(s => $(s).pause()); }
$("#sfxBtn").onclick = () => {
  if (!audio()) return toast("Sound isn't supported on this device");
  sfxOn = !sfxOn; setBtn($("#sfxBtn"), sfxOn);
  if (sfxOn){ sfx("tap"); toast("Sound effects on 🔔"); } else toast("Sound effects off");
};
function sfx(kind){
  if (!sfxOn || !ctx) return;
  const t = ctx.currentTime;
  if (kind === "tap") tone(880, t, .25, .08);
  if (kind === "open"){ tone(659.25, t, .6, .08); tone(880, t + .12, .7, .07); tone(1318.5, t + .26, .9, .05); }
}

/* ---------- visual effects ---------- */
function burst(x, y, set = ["❤️","💗","✨"], n = 14){
  for (let i = 0; i < n; i++){
    const s = document.createElement("span"), a = Math.random() * 6.283, d = 60 + Math.random() * 110;
    s.className = "pop"; s.textContent = set[i % set.length];
    s.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d - 40}px;font-size:${14 + Math.random() * 14}px`;
    document.body.appendChild(s); setTimeout(() => s.remove(), 1400);
  }
}
function rain(set, n = 16){
  for (let i = 0; i < n; i++){
    const s = document.createElement("span"); s.className = "rain"; s.textContent = set[i % set.length];
    s.style.cssText = `left:${Math.random() * 100}vw;font-size:${14 + Math.random() * 16}px;animation-delay:${Math.random() * 1.6}s;animation-duration:${3 + Math.random() * 2}s`;
    document.body.appendChild(s); setTimeout(() => s.remove(), 6200);
  }
}
(function ambience(){
  const box = $("#fx");
  for (let i = 0; i < 16; i++){
    const s = document.createElement("span"), heart = i % 3 !== 0;
    s.className = "fl " + (heart ? "h" : "s"); s.textContent = heart ? "♥" : "✦";
    s.style.cssText = `left:${Math.random() * 100}%;font-size:${9 + Math.random() * 14}px;--sw:${(Math.random() - .5) * 90}px;animation-duration:${16 + Math.random() * 16}s;animation-delay:${-Math.random() * 30}s`;
    box.appendChild(s);
  }
})();

/* ---------- timeline ---------- */
function renderTimeline(){
  const list = $("#list"); list.innerHTML = "";
  MEMORIES.forEach((m, i) => {
    const isOpen = opened.includes(i), unlocked = i === 0 || opened.includes(i - 1);
    const state = isOpen ? "done" : unlocked ? "next" : "locked";
    const el = document.createElement("article"); el.className = "card " + state;
    el.innerHTML = `<span class="num">${i + 1}</span>
      <span class="ic">${unlocked ? m.icon : "🔒"}</span>
      <h3>${unlocked ? m.title : "A sealed memory"}</h3>
      <span class="dt">${isOpen ? m.date : unlocked ? "Tap to reveal" : "Open the previous memory first"}</span>
      <button class="open">${isOpen ? "Read Again" : unlocked ? "Open Memory ❤️" : "Locked 🔒"}</button>`;
    el.querySelector(".open").onclick = ev => {
      if (!unlocked){ el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); return toast("Open the previous memory first 💗"); }
      openMemory(i, ev);
    };
    list.appendChild(el);
  });
  const all = opened.length === TOTAL;
  const fin = document.createElement("article"); fin.className = "card " + (all ? "next" : "locked");
  fin.innerHTML = `<span class="num">💌</span><span class="ic">${all ? "💌" : "🔒"}</span><h3>${all ? "A Last Message" : "One last surprise"}</h3>
    <span class="dt">${all ? "Waiting for you" : "Opens after all ${TOTAL} memories"}</span><button class="open">${all ? "Open Surprise 💌" : "Locked 🔒"}</button>`;
  fin.querySelector(".open").onclick = () => { if (all) openFinale(); else toast(`Finish all ${TOTAL} memories first ❤️`); };
  list.appendChild(fin);
  $("#tlCount").textContent = `${opened.length} of ${TOTAL} memories opened`;
  $("#tlBar").style.width = (opened.length / TOTAL * 100) + "%";
}
function goTimeline(){ pauseVoices(); renderTimeline(); show("timeline"); }

/* ---------- memory view ---------- */
function openMemory(i, ev){
  cur = i; const m = MEMORIES[i];
  if (!opened.includes(i)){ opened.push(i); store.set(opened); }
  $("#mIcon").textContent = m.icon;
  $("#mNo").textContent = "Memory " + String(i + 1).padStart(2, "0");
  $("#mTitle").textContent = m.title;
  $("#mDate").textContent = m.date + (m.time ? "  ·  " + m.time : "");
  $("#mInfo").innerHTML = m.info.map(([ic, l, v]) => `<li><small>${ic} ${l}</small>${v}</li>`).join("");
  $("#mMsg").innerHTML = m.message.split(" ").map((w, k) => `<span style="--w:${k}">${w}</span>`).join(" ");
  $("#prog").textContent = `Memory ${i + 1} of ${TOTAL}`;
  $("#mBar").style.width = ((i + 1) / TOTAL * 100) + "%";
  $("#prevBtn").disabled = i === 0;
  $("#nextBtn").textContent = i === TOTAL - 1 ? "Final Surprise 💌" : "Next Memory →";
  const nn = String(i + 1).padStart(2, "0"), box = $("#mPhotos");
  const srcs = m.photos || [m.photo || `photos/${nn}.jpg`];
  box.innerHTML = ""; box.hidden = true; $("#swipe").hidden = true; box.scrollLeft = 0;
  srcs.forEach(src => {
    const im = new Image(); im.className = "photo"; im.alt = m.title; im.loading = "lazy";
    im.onload = () => { if (im.naturalWidth > im.naturalHeight) im.style.aspectRatio = "4 / 3"; box.hidden = false; box.classList.toggle("multi", box.children.length > 1); $("#swipe").hidden = box.children.length < 2; };
    im.onerror = () => { im.remove(); if (!box.children.length) box.hidden = true; };
    im.src = src; box.appendChild(im);
  });
  bindMedia($("#mVoice"), m.voice || `voice/${nn}.mp3`);
  const b = $("#book"); b.classList.remove("in"); void b.offsetWidth; b.classList.add("in");
  show("memory");
  burst(ev && ev.clientX ? ev.clientX : innerWidth / 2, ev && ev.clientY ? ev.clientY : innerHeight / 2);
  rain(m.fx); sfx("open");
}
$("#prevBtn").onclick = e => { if (cur > 0) openMemory(cur - 1, e); };
$("#nextBtn").onclick = e => { cur < TOTAL - 1 ? openMemory(cur + 1, e) : openFinale(); };
$("#backBtn").onclick = () => { sfx("tap"); goTimeline(); };
document.addEventListener("keydown", e => {
  if (!$("#memory").classList.contains("active")) return;
  if (e.key === "ArrowRight") $("#nextBtn").click();
  if (e.key === "ArrowLeft" && cur > 0) $("#prevBtn").click();
});

/* ---------- finale ---------- */
function openFinale(){
  $("#envelope").classList.remove("open");
  pauseVoices(); $("#envStage").hidden = false; $("#letterWrap").hidden = true;
  $("#envMsg").innerHTML = `You opened all ${TOTAL} memories ❤️<br>One last thing is waiting for you.`;
  bindMedia($("#lVoice"), CONFIG.letterVoice || "voice/letter.mp3");
  show("finale"); sfx("tap");
}
$("#openLetter").onclick = e => {
  $("#envelope").classList.add("open"); sfx("open");
  burst(e.clientX || innerWidth / 2, e.clientY || innerHeight / 2, ["💌","❤️","✨"], 18);
  setTimeout(() => {
    $("#letter").innerHTML = LETTER.map((l, i) => `<p class="${l.c || ""}" style="--p:${i}">${l.t}</p>`).join("");
    $("#envStage").hidden = true; $("#letterWrap").hidden = false;
    $("#finale").scrollTop = 0; rain(["❤️","💗","✨","💌"], 22);
  }, 1300);
};
$("#toList").onclick = goTimeline;
$("#waBtn").onclick = () => {
  const url = "https://wa.me/" + CONFIG.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(CONFIG.replyText);
  window.open(url, "_blank", "noopener");
};
$("#restartBtn").onclick = () => {
  opened = []; store.set(opened); cur = 0; show("welcome"); toast("Our journey begins again ❤️");
};

/* ---------- day counter, headings ---------- */
function daysText(){
  const [y, m, d] = CONFIG.startDate, now = new Date();
  const n = Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - new Date(y, m - 1, d)) / 864e5);
  return n >= 0 ? `${n} ${n === 1 ? "day" : "days"} since our beginning ❤️` : "";
}
$("#days").textContent = $("#days2").textContent = daysText();
$("#finalH").textContent = `${TOTAL} Memories Down... A Lifetime of Memories to Go! ❤️`;

/* ---------- secret question ---------- */
(function gate(){
  const S = CONFIG.secret; let tries = 0;
  const ok = () => { try { return sessionStorage.getItem("olw-gate") === "1"; } catch { return false; } };
  if (!S.enabled || ok()) return;
  $("#gQ").textContent = S.question; show("gate");
  const pass = () => { try { sessionStorage.setItem("olw-gate", "1"); } catch {} show("welcome"); burst(innerWidth / 2, innerHeight / 2); };
  const check = () => {
    const v = $("#gIn").value.trim().toLowerCase();
    if (S.answers.includes(v)) return pass();
    tries++; const box = $("#gIn"); box.classList.remove("shake"); void box.offsetWidth; box.classList.add("shake");
    $("#gHint").textContent = tries === 1 ? "Not quite, try again 💗" : S.hint;
    if (tries >= 3) $("#gSkip").hidden = false;
  };
  $("#gBtn").onclick = check; $("#gSkip").onclick = pass;
  $("#gIn").addEventListener("keydown", e => { if (e.key === "Enter") check(); });
})();

/* ---------- start ---------- */
$("#startBtn").onclick = e => { burst(e.clientX, e.clientY); sfx("tap"); goTimeline(); };
function hideLoader(){ setTimeout(() => $("#loader").classList.add("gone"), 1600); }
document.readyState === "complete" ? hideLoader() : window.addEventListener("load", hideLoader);
setTimeout(() => $("#loader").classList.add("gone"), 4000); // safety net if fonts are slow
