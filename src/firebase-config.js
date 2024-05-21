import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBueC1kwuVFhLQu2tQqbpZ3f9LKsyaVkDc",
  authDomain: "mit-insights.firebaseapp.com",
  projectId: "mit-insights",
  storageBucket: "mit-insights.appspot.com",
  messagingSenderId: "492693479243",
  appId: "1:492693479243:web:4a4ffc28fe6e4c12e3d2ce",
  measurementId: "G-VN2WHBMPVP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
