const headerBtn = document.querySelector('.header__btn')
const registerModal = document.querySelector('.registerBlock')

headerBtn.addEventListener('click', (e) => {
    e.preventDefault()
    registerModal.style.display = 'block'
})

window.onclick = (e) => {
    if (e.target == registerModal) {
        registerModal.style.display = 'none'
    }
}
