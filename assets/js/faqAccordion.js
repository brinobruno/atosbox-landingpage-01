const accordion = document.getElementsByClassName('faq-content-container')

for (let counter = 0; counter < accordion.length; counter++) {

    accordion [counter].addEventListener('click', function() {
    this.classList.toggle('active')

    })
}