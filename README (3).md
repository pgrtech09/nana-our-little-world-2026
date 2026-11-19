# Our Little World ❤️

A private, mobile-first memory book. Memories unlock one at a time, ending with a love letter in an envelope.

No backend, no database, no login, no paid APIs. Just `index.html`, `style.css` and `script.js`.

## Try it locally
Open `index.html` in any browser. That's it.

## Deploy on GitHub Pages
1. Create a new repository on GitHub (e.g. `our-little-world`).
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
5. After about a minute your site is live at `https://<your-username>.github.io/our-little-world/`.
6. Send her that link and let her open it on her phone.

Tip: a public repo means a public link. If you want to keep it private, use a hard-to-guess repository name and don't share the link anywhere else.

## Edit the memories
Open `script.js`. Everything is in the `MEMORIES` array at the top (title, date, time, details, falling emojis, message) and the `LETTER` array for the final letter.

## How it works
- Memories unlock in order. Memory 1 is open; each one unlocks the next.
- Opened memories are remembered for the current visit (`sessionStorage`). Closing the tab resets them, and the **Restart Our Journey** button resets them too.
- The final envelope unlocks once all 12 are opened.
- **Music (🎵)** is an original soft romantic piano loop generated in the browser (no audio files, no licences). It starts when she taps "Open Our Memories" (or unlocks the secret question) and she can switch it off with the 🎵 button. Set `autoMusic:false` in `CONFIG` to keep it off until she taps it. It lowers itself while a voice note plays. **Sound effects (🔔)** are OFF by default.
- Fonts (Cormorant Garamond, Nunito) load from Google Fonts. If offline, it falls back to system fonts.
- Keyboard: ← and → move between memories on desktop.

## Files
| File | Purpose |
|---|---|
| `index.html` | Page structure |
| `style.css` | Design, glassmorphism, animations |
| `script.js` | Memory data, navigation, audio, effects |

## Extra features (all set in `CONFIG` at the top of `script.js`)
- **Photos:** drop images into `photos/` named `01.jpg` … `13.jpg`. Resize to ~1000px wide. Missing photos are hidden. Use `photo:"photos/name.png"` on a memory for other names.
- **Voice notes:** drop audio into `voice/` named `01.mp3` … `13.mp3`, plus `letter.mp3` for the final letter. Missing files are hidden.
- **Memory 13:** a bonus memory about this website. Edit or delete it in the `MEMORIES` array; the counts and headings update by themselves.
- **Day counter:** counts days since `startDate`.
- **Secret question:** change `question` and `answers`, or set `enabled:false`. After 3 wrong tries a "Let me in anyway" button appears. This is a sweet gate, not real security.
- **WhatsApp reply:** put your number in `whatsapp` (country code, digits only, e.g. `"919876543210"`). If empty she chooses the contact herself.
- **Her song:** put a file you have the right to use at `assets/song.mp3` and set `song:"assets/song.mp3"`. Otherwise the built-in soft music plays.
- **Home screen:** `manifest.json` and icons are included, so "Add to Home Screen" gives her an app-like icon.

Photos and voice notes in a public repository are public. Think before uploading very personal ones.

## Photos already included
`05.jpg` + `05b.jpg` (First Meet), `08.jpg` (First Hug), `09.jpg` (First Kiss), `12.jpg` + `12b.jpg` (First Gift from You; name and phone number blurred on the bill). A memory with several photos can be swiped sideways.
To give any memory several photos, add `photos:["photos/a.jpg","photos/b.jpg"]` to it in `script.js`.
