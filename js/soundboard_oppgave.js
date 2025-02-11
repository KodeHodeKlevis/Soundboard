//*1. Create an external JSON or js file containing information about the sounds you want to use. Import the file in here:  */
// import referanceWord from "the location of the file"
// Remember:
// to use type="module" for this js file when using imports
// to use assert {type: "json"} if using a json file
// examples of how the structure can look is in the data folder

import { sounds } from "../data/soundsJSexample.js";

//* ////////////////////////////////////// */

//*1.1. Catch the html element with id drumkit: */
const drumkit = document.getElementById("drumkit");

//*1.2. Write a console log for the fetched sounds so you know how the structure is and how you can use it */
console.log(sounds);

//*3. Finish the function below to create a functioning soundboard:: */
function createButtonAndAudio(sound) {
  // 3.1. finish the buttenEl variable that should create a button element with .createElement
  const button = document.createElement("button");

  // add textContent to the created buttonElement. Textcontent should be either the file name and/or key needed to be pressed
  const buttonText = ["Nothing", "Wrong", "Vine", "Sigma", "Ouuh?", "Metal Pipe", "Shut up", "Correct", "Run" ];
  button.textContent = buttonText[sounds.indexOf(sound)];

  //3.2. make a variables that create an audio element with .createElement
  //the audio element that is created should have the src equal to the file source
  //the audio element that is created should have the id equal to the textcontent created in 3.1.
  const audio = document.createElement("audio");
  audio.src = sound.file;
  audio.id = button.textContent;

  //*3.3. OPTIONAL. finish the eventlistner to the whole page (document) that should:
  //active when pressing a keyboard key (first parameter of the eventlistener)
  window.addEventListener("keydown", (event) => {
    const keyPressed = event.key;
    if (keyPressed === sound.key) {
      audio.play();
    }
  });

  //* 3.4. OPTIONAL. If you used keydown as the first parameter in the previous eventlistener, add another eventlistner to the whole page that:
  //actives when releasing a keyboard key (first parameter of the eventlistener)
  window.addEventListener("keyup", () => {
    audio.pause();
    audio.currentTime = 0;
  });

  //3.5. Create an eventlistener for clicking. OPTIONAL: Also create a logic for preventing more sounds to be played at the same time
  button.addEventListener("click", () => {
    audio.play();
  });

  //3.6. append the created button and audio element to the html element you refered in 1.
  // code that appends the buttonEl and audioEl to the drumkit element
  drumkit.appendChild(button);
  drumkit.appendChild(audio);
}

//*4. Create a function that loops over the sounds (from the data file you created). Use that function created in 3. to use the logic there to create the buttons. I prefer that you use .forEach or .map */
function createButtonsForSounds() {
  sounds.forEach((sound) => createButtonAndAudio(sound));
  
}

//*4.1 Call on the function that loops over the sounds and creates the buttons */
// call the function from part 4 here
createButtonsForSounds();
