// Deine Firebase-Konfiguration hier einfügen:
const firebaseConfig = {
  apiKey: "DEIN_API_KEY",
  authDomain: "DEIN_PROJEKT.firebaseapp.com",
  projectId: "DEIN_PROJEKT_ID",
  storageBucket: "DEIN_PROJEKT.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
