// const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json';
// const key = 'Y2WDKjOoPO5QbiE20GWavBQhLhmBadGQ';
// let url;

// const searchTerm = document.querySelector('.search');
// const startDate = document.querySelector('.start-date');
// const endDate = document.querySelector('.end-date');
// const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submit');

// const nextBtn = document.querySelector('.next');
// const previousBtn = document.querySelector('.prev');
// const nav = document.querySelector('nav');

// const section = document.querySelector('section');

// nav.style.display = 'none';

// let pageNumber = 0;
// let displayNav = false;

// searchForm.addEventListener('submit', fetchResults);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);

// function fetchResults(e) {
//   e.preventDefault();

//   url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q' + searchTerm.value;
  
//   if(startDate.value !== '') {
//     console.log(startDate.value);
//     url += '&begin_date' + startDate.value;
//   };

//   if(endDate.value !== '') {
//     url += '&end_date=' + startDate.value;
//   };

//   fetch(url)
//     .then(function(result) {
//       console.log(result);
//       return result.json();
//     }).then(function(json) {
//       console.log(json);
//     })

//     fetch(url).then(function(results) {
//       return results.json();
//     }).then(function(json) {
//       displayResults(json);
//     })
// };

// function displayResults(json) {
//   // console.log('DisplayResults', json);
//   while(section.firstChild) {
//     section.removeChild(section.firstChild);
//   }

//   let articles = json.response.docs;

//   if(articles.length === 10) {
//     nav.style.display = 'block';
//   } else {
//     nav.style.display = 'none';
//   }
  
//   if(articles.length === 0) {
//     console.log('no results');
//   } else {
//     for(let i = 0; i < articles.length; i++) {
//       let article = document.createElement('article');
//       let heading = document.createElement('h2');
//       let link = document.createElement('a');
//       let img = document.createElement('img');
//       let para = document.createElement('p');
//       let clearfix = document.createElement('div');

//       let current = articles[i];
//       console.log('current', current);

//       link.href = current.web_url;
//       link.textContent = current.headline.main;

//       para.textContent = 'Keywords: ';

//       for(let j = 0; j < current.keywords.length; j++) {
//         let span = document.createElement('span');
//         span.textContent += current.keywords[j].value + ' ';
//         para.appendChild(span);
//       }

//       if(current.multimedia.length > 0) {
//         img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
//         img.alt = current.headline.main;
//       }

//       clearfix.setAttribute('class', 'clearfix');

//       article.appendChild(heading);
//       heading.appendChild(link);
//       article.appendChild(img);
//       article.appendChild(para);
//       article.appendChild(clearfix);
//       section.appendChild(article);
//     }
//   }
// }


// function nextPage(e) {
//   pageNumber++;
//   fetchResults(e);
//   console.log('page number:', pageNumber);
// }

// function previousPage(e) {
//   if(pageNumber > 0) {
//     pageNumber--;
//   } else {
//     return;
//   }
//   fetchResults(e);
//   console.log('page:', pageNumber);
// }

// Group 1
const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'b2e02612e179494c9f1f57577b582a0a';
let url;

const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
// console.log('PageNumber:', pageNumber);
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) {
  // console.log(e);
  e.preventDefault();
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
  console.log('URL:', url);

  if (startDate.value !== '') {
    console.log(startDate.value)
    url += '&begin_date=' + startDate.value;
  }
  
  if (endDate.value !== '') {
    console.log(endDate.value)
    url += '&end_date=' + endDate.value;
  }

  fetch(url)
    .then(function(result) {
      console.log(result)
      return result.json();
    })
    .then(function(json) {
      console.log(json);
      displayResults(json);
    })
}

// Group 2
function displayResults(json) {
  // console.log('Display Results', json);
  // console.log(json.response.docs);


  //this is removing everything from the section. while there is a first child, we are removing that child.
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  let articles = json.response.docs;
  //we are taking the json data and putting it in a variable called articles
  // console.log(articles);

  if (articles.length === 0) {
    //if the articles length is 0 then of course ther will be no results
    console.log('No results');
  } else {
    for (let i = 0; i < articles.length; i++) {
      // console.log(i);

      //in this loop we are iterating through the articles length form 0 
      //and creating a article, header, link etc for every single iteration
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');

      let current = articles[i];
      console.log('Current:', current);

      link.href = current.web_url;
      link.textContent = current.headline.main;

      para.textContent = 'Keywords: ';

      // Group 3
      //we are creating a span element for the keywords and appending that span to paragraph
      for (let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }

  if (articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}

function nextPage(e) {
  // console.log('Next button clicked');
  pageNumber++;
  fetchResults(e);
  console.log('Page Number:', pageNumber);
}

function previousPage(e) {
  // console.log('Previous button clicked');
  if (pageNumber > 0) {
    pageNumber--;
    fetchResults(e);
  } else {
    return;
  }
  fetchResults(e);
  console.log('Page:', pageNumber);
}