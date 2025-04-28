const inputs = document.querySelectorAll('select');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    let imageUrl = '';

    if (value === 'option 1') {
      imageUrl = 'absoHat.png';
    } else if (value === 'option 2') {
      imageUrl = 'banana.png';
    } else if (value === 'option 3') {
      imageUrl = 'cherry.png';
    }

    // Check if the imageUrl is empty or valid before setting it
    if (imageUrl) {
      input.style.backgroundImage = `url('${imageUrl}')`;
      input.style.backgroundRepeat = 'no-repeat';
      input.style.backgroundPosition = 'right center';
      input.style.backgroundSize = 'cover';
      input.style.paddingRight = '30px';
    } else {
      // If there's no valid image, reset the background
      input.style.backgroundImage = 'none';
    }
  });
});


const stars = document.querySelectorAll('.star');

// Add click event listener to each star
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // The index of the clicked star is now available through the 'index' variable
        stars.forEach((s, i) => {
            if (i <= index) {
                s.style.color = 'yellow';  // Set color to yellow for clicked and previous stars
            } else {
                s.style.color = 'white';  // Set color to white for remaining stars
            }
        });
        // Count how many stars are yellow
        const yellowStars = Array.from(stars).filter(s => s.style.color === 'yellow');
        const yellowCount = yellowStars.length;

        // Output the number of yellow stars
        console.log('Number of yellow stars: ', yellowCount);
    });
});
