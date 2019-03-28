// document.getElementById('clickThisButton').addEventListener('mousedown', (details) => {
//   details.target.style.backgroundColor = 'red'; 
// });

// document.getElementById('clickThisButton').addEventListener('mouseup', (details) => {
//   details.target.style.backgroundColor = 'blue'; 
// });

document.getElementById('nameInput').addEventListener('keyup', (e) => {
  if(e.target.value === '') {
    document.getElementsByTagName('p')[0].innerText = `please enter a name`;
  } else {
    document.getElementsByTagName('p')[0].innerText = `everyone please welcome ${e.target.value} to the screen`;
  }
})