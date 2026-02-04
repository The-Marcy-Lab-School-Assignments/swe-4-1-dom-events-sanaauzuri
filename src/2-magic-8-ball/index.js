// Feel free to use this array of fortunes or come up with your own!
const fortunes = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes ",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again ",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
]

/* 
TODO:
  - [x] Add an event listener to the ask button that:
  - [x] hides the eight ball (hint: adjust the style.display property)
  - [x] generates a random fortune from the fortunes array
  - [x] shows the fortune in the answer element
*/
// Ask button
const askButton = document.querySelector("#ask-btn");
const eightBall = document.querySelector("#eight");
const answer = document.querySelector("#answer");
askButton.addEventListener("click", () => {
// Hide the #eight element  
  eightBall.style.display = "none";
// Select a random fortune from the fortunes array
// Put that random fortune into the #answer element
  answer.textContent = fortunes[Math.floor(Math.random() * fortunes.length)]
// Show/display the #answer element
  answer.style.display = "block"
})