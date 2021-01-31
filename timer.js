const button = document.querySelector('#startButton')
const counter = document.querySelector('#time')

chrome.storage.local.get(['count'], function(result) {
  counter.innerText = result.count;
});

button.addEventListener('click', () => {
  const counter = document.querySelector('#time')
  const count = Number(counter.innerText)
  chrome.storage.local.set({count: count + 1}, function() {
    counter.innerText = count + 1
  })
})

