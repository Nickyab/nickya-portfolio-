const menu = document.querySelector('#mobile-menu')
const menuLinks = dumuments.querySelector('.navbar__menu')


menu.addEventListener('click', function(){
    MediaElementAudioSourceNode.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})
