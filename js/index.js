document.querySelector('.call').addEventListener('click', function() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block'; // Show the loader
    
    // Simulating a delay before hiding the loader
    setTimeout(function() {
      loader.style.display = 'none'; // Hide the loader
    }, 2000);
  });
// Get the call button element
var callButton = document.querySelector('.call');

// Add click event listener to the call button
callButton.addEventListener('click', function() {
  // Call the changeButtonColor() function when the button is clicked
  changeButtonColor();
});
// Function to change the button color
function changeButtonColor() {
  // Add the "clicked" class to the call button
  callButton.classList.add('clicked');
}


// Get the call button element
var mapButton = document.querySelector('.mapButton');

// Add click event listener to the call button
mapButton.addEventListener('click', function() {
  // Call the changeButtonColor() function when the button is clicked
  changemapButtonColor();
});

// Function to change the button color
function changemapButtonColor() {
  // Add the "clicked" class to the call button
  mapButton.classList.add('clicked');
}


// Get the call button element
var websiteButton = document.querySelector('.websiteButton');

// Add click event listener to the call button
websiteButton.addEventListener('click', function() {
  // Call the changeButtonColor() function when the button is clicked
  changewebsiteButtonColor();
});

// Function to change the button color
function changewebsiteButtonColor() {
  // Add the "clicked" class to the call button
  websiteButton.classList.add('clicked');
}

