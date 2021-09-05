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
        _jsNav = $('.burger-menu'),
        _jsSearchResult = $('.js-search-result')


        // handle search keyup
        $('body').on('keyup', (e) => {
          if (e.which == 27 && $('.header__content').hasClass('showed')) {
            hideElement();
          }
        });

        // handle click out area
        $(_overlaySearch).on('click', () => {
            hideElement();
        });

        // handle button close
        $(_jsButtonClose).on('click', () => {
            hideElement();
        });

        // function hide element groupping
        function hideElement() {
          $(_headerContent).removeClass('showed');
          $(_overlaySearch).removeClass('showed');
          $(_showForm).removeClass('showed');
          $(_jsSearchResult).removeClass('showed');
          setTimeout( () => {
            
          }, 400)
          Scrolllable.enable();
          $(_jsNav).removeClass('showed');
        }

        // handle cart on click
        $(_jsCart).on('click', (e) => {
          e.stopPropagation();
          $(_jsCartList).toggleClass('showed');
          $(_overlayCartList).addClass('showed');
          // console.log($(_jsCartList).html());
          $('body').removeClass('show-nav');
        });

        $(_jsCartList).on('click', (e) => {
          e.stopPropagation();
        });

        $(window).on('click', () => {
          $('.js-cart-list').removeClass('showed');
        });

        // handle cart button when on click
        $(_buttonSearch).on('click', () => {
          setTimeout( () => {
          $(_showForm).addClass('showed');
          $(_jsSearchResult).addClass('showed');
        }, 600);
          $(_headerContent).addClass('showed');
          $(_overlaySearch).addClass('showed');
          $(_jsNav).addClass('showed');
          setTimeout( () => {
          $('body').removeClass('show-nav');
        }, 400)
          Scrolllable.disable();
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