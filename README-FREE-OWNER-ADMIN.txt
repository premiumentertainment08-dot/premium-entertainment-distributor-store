FREE OWNER ADMIN SETUP

1. Upload all files to the GitHub Pages repo root.
2. Create a Firebase project on the Spark (no-cost) plan.
3. Enable Authentication > Email/Password and create your owner admin user.
4. Create Firestore Database.
5. Put your Firebase web app config into firebase-config.js.
6. In Firestore Rules, replace YOUR_ADMIN_EMAIL@example.com with your admin email and publish firestore.rules.
7. Open /admin.html and login. Use “Import Existing Website Plans” once to publish the current 97-file site's plans to Firestore.
8. After that, edit/add/delete plans from Admin. Public index.html loads Firestore products automatically when Firebase is configured.

NO Firebase Storage is required. For images, use existing filenames or public image URLs.
