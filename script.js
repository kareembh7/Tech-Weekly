const apiURL = 'https://newsapi.org/v2/everything';
const apiKey = '7b8e680d0cb1458aa0e9af59512e2a32';
const query = 'motorsports';

async function fetchNews() {
  try {
    const response = await fetch(`${apiURL}?q=${query}&apiKey=${apiKey}`);

    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }

    const data = await response.json();

    displayNews(data.articles);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

function displayNews(articles) {
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = '';

  articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.className = 'article';

    articleElement.innerHTML = `
      <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
      <p>${article.description}</p>
    `;

    newsContainer.appendChild(articleElement);
  });
}

fetchNews();

setInterval(fetchNews, 1800000);