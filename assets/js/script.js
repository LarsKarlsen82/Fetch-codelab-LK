async function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let count = 5;

    while (count >= 0) {
        countdownElement.textContent = count;
        await sleep(1000); // Vent i 1 sekund (1000 millisekunder)
        count--;
    }

    countdownElement.textContent = 'DONE BOOM!';

    await sleep(1500); 
    startCountdown(); //starter forfra efter 2 sek vent
}

function sleep(ms) {
    return new Promise((resolve)=> setTimeout(()=> resolve(), ms));
}

startCountdown(); 


//Anden metode som virker samme som den første:

/*
// Get a reference to the countdown paragraph element
const countdownElement = document.getElementById('countdown');

// Function to start the countdown
async function startCountdown() {
  let countdown = 5; // Initial countdown value
  while (countdown > 0) {
    // Update the countdown display
    countdownElement.textContent = countdown;

    // Wait for 1 second using a Promise
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Decrement the countdown value
    countdown--;
  }

  // When the countdown reaches 0, update the display
  countdownElement.textContent = 'Countdown Finished!';
}

// Call the startCountdown function to begin the countdown
startCountdown();

*/