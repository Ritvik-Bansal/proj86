import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuejoreGxDo1pdi_D_-y7Mq1avncFmK6Y",
  authDomain: "class-78-pro.firebaseapp.com",
  projectId: "class-78-pro",
  storageBucket: "class-78-pro.appspot.com",
  messagingSenderId: "35019636140",
  appId: "1:35019636140:web:8901543eeebf8fafac0e09"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
