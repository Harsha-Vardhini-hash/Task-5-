document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const articles = [
    { title: "First Post", body: "Welcome to my blog!" },
    { title: "Tech Trends 2025", body: "Let's discuss web development trends." },
  ];

  articles.forEach(article => {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${article.title}</h2><p>${article.body}</p>`;
    content.appendChild(div);
  });
});
