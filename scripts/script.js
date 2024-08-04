const sites = [
  {
    img: 'images/works/ucm-clone.png',
    alt: 'UCM Clone',
    link: 'https://calton-gigueira.github.io/projeto-ucm/',
  },
  {
    img: 'images/works/basic-portfolio.png',
    alt: 'Basic Portfolio',
    link: 'https://calton-gigueira.github.io/basic-portfolio/',
  },
  {
    img: 'images/works/tesla-clone.png',
    alt: 'Tesla Clone',
    link: 'https://calton-gigueira.github.io/tesla/',
  },
  {
    img: 'images/works/cordel.png',
    alt: 'Cordel',
    link: 'https://calton-gigueira.github.io/projeto-cordel/',
  },
  {
    img: 'images/works/android.png',
    alt: 'Android',
    link: 'https://calton-gigueira.github.io/projeto-andorid/',
  },
  {
    img: 'images/works/dark_light_mode.png',
    alt: 'Dark & Light Mode',
    link: '',
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

  const a = document.createElement('a');
  a.href = `${site.link}`;
  a.textContent = `${i + 1} - ${site.alt}`;
  a.target = '_blank';

  div.appendChild(img);
  div.appendChild(a);

  container.appendChild(div);
});
