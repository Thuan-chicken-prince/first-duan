var yesButton = document.getElementById('yes-button');
var noButton = document.getElementById('no-button');

yesButton.addEventListener('click', function() {
    window.location.href = '';
  });

noButton.addEventListener('mouseover', function() {
  noButton.style.animation = 'none';
});