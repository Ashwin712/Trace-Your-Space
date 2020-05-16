import firebase from 'firebase';

export const initializeFirebase = async () => {
    firebase.initializeApp({
        messagingSenderId: "907960096531"
    });
    // localStorage.setItem('firebase-token', await firebase.messaging().getToken())
}

navigator.serviceWorker
    .register('/my-sw.js')
    .then((registration) => {
        firebase.messaging().useServiceWorker(registration);
    });




