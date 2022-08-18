import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAE67Nv4l0QNsY7EvBqHgwLwrQzj5JfSJE",
  authDomain: "roomie-a28aa.firebaseapp.com",
  projectId: "roomie-a28aa",
  storageBucket: "roomie-a28aa.appspot.com",
  messagingSenderId: "351740427631",
  appId: "1:351740427631:web:21b8cb45ad3d08e5a97c9a",
  measurementId: "G-Q2C69H33H2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
