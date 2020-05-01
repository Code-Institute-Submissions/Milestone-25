CODE INSTITUTE MILESTONE 2: 
===========================
MISSION: MEMORYPHILE
----------------------------
>The concept behind this project is a spy-themed memory matching game, with a landing page setting the theme (providing the ‘mission’, and explaining the rules of the game), with a second page containing the game itself.
>
>The game is made up of 18 squares, containing 9 hidden matching pairs. The player is able to click a square, revealing an image, then attempt to pair this image with its match by clicking another square to reveal a new image. Should the two images match, the cards remain revealed and the player’s score increases by one. Should the two images not match, both cards will return to their hidden state. Once all pairs are matched and revealed, the player wins – and a ‘mission success’ message is displayed, giving the player a summary of their score and providing the option to play again. 
>
>In addition to the match mechanic, game play has two further parameters; moves and time. The player has 60 seconds, and 20 moves in which to make all correct matches (this is to add some challenge to the game, and to prevent rapid random clicking as a means to win). Should the timer hit zero, or player moves hit 21, a ‘mission failure’ message is displayed, and the player is given the chance to play again.
>
>At any point during the game, the player is able to return to the instructions by clicking the ‘home’ icon, or restart a new game by hitting the ‘replay’ button. 

### External User’s Goal: ###

 * The site’s users are people seeking a quick, fun distraction to fill time.
 
### Site Owner’s Goal: ###

 * The site developer wants to provide a basic game for people to enjoy.

### Features include: ###

 * Landing page with instructions and theme
 * Game page with matching game, timer and move counter
 * Success/ failure instances, with the option to replay

DEMO
----
A live demo of the site can be found [here](https://rhombencephalon.github.io/Milestone-2/) (GitHub Pages). 


UX
--

This project is intended for use as a fun mini-game to play quickly – without much set-up, and with little time requirement. For example, a user journey for a player would follow something like;

I’m waiting in a queue, and I want a distraction. I load the Memoryphile game to keep me entertained while the line is at a standstill. I need something that I can understand rapidly, that can be put away quickly, and that has replay value. I click the landing page, where the theme of the game confirms that this is a quick get-in-get-out play style. The rules are set out briefly, and the ‘mission play’ button takes me straight into the action. I’m able to finish my game within 60 seconds – and play again immediately. The shuffle function means I won’t be playing the same game twice. Should the queue move, or I get to my destination, I’m able to leave the game without worrying about losing a huge amount of progress. If I win or lose the game, I'm able to replay immediately.

### Strategy ###

For players, the page needed to have a clear, easy-to-navigate layout, with a rapidly deployed and re-playable game. The theme of old-school spies is to provide some context and flavour to the game play, as well as a narrative for the instructions.

### Scope ###

For people seeking to play the game, I wanted to make the gameplay as clear, concise, and intuitive as possible. While many people have played matching-type games before, I wanted to ensure they understood the limitations of this version of the game. The instructions quickly clarify this, with the displayed clock and move counter on the game play page reinforcing these limitations. The success/ failure messages clearly re-iterate these two game mechanics to the player. 

### Structure ###

I wanted the gameplay to never be more than one click away - from the home page, the game page is on a one-button link, returning to the landing page is one-click, replaying the game is one-click, etc.

### Skeleton ###

The initial wireframes were pen-on paper, and can be found as jpegs under the ‘wireframes’ folder of this project ([Home Page - mobile](./assets/wireframes/HomeMobScreen.jpg) and [Game Page - mobile](./assets/wireframes/GameMobScreen.jpg)) and [Home Page - desktop](./assets/wireframes/HomeWebScreen.jpg) and [Game Page - desktop](./assets/wireframes/GameWebScreen.jpg) ). 

The secondary wireframes, created using Adobe XD, are in the same folder (for mobile: [Home Page](./assets/wireframes/MobScreen1.jpg) and [Game Page](./assets/wireframes/MobScreen2.jpg). For desktop: [Home Page](./assets/wireframes/WebScreen1.jpg) and [Game Page](./assets/wireframes/WebScreen2.jpg) ). 

### Surface ###

The greyscale colour scheme was used to reference black-and-white spy films, with the use of red as the sole splash of colour to capture the idea of an 'emergency'; inspired by the 'big red button' concept from popculture. 


FEATURES
--------
The components to the landing page include:

1. Navigation bar 
    * Displays logo, and frames the page
    
2. Button to take player to the game page 
    * Create a visual impact upon entering the page, and enables player to transfer to game page.

3. Instructions for play
    * Guide to play, written in an old-school spy theme. 

The components of the game include:

1. Navigation bar 
    * Displays logo, and allows players to return to the home page from the game page without having to use the back button.

2. Move counter 
    * Keeps track of player moves (number of clicks), displaying this to user. 

3. Match counter
    * Keeps track of player matches, which cards are open/closed, and prevents player from clicking a third card while a pair is being displayed. This is not shown to player.

4. Replay button
    * Resets the game.

5. 18 cards, with hidden icons and 9 matches
    * Each of the 18 cards has a 'hidden' fontawesome icon, with each icon repeated once (making nine pairs). Once a match has been made, the cards change colour and remain displayed. 

6. Shuffle function
    * The icon placement is reshuffled at the start of every game. Shuffle function from http://stackoverflow.com/a/2450976.

7. Timer
    * 60 second countdown, which starts on first click of game and stops when game is won/ lost. 

8. Success and failure messages
    * Success message displays as an overlay when a player makes 9 matches (before the time runs out, or the move count reaches 21). The message includes the number of moves the player made, and the amount of time passed, alongside a replay button to play the game again.
    * Failure message displays as an overlay 

9. Orientation overlay
    * Overlay when the game is opened on a mobile device in landscape mode - the game should only be played in portrait on mobile.


FEATURES LEFT TO IMPLEMENT
--------------------------
Have separate failure messages for when a player runs out of time vs. when they have reached the move limit. I would also like to implement a 'level' system, where the game becomes more challenging (either by increasing the number of cards to be matched, decreasing the number of moves of time allowed, etc.). This could either be on repeated replay, or by allowing the player to select the difficulty level at the start. 


TECHNOLOGIES USED
-----------------
[Adobe XD](https://www.adobe.com/products/xd.html) 
    --> this was used to develop coloured wireframes

[Bootstrap](https://getbootstrap.com/) 
    --> front-end component library used for DOM and framework

[JQuery](https://jquery.com/)
    --> simplify DOM manipulation etc. 
    
[Fontawesome](https://fontawesome.com/)
    --> for images on cards
    
[Googlefonts](https://fonts.google.com/)
    --> for cross-page font styling

    
TESTING
-------
### Automated Code Testing ###

The HTML of [Index.html](./index.html) was auto-checked through [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input). By inputting the file, and running the check, I confirmed that the HTML was clear of any basic errors, getting the result of ‘Document checking completed. No errors or warnings to show.’

The CSS of [style.css](./assets/css/style.css)  was auto-checked through [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input). As with the HTML, I confirmed that the css stylesheet was clear of any basic errors by inputting the file into the automated system and running the check. The resulthere was ‘This document validates as CSS level 3 + SVG !’ i.e. with no errors found.

I used [Responsinator](https://www.responsinator.com/) to check cross-platform website functionality, confirming that my break points/ media queries functioned correctly and responsively across different screen sizes. A screencapture of this may be found in the test-results folder as [crossplatform](./assets/test-results/crossplatform.jpg)

I used [Codebeautify](https://codebeautify.org/jsvalidate) to check main.js for errors, and only received a single 'unexpected let' error. I also tested with [JSHint](https://jshint.com/), configured for jQuery, New JavaScript features (ES6) and Mozilla JavaScript extensions, receiving no major issues - just two unused variables. A capture of this result can be found [here](./assets/test-resets/jshint.jpg)

### Manual User Story Testing ###

All of the clickable links take the user to the correct corresponding webpage or event, target_blank attribute is not added because the game should not occur across multiple tabs. 

The gamedeck, clock, movecounter and overlay all vary in size across different platforms so the user does not need to scroll around the screen (interrupting gameplay) to see the gamedeck. Screen sizes (e.g. mobile in landscape) which would make game play display too difficult now receives an overlay telling the user that the screen display is an issue. 

Win playthrough:
Land on hompage. Click 'begin mission' button, and am taken to the game.
The game doesn't start until the first click within the gamedeck body.
I click, the countdown timer begins, and I realize I forgot the instructions. I am able to click the 'home' icon in the nav bar, which takes me back to the instructions page.
I click 'begin mission' to return to game, and start again.
I click a card, and it is 'flipped' displaying an icon.
I click another card; it is also 'flipped' to display an icon, but this does not match the first card. Both cards return to their start state (flipped back over) and the move counter goes up by one.
I click two cards that do match, and these cards remain visible, greying out to visually indicate that they are correct. I am not able to click either of these cards anymore.
I make all 9 matches before 21 moves, or the timer runs out. A display overlay appears, telling my how many moves and how long I took to win. 
I click the replay button, and the game resets. 

Fail playthrough (time):
Land on hompage. Click 'begin mission' button, and am taken to the game.
The game doesn't start until the first click within the gamedeck body.
I click, the countdown timer begins, and I realize I forgot the instructions. I am able to click the 'home' icon in the nav bar, which takes me back to the instructions page.
I click 'begin mission' to return to game, and start again.
I click a card, and it is 'flipped' displaying an icon.
I click another card; it is also 'flipped' to display an icon, but this does not match the first card. Both cards return to their start state (flipped back over) and the move counter goes up by one.
I click two cards that do match, and these cards remain visible, greying out to visually indicate that they are correct. I am not able to click either of these cards anymore.
I make all 9 matches before 21 moves, or the timer runs out. A display overlay appears, telling my how many moves and how long I took to win. 
I click the replay button, and the game resets. 


Fail playthrough (moves):
Land on hompage. Click 'begin mission' button, and am taken to the game.
The game doesn't start until the first click within the gamedeck body.
I click, the countdown timer begins, and I realize I forgot the instructions. I am able to click the 'home' icon in the nav bar, which takes me back to the instructions page.
I click 'begin mission' to return to game, and start again.
I click a card, and it is 'flipped' displaying an icon.
I click another card; it is also 'flipped' to display an icon, but this does not match the first card. Both cards return to their start state (flipped back over) and the move counter goes up by one.
I click two cards that do match, and these cards remain visible, greying out to visually indicate that they are correct. I am not able to click either of these cards anymore.
I make all 9 matches before 21 moves, or the timer runs out. A display overlay appears, telling my how many moves and how long I took to win. 
I click the replay button, and the game resets. 


### Problems Found and Resolved###

I had some issues with bootstrap's autopadding, so overrode this is my own stylesheet.

The most challenging problem to identify and solve was that of 'stciking' cards. Essentially, because of the 'open card' delay (the delay occuring when a player had opened two incorrect cards before those cards turned back over), if the player was clicking fast enough, they were able to open a third card when only two should be open at the time - so the extra card got stuck open. I couldn't remove this delay entirely, because the player needed to have time to see and register that the two cards were incorrect before they turned back over, but I also needed to make it so that a third card couldn't be opened during this time. To prevent this, I added a 'locked' condition and class to the code - wherein clicking would produce no effect. This condition occurs when two other non-matching cards are already open, and persists for the duration of the delay (300ms).


DEPLOYMENT
----------

This site is hosted on GitHub pages, deployed directly from the master branch. The GitHub hosted live site auto-updates according to new repository pushes. By cloning the code on the GitHub pages, you can also run it locally on your machine.

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.


CREDITS
-------
### Content ###

All text was written by myself. 

Inspiration for the basic game from several codepen games which can be found at:
* https://codepen.io/natewiley/pen/HBrbL
* https://codepen.io/zerospree/pen/bNWbvW
* https://codepen.io/mel/pen/Brads
* https://codepen.io/eliortabeka/pen/WwzEEg
* https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/
* https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-requirements-for-the-game

Code for all sections of the page significantly modified; the inspiration was largely stylistic, and has drastically changed across versioning. 

Implementation of flexbox for casing the game deck was drawn from css-tricks, found on the css-tricks [website](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

The shuffle function was found at [stackoverflow](http://stackoverflow.com/a/2450976), and has been properly credited in the code.  

### Media: ###

Images used were sourced from [fontawesome](https://fontawesome.com/)


THIS SITE IS FOR EDUCATIONAL PURPOSES ONLY
==========================================


//TO DO


  // 'testing' section

  // deploy section
  
  // check for deadcode
  
  // submit