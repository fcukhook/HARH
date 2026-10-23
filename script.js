
const surprise = {
  intro: 'Heyy.. I NEED TO SHARE A SMALL THING WITH YOU IN THIS MOMENT!!',
  title: 'Anaganaga Oka Ammmai....',
  paragraphs: [
    'Anaganaga oka ammai... her name is Harshini…',
    'She faced so many tough situations at home and in her family… maybe nuv naatho share cheskole kavachu… but aa pain neeku ela undo… I can imagine… chala face chesav…',

    '“Unexpected connections often spark the most brilliant breakthroughs” antar kada, daniki best example idi… Ekkado Bhimavaram and ekkadooo Karimnagar… ala Telegram lo parichaym ayyam… Hmm… nice…',

    'Starting nundi nannu trust cheskuntoo vachav… maybe nen edo magic chesta ani oooo, or edi ankunnavo I don’t know. Of course, ippatiki nen edo magic chesta ani ankuntav… ankuntunna…',

    'Sare, anyways… motaniki job ochindi…',

    'Kottesavv! Maybe koncham restrictions taggutai, respect perugutundi… and yeah, people start looking at you differently.',

    'Exams and interviews… kadh, life lo ye problem ochina, I will be with you as a friend and comrade. You can share anything with me whenever you feel low. Maybe late ga reply ista emo, kani important situations oste, I’ll never give hand.',

    'Sare… anyways, congooo for getting placed!',

    'I can understand… oka girl brain lo enni things run avutai ani. But you still manage everything with strength and grace.',

    'Ika selavu…'
  ],
  signature: 'Ni Comrade'
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
  music.currentTime = 57;
  music.play().catch(() => {});
  showScreen('letter');
});
