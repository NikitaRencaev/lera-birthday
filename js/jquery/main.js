const birthdayDate = new Date('2024-08-28T12:00:00')
const currentDate = new Date();

if(currentDate.getDate() == birthdayDate.getDate()) {
    const happyElements = document.querySelectorAll('.happy-element');
    happyElements.forEach(element => {
        element.classList.add('active');
    });
    const noHappyElements = document.querySelectorAll('.no-happy-element')
    noHappyElements.forEach(element => {
        element.style.display = 'none';
    });
} 

const button = document.querySelector('.button-count');

button.addEventListener('click', () => {
    button.classList.add('active');

    birthdayDateDays = birthdayDate.getDate();
    const currentDateDays = currentDate.getDate();

    let resultHours = (birthdayDateDays - currentDateDays) * 24;
    let resultMinutes = resultHours * 60;

    setTimeout(() => {
        if(resultHours > 0) {
            button.innerHTML = `${resultHours} часов<br>или ${resultMinutes} минут`;
            button.style.fontSize = '16px';
            button.style.background = 'none';
            button.style.color = '#eeff00';
            button.style.border = '1px solid #d44401';
            button.style.fontWeight = '800';
        }
    }, 1000);
})

// const formBtn = document.querySelector('.form-button');
// console.log(formBtn);

// const errorsMessages = document.querySelectorAll('.washes .error');

// formBtn.addEventListener('click', (event) => {
//     event.preventDefault();

//     errorsMessages.forEach(element => {
//         element.classList.remove('error-active');
//     });

//     let moneyFormValue = document.querySelector('#money').value;
//     let workFormValue = document.querySelector('#work').value;
//     let weddingFormValue = document.querySelector('#wedding').value;
//     let babyFormValue = document.querySelector('#baby-count').value;
//     let studiesFormValue = document.querySelector('#studies').value;
//     let lifeFormValue = document.querySelector('input[name="life"]:checked');

//     if(moneyFormValue != '' && workFormValue != '' && lifeFormValue.value != null && weddingFormValue != '' && babyFormValue != '' && studiesFormValue != '' && lifeFormValue.value != null) {
//         if(moneyFormValue < 40000) {
//             errorsMessages[0].classList.add('error-active');
//         } else if(workFormValue.includes('Простит') || workFormValue.includes('Шлюх')) {
//             errorsMessages[1].classList.add('error-active');
//         } else if(lifeFormValue.value == 'no') {
//             errorsMessages[2].classList.add('error-active');
//         } else if(weddingFormValue < 18) {
//             errorsMessages[3].classList.add('error-active');
//         } else if(babyFormValue < 1) {
//             errorsMessages[4].classList.add('error-active');
//         } else if(studiesFormValue < 3) {
//             errorsMessages[5].classList.add('error-active');
//         } else {
//             localStorage.setItem('money', moneyFormValue);
//             localStorage.setItem('work', workFormValue);
//             localStorage.setItem('wedding', weddingFormValue);
//             localStorage.setItem('baby', babyFormValue);
//             localStorage.setItem('studies', studiesFormValue);
//             localStorage.setItem('life', lifeFormValue);
//         }
//     } else {
//         errorsMessages[6].classList.add('error-active');
//     }
// })




    const money = localStorage.getItem('money');
    const work = localStorage.getItem('work');
    const wedding = localStorage.getItem('wedding');
    const baby = localStorage.getItem('baby');
    const studies = localStorage.getItem('studies');
    console.log(studies);

    const textHappy = document.querySelector('.wishes-happy-text');

    let textHappyRates;
    if (studies == 3) {
        textHappyRates = 'тройки? Постарайся учиться лучше ради хорошего будущего';
    } else if (studies == 4) {
        textHappyRates = 'четверки? Это хорошо, если ты хочешь, значит обязательно получится)';
    } else if (studies == 5) {
        textHappyRates = 'пятерки? Вот это целеустремленность, у тебя обязательно получится!';
    } else {
        textHappyRates = `${studies}, ты шутишь? Это невозможно, но раз так, то учись лучше что-ли..  ;-;`;
    }



    textHappy.innerHTML = `Желаю тебе зарабатывать в месяц более ${money} рублей!
                    Ты обязательно станешь ${work}, и проживешь 100, а если не будешь тратить время на уебков то все 150 лет!
                    В ${wedding} года ты конечно же выйдешь замуж (за меня ;) ) и заведешь ${baby} ребенка.
                    Чтобы зарабатывать ${money} рублей в месяц, ты должна хорошо учиться. Сейчас ты хочешь закончить школу на ` + textHappyRates;
    console.log(textHappy);

