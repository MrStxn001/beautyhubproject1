document.querySelector('.call').addEventListener('click', function() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block'; // Show the loader
    
    // Simulating a delay before hiding the loader
    setTimeout(function() {
      loader.style.display = 'none'; // Hide the loader
    }, 2000);
  });
  