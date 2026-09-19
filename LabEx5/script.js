//news data array
let news = [
  { id: 1, title: 'Election Results', content: "Newly elected minister..." },
  { id: 2, title: 'Sporting Success', content: "World Cup winners..." },
  { id: 3, title: 'Tornado Warning', content: "Residents should prepare..." }
];

//Adds one news card to the page, using the template
function addCard(title, content) {
  const template = document.getElementById("news-template")
    .content.cloneNode(true);

  template.querySelector('.news-title').innerText = title;
  template.querySelector('.news-content').innerText = content;

  document.querySelector('#news-list').appendChild(template);
}

// Clears the news container, then re-adds every item currently in the array
function renderNews() {
  const newsList = document.getElementById("news-list");
  newsList.innerHTML = ""; 

  news.forEach(item => {
    addCard(item.title, item.content);
  });
}

// Show news immediately when the page loads
renderNews();


setInterval(renderNews, 5000);

//add a new news item when the button is clicked
const addNewsBtn = document.getElementById("add-news-btn");

addNewsBtn.addEventListener("click", () => {
  const titleInput = document.getElementById("title-input");
  const contentInput = document.getElementById("content-input");

  const newTitle = titleInput.value;
  const newContent = contentInput.value;



  
  news.push({
    id: news.length + 1,
    title: newTitle,
    content: newContent
  });

  // Clear the input fields
  titleInput.value = "";
  contentInput.value = "";
});