/* ------------------------------------------------------------------------------
@name: Header Search
@description: Header Search
--------------------------------------------------------------------------------- */

import {
  Scrolllable
} from 'utilities';

const HeaderSearch = (() => {

  const handleClick = () => {
    let _buttonSearch = $('.js-button-search'),
        _buttonCart = $('.js-button-cart'),
        _navItem = $('.js-nav-items'),
        _showForm = $('.header-search-section__form'),
        _headerContent = $('.header__content'),
        _overlaySearch = $('.overlay'),
        _overlayCartList = $('.overlay__cart__list'),
        _buttonSearchClose = $('.js-header-search-section__close'),
        _jsSearchForm = $('.js-search-form'),
        _jsButtonClose = $('.js-header-search-section__close'),
        _jsCart = $('.js-cart'),
        _jsCartList = $('.js-cart-list'),
        _jsLogo = $('.header__logo'),
        _jsNav = $ ('.burger-menu')


        // handle search keyup
        $('body').on('keyup', (e) => {
          if (e.which == 27 && $('.header__content').hasClass('showed')) {
            hideElement();
          }
        });

        // handle click out area
        $(_overlaySearch).on('click', function(){
            hideElement();
        });

        // handle button close
        $(_jsButtonClose).on('click', function() {
            hideElement();
        });

        function hideElement() {
          $(_headerContent).removeClass('showed');
          $(_overlaySearch).removeClass('showed');
          $(_showForm).removeClass('showed');
          Scrolllable.enable();
          $(_jsLogo).removeClass('showed');
          $(_jsNav).removeClass('showed');
        }

        // handle cart on click
        $(_jsCart).on('click', function(e){
          e.stopPropagation();
          $(_jsCartList).toggleClass('showed');
          $(_overlayCartList).addClass('showed');
          // console.log($(_jsCartList).html());
          $('body').removeClass('show-nav');

        });

        $(_jsCartList).on('click', function(e) {
          e.stopPropagation();
        });

        $(window).on('click', function() {
          $('.js-cart-list').removeClass('showed');
          // console.log('berhasilllll...!!! selamat yaaa');
        });


        // handle button click
        $(_buttonSearch).on('click', function() {
          setTimeout(function(){
          $(_showForm).addClass('showed');
          $('body').removeClass('show-nav');
        }, 700);
          $(_headerContent).addClass('showed');
          $(_overlaySearch).addClass('showed');
          $(_jsLogo).addClass('showed');
          $(_jsNav).addClass('showed');
          $('body').addClass('rm-scroll');
        });
      }

  // init
  const init = () => {
    handleClick();
  }

  return {
    init
  }

})();

export default HeaderSearch