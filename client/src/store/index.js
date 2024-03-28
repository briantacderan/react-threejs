import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: 'rgba(237, 197, 87, 1)',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './my-logo.png',  // './threejs.png',
    fullDecal: './my-logo.png',  // './threejs.png',
})

export default state