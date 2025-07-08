document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("news-container");

  fetch("https://newsapi.org/v2/top-headlines?country=us&pageSize=4&apiKey=a43d8b6ce2c848cdbe2952fdd2f51a97")
    .then(response => response.json())
    .then(data => {
      const articles = data.articles;
      articles.forEach(article => {
        const div = document.createElement("div");
        div.className = "news-card";
        div.innerHTML = `
          <h3>${article.title}</h3>
          <p>${article.description || "No description"}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      container.innerHTML = `<p>Error loading news: ${error.message}</p>`;
    });
});
