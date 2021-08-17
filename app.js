const btn = document.querySelectorAll('.btn');
const computerImg = document.querySelector('.rock-computer')

btn.forEach(button => {
    button.addEventListener('click', (e) => {
       e.preventDefault();
       
       const computer = computerOption();
       const user = userOption(e.target.id);
       
       display(user, computer);
       displayResult(result(computer, user));
    })
})

function computerOption() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0:
            computerImg.src = './Rock.png';
            return 'Rock';
        case 1:
            computerImg.src = './Paper.png';
            return 'Paper';
        case 2:
            computerImg.src = './Scissor.png';
            return 'Scissor';    
    }
}

function userOption(option) {
   if(option === 'rock') {
       return 'Rock';
   }else if(option === 'paper'){
       return 'Paper';
   }else if(option === 'scissor'){
       return 'Scissor';
   }
}

function result(computer, user) {
    if(computer === user) {
        return "It's a tie!";
    }else if(computer === 'Rock') {
        if(user === 'Scissor') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }else if(computer === 'Paper') {
        if(user === 'Rock') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }else if(computer === 'Scissor') {
        if(user === 'Paper' ){
            return 'Computer won!';
        }else{
            return 'You won!';
        }
    }
}

function display(user, computer){
    const userp = document.createElement('p');
    const computerp = document.createElement('p');
    const resultSection = document.querySelector('.result-section')
    userp.textContent = `You threw: ${user}`;
    computerp.textContent = `Computer threw: ${computer}`;
    resultSection.appendChild(userp);
    resultSection.appendChild(computerp);

    setTimeout(() => userp.remove(), 3000);
    setTimeout(() => computerp.remove(), 3000);
}

function displayResult(winner){
    const resultp = document.createElement('p');
    const resultSection = document.querySelector('.result-section');
    resultp.textContent = winner;
    resultSection.appendChild(resultp);

    setTimeout(() => resultp.remove(), 3000);
}