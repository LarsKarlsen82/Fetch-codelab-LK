/* Opgave 1*/

// din kode her
// const myDataFileUrl = "../../opgavefiler/data/story.json";
// const myStoryElement = document.getElementById("theStory");
// let myStoredata = null;

// fetch(myDataFileUrl)
// .then((response) => {

// return response.json();

// })
// .then((data) => {
// myStorydata = data;
// setUpStory('DK');
// })
// .catch((error) => {
// console.error(error);
// });



// function setUpStory(myLanguage) {
// let myStory = null;

// switch (myLanguage) {
// case 'DK':
// myStory = myStorydata.DK;
// break;

// case 'FI':
// myStory = myStorydata.FI;
// break;

// case 'SE':
// myStory = myStorydata.SE;
// break;

// case 'UK':
// myStory = myStorydata.UK;
// break;

// default:
// myStory = myStorydata.DK;
// break;
// }
// createStory(myStory);
// }

// function createStory(myStory) {
// myStoryElement.innerHTML = ''
// createButtons();

// let myHeadline = document.createElement('h2');
// myHeadline.innerText = myStory.headline;
// let myImage = document.createElement('img');
// myImage.src = '../../opgavefiler/img/felix.jpg';
// let myParagraf = document.createElement('p');
// myParagraf.innerText = myStory.text;


// myStoryElement.appendChild(myHeadline);
// myStoryElement.appendChild(myImage);
// myStoryElement.appendChild(myParagraf);

// }

// function createButtons() {
// let myDkbutton = document.createElement('button');
// myDkbutton.innerText = 'Dansk';
// myDkbutton.addEventListener('click', (e) => {
// setUpStory("DK");
// });

// let mySebutton = document.createElement('button');
// mySebutton.innerText = 'Svenska';
// mySebutton.addEventListener('click', (e) => {
// setUpStory("SE");
// });

// let myFibutton = document.createElement('button');
// myFibutton.innerText = 'Finsk';
// myFibutton.addEventListener('click', (e) => {
// setUpStory("FI");
// });

// let myUkbutton = document.createElement('button');
// myUkbutton.innerText = 'English';
// myUkbutton.addEventListener('click', (e) => {
// setUpStory("UK");
// });

// myStoryElement.appendChild(myDkbutton);
// myStoryElement.appendChild(mySebutton);
// myStoryElement.appendChild(myFibutton);
// myStoryElement.appendChild(myUkbutton);
// }


/* Opgave 2 - skriv videre på koden her: */

// const myDataFileUrl = '../../opgavefiler/data/story.json';
        
// const myStoryElement = document.getElementById('theStory');
// let myStorydata = null;




// fetch(myDataFileUrl)
// .then((response) => {

// return response.json();

// })
// .then((data) => {
// myStorydata = data;
// setUpStory('DK');
// })
// .catch((error) => {
// console.error(error);
// });



// function setUpStory(myLanguage) {
// let myStory = null;

// switch (myLanguage) {
// case 'DK':
// myStory = myStorydata.DK;
// break;

// case 'FI':
// myStory = myStorydata.FI;
// break;

// case 'SE':
// myStory = myStorydata.SE;
// break;

// case 'UK':
// myStory = myStorydata.UK;
// break;

// default:
// myStory = myStorydata.DK;
// break;
// }
// createStory(myStory);
// }

// function createStory(myStory) {
// myStoryElement.innerHTML = ''
// createButtons();

// let myHeadline = document.createElement('h2');
// myHeadline.innerText = myStory.headline;
// let myImage = document.createElement('img');
// myImage.src = '../../opgavefiler/img/felix.jpg';
// let myParagraf = document.createElement('p');
// myParagraf.innerText = myStory.text;


// myStoryElement.appendChild(myHeadline);
// myStoryElement.appendChild(myImage);
// myStoryElement.appendChild(myParagraf);

// }

// function createButtons() {
// let myDkbutton = document.createElement('button');
// myDkbutton.innerText = 'Dansk';
// myDkbutton.addEventListener('click', (e) => {
// setUpStory("DK");
// });

// let mySebutton = document.createElement('button');
// mySebutton.innerText = 'Svenska';
// mySebutton.addEventListener('click', (e) => {
// setUpStory("SE");
// });

// let myFibutton = document.createElement('button');
// myFibutton.innerText = 'Finsk';
// myFibutton.addEventListener('click', (e) => {
// setUpStory("FI");
// });

// let myUkbutton = document.createElement('button');
// myUkbutton.innerText = 'English';
// myUkbutton.addEventListener('click', (e) => {
// setUpStory("UK");
// });

// myStoryElement.appendChild(myDkbutton);
// myStoryElement.appendChild(mySebutton);
// myStoryElement.appendChild(myFibutton);
// myStoryElement.appendChild(myUkbutton);
// }




/* Opgave 3*/
// din kode her

const userListElement = document.getElementById("userList");

// Funktion til at hente data fra URI og vise brugeroplysninger
async function fetchAndDisplayUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await response.json();

        if (Array.isArray(userData)) {
            buildUsers(userData);
        }
    } catch (error) {
        console.error("Fejl under hentning af data:", error);
    }
}

function buildUsers(userList) {
    userList.forEach((user) => {
        let userHTML = `
            <h2>${user.name}</h2>
            <p>Adresse: ${user.address.street} ${user.address.suite}<br>
               post nummer: ${user.address.zipcode}<br>
               by: ${user.address.city}</p>
        `;
        userListElement.innerHTML += userHTML;
    });
}

// Kald funktionen til at hente og vise brugerdata
fetchAndDisplayUsers();



/* Opgave 4*/
// din kode her
