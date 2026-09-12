PREMIUM ENTERTAINMENT — FINAL WEBSITE PACKAGE

Included:
- Existing index.html / store design
- Jio recharge plans
- Airtel + Vi COMING SOON cards
- music.mp3 background music (autoplay attempt + first-tap audio unlock + loop)
- Announcement feed styled from the supplied video
- admin.html announcement manager
- Firebase-ready live announcements
- sitemap.xml + Google verification file

IMPORTANT — LIVE ANNOUNCEMENTS
GitHub Pages is static. The admin cannot publish public live posts until Firebase is configured.

One-time Firebase setup:
1. Create a Firebase project and add a Web App.
2. Enable Authentication > Email/Password.
3. Create your admin user.
4. Create Firestore Database.
5. Put the Web App config into firebase-config.js.
6. In firestore.rules replace YOUR_ADMIN_EMAIL@example.com with the exact admin email and publish the rules.
7. Open /admin.html, log in, and publish announcements.

The homepage reads the public announcements collection. Without Firebase config, admin posts are local to that device only.

MUSIC
Browsers can block audible autoplay. The page starts muted when allowed and unmutes on the first user tap/click. The song loops continuously after playback starts.
