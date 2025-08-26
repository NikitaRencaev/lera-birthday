const formBtn = document.querySelector('.form-button');

const errorsMessages = document.querySelectorAll('.washes .error');

formBtn.addEventListener('click', (event) => {
    event.preventDefault();

    errorsMessages.forEach(element => {
        element.classList.remove('error-active');
    });

    let moneyFormValue = document.querySelector('#money').value;
    let workFormValue = document.querySelector('#work').value;
    let weddingFormValue = document.querySelector('#wedding').value;
    let babyFormValue = document.querySelector('#baby-count').value;
    let studiesFormValue = document.querySelector('#studies').value;
    let lifeFormValue = document.querySelector('input[name="life"]:checked');

    if(moneyFormValue != '' && workFormValue != '' && lifeFormValue.value != null && weddingFormValue != '' && babyFormValue != '' && studiesFormValue != '' && lifeFormValue.value != null) {
        if(moneyFormValue < 40000) {
            errorsMessages[0].classList.add('error-active');
        } else if(workFormValue.includes('Простит') || workFormValue.includes('Шлюх')) {
            errorsMessages[1].classList.add('error-active');
        } else if(lifeFormValue.value == 'no') {
            errorsMessages[2].classList.add('error-active');
        } else if(weddingFormValue < 18) {
            errorsMessages[3].classList.add('error-active');
        } else if(babyFormValue < 1) {
            errorsMessages[4].classList.add('error-active');
        } else if(studiesFormValue < 3) {
            errorsMessages[5].classList.add('error-active');
        } else {
            localStorage.setItem('money', moneyFormValue);
            localStorage.setItem('work', workFormValue);
            localStorage.setItem('wedding', weddingFormValue);
            localStorage.setItem('baby', babyFormValue);
            localStorage.setItem('studies', studiesFormValue);
            localStorage.setItem('life', lifeFormValue);
        }
    } else {
        errorsMessages[6].classList.add('error-active');
    }
})
