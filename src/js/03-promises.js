function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
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
  const delay = formData.get('delay');
  

function createAndHandlePromise(position) {
    if (position > amount) {
      return; 
    }

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        createAndHandlePromise(position + 1); 
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        createAndHandlePromise(position + 1); 
      });
  }

  
  createAndHandlePromise(1);
}

