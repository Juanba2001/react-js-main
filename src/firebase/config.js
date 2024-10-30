import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
apiKey: "AIzaSyAiR5T6mGhlDHOM1b8-wIVIFLCfXEXI7zk",
authDomain: "coder-fran.firebaseapp.com",
projectId: "coder-fran",
storageBucket: "coder-fran.appspot.com",
messagingSenderId: "464056060227",
appId: "1:464056060227:web:4b76f6b60282126ff787f6",
measurementId: "G-S9K28BVV0S"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


