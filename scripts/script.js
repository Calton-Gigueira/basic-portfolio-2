'use strict';

const sites = [
  {
    id: '001',
    img: 'images/works/ucm-clone.png',
    alt: 'UCM Clone',
    link: 'https://calton-gigueira.github.io/projeto-ucm/',
    desc: 'Um clone do Portal de Estudantes da Universidade Católica de Moçambique (UCM). Clique no título para aceder ao site ⬇. 😎',
  },
  {
    id: '002',
    img: 'images/works/basic-portfolio.png',
    alt: 'Basic Portfolio',
    link: 'https://calton-gigueira.github.io/basic-portfolio/',
    desc: 'Um portfolio ficticio que fiz por questões de prática (e diversão 😁 é claro, por que programar deve ser divertido). Clique no título para aceder ao site ⬇. 😎',
  },
  {
    id: '003',
    img: 'images/works/tesla-clone.png',
    alt: 'Tesla Clone',
    link: 'https://calton-gigueira.github.io/tesla/',
    desc: 'Um clone do site oficial da Tesla, fiz por questões de prática, quando estava a aprender a linguagem de programação JavaScript. Clique no título para aceder ao site ⬇. 😎',
  },
  {
    id: '004',
    img: 'images/works/cordel.png',
    alt: 'Cordel',
    link: 'https://calton-gigueira.github.io/projeto-cordel/',
    desc: 'Fiz o site quando estava a aprender as linguagens HTML e CSS, como um exercício para incrementar o meu conhecimento e familiaridade com as tecnologias. (No Curso em Vídeo). Clique no título para aceder ao site ⬇. 😎',
  },
  {
    id: '005',
    img: 'images/works/android.png',
    alt: 'Android',
    link: 'https://calton-gigueira.github.io/projeto-andorid/',
    desc: 'Fiz o site quando estava a aprender as linguagens HTML e CSS, como um exercício para incrementar o meu conhecimento e familiaridade com as tecnologias. (No Curso em Vídeo). Clique no título para aceder ao site ⬇. 😎',
  },
  {
    id: '006',
    img: 'images/works/dark_light_mode.png',
    alt: 'Dark & Light Mode',
    link: '',
    desc: 'Um site básico que faz o toggle dos modos claro e escuro. 😎',
  },
];

const container = document.querySelector('.container');

sites.map((site, i) => {
  const div = document.createElement('div');
  div.className = 'work';

  const img = document.createElement('img');
  img.src = `${site.img}`;
  img.title = `${site.alt}`;
  img.alt = `${site.alt}`;
  img.className = 'show-modal';
  img.id = `${site.id}`;

  const a = document.createElement('a');
  a.href = `${site.link}`;
  a.textContent = `${i + 1} - ${site.alt}`;
  a.target = '_blank';

  div.appendChild(img);
  div.appendChild(a);

  container.appendChild(div);
});

// MODAL WINDOW

const modalContainer = document.querySelector('.modal-container');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = [...document.querySelectorAll('.show-modal')];

const closeModal = () => {
  modalContainer.classList.add('hidden');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  modalContainer.classList.remove('hidden');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnsOpenModal.forEach(button => {
  button.addEventListener('click', () => {
    sites.forEach((site, i) => {
      if (button.id === site.id) {
        document.querySelector('.title').textContent = `${i + 1} - ${site.alt}`;
        document.querySelector('.desc').textContent = `${site.desc}`;

        openModal();
      }
    });
  });
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
