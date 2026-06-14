const firebaseConfig = {

  apiKey: "AIzaSyD4CEwVKqQ3LHtya3mhueX5RSseGJ_6-v0",

  authDomain: "spkc-70733.firebaseapp.com",

  projectId: "spkc-70733",

  storageBucket: "spkc-70733.firebasestorage.app",

  messagingSenderId: "189455100894",

  appId: "1:189455100894:web:be933de76bed80b3b18b4f",

  measurementId: "G-CHYNX9GJ1S"

};


firebase.initializeApp(firebaseConfig);
function signup() {

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    firebase.auth()
        .createUserWithEmailAndPassword(
            email,
            password
        )

        .then(function() {

            document.getElementById("message").innerHTML =
                "Đăng ký thành công";

        })

        .catch(function(error) {

            document.getElementById("message").innerHTML =
                error.message;

        });
}
function login() {

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    firebase.auth()
        .signInWithEmailAndPassword(
            email,
            password
        )

        .then(function() {

            document.getElementById("message").innerHTML =
                "Đăng nhập thành công";

        })

        .catch(function(error) {

            document.getElementById("message").innerHTML =
                error.message;

        });
}
function logout() {

    firebase.auth()
        .signOut()

        .then(function() {

            document.getElementById("message").innerHTML =
                "Đăng xuất thành công";

        })

        .catch(function(error) {

            document.getElementById("message").innerHTML =
                error.message;

        });
}
firebase.auth().onAuthStateChanged(
function(user){

    if(user){

        console.log(user.email);

    }else{

        console.log("Chưa đăng nhập");

    }
});