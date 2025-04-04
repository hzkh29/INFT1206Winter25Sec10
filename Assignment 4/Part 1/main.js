/**
 * Project Name:   Challenge: Silly story generator
   Author:         Hezekiah Cua
   Date:           March 2025
   Description:    A challenge about generating a random 
                   story when the button is pressed.
 */

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

/**
 * Picks a random value from an array
 * @param {*} array
 * @returns
 */
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

/**
 * Template for the story with placeholders
 */
let storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

/**
 * Values were put inside an array
 */
let insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let inserty = ["the soup kitchen", "Disneyland", "the White House"];
let insertz = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

/**
 * Click event listener
 */
randomize.addEventListener("click", result);

/**
 * Function that shows the result
 */
function result() {
  let newStory = storyText;
  /**
   * Select the values for placeholders
   */
  let xItem = randomValueFromArray(insertx);
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertz);

  /**
   * Replace the placeholders with new random values
   */
  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  /**
   * Replace the defaault name in case the user
   * enters a different name
   */
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  /**
   * If the user clicks the UK option the unit gets converted
   */
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + " stone";
    const temperature = Math.round(((94 - 32) * 5) / 9) + " celcius";
    newStory = newStory.replaceAll("300 pounds", weight);
    newStory = newStory.replaceAll("94 farenheit", temperature);
  }

  /**
   * Displays the final story
   */

  story.textContent = newStory;
  story.style.visibility = "visible";
}
