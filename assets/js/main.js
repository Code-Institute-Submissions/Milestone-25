$(document).ready(function() {

    // =================================START GAME=========================== //   

    $(document).click(function() {
        // =================================TIMER COUNTDOWN=========================== //


        //need to sort for time rather than no.?
        var updatetime = function() {
            $('.timer').each(function() {
                var count = parseInt($(this).html());
                if (count !== 0) {
                    $(this).html(count - 1);
                }
            });
        };
        setInterval(updatetime, 1000);
    })


    // =================================CLICK TO VIEW=========================== //

    //what's with the wierd transfering click?
    //on click, display card 
    $('.card').click(function() {
        $(this).addClass('open');
    });

    $('.matchedcard').click(function() {
        $(this).addClass('open');
    });


    // =================================CARD SHUFFLE=========================== //  

    let cardarray = []

    $('.card, .matchedcard').push(cardarray);


    // Shuffle function from http://stackoverflow.com/a/2450976

    function shuffle(cardarray) {
        var currentIndex = cardarray.length,
            temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cardarray[currentIndex];
            cardarray[currentIndex] = cardarray[randomIndex];
            cardarray[randomIndex] = temporaryValue;
        }

        return cardarray;
    }




    const deck = document.querySelector(".deck");

    function startGame() {
        var shuffledCards = shuffle(cards);
        for (var i = 0; i < shuffledCards.length; i++) {
            [].forEach.call(shuffledCards, function(item) {
                deck.appendChild(item);
            });
        }
    }

})








//on page open, timer counts from 59 secs down

//on page open, or on restart, cards are reshuffled

//on reset, cards shuffled, reset game board, reset timer 

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//if timer = 0, game over

// on click, moves increases by 1

// if moves > 40, game over

//on restart, pasue game and timer and ask for confirmation
//if confirmation = true page refreshes and timer + cards all reset
//if confirmation = false, game and timer resumes


// on click:
//if no other card active, flip card and set to active
//if other card active, compare img of both active cards
//if img match, match counter increase by one
//on no match, both cards return to rest state

//(no. of cards = 18)

//if match counter = 9, player wins.

//if match counter = 9, timer stops

//score? = at win, total moves and total time remaining

//set keyboard (p)ause and (esc)ape actions

//if player wins, produce success message (and rating out of three?)

//if player loses (out of time, or exceeds moves), produce loss message

//
