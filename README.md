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

- The highscore page (highscores.html) Is still being built but will display the top five scores and the players name in local storage.

- The hardgame page (hardgame.html). To be 'really lost in the dark' players have the same game except with five arrows and no differnce between the sounds 
on the flash of the arrow to make the game more challenging.

Potential future features:
A video landing page.
To develop a movement game where players move the character in the directions shown.

### Features Left to Implement
- highscore board

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

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

- First test onto other browsers via github host showed no audio or images. Easy fix but didnt show in previews in gitpod.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


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
