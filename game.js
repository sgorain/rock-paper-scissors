function getComputedChoice(){
    let roll = Math.ceil(3*Math.random());
    return roll;
}

function getHumanChoice(){

    let turn=prompt("Your turn. Rock, paper, scissors...");
    turn=turn.toLowerCase();

    switch(turn){
        case "rock":
            return 1;
            break;
        case "paper":
            return 2;
            break;
        case "scissors":
            return 3;
            break;
        default: 
            getHumanChoice();
    }
}

function playRound(){
    let computer = getComputedChoice();
    let human = getHumanChoice();

    if(computer==human){
        console.log("TIE!");
        return null;
    }
    else if(computer==1 && human==3){
        console.log("you lost");
        return 0;
    }else if (human==1 && computer==3){
        console.log("you won");
        return 1;
    }else if(human>computer){
        console.log("you won");
        return 1;
    }else{
        console.log("you lost");
        return 0;
    }

}

function playGame(){
    let round=0;
    let score_c=0;
    let score_h=0;

    while(round<5){
        round++;
        console.log("round "+round);
        switch(playRound()){
            case(1):
                score_h ++;
                break;
            case(0):
                score_c ++;
                break;
        }
        console.log("Your score: "+score_h);
        console.log("Your opponent's score: "+score_c);
    }

    
}

playGame();