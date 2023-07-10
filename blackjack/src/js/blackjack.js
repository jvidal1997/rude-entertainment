/*Button Functions*/
function Deal(){activeState(), newCard(2);}
    //function Bet(){}
function Hit(){newCard(1);}
function Stand(){endState(); newDCard();}
function PlayAgain(){initialState(); reset();}


/*State Functions*/
function initialState(){
    //remove class hidden from ID initial-state
    let state1 = document.getElementById('initial-state');
    state1.className = 'row justify-content-evenly';
    //append class hidden to ID active-state
    let state2 = document.getElementById('active-state');
    state2.className = 'row justify-content-evenly hidden';
    //append class hidden to ID end-state
    let state3 = document.getElementById('end-state');
    state3.className = 'row justify-content-evenly hidden';
    let disclaimer = document.getElementById('disclaimer');
    /* Disclaimer template for virtual currency system */
    /*disclaimer.textContent = "* Each round costs 4 coins *";*/
}

function activeState(){
    //append class hidden to ID inital-state
    let state1 = document.getElementById('initial-state');
    state1.className = 'row justify-content-evenly hidden';
    //remove class hidden from ID active-state
    let state2 = document.getElementById('active-state');
    state2.className = 'row justify-content-evenly';
    disclaimer.textContent = ""
}

function endState(){
    //append class hidden to ID active-state
    let state1 = document.getElementById('active-state');
    state1.className = 'row justify-content-evenly hidden';
}
function endState2(){
    //remove class hidden from ID end-state
    let state2 = document.getElementById('end-state');
    state2.className = 'row justify-content-evenly';
}
function endState3(){
    //append class hidden to ID active-state
    let state1 = document.getElementById('active-state');
    state1.className = 'row justify-content-evenly hidden';
    //remove class hidden from ID end-state
    let state2 = document.getElementById('end-state');
    state2.className = 'row justify-content-evenly';
}


/*Logic Variables*/
const playercards = [];
const suits = ["a-", "s-","h-", "c-"];
const dealercards = [];
let playerTotal = 0;
let dealerTotal = 0;
let cardCounter = 1;
let dcardCounter = 1;
/*Adjustable Dealer Stand variable*/
const dealerLimit = 14;

function reset() {
    //reset lists
    playercards.length = 0;
    dealercards.length = 0;
    //reset totals
    playerTotal = 0;
    dealerTotal = 0;
    //reset card counters
    cardCounter = 1;
    dcardCounter = 1;
    //remove elements
    let cardcontainer1 = document.querySelector('#card-container1');
    let cardcontainer2 = document.querySelector('#card-container2');
    let resultNode = document.querySelector('#result');
    while (cardcontainer1.firstChild) {cardcontainer1.removeChild(cardcontainer1.firstChild);}
    while (cardcontainer2.firstChild) {cardcontainer2.removeChild(cardcontainer2.firstChild);}
    while (resultNode.firstChild) {resultNode.removeChild(resultNode.firstChild);}
    //reset dealer limiter
    completed = false;
    let resultbox = document.getElementById('result');
    resultbox.className = 'col text-center bg-info';
}

/*Logic Functions*/
function newCard(n){
    for (var i = 1; i <= n; i++){
        //generate random value between 1 and 10, store in newCard variable
        let newValue = Math.floor(Math.random() * 11) + 1;
        //if newCard == 11 && playerTotal is greater than 10, then {newCard == 1}
        if (newValue == 11 && playerTotal < 10) {newValue = 1; playercards.push(newValue); playerTotal += newValue;}
        //append newCard value to playercards[]
        else {playercards.push(newValue); playerTotal += newValue;}
        //generate suit index
        let suitIndex = Math.floor(Math.random() * 4);
        let suit = suits[suitIndex];


        //create card container
            //border
        let border = document.createElement("div");
        border.className = "container border border-2 border-light rounded-3 bg-black card";
        border.setAttribute("style", "width: 68px;");
            //top-left number
        let firstnumber = document.createElement("div");
        firstnumber.className = "text-start text-light p-1"
            //icon
        let icon = document.createElement("img");
        icon.setAttribute("src", "../assets/images/White-favicon.png");
        icon.className = "text-center m-0 p-0";
        //icon.setAttribute("src", "#");
            //bottom right number
        let secondnumber = document.createElement("div");
        secondnumber.className = "text-end text-light p-1";
            //rows
        let row1 = document.createElement("div");
        row1.className = "row"
        let row2 = document.createElement("div");
        row2.className = "p-0"
        row2.setAttribute("id", "img-row");
        let row3 = document.createElement("div");
        row3.className = "row"
            //append content to divs
        firstnumber.textContent = newValue;
        let image = "favicon";
        icon.setAttribute("class", image);
        secondnumber.textContent = newValue;
            //append divs to rows
        row1.appendChild(firstnumber);
        row2.appendChild(icon);
        row3.appendChild(secondnumber);
            //append rows to container
        border.appendChild(row1);
        border.appendChild(row2);
        border.appendChild(row3);

        //append container with card class to ID "card-container1"
            //create element with id and class
            let ele = document.createElement('div')
            ele.appendChild(border);
            ele.setAttribute("id", "card-" + cardCounter)
            ele.setAttribute("class", "col-1 ms-0 me-4 ps-0 pe-0 " + "me-4")
            //append new element to players card container
            let container = document.getElementById("card-container1");
            container.appendChild(ele);

        cardCounter++;
        bustCheck();
        console.log(playerTotal);
    }
}

function DCardGenerator(){
        //generate random value between 1 and 10, store in newCard variable
        if (!completed) {
            var newValue = Math.floor(Math.random() * 11) + 1;
            }
            else if (completed && dealerTotal <= 15) {var newValue = Math.floor(Math.random() * 7) + 1;}
            else if (completed && dealerTotal < 18) {var newValue = Math.floor(Math.random() * 4) + 1;}
            else {var newValue = Math.floor(Math.random() * 3) + 1;}
        //if newCard == 11 && playerTotal is greater than 10, then {newCard == 1}
        if (newValue == 11 && dealerTotal > 10) {newValue = 1; dealercards.push(newValue); dealerTotal += newValue;}
        //append newCard value to playercards[]
        else {dealercards.push(newValue); dealerTotal += newValue;};
        //generate suit index
        let suitIndex = Math.floor(Math.random() * 4);
        let suit = suits[suitIndex];

        //create card container
            //border
            let border = document.createElement("div");
            border.className = "container border border-2 border-light rounded-3 bg-black card";
            border.setAttribute("style", "width: 68px;");
                //top-left number
            let firstnumber = document.createElement("div");
            firstnumber.className = "text-start text-light p-1"
                //icon
            let icon = document.createElement("img");
            icon.setAttribute("src", "../assets/images/White-favicon.png");
            icon.className = "text-center m-0 p-0";
            //icon.setAttribute("src", "#");
            //bottom right number
            let secondnumber = document.createElement("div");
            secondnumber.className = "text-end text-light p-1";
            //rows
            let row1 = document.createElement("div");
            row1.className = "row"
            let row2 = document.createElement("div");
            row2.className = "p-0"
            row2.setAttribute("id", "img-row");
            let row3 = document.createElement("div");
            row3.className = "row"
            //append content to divs
            firstnumber.textContent = newValue;
            let image = "favicon";
            icon.setAttribute("class", image);
            secondnumber.textContent = newValue;
                //append divs to rows
            row1.appendChild(firstnumber);
            row2.appendChild(icon);
            row3.appendChild(secondnumber);
                //append rows to container
            border.appendChild(row1);
            border.appendChild(row2);
            border.appendChild(row3);

            
        //append container with card class to ID "card-container1"
            //create element with id and class
            let ele = document.createElement('div')
            ele.appendChild(border);
            ele.setAttribute("id", "card-" + dcardCounter)
            ele.setAttribute("class", "col-1 ms-0 me-4 ps-0 pe-0 " + "me-4")
            //append new element to players card container
            let container = document.getElementById("card-container2");
            container.appendChild(ele);

        dcardCounter++;
        bustCheck();
        console.log(dealerTotal);
        if (dealerTotal >= dealerLimit) {completed = true;}
}

/*Check if the player busts*/
function bustCheck() {
    if (playerTotal > 21) {resultBox(); result.innerHTML = "YOU BUSTED!"; endState3();}
    else if (dealerTotal > 21) {resultBox(); result.innerHTML = "DEALER BUSTED! YOU WIN!"; endState3(); completed = true;}
    else {
        //do nothing
    }
}
/*Limit dealer hits*/
let completed = false;
let dealerDone = false;

function newDCard() {
    if (dealerTotal < 21 && dealerTotal > playerTotal) {endState2(); results();}
    else if (!completed){DCardGenerator();  bustCheck(); setTimeout(newDCard, 1000);}
    else if (completed && dealerTotal < 18) {DCardGenerator(); bustCheck(); setTimeout(newDCard, 1000)}
    else if (completed && dealerTotal > 21) {bustCheck();}
    else {endState2(); results();}
}

//Result Box Variable
const result = document.getElementById("result");
/*Result Conditionals*/
function results() {
    resultBox();
    //if dealerTotal > playerTotal (print dealer wins)
    if (dealerTotal > playerTotal){result.innerHTML = "DEALER WINS!";}
    //if playerTotal > dealerTotal (print player wins)
    else if (playerTotal > dealerTotal){result.innerHTML = "PLAYER WINS!";}
    //if playerTotal == dealerTotal (print tie!)
    else if (playerTotal == dealerTotal){result.innerHTML = "IT'S A TIE!";}
    else {
        //do nothing
    }

}

function resultBox() {
    let resultbox = document.getElementById('result');
    resultbox.className = 'col text-center bg-light';
}