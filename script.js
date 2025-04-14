const inputs = document.querySelectorAll('input[type="search"]');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    let imageUrl = 'default.png';

    if (value === 'option 1') {
      imageUrl = 'absoHat.png';
    } else if (value === 'option 2') {
      imageUrl = 'banana.png';
    } else if (value === 'option 3') {
      imageUrl = 'cherry.png';
    }

    input.style.backgroundImage = `url('${imageUrl}')`;
    input.style.backgroundRepeat = 'no-repeat';
    input.style.backgroundPosition = 'right center';
    input.style.backgroundSize = 'cover';
    input.style.paddingRight = '30px';
  });
  function mesoCost(level, currentStar){
    divider = 20000;
    if (currentStar < 10) {
      divider = 2500;
  } else if (currentStar == 10) {
      divider = 40000;
  } else if (currentStar == 11) {
      divider = 22000;
  } else if (currentStar == 12) {
      divider = 15000;
  } else if (currentStar == 13) {
      divider = 11000;
  } else if (currentStar == 14) {
      divider = 7500;
  } else if (currentStar == 15) {
      divider = 22000;
  }
    return 100*Math.round(level**3 *  (currentStar+1)/divider + 10);  
  }
});