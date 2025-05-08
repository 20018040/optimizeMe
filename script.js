const inputs = document.querySelectorAll('select');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    let imageUrl = '';

    if (value === 'absolab helmet') {
      imageUrl = 'absoHat.png';
    } else if (value === 'cra helmet') {
      imageUrl = 'craHat.png';
    } else if (value === 'arcane helmet') {
      imageUrl = 'arcaneHat.png';
    }

    // Check if the imageUrl is empty or valid before setting it
    if (imageUrl) {
      input.style.backgroundImage = `url('${imageUrl}')`;
      input.style.backgroundRepeat = 'no-repeat';
      input.style.backgroundPosition = 'center';
      input.style.backgroundSize = 'cover';
      input.style.paddingRight = '30px';
    } else {
      // If there's no valid image, reset the background
      input.style.backgroundImage = 'none';
    }
  });
});

class Armor {
  constructor(level = 0, starLevel = 0) {
    this.level = level;
    this.starLevel = starLevel; 
    this.flatStats = {
      STR: 0,
      DEX: 0,
      INT: 0,
      LUK: 0,
      Defense: 0,
      HP: 0,
      MP: 0,
      ATK: 0,
      MATK: 0,
      Speed: 0,
      Jump: 0,
      AllStat: 0
    };
    this.flameStats = {
      STR: 0,
      DEX: 0,
      INT: 0,
      LUK: 0,
      Defense: 0,
      HP: 0,
      MP: 0,
      ATK: 0,
      MATK: 0,
      Speed: 0,
      Jump: 0,
      AllStat: 0
    }
  }

}
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
