const header = document.querySelector('header');
const logo = document.querySelector('.logo img');
const navLinks = document.querySelectorAll('nav ul li a');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const membershipDuration = document.getElementById('duration');
const agree = document.getElementById('agree');

let lastScrollY = 0;
let isHidden = false;

function ValidateRegister() {
  let isValid = true;
  let errorMessage = '';

  if (!firstName.value.trim()) {
    errorMessage += 'First name is required.\n';
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(firstName.value.trim())) {
    errorMessage += 'First name must contain only letters.\n';
    isValid = false;
  }

  if (!lastName.value.trim()) {
    errorMessage += 'Last name is required.\n';
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(lastName.value.trim())) {
    errorMessage += 'Last name must contain only letters.\n';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    errorMessage += 'Email is required.\n';
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    errorMessage += 'Please enter a valid email address.\n';
    isValid = false;
  }

  if (!address.value.trim()) {
    errorMessage += 'Address is required.\n';
    isValid = false;
  }

  if (!membershipDuration.value || membershipDuration.value === 'default') {
    errorMessage += 'Please select a membership duration.\n';
    isValid = false;
  }

  if (!agree.checked) {
    errorMessage += 'You must agree to the terms and conditions.\n';
    isValid = false;
  }

  if (!isValid) {
    alert(`Please fix the following errors:\n\n${errorMessage}`);
  } else {
    alert('Your are now a member of Ahoy Barbershop');
  }

  return isValid;
}


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

