// Loading the welcome screen. Start timer on click.
const startBox = document.getElementById("startingBox");
const startBoxText = document.getElementById("welcomeText");
const numbersText = document.getElementsByClassName("numbers");
let mainTimerFlow = true;

startBox.onclick = () => {
    startBox.classList.remove("class", "starterResize");
    if (mainTimerFlow === true) {
        setTimeout(revealRest, 100);
    }
    // Initiate the flow of events while user waiting.
    let stopMessage = document.getElementById('finisher');
    let stopAppear = () => stopMessage.style.transform = 'translateX(-50%)';
    setTimeout(stopAppear, 25000); // This is when the stop button appears.

    // These cards are the the main flow. They appear in turn the more user stays on the page.
    const cardsFlow = () => {
        let cardOne = document.getElementById('cardOne');
        let cardTwo = document.getElementById('cardTwo');
        let cardThree = document.getElementById('cardThree');
        let cardFour = document.getElementById('cardFour');

        setTimeout( function() { cardsAppear(cardOne, 'There are 47 new websites created every 5 seconds!'); }, 3000 );
        setTimeout( function() { cardsAppear(cardTwo, '64.5 babies are born every 15 seconds!'); }, 13000 );
        setTimeout( function() { cardsAppear(cardThree, "20 seconds - 1500 McDonald's burgers are eaten!"); }, 18000 );
        setTimeout( function() { cardsAppear(cardFour, 'Half a minute - universe expanded 444km!'); }, 28000 );
        setTimeout( function() { cardsAppear(cardOne, '6640 rainforest trees are cut down in the last 40 seconds!'); }, 38000 );
        setTimeout( function() { cardsAppear(cardTwo, 'In 1 minute blood will circulate through your entire vascular system 3 times!'); }, 58000 );
        setTimeout( function() { cardsAppear(cardThree, 'Wow! You really want to waste your time! :)'); }, 70000 );
        setTimeout( function() { cardsAppear(cardFour, 'You know, I had to waste my time on this too..'); }, 75000 );
        setTimeout( function() { cardsAppear(cardTwo, 'Though it is really a positive thing for me.'); }, 79000 );
        setTimeout( function() { cardsAppear(cardThree, '0.00003474 people were killed by sharks in these 1.5 minutes.'); }, 88000 );
        setTimeout( function() { cardsAppear(cardOne, 'People have killed 285 shark in the same amount of time!'); }, 92000 );
        setTimeout( function() { cardsAppear(cardThree, '100 seconds! The fastest snail travels 130cm in this amount of time.'); }, 100000 );
        setTimeout( function() { cardsAppear(cardOne, 'I actually don\'t have that many facts here.'); }, 110000 );
        setTimeout( function() { cardsAppear(cardThree, 'Also, what if you just leave this page open and try to cheat?'); }, 120000 );
        setTimeout( function() { cardsAppear(cardOne, 'Okay, really, I am impressed!'); }, 130000 );
        setTimeout( function() { cardsAppear(cardTwo, 'You are probably the only one to get this far - that is almost definitely a fact!'); }, 135000 );
        setTimeout( function() { cardsAppear(cardOne, 'There is nothing more after this one.'); }, 140000 );
        setTimeout( function() { cardsAppear(cardThree, 'Seriously...'); }, 150000 );
        setTimeout( function() { cardsAppear(cardFour, 'Thank you for staying that long though! <3'); }, 170000 );
    };

    function cardsAppear(card, text) {
        let allCards = document.getElementsByClassName('cards');

        card.innerHTML = text;
        for (let i = 0; i < allCards.length; i++) {
            if (allCards[i].classList.contains('showCard')) {
                allCards[i].classList.remove('showCard');
            }
        };
        setTimeout(() => { card.classList.add('showCard'); }, 2000);
    }

    
    if (mainTimerFlow === true) {
       cardsFlow(); 
    };  
};


// Reveals the numbers after user starts the flow of the page.
function revealRest() {
    mainTimerFlow = false;
    startBoxText.setAttribute("class", "remove");
    for (let i = 0; i < numbersText.length; i++) {
        numbersText[i].classList.remove("class", "remove");
    };

    function runningWatch() {
        stopWatch.counter();
        extraDigit();
    }
    
    let flowStopper = setInterval(runningWatch, 1000);
    //Stop the timer if the button is clicked.
    stopFlow = document.getElementById('finish-btn');
    stopFlow.onclick = () => {
        clearInterval(flowStopper);
        stopFlow.remove();
        let allCards = document.getElementById('all-cards');
        allCards.remove();
        document.getElementById('finisherText').innerHTML = `You've lasted for:`;
        document.getElementById('main-body').setAttribute('class', 'change-bg');;
        
    }
};


// Counter object.
let stopWatch = {
    seconds: 0,
    minutes: 0,
    hours: 0,

    counter: function() {
        this.seconds++;

        if (this.seconds === 60) {
            this.minutes++;
            this.seconds = 0;
        };

        if (this.minutes === 60) {
            this.hours++;
            this.minutes = 0;
        };
    }
}


// Adding extra zero if numbers are below 10.
function extraDigit() {
    let secondsDisplay = document.getElementById("seconds");
    let minutesDisplay = document.getElementById("minutes");
    let hoursDisplay = document.getElementById("hours");

    if (stopWatch.seconds < 10) {
        secondsDisplay.innerHTML = "0" + stopWatch.seconds.toString();
    } else {
        secondsDisplay.innerHTML = stopWatch.seconds.toString();
    };

    if (stopWatch.minutes < 10) {
        minutesDisplay.innerHTML = "0" + stopWatch.minutes.toString();
    } else {
        minutesDisplay.innerHTML = stopWatch.minutes.toString();
    };

    if (stopWatch.hours < 10) {
        hoursDisplay.innerHTML = "0" + stopWatch.hours.toString();
    } else {
        hoursDisplay.innerHTML = stopWatch.hours.toString();
    };
}

