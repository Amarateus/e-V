import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB4dpKjVFHVMdssJhclOUY2VWX8_mUsKHw",
    authDomain: "e-votri.firebaseapp.com",
    projectId: "e-votri",
    storageBucket: "e-votri.appspot.com",
    messagingSenderId: "989099010362",
    appId: "1:989099010362:web:a3b1aebf6324b4e00b8803"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)