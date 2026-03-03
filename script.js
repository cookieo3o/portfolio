/* 첫 번째 웨이브 */
const path = document.getElementById('wavePath01');

let t = 0;

//복합 파형 (핵심)
function wave(v, amp, offset = 0) {
  return Math.sin(v + offset) * amp +
         Math.sin((v + offset) * 0.5) * (amp * 0.6);
}

function animateWave() {
  t += 0.012; //살짝 빠르게

  //위쪽 커브 (더 크게 출렁)
  const x1 = 133.846;
  const y1 = 13.814 + wave(t, 14);
  const x2 = 195.604;
  const y2 = wave(t, 16, 1);
  const x = 225;
  const y = 0;

  //아래쪽 커브 (잔잔하게)
  const bx1 = 0;
  const by1 = 167.442 + wave(t, 9, 2);
  const bx2 = 18.956;
  const by2 = 150.698 + wave(t, 8, 3);
  const bx = 52.7473;
  const by = 140.233 + wave(t, 7, 4);

  const cx1 = 93.1319;
  const cy1 = 127.725 + wave(t, 6, 5);
  const cx2 = 110.11;
  const cy2 = 124.326 + wave(t, 6, 6);
  const cx = 121.978;
  const cy = 69.0698;

  const newPath = `
    M121.978 69.0698
    C${x1} ${y1} ${x2} ${y2} ${x} ${y}
    V240
    H0
    C${bx1} ${by1} ${bx2} ${by2} ${bx} ${by}
    C${cx1} ${cy1} ${cx2} ${cy2} ${cx} ${cy}
    Z
  `;

  path.setAttribute('d', newPath);
  requestAnimationFrame(animateWave);
}

animateWave();


/* 두 번째 웨이브 */
const path2 = document.getElementById('wavePath02');

let t2 = 0;

function wave(v, amp, offset = 0) {
  //복합 파형 (넘실거림 핵심)
  return Math.sin(v + offset) * amp + Math.sin((v + offset) * 0.5) * (amp * 0.6);
}

function animateWave2() {
  t2 += 0.012; //살짝 빠르게

  //상단 물결 (크게 출렁)
  const x1 = 123.969;
  const y1 = 16.6919 + wave(t2, 14);
  const x2 = 39.978;
  const y2 = wave(t2, 16, 1);
  const x = 0;
  const y = 0;

  //하단 오른쪽 물결
  const bx1 = 306;
  const by1 = 202.326 + wave(t2, 10, 2);
  const bx2 = 280.22;
  const by2 = 182.093 + wave(t2, 9, 3);
  const bx = 234.264;
  const by = 169.448 + wave(t2, 8, 4);

  const cx1 = 179.341;
  const cy1 = 154.335 + wave(t2, 7, 5);
  const cx2 = 156.251;
  const cy2 = 150.227 + wave(t2, 6, 6);
  const cx = 140.11;
  const cy = 83.4593;

  const newPath = `
    M140.11 83.4593
    C${x1} ${y1} ${x2} ${y2} ${x} ${y}
    V290
    H306
    C${bx1} ${by1} ${bx2} ${by2} ${bx} ${by}
    C${cx1} ${cy1} ${cx2} ${cy2} ${cx} ${cy}
    Z
  `;

  path2.setAttribute('d', newPath);
  requestAnimationFrame(animateWave2);
}

animateWave2();


/* 탭 버튼 */
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.project-card-wrap');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    //탭 active 제거
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    //모든 콘텐츠 숨기기
    contents.forEach(content => {
      content.classList.remove('active');
    });

    //클릭한 탭에 맞는 콘텐츠 보여주기
    const target = tab.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});


/* 팝업 배열 */
const projects = [
  {
    title: "국립공원단 리뉴얼",
    team: "1명",
    period: "7일",
    workType: "웹 - 반응형 구현",
    desc: "국립공원단 리뉴얼 프로젝트를 진행했습니다.\n디자인부터 퍼블리싱까지 전 과정을 맡으며 브랜드의 정체성을 유지하는 동시에 사용자 편의성을 높이는 방향으로 작업했습니다.\n이를 통해 브랜드 아이덴티티와 사용성의 균형에 대해 많은 것을 배울 수 있었습니다.",
    image: "image/popup-project01.png",
    icons: [
      "image/icon01.png",
      "image/icon02.png",
      "image/icon03.png",
      "image/icon05.png",
      "image/icon06.png",
      "image/icon07.png",
      "image/icon08.png"
    ],
    buttons: [
      { text: "기획서", url: "https://www.figma.com/design/Ui8qBzNovI6ykrwsKE71ma/%EB%A6%AC%EB%89%B4%EC%96%BC?node-id=0-1&t=5hYdFnuahCrGSav0-1" },
      { text: "사이트 바로가기", url: "https://cookieo3o.github.io/national-park/", class: "site-shortcut" }
    ]
  },
  {
    title: "닌텐도 리뉴얼",
    team: "4명",
    period: "10일",
    workType: "웹 - 반응형 구현",
    desc: "닌텐도 리뉴얼 팀 프로젝트를 진행했습니다.\n팀원들과 협업해 다양한 아이디어를 반영하며 사용자 경험을 중심으로 구조를 개선하였습니다.\n이를 통해 협업의 중요성과 경험을 살린 설계에 대해 배울 수 있었습니다.",
    image: "image/popup-project02.png",
    icons: [
      "image/icon01.png",
      "image/icon03.png",
      "image/icon04.png",
      "image/icon05.png",
      "image/icon06.png"
    ],
    buttons: [
      { text: "기획서", url: "https://www.figma.com/deck/6irwv1qNXooL2BzOl1OsOT/%EC%97%90%EC%8A%A4%ED%8C%8C-%EB%8B%8C%ED%85%90%EB%8F%84%EB%A6%AC%EB%89%B4%EC%96%BCppt?node-id=35-107&t=X6K4fdGySijgjSXt-1" },
      { text: "사이트 바로가기", url: "https://cookieo3o.github.io/nintendo-renewal/", class: "site-shortcut" },
      { text: "GitHub", url: "https://github.com/cookieo3o/nintendo-renewal" },
      { text: "Figma", url: "https://www.figma.com/design/SsP6DWrFjImVIl5autmaDN/%EC%97%90%EC%8A%A4%ED%8C%8C-%EB%8B%8C%ED%85%90%EB%8F%84%EB%A6%AC%EB%89%B4%EC%96%BC?node-id=0-1&t=68126yaI9kY6Y6bp-1" }
    ]
  },
  {
    title: "그라운드 시소 리뉴얼",
    team: "1명",
    period: "7일",
    workType: "웹 - 반응형 미구현",
    desc: "그라운드 시소 리뉴얼을 작업했습니다.\n 브랜드 의미를 반영해 컬러를 선택하여 로고를 리브랜딩하고 보다 직관적이고 접근성 높은 디자인으로 개선했습니다.\n전체 과정을 작업하며 디자인과 개발의 연결 흐름을 이해할 수 있었고 첫 프로젝트라 어려움도 있었지만 그 과정에서 기본적인 역량을 쌓으며 한 단계 성장할 수 있었습니다.",
    image: "image/popup-project03.png",
    icons: [
      "image/icon01.png",
      "image/icon02.png",
      "image/icon03.png",
      "image/icon07.png",
      "image/icon08.png"
    ],
    buttons: [
      { text: "웹 스타일 가이드", url: "https://cookieo3o.github.io/siso/style%20guide.pdf"},
      { text: "사이트 바로가기", url: "https://cookieo3o.github.io/siso/", class: "site-shortcut" }
    ]
  },
  {
    title: "세븐틴 리뉴얼",
    team: "1명",
    period: "7일",
    workType: "웹 - 반응형 미구현",
    desc: "2021년 8th MINI ALBUM ‘Your Choice’의 수록곡 Ready to Love 콘셉트를 중심으로 전체 디자인 방향을 재구성하여 앨범 커버에 맞게 컬러 톤과 비주얼 무드를 섬세하게 조정했습니다.\n이번 작업을 통해 음악 콘셉트를 시각 요소로 해석하여 표현 방식에 대해 깊이 있게 경험할 수 있었습니다.",
    image: "image/popup-project04.png",
    icons: [
      "image/icon01.png",
      "image/icon02.png",
      "image/icon03.png",
      "image/icon07.png",
      "image/icon08.png"
    ],
    buttons: [
      { text: "사이트 바로가기", url: "https://cookieo3o.github.io/seventeen/", class: "site-shortcut" }  
    ]
  },
  {
    title: "쇼핑몰 상세 페이지 디자인",
    team: "1명",
    period: "5일",
    workType: "제품 상세 페이지 디자인",
    desc: "쇼핑몰 상세 페이지 디자인 작업입니다.\n기존 공장형 상세페이지를 브랜드 특성에 맞게 리디자인했습니다.\n핵심 정보는 강조되도록 구조를 재정리했으며 벡터 요소는 AI에 의존하지 않고 직접 제작해 완성도를 높였습니다.",
    image: "image/popup-project05.png",
    icons: [
      "image/icon07.png",
      "image/icon08.png"
    ]
  },
  {
    title: "우무 리브랜딩",
    team: "1명",
    period: "5일",
    workType: "리브랜딩",
    desc: "우무 리브랜딩 프로젝트를 진행했습니다.\n'UMU’ 이니셜을 활용해 로고에 의미를 더하고, 기존보다 귀엽고 활용도 높은 방향으로 디자하여  다양한 매체에 적용될 수 있도록 확장성을 고려했습니다.\n 처음 진행한 로고 작업이라 어려움도 있었지만, 브랜드를 시각적으로 풀어내는 과정에서 많은 것을 배울 수 있었습니다.",
    image: "image/popup-project06.png",
    icons: [
      "image/icon07.png",
      "image/icon08.png"
    ],
    buttons: [
      { text: "스타일 가이드", url: "https://cookieo3o.github.io/siso/umu%20style%20guide.pdf" }
    ]
  } ,
  {
    title: "인트로 디자인",
    team: "1명",
    period: "인트로 당 5시간",
    workType: "교육 콘텐츠 인트로",
    desc: "교육 콘텐츠 인트로 화면 디자인 작업입니다.\n학습 콘텐츠 특성에 맞게 차분한 분위기와 높은 가독성을 중심으로 디자인했습니다.\n초반에는 방향을 잡는 데 어려움이 있었지만 작업을 통해 가독성과 색 사용, 제목 구성 방식에 대해 배울 수 있었습니다.",
    image: "image/popup-project07.png",
    icons: [
      "image/icon07.png",
      "image/icon08.png"
    ]
  }
  ,
  {
    title: "인트로 비디오 제작",
    team: "1명",
    period: "5시간",
    workType: "교육 콘텐츠 인트로 영상",
    desc: "교육 콘텐츠 인트로 화면 영상 작업입니다.\nAfter Effects를 활용해 과하지 않으면서도 정적이지 않은 흐름으로 연출했습니다.\n플래시 작업 위주에서 처음 에펙으로 확장한 작업이었으며 모션과 타이밍에 대한 이해를 넓히는 계기가 되었습니다.",
    image: "image/한글 인트로.mp4",
    icons: [
      "image/icon10.png"
    ]
  }    
];



/* 팝업 요소 */
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.popup-close');
const cards = document.querySelectorAll('.project-card');

const popupMediaWrap = document.querySelector('.popup-left');
const popupTitle = document.querySelector('.popup-title');
const popupDescTxt = document.querySelectorAll('.popup-desc-txt');
const popupDescriptionWrap = document.querySelector('.popup-explain');
const iconWrap = document.querySelector('.popup-icon-wrap');
const buttonBox = document.querySelector('.button-box');


/* 팝업 열기 함수 (공통) */
function openPopupById(id) {
  const data = projects[id];
  if (!data) return;

  /* 왼쪽 미디어 */
  popupMediaWrap.innerHTML = '';

  if (data.image.endsWith('.mp4')) {
    const video = document.createElement('video');
    video.src = data.image;
    video.autoplay = true;
    video.loop = false;
    video.muted = true;
    video.playsInline = true;
    video.controls = true;
    popupMediaWrap.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = data.image;
    popupMediaWrap.appendChild(img);
  }

  /* 기본 정보 */
  popupTitle.textContent = data.title;
  popupDescTxt[0].textContent = data.team;
  popupDescTxt[1].textContent = data.period;
  popupDescTxt[2].textContent = data.workType;

  /* 설명 */
  const lines = data.desc.split('\n');
  popupDescriptionWrap.innerHTML = lines
    .map(line => `<p>${line}</p>`)
    .join('');

  /* 아이콘 */
  iconWrap.innerHTML = '';
  if (data.icons) {
    data.icons.forEach(icon => {
      const div = document.createElement('div');
      div.className = 'popup-icon';

      const img = document.createElement('img');
      img.src = icon;

      div.appendChild(img);
      iconWrap.appendChild(div);
    });
  }

  /* 버튼 */
  buttonBox.innerHTML = '';
  if (data.buttons) {
    data.buttons.forEach(btn => {
      const button = document.createElement('button');
      button.className = `popup-btn ${btn.class ? btn.class : ''}`;
      button.textContent = btn.text;

      button.addEventListener('click', (e) => {
        e.stopPropagation();
        if (btn.url) window.open(btn.url);
      });

      buttonBox.appendChild(button);
    });
  }

  /* 팝업 열기 */
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}


/* 카드 클릭 → 팝업 */
cards.forEach(card => {
  card.addEventListener('click', () => {
    openPopupById(card.dataset.id);
  });
});


/* 팝업 닫기 */
function closePopup() {
  popup.style.display = 'none';
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closePopup);

popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePopup();
});


/* 모바일 메뉴 */
const toggleBtn = document.querySelector('.toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

let menuOpen = false;

toggleBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;

  toggleBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('menu-open', menuOpen);
});


/* 모바일 메뉴 → 팝업 열기 */
mobileLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = link.dataset.id;
    openPopupById(id);

    //메뉴 닫기
    mobileMenu.classList.remove('active');
    toggleBtn.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

});
