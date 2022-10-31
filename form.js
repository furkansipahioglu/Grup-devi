function changeForm(event) {
    let contactForm = document.querySelectorAll('.forms')
    contactForm.forEach(item => {
        // console.log(item)
        if (event.classList[0].includes(item.classList[0])) {
            // console.log(item)
            item.style.display = 'block'
            
        } else {
            item.style.display = 'none'
        }
    })
}

