FINAL WEBSITE

Upload ALL files and the assets folder to the GitHub repository root.
Do not upload only index.html; the assets folder is required.

The site includes Jio plans, Airtel/Vi Coming Soon, announcements, and music.


PAYMENT SCREENSHOT SYSTEM
-------------------------
The Buy Now payment area now accepts a JPG/PNG/WEBP payment screenshot (max 5 MB).
The customer first pays by UPI, then selects the screenshot and taps “Upload Screenshot & Confirm Order”.
The screenshot and order details are saved in Firebase Storage + Firestore as a PENDING payment order.
The authenticated admin can open admin.html and view/verify/reject the submitted screenshot.

REQUIRED FIREBASE SETUP
1. In firebase-config.js, fill in the Firebase Web App config, including storageBucket.
2. Enable Authentication > Email/Password and create the admin user.
3. Replace YOUR_ADMIN_EMAIL@example.com in firestore.rules and storage.rules with that exact admin email.
4. Create/enable Firestore Database and Firebase Storage.
5. Deploy both rules files in Firebase Console (Firestore Rules and Storage Rules).
6. GitHub Pages only serves the frontend; without Firebase config/rules the upload cannot reach the admin.

IMPORTANT
A website cannot silently send an image directly into a WhatsApp chat using a normal wa.me link.
This build stores the screenshot securely in Firebase and the customer’s WhatsApp message includes the generated Order ID after a successful upload.
