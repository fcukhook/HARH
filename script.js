const surprise = {
  intro: 'Heyy.. I NEED TO SHARE YOU A SMALL THING IN THIS MOMENT !!',
  title: 'Anaganaga Oka Amai... Vineetha',
  paragraphs: [
    'Anaganaga oka ammai... her name is Vineetha.',
    'Ippudu Deloitte lo job kottesindi! Maybe koncham restrictions taggutai, respect perugutundi... and yeah, people start looking at you differently.',
    'And... nen evarani niku cheppanu, cheppalenu. Not only for exams, I will be with you as a friend and comrade. You can share anything with me whenever you feel low.',
    'Koncham different ga undachu. You can say, “Naaku okadu telisinodu help chesevaadu unnadu... but vaadu evado teliyadu.” Different ga undi kada...',
    'Sare... anyways, congooo for getting placed in Deloitte!',
    'I can understand... oka girl brain lo enni things run avutai ani. But you still manage everything with strength and grace.',
    'Ika selavu...'
  ],
  signature: '— Comrade'
};

const screens = [...document.querySelectorAll('.screen')];
const introText = document.querySelector('#intro-text');
const letterTitle = document.querySelector('#letter-title');
const letterCopy = document.querySelector('#letter-copy');
const signature = document.querySelector('#letter-signature');
const music = document.querySelector('#surprise-music');

introText.textContent = surprise.intro;
letterTitle.textContent = surprise.title;
signature.textContent = surprise.signature;

surprise.paragraphs.forEach((paragraph) => {
  const element = document.createElement('p');
  element.textContent = paragraph;
  letterCopy.appendChild(element);
});

function showScreen(name) {
  screens.forEach((screen) => {
    const isVisible = screen.dataset.screen === name;
    screen.classList.toggle('is-visible', isVisible);
    screen.setAttribute('aria-hidden', String(!isVisible));
  });
}

document.querySelector('[data-action="next"]').addEventListener('click', () => {
  showScreen('prelude');
});

document.querySelector('[data-action="start"]').addEventListener('click', () => {
  music.currentTime = 67;
  music.play().catch(() => {});
  showScreen('letter');
});
