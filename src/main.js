import { nanoid } from 'nanoid'
import './style.css'
import clipboardCopy from 'clipboard-copy'
import Toastify from 'toastify-js'

const passwordButton = document.querySelector('button')
const displayPW = document.querySelector('h2')

passwordButton.addEventListener('click', () => {
  const password = nanoid()
  displayPW.innerText = password
})

displayPW.addEventListener('click', () => {
  clipboardCopy(displayPW.innerText)
  // Toastify.setOption('delay', 2000)
  // Toastify.success('Copiado para o clipboard')
  Toastify({
    text: 'Copiado para o clipboard',
    duration: 2000,
    close: false,
    position: 'center',
    style: {
      position: 'absolute',
      marginTop: '200px',
      background: 'black',
      padding: '10px',
      borderRadius: '10px'
    }
  }).showToast()
})
