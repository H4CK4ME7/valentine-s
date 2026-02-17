/* --- CONFIGURATION --- */
const PASSWORD = "18021994"; 
const HERO_POEM = "ပျော်ရွှင်စရာ ချစ်သူများနေ့ပါ ချစ်ရဆုံးလေးရေ...\nကမ္ဘာကြီးက ကျယ်ဝန်းပေမယ့် \nကိုပိုင် နှလုံးသားထဲမှာတော့ မတစ်ယောက်တည်းအတွက်ပဲ နေရာရှိပါတယ်။ \nဒီနေ့ရော နောင်နှစ်ပေါင်းများစွာတိုင်အောင် မ လက်ကို တွဲထားချင်ပါတယ်။\nအရမ်းချစ်တယ်နော်။ 🫶❤️ ❤️";

const LOVE_LETTER_TEXT = `ချစ်ရသော ကိုပိုင်ရဲ့ ချစ်ရဆုံးလေးရေ... ❤️

ကိုပိုင် အမြဲတမ်း မရဲ့ လိုအင်ဆန္ဒတွေ၊ မရဲ့ အားအင်တွေ ဖြစ်နေမှာပါ။ 
မ ရှိနေတဲ့အတွက် ကိုပိုင် ကမ္ဘာဟာ ပြည့်စုံပြီး လှပနေတာပါ။

ကမ္ဘာကြီးက ကျယ်ပေမယ့် ကိုပိုင် ကမ္ဘာကတော့ မ ပါပဲ။ Happy Valentine's Day ပါ မ။

ကိုပိုင် ဘဝရဲ့ အလှပဆုံး အခန်းကဏ္ဍကတော့ မ နဲ့စတွေ့တဲ့ အချိန်ပါပဲ။

မ သာရှိနေရင် နေရာတိုင်းက ကိုပိုင် အတွက် အိမ်ပါပဲ။

ပန်းတွေ ဘယ်လောက်လှလှ၊ မအလှကိုတော့ ဘယ်ပန်းမှ မမှီပါဘူး။

မရဲ့ ပျော်ရွှင်မှုက ကိုပိုင်ရဲ့ တာဝန်ဖြစ်စေရမယ်။

ရာသီတွေ ပြောင်းသွားပါစေ၊ မအပေါ်ထားတဲ့ ကိုပိုင် အချစ်ကတော့ ဘယ်တော့မှ မပြောင်းလဲပါဘူးနော်။

ဒီနေ့ကစ မရဲ့ နေ့ရက်လေးတွေမှာ မဘဝ အေးချမ်းပျော်ရွှင်ပါစေလို့ ကိုပိုင် ဆုတောင်းပေးလိုက်ပါတယ်...

အချစ်ဆုံးသူဆီမှ... .. 💋`;

const MY_LAT = 16.7984; const MY_LON = 96.1496; // Yangon
const HER_LAT = 21.9545; const HER_LON = 96.0933; // Mandalay

const COMPLIMENTS = [
    "မင်းက ကိုယ့်ရဲ့ ကမ္ဘာငယ်လေးပါ ❤️", "ဒီနေ့ အရမ်းလှနေတယ်နော် 😍", "မင်းပြုံးလိုက်ရင် နေမင်းကြီး ထွက်လာသလိုပဲ ☀️",
    "မင်းရှိနေလို့ ကိုယ့်ဘဝက ပြည့်စုံတာပါ 💑", "မင်းရဲ့ ကြိုးစားမှုတွေကို ကိုယ်အမြဲ ဂုဏ်ယူတယ် 💪", "မင်းချက်ကျွေးတဲ့ ထမင်းဟင်းက ကမ္ဘာပေါ်မှာ အကောင်းဆုံးပဲ 🍛",
    "မင်းက ကိုယ့်ရဲ့ အကောင်းဆုံး သူငယ်ချင်း၊ အချစ်ဆုံး ချစ်သူပါ 💕", "စိတ်ညစ်စရာရှိရင် ကိုယ့်ကို ပြောနော်၊ ကိုယ်အမြဲ နားထောင်ပေးမယ် 🤗",
    "မင်းဆံပင်ပုံစံလေးက ဒီနေ့ အရမ်းလိုက်ဖက်တယ် 💇‍♀️", "မင်းရဲ့ အသံလေးကြားရရင် ကိုယ် အမောပြေတယ် 🎶", "ကိုယ့်အပေါ် နားလည်ပေးလို့ ကျေးဇူးပါ ချစ်ဆုံးလေး 🙏",
    "မင်းက ကိုယ့်ရဲ့ စိတ်ခွန်အားပါ 💪", "မင်းနဲ့ အတူရှိရတဲ့ အချိန်တိုင်းက တန်ဖိုးရှိတယ် ⏳", "မင်းက ကိုယ့်မျက်လုံးထဲမှာ အလှဆုံး ပန်းပွင့်လေးပါ 🌹",
    "ဘယ်လောက်ဝေးဝေး ကိုယ့်စိတ်က မင်းဆီမှာပါ 🌍", "မင်းစိတ်ကောက်ရင်တောင် ချစ်ဖို့ကောင်းနေတုန်းပဲ 😏", "မင်းက ကိုယ့်ရဲ့ အိပ်မက်မင်းသမီးလေးပါ 👸",
    "ဒီနေ့ရော ထမင်းစားပြီးပြီလား? ဂရုစိုက်နော် 🍚", "မင်းမရှိရင် ကိုယ်ဘယ်နေတတ်ပါ့မလဲ 🥺", "ကိုယ့်ရဲ့ အချစ်တွေက မင်းအတွက်ပဲ ဖြစ်တည်နေတာပါ 💖",
    "မင်းရဲ့ မျက်ဝန်းလေးတွေက ကြယ်လေးတွေလို တောက်ပတယ် ✨", "မင်းက ကိုယ့်ရဲ့ Sunshine လေးပါ 🌻", "အားငယ်တဲ့အခါတိုင်း ကိုယ်ရှိနေတာကို မမေ့ပါနဲ့ 🤝",
    "မင်းရဲ့ ရယ်သံလေးက ကိုယ့်အတွက် တေးသွားတစ်ပုဒ်လိုပဲ 🎵", "ချစ်တယ်ဆိုတဲ့ စကားထက် ပိုချစ်ပြမယ်နော် 🥰", "မင်းက ကိုယ့်ရဲ့ First Choice ပါ 🥇",
    "မင်းနဲ့တွေ့မှ အချစ်စစ်ကို ကိုယ်နားလည်ခဲ့တာပါ ❤️", "ဒီဘဝမှာ မင်းနဲ့ဆုံခွင့်ရတာ ကံကောင်းလွန်းပါတယ် 🍀", "မင်းအနားမှာ ရှိနေခွင့်ရတာ ကိုယ့်အတွက် ဆုလာဘ်ပါပဲ 🎁",
    "မင်းက ကိုယ့်ရဲ့ နှလုံးသား ပိုင်ရှင်လေးပါ 🗝️"
];
const COUPONS = ["၁ ရက် စိတ်မဆိုးကြေး 🏳️", "Ice Cream ဝယ်ကျွေးရမည် 🍦", "ခြေထောက်နှိပ်ပေးကြေး 🦶", "ကြိုက်တာတစ်ခု အလိုလိုက်ခွင့် 🧞‍♂️"];
const RIDDLES = ["fridge", "မရဲ့အပြုံး", "Ma Smile"];
const QUESTIONS = [{ q: "မ အကြိုက်ဆုံး အစားအစာ?", a: [{t:"ဒိန်ချဉ် အုန်းသီးဖြူးစားတာ",c:true}, {t:"KFC",c:false}] }, { q: "ကိုပိုင်ရဲ မွေးနေ့?", a: [{t:"18-02-1994",c:true}, {t:"17-12-1995",c:false}] }];

// --- MUSIC PLAYER DATA (10 SONGS) ---
const trackList = [
    { name: "Take_Me_to_Your_Heart", artist: "Wild Cards", image: "covers/cover1.jpg", path: "songs/Take_Me_to_Your_Heart.mp3" },
    { name: "နှစ်လေးငါးခြောက်ဆယ်", artist: "Future", image: "covers/cover2.jpg", path: "songs/နှစ်လေးငါးခြောက်ဆယ်.mp3" },
    { name: "အတူရှိမဲ့နေ့", artist: "Ariana Grande", image: "covers/cover3.jpg", path: "songs/အတူရှိမဲ့နေ့.mp3" },
    { name: "Only_For_You", artist: "Taylor Swift", image: "covers/cover4.jpg", path: "songs/Only_For_You.mp3" },
    { name: "For_Ma", artist: "Ed Sheeran", image: "covers/cover5.jpg", path: "songs/For_Ma.mp3" },
    { name: "စိတ်ကူးယဥ်အိပ်မက်ကမ္ဘာ", artist: "Ed Sheeran", image: "covers/cover6.jpg", path: "songs/စိတ်ကူးယဥ်အိပ်မက်ကမ္ဘာ.mp3" },
    { name: "ပစ်မထားနဲ_မမရယ်", artist: "Maroon 5", image: "covers/cover7.jpg", path: "songs/ပစ်မထားနဲ_မမရယ်.mp3" },
    { name: "သိပ်ချစ်လို့ပါ", artist: "Shawn Mendes", image: "covers/cover8.jpg", path: "songs/သိပ်ချစ်လို့ပါ.mp3" },
    { name: "ရိုးရိုးလေးနဲ့လှနေတယ်မရယ်", artist: "Chainsmokers", image: "covers/cover9.jpg", path: "songs/ရိုးရိုးလေးနဲ့လှနေတယ်မရယ်.mp3" },
    { name: "မအတွက်", artist: "Justin Bieber", image: "covers/cover10.jpg", path: "songs/မအတွက်.mp3" }
];

/* --- PASSWORD & TYPING --- */
function typeWriter(text, i) {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML = text.substring(0, i+1);
        setTimeout(() => typeWriter(text, i + 1), 100);
    }
}

// Background Music Control
const bgMusic = document.getElementById('bg-music');
let isBgMusicPlaying = false;

function toggleBgMusic() {
    if (isBgMusicPlaying) {
        bgMusic.pause();
        document.getElementById('bg-status').innerText = "OFF";
    } else {
        if(isPlayerPlaying) pauseTrack(); 
        bgMusic.play();
        document.getElementById('bg-status').innerText = "ON";
    }
    isBgMusicPlaying = !isBgMusicPlaying;
}

function checkPassword() {
    const input = document.getElementById('pass-input').value.trim();
    if (input === PASSWORD) {
        document.getElementById('login-overlay').style.transition = "opacity 0.5s";
        document.getElementById('login-overlay').style.opacity = "0";
        setTimeout(() => {
            document.getElementById('login-overlay').style.display = 'none';
            typeWriter(HERO_POEM, 0);
            toggleBgMusic();
            calculateDistance();
        }, 800);
    } else {
        document.getElementById('error-msg').style.display = 'block';
        document.getElementById('pass-input').value = '';
    }
}

/* --- MUSIC PLAYER --- */
let track_index = 0;
let isPlayerPlaying = false;
let updateTimer;
let curr_track = new Audio();

const playerOverlay = document.getElementById("music-player-overlay");
const trackArt = document.getElementById("track-art");
const trackName = document.getElementById("track-name");
const trackArtist = document.getElementById("track-artist");
const playPauseIcon = document.getElementById("play-pause-icon");
const seekSlider = document.querySelector(".seek_slider");
const volumeSlider = document.querySelector(".volume_slider");
const currTime = document.getElementById("current-time");
const totalDur = document.getElementById("total-duration");
const playlistList = document.getElementById("playlist-list");

function openMusicPlayer() { 
    playerOverlay.classList.add("active"); 
    if(playlistList.innerHTML === "") buildPlaylist(); 
}
function closeMusicPlayer() { playerOverlay.classList.remove("active"); }

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = trackList[track_index].path;
    curr_track.load();
    trackArt.src = trackList[track_index].image;
    trackName.textContent = trackList[track_index].name;
    trackArtist.textContent = trackList[track_index].artist;
    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
    buildPlaylist();
}

function resetValues() { 
    currTime.textContent = "00:00"; 
    totalDur.textContent = "00:00"; 
    seekSlider.value = "0"; 
}

function playpauseTrack() { if (!isPlayerPlaying) playTrack(); else pauseTrack(); }

function playTrack() {
    if(isBgMusicPlaying) {
        bgMusic.pause();
        isBgMusicPlaying = false;
        document.getElementById('bg-status').innerText = "OFF";
    }
    if(!curr_track.src) loadTrack(track_index);
    curr_track.play();
    isPlayerPlaying = true;
    trackArt.classList.add("rotate");
    playPauseIcon.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseTrack() {
    curr_track.pause();
    isPlayerPlaying = false;
    trackArt.classList.remove("rotate");
    playPauseIcon.innerHTML = '<i class="fas fa-play"></i>';
}

function nextTrack() { if (track_index < trackList.length - 1) track_index += 1; else track_index = 0; loadTrack(track_index); playTrack(); }
function prevTrack() { if (track_index > 0) track_index -= 1; else track_index = trackList.length - 1; loadTrack(track_index); playTrack(); }
function seekTo() { let seekto = curr_track.duration * (parseInt(seekSlider.value) / 100); curr_track.currentTime = seekto; }
function setVolume() { curr_track.volume = parseInt(volumeSlider.value) / 100; }

function seekUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seekSlider.value = seekPosition.toString();

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        currTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDur.textContent = durationMinutes + ":" + durationSeconds;
    }
}

function togglePlaylist() { document.getElementById("playlist-modal").classList.toggle("show"); }
function buildPlaylist() {
    playlistList.innerHTML = "";
    trackList.forEach((track, index) => {
        const div = document.createElement("div"); div.classList.add("playlist-item");
        if(index === track_index && (curr_track.src.includes(track.path))) div.classList.add("active-song");
        div.innerHTML = `<div><strong>${track.name}</strong><br><small>${track.artist}</small></div><span>▶</span>`;
        div.onclick = () => { track_index = index; loadTrack(track_index); playTrack(); togglePlaylist(); };
        playlistList.appendChild(div);
    });
}
function toggleTheme() { playerOverlay.classList.toggle("dark-mode"); }
function repeatTrack() { loadTrack(track_index); playTrack(); }
function shuffleTrack() { track_index = Math.floor(Math.random() * trackList.length); loadTrack(track_index); playTrack(); }

/* --- LOVE LETTER TYPING --- */
const letterElement = document.getElementById('typing-letter-content');
let letterIndex = 0;
let isLetterTypingStarted = false;
function typeLetterEffect() {
    if (letterIndex < LOVE_LETTER_TEXT.length) {
        letterElement.innerHTML += LOVE_LETTER_TEXT.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeLetterEffect, 70); 
    }
}
const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !isLetterTypingStarted) {
            isLetterTypingStarted = true;
            typeLetterEffect();
        }
    });
});
const letterSection = document.getElementById('letter-section');
if(letterSection) letterObserver.observe(letterSection);

/* --- FLIP CARD --- */
function flipCard(el) { el.classList.toggle('flipped'); }

/* --- OTHER FEATURES --- */
function calculateDistance() {
    const R = 6371; 
    const dLat = (HER_LAT - MY_LAT) * (Math.PI/180);
    const dLon = (HER_LON - MY_LON) * (Math.PI/180);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(MY_LAT * (Math.PI/180)) * Math.cos(HER_LAT * (Math.PI/180)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = Math.round(R * c);
    let start = 0;
    const timer = setInterval(() => {
        start += 5;
        document.getElementById("distance-km").innerText = start + " km";
        if (start >= d) {
            document.getElementById("distance-km").innerText = d + " km";
            clearInterval(timer);
        }
    }, 10);
}

function generateCompliment() {
    const text = document.getElementById('compliment-text');
    text.style.opacity = "0";
    setTimeout(() => { text.innerText = COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)]; text.style.opacity = "1"; confetti({ particleCount: 30, spread: 40, origin: { y: 0.7 } }); }, 300);
}
function generateCoupon() {
    const title = document.getElementById('coupon-title');
    title.style.opacity = "0";
    setTimeout(() => { title.innerText = COUPONS[Math.floor(Math.random() * COUPONS.length)]; title.style.opacity = "1"; confetti(); }, 300);
}

function spinSlot() {
    const reel = document.getElementById('slotReel'); const items = reel.getElementsByTagName('li'); const rand = Math.floor(Math.random()*items.length);
    reel.style.transition='none'; reel.style.top='0';
    setTimeout(()=>{ reel.style.transition='top 3s cubic-bezier(0.25,1,0.5,1)'; reel.style.top= -(rand*50)+'px'; setTimeout(()=> { document.getElementById('slot-result').innerText = `❤️ ${items[rand].innerText} ❤️`; confetti(); }, 3000); },50);
}

let qIdx = 0;
function showQ() {
    const q = QUESTIONS[qIdx]; document.getElementById('question-text').innerText = q.q;
    const div = document.getElementById('answer-buttons'); div.innerHTML='';
    q.a.forEach(ans => {
        const b = document.createElement('button'); b.className='btn'; b.innerText=ans.t; b.style.background='white'; b.style.color='#ff4d6d';
        b.onclick = () => { if(ans.c) { b.style.background='#4caf50'; b.style.color='white'; setTimeout(()=>{ qIdx++; if(qIdx<QUESTIONS.length) showQ(); else { document.getElementById('quiz-container').style.display='none'; document.getElementById('scavenger-hunt').style.display='block'; confetti(); } },800); } else { b.style.background='#ff0000'; b.style.color='white'; } }
        div.appendChild(b);
    });
}
showQ();

function checkRiddle() { if(RIDDLES.some(r=>document.getElementById('riddle-input').value.toLowerCase().trim().includes(r))) { document.getElementById('gift-location').style.display='block'; document.getElementById('gift-location').innerText="Correct! Check the bottom shelf! ❤️"; confetti(); } else alert("Try again!"); }

const noBtn = document.getElementById('noBtn');
function moveButton() { noBtn.style.position='fixed'; noBtn.style.left=Math.random()*(window.innerWidth-noBtn.offsetWidth)+'px'; noBtn.style.top=Math.random()*(window.innerHeight-noBtn.offsetHeight)+'px'; }
function acceptLove() { document.querySelector('.question-box').innerHTML=`<h1>Yay! Love You! 💖</h1>`; confetti({particleCount:200, spread:100}); }

/* --- SURPRISE TRIGGER --- */
function triggerSurprise(event) {
    event.preventDefault();
    const duration = 2000;
    const end = Date.now() + duration;
    const colors = ['#ff0a54', '#ff477e', '#ffbd00', '#ffffff'];

    (function frame() {
        confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0, y: 0.8 }, shapes: ['heart'], colors: colors });
        confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1, y: 0.8 }, shapes: ['heart'], colors: colors });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());

    setTimeout(() => { window.location.href = "surprise.html"; }, 1500);
}

setInterval(()=>{ const h = document.createElement('div'); h.innerHTML='❤️'; h.className='heart'; h.style.left=Math.random()*100+'vw'; document.querySelector('.heart-container').appendChild(h); setTimeout(()=>h.remove(),5000); },300);
const obs = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){e.target.style.opacity="1";e.target.style.transform='translateY(0)'} }));
document.querySelectorAll('.glass-card').forEach(e=>{ e.style.opacity="0";e.style.transform='translateY(50px)';e.style.transition='all 0.8s';obs.observe(e); });
