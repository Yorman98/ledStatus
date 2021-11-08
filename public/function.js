import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getDatabase, ref, onValue, set  } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js";


let inter = document.querySelector('.interruptor.off');
let bomb = document.querySelector('.bombillo');
let bombAuto = document.querySelector('.bombillo-auto');

let ledState = false;
let ledStateAuto = false;
 

    

  const firebaseConfig = {
        apiKey: "AIzaSyCGVRu8Xp7kkPFyuoRpNN1kYw2MG6BGJV8",
        authDomain: "ejercicioled-28576.firebaseapp.com",
        databaseURL: "https://ejercicioled-28576-default-rtdb.firebaseio.com",
        projectId: "ejercicioled-28576",
        storageBucket: "ejercicioled-28576.appspot.com",
        messagingSenderId: "321714265318",
        appId: "1:321714265318:web:091e48e61c9443f4966f27"
    };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


set(ref(db, 'ledState/'), ledState);
set(ref(db, 'ledStateAuto/'), ledStateAuto);

const ledbtn = ref(db, 'ledState/');
const ledAuto = ref(db, 'ledState/');

onValue(ledbtn, (snapshot) => {
    ledState = snapshot.val();
});

onValue(ledAuto, (snapshot) => {
    ledStateAuto = snapshot.val();
})




inter.addEventListener('click', () => {
    
     if (ledState == false) {
         inter.src = "on.png";
         bomb.src = "bombillo-on.png";
         inter.classList.remove('off');
         set(ref(db, 'ledState/'), !ledState);

    } else {
         inter.src = "off.png";
         bomb.src = "bombillo-off.png";
        inter.classList.add('off');
         set(ref(db, 'ledState/'), !ledState);
    } 
    
});

setInterval(() => {

  
  console.log(ledStateAuto)

  if (ledStateAuto == !false) {
    bombAuto.src = "bombillo-on.png";
    set(ref(db, 'ledStateAuto/'), ledStateAuto);
  } else {
    bombAuto.src = "bombillo-off.png";
    set(ref(db, 'ledStateAuto/'), ledStateAuto);
  }

  ledStateAuto = !ledStateAuto;
},3000)



