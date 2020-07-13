const container = document.querySelector('.container');
const text = document.querySelector('#text');

const total_time = 7500;
const start_time = (total_time / 5) * 2;
const hold_time = total_time /  5;

const expand_animation = () => {
  text.innerHTML = 'Get'
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Set';

    setTimeout(() => {
      text.innerText = 'Go!'
      container.className = 'container shrink';
    }, hold_time);
  }, start_time); //3000ms = 3s
};

expand_animation();

setInterval(expand_animation, total_time);