const menuicon = document.querySelector('header .nav');

const navitems = document.querySelector('header .items');

const backdrop = document.querySelector('header .backdrop-layer');

menuicon.addEventListener('click', e => {
  navitems.classList.add('show');
});

backdrop.addEventListener('click', e => {
  navitems.classList.remove('show');
});
