const button = document.querySelector('.button');
const elem = document.createElement('div');

elem.className = 'popovers';
elem.innerHTML = '<h4 class="popovers-title">Popovers title</h4>'
+ '<div class="popovers-content">And here\'s some amazing content. It\'s very engaging. Right?</div>';

button.addEventListener('click', () => {
  if (!document.querySelector('.popovers')) {
    button.offsetParent.appendChild(elem);

    elem.style.top = `${-button.offsetHeight / 4 - elem.offsetHeight}px`;
    elem.style.left = `${button.offsetLeft + button.offsetWidth / 2 - elem.offsetWidth / 2}px`;
  } else {
    elem.remove();
  }
});
