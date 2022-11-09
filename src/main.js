import { nanoid } from 'nanoid'

const passwordButton = document.querySelector('button')
const displayPW = document.querySelector('h2')

passwordButton.addEventListener('click', () => {
  const password = nanoid()
  displayPW.innerText = password
})
