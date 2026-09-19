
const limit = 10;

function addCard(title, body) {
  const template = document.getElementById("post-template")
    .content.cloneNode(true);

  template.querySelector('.card-title').innerText = title;
  template.querySelector('.card-text').innerText = body;

  document.querySelector('#post-list').appendChild(template);
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const limitedPosts = posts.slice(0, limit);
    limitedPosts.forEach(post => {
      addCard(post.title, post.body);
    });
  });