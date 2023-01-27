const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

let userAvatar = document.getElementById('user-avatar');
let profileName = document.getElementById('profile-name');
let profileLocation = document.getElementById('profile-location');
let profilePhoto = document.getElementById('profile-photo');
let likes = document.getElementById('likes');
let usersFeeling = document.getElementById('users-feeling');

console.log(likes.innerHTML);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomNumber = getRandomInt(posts.length);

function changeProfile() {
  userAvatar.src = posts[randomNumber].avatar;
  profileName.textContent = posts[randomNumber].name;
  profileLocation.textContent = posts[randomNumber].location;
  profilePhoto.src = posts[randomNumber].post;
  likes.textContent = posts[randomNumber].likes;
  usersFeeling.innerHTML = `<span>${posts[randomNumber].username}</span> ${posts[randomNumber].comment}`;
}

setTimeout(() => {
  randomNumber = getRandomInt(posts.length);
  changeProfile();
}, 2000);

function increment() {
  let newLikes = parseInt(likes.innerHTML) + 1;
  likes.textContent = newLikes;
}
