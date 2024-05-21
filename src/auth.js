import { auth } from './firebase-config';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('login-button');

  loginButton.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        if (user.email.endsWith('@mitmeerut.ac.in')) {
          alert('Login successful');
        } else {
          alert('Login failed: Only @mitmeerut.ac.in emails are allowed');
          signOut(auth);
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
      });
  });
});
