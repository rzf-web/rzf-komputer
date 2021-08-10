/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

// --- Footer
const Footer = (() => {

  const _width = 767.98;

  // handle Click Acccordion
  const handleClickAccordion = () => {
    $('.js-footer-accordion .footer__title').on('click', (e) => {
      const _this = $(e.currentTarget);

      if ($(window).width() <= _width) {
        if (_this.parents('.footer__menu__item').hasClass("footer__menu__item--show")) {
          _this.parents('.footer__menu__item').removeClass("footer__menu__item--show").find(".footer__nav").slideUp();
        } else {
          // _this.parents('.js-footer-accordion').removeClass("footer__menu__item--show").find(".footer__nav").slideUp().find('.footer__menu__item');
          _this.parents('.footer__menu__item').siblings('.footer__menu__item').removeClass("footer__menu__item--show").find(".footer__nav").slideUp();
          _this.parents('.footer__menu__item').find(".footer__nav").slideDown().parents('.footer__menu__item').addClass("footer__menu__item--show")
        }
      }
    });
  }

  // handle Destroy Accordion
  const handleDestroyAccordion = () => {
    if ($(window).width() > _width) {
      $('.js-footer-accordion .footer__menu__item').removeClass('footer__menu__item--show').find('.footer__nav').removeAttr('style');
    }
  }

  // --- handleSet
  const handleSet = () => {
    const _footerHeight = $('.footer').innerHeight();
    if ($(window).width() >= _width) {
      $('.main-site').css('paddingBottom', _footerHeight);
    } else {
      $('.main-site').removeAttr('style');
    }

  }

  // --- init
  const init = () => {
    handleSet();
    handleClickAccordion();
  }

  // --- return
  return {
    init,
    setFooter: handleSet,
    destroyAccordion: handleDestroyAccordion
  }

})();

export default Footer;
