// Deine Firebase-Konfiguration hier einfügen:
const firebaseConfig = {
  apiKey: "AIzaSyBNExUxZTluE48Bcimnj1WCYH8p6olFiZU",
  authDomain: "chatco-fc596.firebaseapp.com",
  projectId: "chatco-fc596",
  storageBucket: "chatco-fc596.firebasestorage.app",
  messagingSenderId: "192318597553",
  appId: "1:192318597553:web:1603c7f541028b3fe67590",
  measurementId: "G-6DMGPVC94M"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
