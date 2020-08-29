const modals = () => {
  function bindModul(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();

    trigger.forEach(item => {
      item.addEventListener('click', function (e) {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(window => {
          window.style.display = 'none';
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
      });
    })

    close.addEventListener('click', function () {
      windows.forEach(window => {
        window.style.display = 'none';
      });

      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(window => {
          window.style.display = 'none';
        });

        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      }
    });
  };

  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = '';
    }, time)
  };

  function calcScroll() {
    let scrollWidth = window.innerWidth - document.body.clientWidth;
    return scrollWidth;
  };

  bindModul('.popup__engineer-btn', '.popup__engineer', '.popup__engineer .popup__close');
  bindModul('.phone-link', '.popup', '.popup .popup__close');
  bindModul('.popup__calc-btn', '.popup__calc', '.popup__calc-close');
  bindModul('.popup__calc-button', '.popup__calc-profile', '.popup__calc-profile-close', false);
  bindModul('.popup__calc-profile-button', '.popup__calc-end', '.popup__calc-end-close', false);

  // showModalByTime('.popup', 6000);
};

export default modals;