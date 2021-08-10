/* ------------------------------------------------------------------------------
@name: Header Search
@description: Header Search
--------------------------------------------------------------------------------- */

const HeaderSearch = (() => {

  const handleClick = () => {
    let _buttonSearch = $('.js-button-search'),
        _navItem = $('.js-nav-items'),
        _showForm = $('.header-search-section__form'),
        _headerContent = $('.header__content'),
        _overlaySearch = $('.overlay'),
        _buttonSearchClose = $('.js-header-search-section__close'),
        _jsSearchForm = $('.js-search-form')

        // handle popup keyup
        $('body').on('keyup', (e) => {
          if (e.which == 27 && $('.header__content').hasClass('showed')) {
            $(_headerContent).removeClass('showed');
            $(_overlaySearch).removeClass('showed');
            $(_showForm).removeClass('showed');
            $('body').addClass('rm-scroll');
          }
        });

        // handle button click
        $(_buttonSearch).on('click', function() {
          setTimeout(function(){
          $(_showForm).addClass('showed');
        }, 700);
          $(_headerContent).addClass('showed');
          $(_overlaySearch).addClass('showed');
          $('body').addClass('rm-scroll');
        });

        $('body').on('click', function() {
          if ($('body').hasClass('header__content.showed')) {
            Scrolllable.disable();
            $('body').removeClass('header__content.showed ');
            $('.header__content').fadeOut(500);
          }
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