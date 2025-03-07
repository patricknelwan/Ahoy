const header = document.querySelector('header');
const logo = document.querySelector('.logo img');
const navLinks = document.querySelectorAll('nav ul li a');

let lastScrollY = 0;
let isHidden = false;

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50) {
    header.style.padding = '0.5rem 10rem';
    header.style.opacity = '0.7';
    logo.style.height = '30px';
    navLinks.forEach(link => {
      link.style.fontSize = '14px';
    });
  } else {
    header.style.padding = '1rem 10rem';
    header.style.opacity = '1';
    logo.style.height = '50px';
    navLinks.forEach(link => {
      link.style.fontSize = '16px';
    });
  }

  if (currentScrollY > 100) {
    if (currentScrollY > lastScrollY) {
      header.style.transform = 'translateY(-100%)';
      header.style.opacity = '0';
      isHidden = true;
    }
  }

  if (isHidden && currentScrollY < lastScrollY) {
    header.style.transform = 'translateY(0)';
    header.style.opacity = '1';
    isHidden = false;
  }

  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const banner = document.querySelector('#banner');

  banner.style.marginTop = `${header.offsetHeight}px`;
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinkss = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinkss.classList.toggle("show");
  });
});