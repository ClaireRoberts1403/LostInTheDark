# Lost in the Dark

An atmospheric memory game. 
You awake...lying on the cold dirty floor.......Where are you?.....How did you get here?.....You don't remember. You can't
remember......Anything.	Images flash before your eyes. Directions. You need to follow them. You need to run!
 
## UX
 
Creating an atomopheric memory game using the game basis from the Simon Game(tm). Players enter a world with heart pumping music (90bpm).
The colour scheme is dark and spooky. A back story tells the tale creating a sense on urgency to the game. Players then play the game which steadly 
gets harder each level the pass. A score and highscore shows the player their progress. One wrong move and its game over. You are lost in the dark.

A harder level "Really Lost in the Dark", was added to make the play more challenging.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features
 
### Existing Features
- The landing page (index.html). Introduces the player to the game with the game title. A dark forest background greets the player.
The player then has options to begin, help, or highscores. If the player selects begin a modal pops up telling the back story. The player 
can either exit or click on start game. This links the the game page (game.html)

- The game page (game.html). The music shifts to a movement/running piece. The player sees the three arrows and a begin button. Once clicked
the arrows will flash, producing a unique sound for each arrow, in order that the player repeats back by clicking on the arrow. Each level completed succesfully earns ten point for the 
score. And a highscore is save in local storage for the players time on the page. If the player presses an incorrect arrow. Gameover. A sweetalert pop 
up occurs stating game over. It stays on screen for 3 seconds before the player is returned to the game screen.

- The help page (help.html). A link at the bottom of both the game and landing page will bring the player to the help page with explains the game.

- The hardgame page (hardgame.html). To be 'really lost in the dark' players have the same game except with five arrows and no differnce between the sounds 
on the flash of the arrow to make the game more challenging.

Potential future features:
A video landing page to introduce the game.
To develop a movement game where players move the character in the directions shown.

### Features Left to Implement
- The highscore page (highscores.html) will display the top five scores and the players name in local storage.
- Mute button to mute audio.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Bootstrap
- A Simon! game following the online tutorial from freeCodeCamp.freeCodeCamp https://youtu.be/n_ec3eowFLQ
- https://sweetalert.js.org/. Used for the alert system.
- https://www.w3schools.com/howto - for some styling.
- http://www.2createawebsite.com/enhance/adding-music.html - how to embed the music



## Testing

Testing was carried out throughout the build, issues can be seen through the timeline of commits. Below is some of the bigger issues.

- Intial project will fit onto three screen sizes using margins as the buffer, and all sizes must be one page with no scrolling. Focusing first on small screen and large screen before moving onto tablet/medium screens.
- Issues with the movement of screen sizes disrupting the equal spacing. A more robust method is needed.
- First test onto other browsers via github host showed no audio or images. Easy fix but didn't show in previews in gitpod.
- Fix for no images/audio failed. Realised mistake now fixed, images and audio now working when deployed.
- First user test showed more accessbility needed a back or home button. A curser change on hover over the arrows to make it clear to click. Clearer start button was called RUN! now called Begin!
- First user test also suggested a mute button for the audio. 
- Lighthouse testing showed some accessability issues such as a label on the home button. Scripts not used on a page where removed for performance.
- A strange bug has occured with one of the licenses where it won't delete due to its file name, no fix found but it doesn't impact site at all.
- Full button check complete no issues all buttons work as suppose to.
- Game play tested by setting win value to five, both versions work win or lose with the pop up deploying.
- Could not get the mute button to mute audio.
- Could not get the highscore to be displayed on highscore board. I could find no soloution using Javascript to do this.
- All code run through a formatter. https://htmlformatter.com/
- Code ran through doiuse..? Found less than 1% compatability issues with other browsers. http://doiuse.herokuapp.com/
- Code ran through html mark up validator https://validator.w3.org/. It highlighted a issue with a button being use with a link. This was fix by styling the link as a button.

## Deployment

The game is hosted through github pages.


## Credits

CodeInstitute - This is my Milestone2 project on interactive frontend development.

A Simon! game following the online tutorial from freeCodeCamp.freeCodeCamp https://youtu.be/n_ec3eowFLQ

### Content
- All text was written by myself and completely made up.

### Media
- The background photo used in this site was obtained from pinterest via google image search - used without permission.
- https://www.stickpng.com/ - for arrow image - then resized and rotated by myself.
- https://elements.envato.com/ - for sounds and music - licenses are saved in code file licenses.
### Acknowledgements

From starting this tutorial on JavaScript games I was inspired to do a game for my milestone2 project.
https://www.youtube.com/watch?v=lhNdUVh3qCc

I struggled with this project after taking some time out due to my current job taking a lot for hours out my week due to the coronavirus crisis.
However, I enjoyed the challenge of trying to figure it all out and feel like I have learnt more in the process.
