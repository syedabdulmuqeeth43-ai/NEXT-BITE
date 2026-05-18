/**
 * ════════════════════════════════════════════════════════════════════
 *  MOM'S LOVE KITCHEN — FIREBASE SETUP GUIDE
 * ════════════════════════════════════════════════════════════════════
 *
 * Run this script ONCE in your browser console (or as a Node script)
 * with your Firebase Admin SDK to seed the initial data.
 *
 * Alternatively, just import the menuItems from src/data/menu.ts via
 * the Admin Dashboard → Menu Management page once connected.
 * ════════════════════════════════════════════════════════════════════
 */

/**
 * STEP 1 — Create a Firebase project
 * ─────────────────────────────────────────────────────────────────────
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project: "moms-love-kitchen"
 * 3. Disable Google Analytics (optional)
 *
 * STEP 2 — Enable Authentication
 * ─────────────────────────────────────────────────────────────────────
 * 1. Go to Authentication → Sign-in method
 * 2. Enable:
 *    ✅ Email / Password
 *    ✅ Google
 *
 * STEP 3 — Create Firestore Database
 * ─────────────────────────────────────────────────────────────────────
 * 1. Go to Firestore Database → Create database
 * 2. Choose "Production mode"
 * 3. Select region (e.g., asia-south1 for India)
 * 4. Deploy the security rules from: firestore.rules
 *    → Firebase Console → Firestore → Rules → Paste contents
 *
 * STEP 4 — Get your config keys
 * ─────────────────────────────────────────────────────────────────────
 * 1. Go to Project Settings (⚙️) → General → Your apps
 * 2. Click "Add app" → Web
 * 3. Copy the firebaseConfig object values
 * 4. Fill in .env.local:
 *
 *   NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
 *   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=moms-love-kitchen.firebaseapp.com
 *   NEXT_PUBLIC_FIREBASE_PROJECT_ID=moms-love-kitchen
 *   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=moms-love-kitchen.appspot.com
 *   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1234567890
 *   NEXT_PUBLIC_FIREBASE_APP_ID=1:1234567890:web:abc123
 *
 * STEP 5 — Enable Firebase Storage
 * ─────────────────────────────────────────────────────────────────────
 * 1. Go to Storage → Get Started
 * 2. Deploy in production mode
 * 3. Storage is used for uploading dish images in the Admin panel
 *
 * STEP 6 — Set up Razorpay
 * ─────────────────────────────────────────────────────────────────────
 * 1. Go to https://razorpay.com → Create account
 * 2. Dashboard → API Keys → Generate Test Key
 * 3. Add to .env.local:
 *    NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...
 * 4. For production: Use live keys + create orders via backend
 *
 * STEP 7 — Create first Admin user
 * ─────────────────────────────────────────────────────────────────────
 * 1. Sign up via /signup with your email
 * 2. Go to Firestore → users collection
 * 3. Find your user document → Edit "role" field to "Admin"
 * 4. Now /admin routes are accessible
 *
 * STEP 8 — Deploy to Vercel
 * ─────────────────────────────────────────────────────────────────────
 * 1. Push code to GitHub
 * 2. Connect repo to Vercel (vercel.com/new)
 * 3. Add all NEXT_PUBLIC_* env vars in Vercel dashboard
 * 4. Deploy!
 *
 * STEP 9 — (Optional) Deploy to Firebase Hosting
 * ─────────────────────────────────────────────────────────────────────
 * 1. npm install -g firebase-tools
 * 2. firebase login
 * 3. firebase init hosting  (select existing project)
 * 4. npm run build → output in .next/
 * 5. firebase deploy --only hosting
 *
 * ════════════════════════════════════════════════════════════════════
 *  AVAILABLE COUPON CODES (for demo / testing)
 * ════════════════════════════════════════════════════════════════════
 *  FIRST50   — 50% off, max ₹75, min order ₹200
 *  AMMI20    — 20% off, max ₹50, min order ₹150
 *  MIDNIGHT30 — 30% off, max ₹60, min order ₹100
 *  WELCOME10 — 10% off, max ₹30, no minimum
 *
 * ════════════════════════════════════════════════════════════════════
 *  FIRESTORE COLLECTIONS STRUCTURE
 * ════════════════════════════════════════════════════════════════════
 *
 *  /users/{uid}
 *    uid, email, displayName, role, photoURL, createdAt
 *
 *  /orders/{orderId}
 *    userId, items[], subtotal, deliveryFee, total,
 *    address{}, paymentMethod, paymentStatus, status, createdAt
 *
 *  /menuItems/{itemId}
 *    name, description, price, category, image, rating,
 *    isVeg, isMomSpecial, isAvailable, tags[], createdAt
 *
 *  /coupons/{couponId}
 *    code, discount, minOrder, maxDiscount, isActive, expiresAt
 *
 *  /reviews/{reviewId}
 *    userId, orderId, itemId, rating, text, createdAt
 *
 *  /notifications/{notifId}
 *    userId, type, title, message, read, createdAt
 *
 *  /deliveryPartners/{partnerId}
 *    uid, name, phone, isActive, totalDeliveries, earnings, rating
 *
 *  /banners/{bannerId}
 *    title, subtitle, image, cta, isActive, order
 *
 *  /offers/{offerId}
 *    title, discount, items[], validUntil, isActive
 * ════════════════════════════════════════════════════════════════════
 */

export {};
