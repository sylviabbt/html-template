// const card = document.querySelector('#card_container');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });

const frontArrow = document.querySelector('.arrow_container_front');
const backArrow = document.querySelector('.arrow_container_back');
frontArrow.onclick = function() {
  const card = document.querySelector('#card_container');
  card.classList.toggle('is-flipped');
}
backArrow.onclick = function() {
  const card = document.querySelector('#card_container');
  card.classList.toggle('is-flipped');
}
