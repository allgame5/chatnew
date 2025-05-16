const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message-input");

// E2E: einfacher symmetrischer Schlüssel im Beispiel
const encryptionKey = "secret1234567890"; // sollte durch sicheren Key ersetzt werden

function encrypt(text) {
  return btoa(text); // Demo: Ersetzen durch AES
}

function decrypt(text) {
  return atob(text);
}

function sendMessage() {
  const text = messageInput.value;
  const encrypted = encrypt(text);
  db.collection("messages").add({
    text: encrypted,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    uid: auth.currentUser.uid,
  });
  messageInput.value = "";
}

function logout() {
  auth.signOut();
}

auth.onAuthStateChanged(user => {
  if (user) {
    db.collection("messages").orderBy("timestamp")
      .onSnapshot(snapshot => {
        messagesDiv.innerHTML = "";
        snapshot.forEach(doc => {
          const data = doc.data();
          const decrypted = decrypt(data.text);
          const msg = document.createElement("div");
          msg.textContent = decrypted;
          messagesDiv.appendChild(msg);
        });
      });
  } else {
    const email = prompt("Email:");
    const pass = prompt("Passwort:");
    auth.signInWithEmailAndPassword(email, pass).catch(() => {
      auth.createUserWithEmailAndPassword(email, pass);
    });
  }
});
