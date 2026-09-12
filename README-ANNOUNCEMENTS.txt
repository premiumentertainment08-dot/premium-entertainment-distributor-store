PREMIUM ENTERTAINMENT - ANNOUNCEMENTS

The homepage now includes a dark, WhatsApp/Telegram-style announcement feed inspired by the supplied video, plus admin.html.

IMPORTANT:
A static GitHub Pages site cannot securely write new public posts by itself. For true live posting for every visitor, connect Firebase Firestore + Email/Password Authentication.

SETUP (one time):
1. Create a Firebase project at firebase.google.com.
2. Add a Web App and copy its Firebase config.
3. Enable Authentication > Email/Password.
4. Create your admin user under Authentication > Users.
5. Create Firestore Database.
6. Put the Web App config values in firebase-config.js.
7. Use Firestore rules so everyone can read announcements but only authenticated admins can write/delete.
8. Open /admin.html, login, and publish.

The homepage reads the public 'announcements' collection ordered by time. If Firebase is not configured, it shows demo/local announcements on the current device.
