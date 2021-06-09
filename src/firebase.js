import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBIJS_Ht-uB2BN75XdrgfLKvfxmA-GcdT4",
    authDomain: "yt-clone-arup1.firebaseapp.com",
    projectId: "yt-clone-arup1",
    storageBucket: "yt-clone-arup1.appspot.com",
    messagingSenderId: "557452485559",
    appId: "1:557452485559:web:fa4f6a6eaabdf226e6be32"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
