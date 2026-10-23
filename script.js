
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

// Get page elements
const screens = [...document.querySelectorAll('.screen')];
const introText = document.querySelector('#intro-text');
const letterTitle = document.querySelector('#letter-title');
const letterCopy = document.querySelector('#letter-copy');
const signature = document.querySelector('#letter-signature');
const music = document.querySelector('#surprise-music');

// Populate the surprise message
introText.textContent = surprise.intro;
letterTitle.textContent = surprise.title;
signature.textContent = surprise.signature;

// Clear any existing paragraphs to prevent duplicates
letterCopy.replaceChildren();

surprise.paragraphs.forEach((paragraph) => {
  const element = document.createElement('p');
  element.textContent = paragraph;
  letterCopy.appendChild(element);
});

// Switch between screens
function showScreen(name) {
  screens.forEach((screen) => {
    const isVisible = screen.dataset.screen === name;

    screen.classList.toggle('is-visible', isVisible);
    screen.setAttribute('aria-hidden', String(!isVisible));
  });
}

// Next button: show the prelude screen
document.querySelector('[data-action="next"]').addEventListener('click', () => {
  showScreen('prelude');
});

// Wait for audio metadata before seeking
function waitForAudioMetadata(audio) {
  if (audio.readyState >= 1) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    audio.addEventListener('loadedmetadata', resolve, { once: true });
    audio.addEventListener(
      'error',
      () => reject(new Error('The audio file could not be loaded.')),
      { once: true }
    );

    audio.load();
  });
}

// Start button: play music from 48 seconds and show the letter
document.querySelector('[data-action="start"]').addEventListener('click', async () => {
  try {
    await waitForAudioMetadata(music);

    // Check whether the audio is long enough
    if (!Number.isFinite(music.duration) || music.duration <= 48) {
      throw new Error('The audio must be longer than 48 seconds.');
    }

    // Seek to 48 seconds
    music.currentTime = 48;

    // Wait until the browser confirms the seek is complete
    if (Math.abs(music.currentTime - 48) > 0.25) {
      await new Promise((resolve, reject) => {
        music.addEventListener('seeked', resolve, { once: true });
        music.addEventListener(
          'error',
          () => reject(new Error('Unable to seek within the audio file.')),
          { once: true }
        );
      });
    }

    // Start playback
    await music.play();

    showScreen('letter');
  } catch (error) {
    console.error('Music playback error:', error);
    showScreen('letter');
  }
});
