// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import 'firebase/compat/auth';
// import 'firebase/firestore';
// import { getFirestore } from 'firebase/firestore';
// import { 
//     getAuth,// authentication 설정
//     signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
//     GoogleAuthProvider, //google login 기능
//     signInWithEmailAndPassword,// email 로그인
//     createUserWithEmailAndPassword, //email 회원가입
//   } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDYdYXm-NuRGg3yXXebjE3rnYqQZDjEjrc",
//   authDomain: "shoelab-abb76.firebaseapp.com",
//   projectId: "shoelab-abb76",
//   storageBucket: "shoelab-abb76.appspot.com",
//   messagingSenderId: "452031160178",
//   appId: "1:452031160178:web:70d19f2a7a65d0dd5a07eb",
//   measurementId: "G-CEDQ4S2THX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// //auth 설정 필수
// const auth = getAuth();

// //email 로그인
// export const signupEmail = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
// };

// //email 회원가입
// export const loginEmail = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
// };

// //google 로그인
// const provider = new GoogleAuthProvider();
// export const loginGoogle = () => {
//     return console("로그인 완료!");
// }