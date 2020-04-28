  // =================================HOUSEKEEPING=========================== //  
  // streamlining
  let cards = ['bomb', 'bomb', 'landmark', 'landmark', 'search', 'search', 'question-circle', 'question-circle', 'fighter-jet', 'fighter-jet', 'binoculars', 'binoculars', 'user-secret', 'user-secret', 'biohazard', 'biohazard', 'skull', 'skull'],
    $gameContainer = $('.gameContainer'),
    $gamedeck = $('.gamedeck'),
    opened = [],
    gamedeck = cards.length / 2,
    delay = 300,
    matchcount = 0,

    $countmoves = $('.moves'),
    countmoves = 0;

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
  };

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
      if ($this.hasClass('matched') || $this.hasClass('show') || $this.hasClass('locked')) { return true; }

      //need to add check for the existing classes of show and/or matched 
      // i.e. should only push cards to opened if they have these classes
      //if $this.hasClass?
      //('show') && ('matched')
      //('show') || ('matched')
      //should be true *****BEFORE*****
      let card = $this.context.innerHTML;
      $this.addClass('open show');
      opened.push(card);


      //check for matching cards
      //if a card has already been clicked (i.e. the opened array contains a card i.e. has an array
      //length greater than one (opened.length > 1)
      if (opened.length > 1) {
        if (card === opened[0]) {
          //then I need to parse the gamedeck to find any item with the class 'open', and add class of 'matched'
          //to that item.
          $gamedeck.find('.open').addClass('matched');
          $gamedeck.find('.open').removeClass('open');
          //but only do this if that card *is already in gamedeck*.
          //if open card is not already in game deck, I should add a 'nonmatched' class.
          matchcount++;
          if (matchcount == 9) {
            wingame(matchcount);
          }
        }
        else {
          //okay, so once matched/nonmatched are added, the open/show class needs to be removed,
          // so that the card closes
          $gamedeck.find('.open').addClass('nonmatched');
          //need to put some delays in to give the user some time to visually register the events
          $gamedeck.find('.card').addClass('locked');
          setTimeout(function() {
            $gamedeck.find('.open').removeClass('open show');
            $gamedeck.find('.card').removeClass('locked');
          }, delay);
        }

        opened = [];
        delay = 500;
        //increases move counter
        countmoves++;
        //displayes move counter to html for player
        $countmoves.html(countmoves);
      }

    });
  }

  // =================================END GAME=========================== //  

  //win game overlay displayed
  function wingame(matchcount) {
    let missionsuccess = document.getElementById('success')
    missionsuccess.classList.remove('d-none');
    
    //show time + moves on overlay
    let count = parseInt($('.seconds').html());
    document.getElementById('totalmoves').innerHTML = (parseInt(countmoves) + 1);
    //shows time player has taken - NOT how much time left on clock.
    document.getElementById('totaltime').innerHTML = (60 - parseInt(count));
  }

  // lose game overlay displayed
  function failgame(count, countmove) {
    if (count == 0) {
      let failure = document.getElementById('failure');
      failure.classList.remove('d-none');
    }
    else if (countmoves == 21) {
      let failure = document.getElementById('failure');
      failure.classList.remove('d-none');
    }
  }


  // =================================TIMER COUNTDOWN=========================== //
  // on page click, 1 minute timer begins countdown

  let tickingclock = function() {
    $('.minute').html('0');
    let countmin = parseInt($('.minute').html());
    if (countmin == 0) {
      $('.seconds').html('60');
    }
    setInterval(updatetime, 1000);
  };

  let updatetime = function() {
    $('.seconds').each(function() {
      let count = parseInt($(this).html());
      let countmoves = parseInt($('.moves').html());
      if (matchcount != 9) {
        if (countmoves < 21) {
          if (count !== 0) {
            if (count < 11) {
              $(this).html('0' + (count - 1));
            }
            else {
              $(this).html(count - 1);
            }
          }
        }
        failgame(count, countmoves);
      }
    });
  };


  let firstclick = false;
  $('body').bind('click', function() {
    if (firstclick == false) {
      tickingclock();
      updatetime();
    }
    firstclick = true;
  });


  // =================================RESET FUNCTION=========================== //

  
  document.getElementById('replay-button').addEventListener('click', function() {
      window.location.reload();
  });
  
    document.getElementById('replay-button2').addEventListener('click', function() {
      window.location.reload();
  });


  startgame();

