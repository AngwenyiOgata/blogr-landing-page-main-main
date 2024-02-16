(function () {
  'use strict';

  const navMenus = document.querySelectorAll('li ol');
  const menuLinks = document.querySelectorAll('#navLink');
  const menuLinksSvg = document.querySelectorAll('#navLink svg');
  const hamburger = document.querySelector('.hamburger')
  const mobileNav = document.querySelector('.app__header_mobile section')

  function toggleMenus() {
    for (let i = 0; i < navMenus.length; i++) {
      navMenus[i].className = 'hidden';
    }
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        let thisMenu = this.parentNode.querySelector('ol');
        let thisMenuSvg = this.querySelector('svg')

        if (thisMenu.classList.contains('hidden')) {
          for (let i = 0; i < navMenus.length; i++) {
            navMenus[i].className = 'hidden';
            for (let i = 0; i < menuLinksSvg.length; i++) {
              menuLinksSvg[i].classList.remove('transformed')
            }
          }
          thisMenu.className = 'app__header-ul-ol';
          thisMenuSvg.classList.add('transformed')
        } else {
          thisMenu.className = 'hidden';
          thisMenuSvg.classList.remove('transformed')
        }
      });
    }
  }
  toggleMenus();
  
  hamburger.addEventListener('click', function (evt) {
    evt.preventDefault()
    // alert('clicked')
    if (mobileNav.classList.contains('mobile-nav')) {
      mobileNav.className = 'hidden'
      hamburger.src = './images/icon-hamburger.svg'
    } else {
      mobileNav.className = 'mobile-nav'
      hamburger.src = './images/icon-close.svg'
    }
  })


})();



