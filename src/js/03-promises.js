function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const amount = formData.get('amount');
  const firstDelay = parseInt(formData.get('delay'));
  const delayStep = parseInt(formData.get('step'));

  function createAndHandlePromise(position) {
    if (position > amount) {
      return;
    }

    const currentDelay = firstDelay + delayStep * (position - 1);

    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => {
        createAndHandlePromise(position + 1);
      });
  }

  createAndHandlePromise(1);
}