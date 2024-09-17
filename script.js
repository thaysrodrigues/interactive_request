const questions = [
    { question: "Você aceita sair comigo?", image: "question1.png" },
    { question: "Tem certeza, vai dizer não pra ela?", image: "question2.png" }
];

let current = 0;
let hasAnsweredSecondQuestion = false;

document.getElementById('no').onclick = function() {
    if (current === 0) {
        current = 1;
        document.getElementById('question').innerText = questions[current].question;
        document.getElementById('pic').src = questions[current].image;
        const yesButton = document.getElementById('yes');
        yesButton.style.width = 'auto'; 
        yesButton.style.height = 'auto';
    } else if (current === 1) {
        document.getElementById('question').innerText = '\\o/\\o/\\o/\\o/';
        document.getElementById('pic').src = 'end.png';
        document.getElementById('yes').style.display = 'none';
        document.getElementById('no').style.display = 'none';
    }
}

document.getElementById('yes').onclick = function() {
    if (current === 0) {
        document.getElementById('question').innerText = '\\o/\\o/\\o/\\o/';
        document.getElementById('pic').src = 'end.png';
        document.getElementById('yes').style.display = 'none';
        document.getElementById('no').style.display = 'none';
    } else if (current === 1) {
        const yesButton = document.getElementById('yes');
        yesButton.style.width = (yesButton.offsetWidth + 10) + 'px';
        yesButton.style.height = (yesButton.offsetHeight + 10) + 'px';
    }
}
