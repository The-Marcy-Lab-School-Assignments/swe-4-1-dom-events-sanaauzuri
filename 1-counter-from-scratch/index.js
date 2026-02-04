// Variables for App
const heading = document.querySelector('.heading');
const incrementButton = document.querySelector('#increment-button');
const resetButton = document.querySelector('#reset-button');
let currCount = 0; // Current count starts at 0

incrementButton.addEventListener('click', () => {
    currCount += 1 // Increases count when increment button is clicked
    heading.textContent = currCount // Changes heading to the value of currCount
})
resetButton.addEventListener('click', () => {
    currCount = 0 // Sets currCount to 0 when reset button is clicked
    heading.textContent = currCount // Changes heading to the value of currCount
})

