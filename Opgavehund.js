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
