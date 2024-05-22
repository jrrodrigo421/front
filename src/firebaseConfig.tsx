import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDPyVVMYpng6wAeASUgziU_1cHnF2J2iPY",
  authDomain: "achaaqui-5feaf.firebaseapp.com",
  projectId: "achaaqui-5feaf",
  storageBucket: "achaaqui-5feaf.appspot.com",
  messagingSenderId: "1033571817002",
  appId: "1:1033571817002:web:3989b63d2b0aa738d3d553"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };