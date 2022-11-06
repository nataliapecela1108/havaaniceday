{/* <h1 class="banner-title">Good Morning</h1>
<h3 class="banner-subtitle">Hello John</h3> */}

const h1 = document.querySelector (".banner-title");

h1.textContent = "Have a nice day !";
h1.style.color = "green";

const h3 = document.querySelector (".banner-subtitle");

h3.textContent = "Hello Natalia !";
h3.style.color = "yellow";

// {/* <article class="best-card">
//                 <img src="https://i.pravatar.cc/150?img=12" alt="">
//                 <h3 class="card-name">John Smith</h3>
//                 <button class="card-btn">
//                     <i class="bi bi-person-plus-fill"></i>
//                     Follow 
//                 </button>
//                 <p class="card-desk">Some quick example
//                      text to build on the card title
//                      and make up the bulk of the.
//                  </p>
//             </article> */}


//Best workers//
const workersWrapper = document.getElementById("Workers");

function createWorkerCard (userImg, userName, userDesc) {

    const card = document.createElement ("article");
    card.setAttribute("class","best-card");

    const image = document.createElement("img");
    image.src = userImg;
    image.alt = `Zdjęcie użytkownika ${userName}`;
    card.appendChild(image);

    const title = document.createElement("h3");
    title.classList.add("card-name");
    title.textContent = userName;
    card.appendChild(title);

    const btn = document.createElement("button");
    btn.classList.add("card-btn");
    btn.innerHTML = `<i class="bi bi-person-plus-fill"></i> Follow`
    card.appendChild(btn);

    const textp = document.createElement("p");
    textp.classList.add = userDesc;
    textp.textContent = "Some quick example text to build on the card title and make up the bulk of the.";
    card.appendChild(textp);

    workersWrapper.appendChild(card);
}

createWorkerCard("https://i.pravatar.cc/150?img=12","John Smith","Opis2");
createWorkerCard("https://i.pravatar.cc/150?img=15","Jon Black","Opis2");
createWorkerCard("https://i.pravatar.cc/150?img=35", "Kim Bin", "Opis2");
createWorkerCard("https://i.pravatar.cc/150?img=44","Heidi Niumk","Opis2");

/* <div class="text">
        <div class="price-month">
            <span class="price-month-text">$</span>
            50
            <span class="price-month-month">/month</span>

        <p class="info">
            Best for higher volume businesses that need additional features and power.
        </p>
        <p>Full Support No</p>
        <p>Storage 50 GB</p>
        <p>Monthly Visitors 400k</p>
        <button class="button-pin">Buy now</button> */

const pricing = document.getElementById("pricing");

function createPricing (kwota,info,text) {
    const card = document.createElement("div");
        card.classList.add("text");

    const price1 = document.createElement("div");
        price1.classList.add("price-month");
        price1.textContent = "$50 month";
        card.appendChild(price1);

    const infop = document.createElement("span");
        infop.setAttribute("class","span");
        infop.textContent = "Best for higher volume businesses that need additional features and power";
        card.appendChild(infop);
        
    const fullSup = document.createElement("p");
        fullSup.textContent = "Full Support No";
        card.appendChild(fullSup);

    const storage = document.createElement("p");
        storage.textContent = "Storage 50 GB";
        card.appendChild(storage);

    const monthly = document.createElement("p");
        monthly.textContent = "Monthly Visitors 400k";
        card.appendChild(monthly);

    const button1 =document.createElement("button");
        button1.setAttribute("class","button-pin")
        button1.textContent = "Buy now";
        card.appendChild(button1);

    pricing.appendChild(card);

}

createPricing ();
createPricing ();
createPricing ();
createPricing ();



const showGreating = () => {
    const title = document.getElementById("Greeting");
    const date = new Date();
    const hour = date.getHours();

    console.log( hour );

    if(hour < 12 && hour >= 6 ) {
        title.textContent = "Good Morning";
    }

    else if(hour >= 12 && hour <18) {
        title.textContent = "Good Afternoon";
    }

    else {
        title.textContent = "Good Evening";
    }


    
}

showGreating();


//po kliknięciu w JOIN NOW zmienia się powitanie//
const showCreate = () => {
    const title = document.getElementById("Create");
    console.log("klik");
    title.textContent = "Hello Margoooooooo !";
}


const btnJoin = () => {
    const title = document.getElementById("btnJoin");
    console.log("inny tekst");
    title.addEventListener("click", showCreate);
}

btnJoin();


const menu = document.getElementById("Menu");
const HamburgerBtn = document.getElementById("HamburgerBtn");

const toggleMenu = ()=> {
    menu.classList.toggle("showMenu");
}

function showMenu () {
    console.log("wyswietli się lista");
    menu.classList.add("showMenu");
}

HamburgerBtn.addEventListener("click", toggleMenu)






// // INSTRUKCJE warunkowe
// if (isAdmin === true) {
//     console.log("Witamy w panelu admina");
// }

// else {
//     console.log("Brak dostępu");
// }
// const num = "7";
// // porownuje wartosci i typ
// // porownuje tylko wartosci
// // to przypisanie a nie porownanie

// if (num === 7) {
//     console.log("Liczba to 7")
// }

// const num2 = 9;
// // wieksza od >
// // >=rowne lub wieksze od
// //<mniejsze od
// // <= mniejsza lub równa

// if(num2 > 5) {
//     console.log("Liczba jest wieksza od 5")
// }

// const isAdmnin = true;
// const isModerator = false;
// const isUser = false;
// const isLogged = true;
// //|| lub
// if(idAdmin === true || isModerator === true) {
//     console.log("Widzimy w panelu administracji");
// }
// else if(isLogged === true && isUser === true) {
//     console.log("Panel użytkownika");
// }


//NASŁUCHIWANIE NA ZDARZENIE//
//js event Listener//

