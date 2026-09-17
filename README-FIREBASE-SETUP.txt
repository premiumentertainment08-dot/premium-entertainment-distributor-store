PREMIUM ENTERTAINMENT — FREE OWNER ADMIN SETUP

1) Firebase config is already added in firebase-config.js for project:
   premium-entertainment-store

2) In Firebase Console open this project.

3) Authentication -> Sign-in method -> enable Email/Password.

4) Authentication -> Users -> Add user.
   Create the owner email + password you want to use in admin.html.

5) Firestore Database -> Create database -> choose production mode (or start setup).
   Use the free Spark/no-cost plan. Do not enable billing just for this setup.

6) Firestore Database -> Rules:
   Paste firestore.rules.
   IMPORTANT: replace YOUR_ADMIN_EMAIL@example.com with the exact owner email
   you created in Firebase Authentication.
   Then Publish the rules.

7) GitHub Pages must contain these files in repository root:
   index.html
   admin.html
   firebase-config.js
   firestore.rules
   products-seed.json
   and all existing website assets.

8) Open your website + /admin.html, for example:
   https://premiumentertainment08-dot.github.io/premium-entertainment-distributor-store/admin.html

9) Login with the Firebase owner email/password.

10) First time inside Admin -> Plans, press "Import Existing Website Plans" once.
    This copies the existing catalogue to Firestore. Do NOT press it repeatedly,
    or duplicate plans may be created.

After that, edits to Plans and Website Settings are stored in Firestore and the
public index.html already contains the live Firebase sync code.

FREE HOSTING NOTE:
No Firebase Storage is required. Product/logo images should use existing GitHub
files or image URLs. Firestore and Authentication still have free-tier limits.
