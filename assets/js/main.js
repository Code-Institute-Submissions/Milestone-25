  
// =================================HOUSEKEEPING=========================== //  
// streamlining
let cards = ['bomb', 'bomb', 'landmark', 'landmark', 'search', 'search', 'question-circle', 'question-circle', 'fighter-jet', 'fighter-jet', 'binoculars', 'binoculars', 'user-secret', 'user-secret', 'biohazard', 'biohazard', 'skull', 'skull'],
    $gameContainer = $('.gameContainer'),
    $gamedeck = $('.gamedeck'),
    allOpen = [],
    gamedeck = cards.length / 2;

// =================================CARD SHUFFLE=========================== //
// on page open, or on restart, cards are reshuffled
// Shuffling function: from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,
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

// =================================CLICK TO VIEW=========================== //
//binds all items with class 'card' to click function
let addCardListener = function() {
    $gamedeck.find('.card').bind('click', function() {
        let $this = $(this);
        let card = $this.context.innerHTML;
        $this.addClass('open show');
        allOpen.push(card);
        
         //check for matching cards
        //if a card has already been clicked (i.e. the opened array contains a card i.e. has an array
        //length greater than one (opened.length > 1)
        //then I need to parse the gamedeck to find any item with the class 'open', and add class of 'matched'
        //to that item.
        //but only do this if that card *is already in gamedeck*.
        //if open card is not already in game deck, I should add a 'nonmatched' class. 

    });
}

// =================================START GAME=========================== //  
function startgame() {
//calls the shuffle function on the cards array
    let fullDeck = shuffle(cards);
    $gamedeck.empty();
    //the idea here is to loop through all fontawesome 'icons' stored in 'cards' array, adding the html class of 'card'
    // (and hence the corresponding css styling), then to add each individiual array item as an actual fa icon
    // inspired by https://codepen.io/eliortabeka/pen/WwzEEg
    for (let i = 0; i < fullDeck.length; i++) {
        $gamedeck.append($('<li class="card"><i class="fa fa-' + fullDeck[i] + '"></i></li>'))
    }
    //calls the card listner function
    addCardListener();
    updatetime();
}

// =================================TIMER COUNTDOWN=========================== //
//on page open, timer counts from 59 secs down    
//  need to sort for time rather than no.?
        let updatetime = function() {
            $('.timer').each(function() {
                var count = parseInt($(this).html());
                if (count !== 0) {
                    $(this).html(count - 1);
                }
            });
        };
        setInterval(updatetime, 1000);

startgame();




    //on reset, cards shuffled, reset game board, reset timer 

 
    //if timer = 0, game over

    // on match attempt, moves increases by 1

    // if moves > 40, game over

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
    