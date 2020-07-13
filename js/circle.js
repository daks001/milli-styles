const container = document.querySelector('.container');
const text = document.querySelector('#text');

const total_time = 7500;
const breathe_time = (total_time / 5) * 2;
const hold_time = total_time /  5;

const breathe_animation = () => {
  text.innerHTML = 'Breathe in'
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe out'
      container.className = 'container shrink';
    }, hold_time);
  }, breathe_time); //3000ms = 3s
};

breathe_animation();

setInterval(breathe_animation, total_time);