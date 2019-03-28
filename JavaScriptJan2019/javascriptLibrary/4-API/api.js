const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) {

  e.preventDefault();
  console.log(e)

  fetch(baseURL).then(result => {
    return result.json();
  })
  .then(json => {
    displayRockets(json)
  })
}

function displayRockets(json) {
  json.forEach(rocket => {
    // console.log(rocket.name);
    let r = document.createElement('li');
    r.innerText = rocket.name;
    spaceShips.appendChild(r);
  });
}