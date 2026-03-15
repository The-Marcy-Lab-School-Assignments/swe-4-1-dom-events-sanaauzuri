const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];


// Add your code here...
const playlistsGrid = document.querySelector('#playlists-grid');
const nowPlayingTitle = document.querySelector('#now-playing-title');


playlists.forEach((playlist) => {

  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');

  
  li.className = 'playlist-card';
  li.setAttribute('data-title', playlist.title);

  img.src = playlist.image;
  img.alt = `${playlist.title} playlist cover`;

  p.textContent = playlist.title;

  
  li.append(img, p);
  playlistsGrid.append(li);
});

// Event delegation
playlistsGrid.addEventListener('click', (event) => {
  const clicked = event.target.closest('.playlist-card');
  if (!clicked) return;

  const previouslySelected = playlistsGrid.querySelector('.selected');
  if (previouslySelected) previouslySelected.classList.remove('selected');
  clicked.classList.add('selected');

  nowPlayingTitle.textContent = clicked.getAttribute('data-title');
});
    
