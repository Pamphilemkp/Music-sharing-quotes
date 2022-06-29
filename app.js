// mobile Menu open and close hamburger
const mobileMenu = document.querySelector('.mobile-menu');
const OpenMenu = document.querySelector('.hamburger');
const CloseMenu = document.querySelector('.close_mobile_menu');

function OpenHamburger() {
  mobileMenu.classList.toggle('open-menu');
  mobileMenu.style.display = 'block';
}

function CloseHamburger() {
  mobileMenu.classList.remove('open-menu');
  mobileMenu.style.display = 'none';
}

OpenMenu.addEventListener('click', OpenHamburger);
CloseMenu.addEventListener('click', CloseHamburger);

// feature speakers

const speakers = document.querySelector('.speaker');

const cards = [
  {
    bg: 'images/logo1.png',
    image: 'images/Billy-Joel.jpg',
    name: 'Billy Joel',
    title: 'Began piano lessons at age 4. At age 14, enamoured of the British Invasion and soul music, he began playing in bands.',
    description: '“I think music in itself is healing. It\'s an explosive expression of humanity. It\'s something we are all touched by. No matter what culture we\'re from, everyone loves music.”',
  },
  {
    bg: 'images/logo1.png',
    image: 'images/Bob-Marley.jpg',
    name: 'Bob Marley',
    title: 'Famous Jamaican reggae musician, began his career in a band called the Wailers in 1963',
    description: '“one good thing about music - when it hits you, you feel no pain”',
  },
  {
    bg: 'images/logo1.png',
    image: 'images/maya.jpg',
    name: 'Maya Angelou',
    title: 'Was American memoirist, popular poet, and civil rights activist.',
    description: '“Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.”',
  },

  {
    bg: 'images/logo1.png',
    image: 'images/Jonny_greenwood.jpg',
    name: 'Jonny Greenwood (Radiohead)',
    title: 'English musician and composer',
    description: '“When people say you’re doing something radical in rock or dance music, I’m not sure how special that is. What we do is so old-fashioned. It’s like trying to do something innovative in tap-dancing.”',
  },
  {
    bg: 'images/logo1.png',
    image: 'images/william.jpg',
    name: 'William Faulkner',
    title: ' American novelist and short-story writer who was awarded the 1949 Nobel Prize for Literature.',
    description: '“I would say that music is the easiest means in which to express, but since words are my talent, I must try to express clumsily in words what the pure music would have done better.”',
  },
  {
    bg: 'images/logo1.png',
    image: 'images/ludwig.jpg',
    name: 'Ludwig van Beethoven',
    title: 'German composer, the predominant musical figure in the transitional period between the Classical and Romantic eras.',
    description: '“Music should strike fire from the heart of man, and bring tears from the eyes of woman.”',
  },
  {
    bg: 'images/logo1.png',
    image: 'images/tupac.jpg',
    name: 'Tupac Shakur',
    title: ' began his music career as a rebel with a cause to articulate the travails and injustices endured by many African Americans.',
    description: '“Music will live forever”',
  },
  {
    bg: 'images/logo1.png',
    image: 'images/papa-wemba.jpg',
    name: 'Papa Wemba',
    title: 'Congolese singer, actor and musician',
    description: '“Music knows more about the kind of mood i am in than i do.”',
  },
];

for (let x = 0; x < cards.length; x += 1) {
  speakers.innerHTML += `
  <div class="speaker-info">
  
    <div class="images">
      <img src="${cards[x].bg}" class="bg" alt="Speaker picture background">
      <img src="${cards[x].image}" class="bg1"  alt="Speaker picture">
    </div>
  
    <div class="info">
      <h3>${cards[x].name}</h3>
      <h4>${cards[x].title}</h4>
      <p>${cards[x].description}</p>
    </div>
  
  </div>`;
}
