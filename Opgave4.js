const img = document.querySelector('img')
const button = document.querySelector('button')
const div = document.querySelector('div')
const url = 'https://dog.ceo/api/breeds/image/random'

const getImage = async (url) => {
  return await fetch(url).then(res => res.url)
}

button.addEventListener('click', () => {
  getImage(url)
    .then(result => {
      img.setAttribute('src', result)
    })
    .catch(err => {
      // fange fejl
      console.error(`Error -> ${err}`)
      const errorMessage = 'Der var en fejl.'
      const p = document.createElement('p')
      const container = document.querySelector('.container')
      p.innerText = errorMessage;
      //display an error message to the user
      container.appendChild(p)
    })
});
