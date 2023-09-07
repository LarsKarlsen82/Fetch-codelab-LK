// const img = document.querySelector('img')
// const button = document.querySelector('button')
// const div = document.querySelector('div')
// const url = 'https://dog.ceo/api/breeds/image/random'

// const getImage = async (url) => {
//   return await fetch(url).then(res => res.url)
// }

// button.addEventListener('click', () => {
//   getImage(url)
//     .then(result => {
//       img.setAttribute('src', result)
//     })
//     .catch(err => {
//       // fange fejl
//       console.error(`Error -> ${err}`)
//       const errorMessage = 'Der var en fejl.'
//       const p = document.createElement('p')
//       const container = document.querySelector('.container')
//       p.innerText = errorMessage;
//       //display an error message to the user
//       container.appendChild(p)
//     })
// });

// const img = document.querySelector('img')
// const button = document.querySelector('button')
// const div = document.querySelector('div')
// const url = 'https://dog.ceo/api/breeds/image/random'

// fetch(url, {
//   credentials: 'omit',
// })
//   .then(response => response.json())
//   .then(data => {
//     // Handle the response data here
//   })
//   .catch(error => {
//     // Handle errors here
//   });

// const getImage = async (url) => {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error(`Error: ${res.status} - ${res.statusText}`);
//     }
//     const result = await res.json();
//     return result.message; // Assuming the image URL is in a 'message' property
//   } catch (err) {
//     console.error(`Error -> ${err}`);
//     const errorMessage = 'Der var en fejl.';
//     const p = document.createElement('p');
//     const container = document.querySelector('.container');
//     p.innerText = errorMessage;
//     container.appendChild(p);
//   }
// }

// button.addEventListener('click', () => {
//   getImage(url)
//     .then(result => {
//       img.setAttribute('src', result);
//     });

    
// });

const img = document.querySelector('img');
const button = document.querySelector('button');
const container = document.querySelector('.container');
const url = 'https://dog.ceo/api/breeds/image/random';

const getImage = async (url) => {
  try {
    const response = await fetch(url, {
      credentials: 'omit', // Set the appropriate credentials option here
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const imageUrl = data.message;

    return imageUrl;
  } catch (error) {
    console.error(`Error -> ${error}`);
    const errorMessage = 'Der var en fejl.';
    const p = document.createElement('p');
    p.innerText = errorMessage;
    container.appendChild(p);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};

button.addEventListener('click', async () => {
  try {
    const imageUrl = await getImage(url);
    img.setAttribute('src', imageUrl);
  } catch (error) {
    // Handle errors here or log them as needed
    console.error(error);
  }
});