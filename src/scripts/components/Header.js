/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

// --- utilities
import {
  Scrolllable
} from 'utilities';

// --- Header
const Header = (() => {

  // --- handleMobileNav
  const handleMobileNav = () => {

    // nav open
    $('.js-nav').on('click', () => {
      if ($('body').hasClass('show-nav')) {
        Scrolllable.enable();
        $('body').removeClass('show-nav');
      } else {
        Scrolllable.disable();
        $('body').addClass('show-nav');
      }
    });

  }

  // --- handleScrollMobileMenu
  const handleScrollMobileMenu = () => {
    $('.js-mobile-menu').on('scroll', (e) => {
      if ($(e.currentTarget).scrollTop() > 4) {
        $('body').addClass('on-scroll-mobile-menu');
      } else {
        $('body').removeClass('on-scroll-mobile-menu');
      }
    });
  }

  // --- handleCheckClass
  const handleCheckClass = () => {
    if ($(window).width() >= 992) {
      Scrolllable.enable();
      $('body').removeClass('show-nav');
    }
  }

  // --- handleClick
// const handleClick = () => {
//   // let _this = $('.js-button-cart');
//     $('body').on('click', function() {
//       $('.js-cart').removeClass('showed');
//     });

//     $('.js-cart').on('click', function(e) {
//       e.stopPropagation();
//     });

//     $('.js-cart').on('click', function() {
//       // alert(100000);
//       if($(this).find('.cart-list__items').hasClass('showed')) {
//         $(this).find('.cart-list__items').removeClass('showed');
//       } else {
//         $('.cart-list__items').removeClass('showed');
//         $(this).find('.cart-list__items').addClass('showed');
//       }
//     });
//   }

  // --- init
  const init = () => {
    handleMobileNav();
    handleScrollMobileMenu();
    // handleClick();
  }

  // --- return
  return {
    init,
    checkClass: handleCheckClass
  }

})();

export default Header;
