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
});