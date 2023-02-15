

function playGame(){
    let rpsbutton = document.querySelectorAll('.rpsbutton')
    rpsbutton.forEach(rpsbut =>{
        rpsbut.onclick = () => onclickrps(rpsbut)
    })

    let endgame = document.getElementById('endbutton')
    endgame.onclick = () =>endGame()
}

function endGame(){
    let playerscore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')

    playerscore.innerHTML = ''
    hands.innerHTML = ''
    result.innerHTML = ''
}

function onclickrps(playerchoice){
    const getcomp = getcomputerchoice()
    const score = getresult(playerchoice.value,getcomp)
    showresut(score,playerchoice.value,getcomp)

}

function getcomputerchoice(){
    let rpschoices =['Rock','Paper','Scissor']
    let computerchoice = rpschoices[Math.floor(Math.random()*3)]
    return computerchoice
}

function getresult(playerchoice,getcomp){

    let score;

    if(playerchoice == getcomp){
        score = 0
    }

    else if(playerchoice=='Rock' && getcomp=='Scissor'){
        score = 1
    }

    else if(playerchoice=='Scissor' && getcomp=='Paper'){
        score = 1
    }

    else if(playerchoice=='Paper' && getcomp=='Rock'){
        score = 1
    }

    else{
        score = -1
    }

    return score
}

function showresut(score,playerchoice,getcomp){
    let result = document.getElementById('result')
    switch(score){
        case 1:
            result.innerHTML = 'You Won'
            break;
        case 0:
            result.innerHTML = 'Draw'
            break;
        case -1:
            result.innerHTML = 'You Loose'
            break;
    }

    // let playerscore = document.getElementById('player-score')
    let playerscore = document.getElementById('player-score')
    let hands = document.getElementById('hands')

    playerscore.innerHTML = `${Number(playerscore.innerHTML)+score}`
    hands.innerHTML = `👱 ${playerchoice} vs 🤖 ${getcomp}`
}



playGame()
