import Notiflix from 'notiflix';

const currentStep = document.querySelector('input[name="amount"]');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const btnPromise = document.querySelector('button');

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const counter = Math.random() > 0.3;
      if (counter) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
btnPromise.addEventListener('click', e => {
  e.preventDefault();
  let firstDelayInput = Number(delay.value);
  let delayStepInput = Number(step.value);
  for (let i = 0; i < currentStep.value; i++) {
    createPromise(1 + i, firstDelayInput + i * delayStepInput)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});









