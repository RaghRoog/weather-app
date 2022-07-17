import './main.css'
import { gettingData } from './getting_data.js'
import magnify from './imgs/magnify.svg'
let magnifyIcon = new Image();
magnifyIcon.classList.add('magnify')
magnifyIcon.src = magnify
let magnifyButton = document.querySelector('.take-input')
magnifyButton.appendChild(magnifyIcon)
gettingData()
