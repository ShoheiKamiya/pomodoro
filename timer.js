const button = document.querySelector('#startButton')

button.addEventListener('click', () => {
  const counter = document.querySelector('#time')
  const count = Number(counter.innerText)
  counter.innerText = count + 1
})
