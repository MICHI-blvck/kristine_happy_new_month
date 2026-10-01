if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('pageshow', () => {
  const root = document.documentElement;
  const scrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  root.style.scrollBehavior = scrollBehavior;
});

const placeholderPalette = [
  '#25121b',
  '#4a2534',
  '#c87e8c',
  '#f6e6dc'
];

const siteData = {
  herName: 'Kristine',
  hisName: 'Julian',
  month: '[MONTH]',
  introTagline: 'Happy New Month,',
  WELCOME_MESSAGE:
    "Another month is here, and I wanted it to begin by reminding you how special you are to me and how much I care about the life we hope to build together.",
  HER_PHOTOS: [
    'images/gallery/her.jpg.jpeg',
    'images/gallery/her.jpg1.jpeg',
    'images/gallery/her.jpg2.jpeg',
    'images/gallery/her.jpg3.jpeg',
    'images/gallery/her.jpg4.jpeg'
  ],
  HER_PHOTO_CAPTION:
    'There are many beautiful things in this world, but somehow you still manage to stand out to me.',
  COUPLE_PHOTO: 'images/us.jpg',
  COUPLE_PHOTO_MESSAGE:
    'The kind of life I hope we get to build together. I know this might look AI-generated, but it is something I truly want: slow mornings, quiet laughter, and a love that keeps growing with time.',
  HIM_PHOTO: 'images/him.jpg.jpeg',
  HIM_MESSAGE:
    'I wanted to make this for you because thinking about you is one of the sweetest parts of my days. You are the person I want to keep learning about, growing with, and falling for deeper every month.',
    personalMessage: [
    `Happy New Month, my love ❤️🥰🌹

  Another month is here, and honestly, one of the first things I’m grateful for is having you in my life. 🥹❤️ Even though the distance keeps us apart and we haven’t had the chance to meet yet, somehow you’ve become such a beautiful and important part of my everyday life. 💕✨

  It’s crazy how someone I’ve never held in my arms can still make my heart feel so warm. 🥺❤️ Your messages, your voice, our calls, the little conversations, the way we laugh together, and even those random moments when we just talk about absolutely nothing… they all mean so much to me. 🫶🏽💗`,
    `I may not be able to wake up beside you, hold you close, kiss your forehead, or look into your eyes every morning yet 😔❤️, but I want you to know that you are still one of the sweetest thoughts I wake up with and one of the last people on my mind before I sleep. 🌙💋❤️

  I hope this new month brings you so much happiness, peace, beautiful surprises, and everything your heart desires. 🤲🏽✨💐 And whenever you have a bad day, I hope you remember that somewhere out here, there’s a man who genuinely cares about you, thinks about you, misses you, and is looking forward to the day when distance will no longer be the thing standing between us. 🥹❤️‍🩹🌍➡️❤️`,
    `One day, I want all these calls and chats to become real moments. 🥺💕 I want to finally see that beautiful smile in front of me, hear your laugh without a phone between us, hold your hands, pull you close, and tell you in person just how special you are to me. 🤗❤️💋

  Until that day comes, I’ll keep choosing you, appreciating you, and enjoying every little moment we get to share. ❤️🔐 No matter how many miles are between us, you still have a very special place in my heart. 🫀🥰`,
    `So, my beautiful girl, welcome to a brand-new month. 🌹✨ May this month be kind to you, may you have countless reasons to smile, and may our love continue to grow stronger, sweeter, and deeper. ❤️‍🔥🥹💕

  Happy New Month, baby. ❤️🌹🥰
  Keep smiling for me, keep being the amazing woman you are, and never forget that you are loved, appreciated, missed, and deeply cherished. 🫶🏽💋❤️

  And hopefully… this month brings us one step closer to the day I finally get to say, “Come here, my love,” and actually pull you into my arms. 🥹🤗❤️‍🔥💋

  I love you. ❤️🔐🌹`
    ],
  FINAL_MESSAGE:
    'I hope this new month brings you quiet peace, beautiful laughter, and enough love to make your heart feel full in all the ways it deserves. I am so proud of you, so grateful for you, and so lucky to get to imagine the life we have yet to build together. May this month remind you that you are deeply loved, constantly appreciated, and never forgotten.',
  SURPRISE_MESSAGE:
    'If I could choose who to share every new month, every smile, every moment, and every tomorrow with… my answer would always be you. ❤️🫶🏽',
  WISHES: [
    { title: 'Peace', text: 'I hope this month gives you quiet moments where you can breathe, rest, and simply feel okay.' },
    { title: 'Happiness', text: 'May your days be lighter, kinder, and full of the small joys that make your heart smile.' },
    { title: 'Growth', text: 'I hope you keep becoming more of yourself in all the beautiful ways that matter.' },
    { title: 'Success', text: 'May your efforts bloom into results that make you proud and deeply fulfilled.' },
    { title: 'Good health', text: 'I hope your body, mind, and spirit feel cared for in every season of this month.' },
    { title: 'Beautiful moments', text: 'I hope life gives you days that feel soft, joyful, and full of the kind of peace your heart deserves.' },
    { title: 'Love', text: 'May you feel adored, cherished, and gently reminded that you are never alone in this life.' }
  ],
  LOVE_MESSAGES: [
    { title: 'Your smile', message: 'It still does something to me. It makes ordinary days feel softer and my world feel brighter.' },
    { title: 'Your heart', message: 'The way you love is thoughtful, sincere, and full of the kind of warmth that makes people feel safe.' },
    { title: 'Your strength', message: 'You carry so much with grace, and I admire the way you keep going even when life is hard.' },
    { title: 'Your kindness', message: 'You have a gentle way of making people feel cared for, and I never take that for granted.' },
    { title: 'Your laugh', message: 'It has a way of making room for joy in every moment, and I always want to hear it more.' },
    { title: 'Your presence', message: 'There is a feeling of peace and ease that comes with you, and I am grateful for it more than I can say.' },
    { title: 'The way you love', message: 'You love with intention, patience, and sincerity, and it makes me feel deeply seen and deeply cherished.' },
    { title: 'The way you make ordinary moments special', message: 'Even the simplest moments feel meaningful when I get to experience them with you.' }
  ],
  LOVE_QUIZ: [
    {
      question: 'What do I enjoy most about talking to you?',
      answers: [
        { text: 'Your voice ❤️', response: 'Your voice has a way of making the miles feel a little smaller. ❤️' },
        { text: 'Our conversations 💕', response: 'Every conversation with you feels like a little world that belongs to us. 💕' },
        { text: 'The way you make me smile 🥰', response: 'You can make me smile from so far away, and I love that about you. 🥰' },
        { text: 'Everything about you 🥹❤️', response: 'Everything about you keeps finding new ways to make me love you more. 🥹❤️' }
      ]
    },
    {
      question: 'If the distance disappeared for one day, what would I want to do first?',
      answers: [
        { text: 'Finally see your beautiful smile 🥹', response: 'Seeing that beautiful smile in person is one of the moments I dream about most. 🥹' },
        { text: 'Hold you in my arms 🫂❤️', response: 'I would hold you close and wish that beautiful moment could last forever. 🫂❤️' },
        { text: 'Spend the whole day with you 💕', response: 'A whole day together sounds like the sweetest kind of dream. 💕' },
        { text: 'All of the above ❤️‍🔥', response: 'Exactly. One day could never be enough for everything I want to share with you. ❤️‍🔥' }
      ]
    },
    {
      question: "What do I miss most when we haven't talked for a while?",
      answers: [
        { text: 'Your voice 📞❤️', response: 'Hearing your voice always brings a little more warmth into my day. 📞❤️' },
        { text: 'Your messages 💬💕', response: 'Even a small message from you can turn my whole day around. 💬💕' },
        { text: 'Our late-night conversations 🌙', response: 'Those late-night talks make the distance feel quieter and our connection feel closer. 🌙' },
        { text: 'Simply having you around 🥹', response: 'You have become such a lovely part of my everyday life, even from far away. 🥹' }
      ]
    },
    {
      question: 'If I finally saw you standing in front of me, what would probably happen?',
      answers: [
        { text: "I'd smile like crazy 😂❤️", response: 'There would be no hiding that smile. I know seeing you would make my whole face light up. 😂❤️' },
        { text: "I'd hug you tightly 🫂", response: 'That first hug would hold all the love we have been sending across the distance. 🫂' },
        { text: "I'd probably be speechless 🥹", response: 'I might lose every word I know for a moment, just taking in that you are finally there. 🥹' },
        { text: "I'd never want to let go ❤️", response: 'After waiting so long to be close, I would want to make that moment last. ❤️' }
      ]
    },
    {
      question: 'What makes our relationship special despite the distance?',
      answers: [
        { text: 'Our conversations 💬', response: 'Our conversations have built a closeness that distance cannot take away. 💬' },
        { text: 'The way we understand each other ❤️', response: 'Being understood by you is one of the sweetest ways I feel loved. ❤️' },
        { text: "The connection we've built 🥰", response: 'What we have built through every call, message, and voice note means so much to me. 🥰' },
        { text: 'The fact that we still choose each other every day 🔐❤️', response: 'That is us: choosing each other, even with all these miles between us. 🔐❤️' }
      ]
    },
    {
      question: 'What am I most excited about someday?',
      answers: [
        { text: 'Our first meeting 🥹', response: 'Our first meeting is a day I already hold close in my heart. 🥹' },
        { text: 'Our first hug 🫂', response: 'I imagine that first hug making every mile feel worth the wait. 🫂' },
        { text: 'Finally seeing you in person ❤️', response: 'I cannot wait to see the person who has become so important to me, right there in front of me. ❤️' },
        { text: 'Creating our first real memories together 💕', response: 'I look forward to all the first memories we will make, one beautiful moment at a time. 💕' }
      ]
    },
    {
      question: 'If I could give you one thing right now, what would it be?',
      answers: [
        { text: 'A long hug 🫂❤️', response: 'Imagine the warmest hug traveling all those miles straight to you. 🫂❤️' },
        { text: 'A kiss 💋', response: 'Consider this a little kiss sent with all my love until I can give you one in person. 💋' },
        { text: 'My time ❤️', response: 'You can have all the time, calls, and conversations you want with me. ❤️' },
        { text: 'All the love in my heart 🥹❤️', response: 'Every bit of love in my heart is yours, today and every day. 🥹❤️' }
      ]
    },
    {
      question: 'What do I imagine when I think about our first meeting?',
      answers: [
        { text: 'Smiling at each other 🥹', response: 'I can already imagine that first smile saying everything words could not. 🥹' },
        { text: 'A really long hug 🫂', response: 'I think that first hug might say every “I missed you” all at once. 🫂' },
        { text: 'Being nervous and excited 😂❤️', response: 'We will probably both be nervous, excited, and smiling through all of it. 😂❤️' },
        { text: 'Wondering why we waited so long 💕', response: 'And then we will be right where we have been hoping to be: together at last. 💕' }
      ]
    },
    {
      question: 'What do I hope distance never changes between us?',
      answers: [
        { text: 'Our conversations 💬', response: 'I hope we always keep sharing the little things, the big things, and everything between. 💬' },
        { text: 'Our connection ❤️', response: 'What connects us is bigger than the miles on a map. ❤️' },
        { text: 'The way we care about each other 🥰', response: 'I hope we always keep showing up for each other with this much care. 🥰' },
        { text: 'The love we have for each other 🔐❤️', response: 'Distance can change the view, but it will never change how much I love you. 🔐❤️' }
      ]
    },
    {
      question: 'If I could choose one person to walk into this new month with...',
      answers: [
        { text: 'You ❤️', response: 'You are the one I want beside my heart in every new month. ❤️' },
        { text: 'Still you 🥹', response: 'In every version of this story, my answer is still you. 🥹' },
        { text: 'Always you 🔐', response: 'Every tomorrow, every new month, always you. 🔐' },
        { text: 'You, without hesitation ❤️‍🔥', response: 'Without a single hesitation, I would choose you all over again. ❤️‍🔥' }
      ]
    }
  ],
  OPEN_WHEN_MESSAGES: [
    { title: 'Open when you miss me', message: 'I miss you too, and even when we are apart, you are still very much in my heart. You are not far from me in the ways that matter most.' },
    { title: 'Open when you are having a difficult day', message: 'This is your reminder that you are stronger than this moment, softer than the world expects, and still worthy of peace.' },
    { title: 'Open when you need encouragement', message: 'You are doing better than you think. Keep going, even if it is one small step at a time. I believe in you.' },
    { title: 'Open when you want to smile', message: 'Remember the joy in your life, even in the smallest things. You deserve to smile like you mean it.' },
    { title: 'Open when you need a reminder', message: 'You are deeply loved, beautifully valued, and never as alone as your mind might tell you.' },
    { title: 'Open when you need to know you are loved', message: 'You are loved in the quiet ways and the loud ways. In every season, in every version of you, you are loved.' }
  ],
  TIMELINE_ITEMS: [
    { title: 'Our next visit', text: 'The day I finally get to hold your hand and watch you smile in person, with all the time in the world to enjoy it.', photo: 'images/future-visit.jpg' },
    { title: 'Our candid photo', text: 'The kind of picture I want us to take when laughter feels easy and the whole world fades away for a while.', photo: 'images/future-selfie.jpg' },
    { title: 'Slow evenings together', text: 'A quiet time when the day is done, the lights are low, and the only thing that matters is being close to you.', photo: 'images/future-evening.jpg' },
    { title: 'Our next adventure', text: 'The kind of day I hope we get to share soon—a little dream, a little wonder, and a lot of love.', photo: 'images/future-adventure.jpg' }
  ],
  MONTH_ACTIONS: [
    'Laugh more.',
    'Make more room for each other.',
    'Dream bigger together.',
    'Talk about the places we want to go.',
    'Choose joy in the little things.',
    'Plan the next adventure.',
    'Love each other a little louder.'
  ]
};

function buildPlaceholder(label, tone = 0) {
  const colors = placeholderPalette;
  const bg = colors[tone % colors.length];
  const accent = colors[(tone + 2) % colors.length];
  const text = colors[(tone + 3) % colors.length];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1400" viewBox="0 0 1200 1400">
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${bg}"/>
          <stop offset="100%" stop-color="${accent}"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="1400" fill="url(#g1)"/>
      <circle cx="960" cy="270" r="290" fill="rgba(255,255,255,0.08)"/>
      <circle cx="230" cy="1180" r="360" fill="rgba(255,255,255,0.05)"/>
      <text x="600" y="710" text-anchor="middle" fill="${text}" font-size="82" font-family="Georgia, serif" letter-spacing="6">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function syncImageBackdrop(img) {
  const frame = img.closest('.image-backdrop');
  if (frame && img.currentSrc) {
    frame.style.setProperty('--photo-backdrop', `url("${img.currentSrc}")`);
  }
}

const setImageFallback = (img, label, tone = 0) => {
  img.addEventListener('load', () => syncImageBackdrop(img));
  img.addEventListener('error', () => {
    img.src = buildPlaceholder(label, tone);
    img.onerror = null;
  });
  syncImageBackdrop(img);
};

function imageExists(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve(false);
      return;
    }

    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

function populateStaticContent() {
  const values = {
    '#intro-tagline': siteData.introTagline,
    '#intro-name': siteData.herName,
    '#her-name': siteData.herName,
    '#welcome-message': siteData.WELCOME_MESSAGE,
    '#her-photo-caption': siteData.HER_PHOTO_CAPTION,
    '#couple-photo-message': siteData.COUPLE_PHOTO_MESSAGE,
    '#final-letter': siteData.FINAL_MESSAGE,
    '#his-name': siteData.hisName,
    '#him-message': siteData.HIM_MESSAGE,
    '#surprise-reveal': siteData.SURPRISE_MESSAGE
  };

  Object.entries(values).forEach(([selector, value]) => {
    const el = document.querySelector(selector);
    if (!el) return;

    if (selector === '#final-letter') {
      el.textContent = value;
      return;
    }

    if (selector === '#surprise-reveal') {
      el.innerHTML = value.replace(/\n/g, '<br /><br />');
      return;
    }

    el.textContent = value;
  });

  initPersonalLetter();

  const mainPhoto = document.getElementById('her-main-photo');
  const heroPhoto = document.getElementById('hero-photo');
  const usImage = document.getElementById('us-photo');
  const himImage = document.getElementById('him-photo');

  if (heroPhoto) {
    heroPhoto.src = siteData.HER_PHOTOS[0];
    setImageFallback(heroPhoto, 'Kristine', 0);
  }

  if (mainPhoto) {
    mainPhoto.src = siteData.HER_PHOTOS[0];
    setImageFallback(mainPhoto, 'Her', 0);
  }

  if (usImage) {
    usImage.src = siteData.COUPLE_PHOTO;
    setImageFallback(usImage, 'Us', 1);
  }

  if (himImage) {
    setImageFallback(himImage, 'Him', 2);
    himImage.src = siteData.HIM_PHOTO;
  }
}

function initPersonalLetter() {
  const letter = document.getElementById('personal-letter');
  const previousButton = document.getElementById('letter-previous');
  const nextButton = document.getElementById('letter-next');
  const pageLabel = document.getElementById('letter-page-label');
  if (!letter || !previousButton || !nextButton || !pageLabel) return;

  let page = 0;
  const updatePage = () => {
    letter.textContent = siteData.personalMessage[page];
    pageLabel.textContent = `${page + 1} / ${siteData.personalMessage.length}`;
    previousButton.disabled = page === 0;
    nextButton.disabled = page === siteData.personalMessage.length - 1;
  };

  previousButton.addEventListener('click', () => {
    if (page > 0) {
      page -= 1;
      updatePage();
    }
  });

  nextButton.addEventListener('click', () => {
    if (page < siteData.personalMessage.length - 1) {
      page += 1;
      updatePage();
    }
  });

  updatePage();
}

function renderHerGallery() {
  const supportGrid = document.getElementById('her-supporting-grid');
  if (!supportGrid) return;

  const photos = siteData.HER_PHOTOS.slice(1);
  photos.forEach((src, index) => {
    const figure = document.createElement('figure');
    figure.className = 'supporting-photo image-backdrop reveal-card';

    const image = document.createElement('img');
    image.src = src;
    image.alt = `Kristine photo ${index + 2}`;
    image.loading = 'lazy';
    setImageFallback(image, 'Her', index + 1);

    figure.appendChild(image);
    supportGrid.appendChild(figure);
  });
}

function renderLoveGrid() {
  const grid = document.getElementById('love-grid');
  if (!grid) return;

  siteData.LOVE_MESSAGES.forEach((item, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'accordion-item';
    if (index === 0) wrapper.classList.add('is-open');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'accordion-trigger';
    button.innerHTML = `<span>${item.title}</span><span class="plus-mark">${wrapper.classList.contains('is-open') ? '−' : '+'}</span>`;

    const content = document.createElement('div');
    content.className = 'accordion-content';
    content.innerHTML = `<p>${item.message}</p>`;

    button.addEventListener('click', () => {
      const isOpen = wrapper.classList.contains('is-open');
      wrapper.classList.toggle('is-open');
      button.innerHTML = `<span>${item.title}</span><span class="plus-mark">${isOpen ? '+' : '−'}</span>`;
    });

    wrapper.appendChild(button);
    wrapper.appendChild(content);
    grid.appendChild(wrapper);
  });
}

function renderLoveQuiz() {
  const quiz = document.getElementById('love-quiz');
  if (!quiz) return;

  let questionIndex = 0;

  const render = () => {
    quiz.replaceChildren();

    if (questionIndex === siteData.LOVE_QUIZ.length) {
      const result = document.createElement('div');
      result.className = 'quiz-result';

      const introduction = document.createElement('p');
      introduction.className = 'quiz-final-message';
      introduction.textContent = 'Distance may have kept us apart, but somehow it brought two hearts closer. ❤️';

      const heading = document.createElement('h4');
      heading.className = 'quiz-final-score';
      heading.textContent = '10/10 — You know us perfectly. 🥹❤️';

      const closing = document.createElement('p');
      closing.className = 'quiz-final-message';
      closing.textContent = 'And if I could choose one person to walk into every new month with...';

      const promise = document.createElement('p');
      promise.className = 'quiz-final-promise';
      promise.textContent = "I'd still choose you. Always. 🔐❤️";

      const replay = document.createElement('button');
      replay.type = 'button';
      replay.className = 'secondary-button quiz-next';
      replay.textContent = 'One More Time? ❤️';
      replay.addEventListener('click', () => {
        questionIndex = 0;
        render();
      });

      result.append(introduction, heading, closing, promise, replay);
      quiz.appendChild(result);
      return;
    }

    const question = siteData.LOVE_QUIZ[questionIndex];
    const progress = document.createElement('p');
    progress.className = 'quiz-progress';
    progress.textContent = `Question ${questionIndex + 1} of ${siteData.LOVE_QUIZ.length}`;

    const heading = document.createElement('h4');
    heading.className = 'quiz-question';
    heading.textContent = question.question;

    const answers = document.createElement('div');
    answers.className = 'quiz-options';

    const feedback = document.createElement('p');
    feedback.className = 'quiz-feedback';
    feedback.setAttribute('aria-live', 'polite');

    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'secondary-button quiz-next';
    next.textContent = 'Next ❤️';
    next.hidden = true;
    next.addEventListener('click', () => {
      questionIndex += 1;
      render();
    });

    question.answers.forEach((answer) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'quiz-option';
      button.textContent = answer.text;
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        if (next.hidden === false) return;

        answers.querySelectorAll('.quiz-option').forEach((option) => {
          option.disabled = true;
        });
        button.classList.add('is-selected');
        button.setAttribute('aria-pressed', 'true');
        feedback.textContent = answer.response;
        feedback.classList.add('is-visible');
        next.hidden = false;
      });
      answers.appendChild(button);
    });

    quiz.append(progress, heading, answers, feedback, next);
  };

  render();
}

function renderOpenWhen() {
  const grid = document.getElementById('open-when-grid');
  if (!grid) return;

  siteData.OPEN_WHEN_MESSAGES.forEach((item, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'envelope-item';
    if (index === 0) wrapper.classList.add('is-open');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'envelope-trigger';
    button.innerHTML = `<span>${item.title}</span><span class="plus-mark">${wrapper.classList.contains('is-open') ? '−' : '+'}</span>`;

    const content = document.createElement('div');
    content.className = 'envelope-content';
    content.innerHTML = `<p>${item.message}</p>`;

    button.addEventListener('click', () => {
      wrapper.classList.toggle('is-open');
      button.innerHTML = `<span>${item.title}</span><span class="plus-mark">${wrapper.classList.contains('is-open') ? '−' : '+'}</span>`;
    });

    wrapper.appendChild(button);
    wrapper.appendChild(content);
    grid.appendChild(wrapper);
  });
}

function renderWishes() {
  const grid = document.getElementById('wishes-grid');
  if (!grid) return;

  siteData.WISHES.forEach((item, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'wish-item';
    if (index === 0) wrapper.classList.add('is-open');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'accordion-trigger';
    button.innerHTML = `<span>${item.title}</span><span class="plus-mark">${wrapper.classList.contains('is-open') ? '−' : '+'}</span>`;

    const content = document.createElement('div');
    content.className = 'wish-content';
    content.innerHTML = `<p>${item.text}</p>`;

    button.addEventListener('click', () => {
      wrapper.classList.toggle('is-open');
      button.innerHTML = `<span>${item.title}</span><span class="plus-mark">${wrapper.classList.contains('is-open') ? '−' : '+'}</span>`;
    });

    wrapper.appendChild(button);
    wrapper.appendChild(content);
    grid.appendChild(wrapper);
  });
}

function renderMonthPlan() {
  const list = document.getElementById('month-plan-items');
  if (!list) return;

  siteData.MONTH_ACTIONS.forEach((item, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'plan-item';
    if (index === 0) wrapper.classList.add('is-open');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'plan-trigger';
    button.innerHTML = `<span>${item}</span><span class="plus-mark">${wrapper.classList.contains('is-open') ? '−' : '+'}</span>`;

    const content = document.createElement('div');
    content.className = 'plan-content';
    content.innerHTML = '<p>This is one of the promises I want this month to hold for us.</p>';

    button.addEventListener('click', () => {
      wrapper.classList.toggle('is-open');
      button.innerHTML = `<span>${item}</span><span class="plus-mark">${wrapper.classList.contains('is-open') ? '−' : '+'}</span>`;
    });

    wrapper.appendChild(button);
    wrapper.appendChild(content);
    list.appendChild(wrapper);
  });
}

function renderTimeline() {
  const list = document.getElementById('timeline-list');
  if (!list) return;

  siteData.TIMELINE_ITEMS.forEach((item) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'timeline-item';

    const card = document.createElement('div');
    card.className = 'timeline-card';

    const title = document.createElement('div');
    title.className = 'timeline-date';
    title.textContent = item.title;

    const text = document.createElement('p');
    text.textContent = item.text;

    if (item.photo) {
      const photoFrame = document.createElement('figure');
      photoFrame.className = 'timeline-photo image-backdrop';

      const image = document.createElement('img');
      image.src = item.photo;
      image.alt = item.title;
      image.loading = 'lazy';
      setImageFallback(image, 'Future', 4);
      photoFrame.appendChild(image);
      card.appendChild(photoFrame);
    }

    card.appendChild(title);
    card.appendChild(text);
    wrapper.appendChild(card);
    list.appendChild(wrapper);
  });
}

function initRevealAnimations() {
  const revealItems = document.querySelectorAll('.reveal-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initButtons() {
  document.querySelectorAll('[data-scroll-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.scrollTarget);
      if (target) {
        if (button.dataset.startMusic === 'true') {
          const audio = document.getElementById('bg-music');
          if (audio) audio.play().catch(() => {});
        }
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.getElementById('surprise-button').addEventListener('click', () => {
    const box = document.querySelector('.surprise-box');
    box.classList.add('is-revealed');
  });

  document.getElementById('replay-button').addEventListener('click', () => {
    document.getElementById('intro').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initMusic() {
  const audio = document.getElementById('bg-music');
  const control = document.getElementById('music-control');
  const label = control ? control.querySelector('.music-text') : null;

  if (!audio || !control || !label) return;

  const updateControl = () => {
    label.textContent = audio.muted ? 'Unmute' : 'Mute';
    control.setAttribute('aria-label', audio.muted ? 'Unmute music' : 'Mute music');
    control.setAttribute('aria-pressed', String(audio.muted));
    control.classList.toggle('is-playing', !audio.paused);
  };

  control.addEventListener('click', () => {
    audio.muted = !audio.muted;
    updateControl();
  });

  audio.addEventListener('play', updateControl);
  audio.addEventListener('pause', updateControl);
  audio.addEventListener('volumechange', updateControl);
  updateControl();
}

function updateProgress() {
  const sections = [...document.querySelectorAll('.story-section, .intro-screen, .ending-screen')].filter(
    (section) => window.getComputedStyle(section).display !== 'none'
  );
  const progressBar = document.getElementById('progress-bar');
  const progressLabel = document.getElementById('progress-label');

  if (!progressBar || !progressLabel) return;

  const scrollPosition = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? scrollPosition / maxScroll : 0;
  const percent = Math.min(Math.max(ratio, 0), 1) * 100;
  progressBar.style.width = `${percent}%`;

  const activeIndex = Math.min(
    sections.length - 1,
    Math.max(0, Math.round(ratio * (sections.length - 1)))
  );

  const pageNumber = String(activeIndex + 1).padStart(2, '0');
  progressLabel.textContent = `${pageNumber} / ${String(sections.length).padStart(2, '0')}`;
}

function initProgress() {
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
}

async function initOptionalSections() {
  document.querySelectorAll('#us, #him').forEach((section) => {
    section.style.display = '';
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  populateStaticContent();
  renderHerGallery();
  renderLoveGrid();
  renderLoveQuiz();
  renderOpenWhen();
  renderWishes();
  renderMonthPlan();
  renderTimeline();
  initRevealAnimations();
  initButtons();
  initMusic();
  initProgress();
  await initOptionalSections();
  updateProgress();
});
