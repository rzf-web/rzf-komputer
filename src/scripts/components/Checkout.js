/* ------------------------------------------------------------------------------
@name: Checkout
@description: Checkout
--------------------------------------------------------------------------------- */

import {
  Scrolllable
} from 'utilities';

const Subscribe = (() => {

  // handle subscribe popup
  const handleClick = () => {
    $('.js-checkout').on('click', (e) => {
      const _this = $(e.currentTarget),
      _parents = _this.parents('body');

      if (_parents.hasClass('rzfk-checkout--show')) {
        Scrolllable.enable();
        _parents.removeClass('rzfk-checkout--show');
      } else {
        Scrolllable.disable();
        _parents.addClass('rzfk-checkout--show');
        $('.rzfk-checkout__popup').fadeIn(500);
        _parents.find('.zeal-form__input').focus();
      }

    });

    $('body').on('click', function() {
      if ($('body').hasClass('rzfk-checkout--show')) {
        Scrolllable.enable();
        $('body').removeClass('rzfk-checkout--show');
        $('.rzfk-checkout__popup').fadeOut(500);
      }
    });

    $('body').on('click', '.js-checkout, .rzfk-checkout__popup__content', function(e) {
      e.stopPropagation();
    });

    $('body').on('click', '.js-hide-subscribe', function() {
      if ($('body').hasClass('rzfk-checkout--show')) {
        Scrolllable.enable();
        $('body').removeClass('rzfk-checkout--show');
        $('.rzfk-checkout__popup').fadeOut(500);
      }
    });

  }

  const handleKeyup = () => {
    $('body').on('keyup', (e) => {
      if (e.which == 27 && $('body').hasClass('rzfk-checkout--show')) {
        Scrolllable.enable();
        $('body').removeClass('rzfk-checkout--show');
        $('.rzfk-checkout__popup').fadeOut(500);
      }
    });
  }

  // init
  const init = () => {
    handleClick();
    handleKeyup();
  }

  return {
    init
  }

})();

export default Subscribe
