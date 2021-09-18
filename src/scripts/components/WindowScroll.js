/* ------------------------------------------------------------------------------
@name: WindowScroll
@description: WindowScroll
--------------------------------------------------------------------------------- */

// --- WindowScroll
const WindowScroll = (() => {
  let _lastScrollTop = 0;
  let _delta = 4;
  let _headerHeight = $('.header').height() / 2;
  let _sticky = $('.js-sticky').offset() || null;

  // --- handleScroll
  const handleScroll = () => {
    let _didScroll;

    $(window).scroll(() => {
      _didScroll = true;
      setInterval(() => {
        if (_didScroll) {
          handleHeaderScroll();
          _didScroll = false;
        }
      }, 200);
    });
  }

  // --- handleHeaderScroll
  const handleHeaderScroll = () => {

    // --- _scrollTop
    const _scrollTop = $(window).scrollTop();

    // --- Make sure they scroll more than _delta
    if (Math.abs(_lastScrollTop - _scrollTop) <= _delta) {
      return;
    }


    // --- Scroll Down
    if (_scrollTop > _lastScrollTop && _scrollTop > _headerHeight) {
      $('body').addClass('window-scrolled');

      $('.js-sticky').css({
        top: '0',
      });

    } else {
      // --- Scroll Up
      if (_scrollTop + $(window).height() < $(document).height()) {
      $('body').removeClass('window-scrolled');
        if (_sticky !== null) {
          if (window.pageYOffset <= _sticky.top) {
          $('.js-sticky').css({
            top: '0',
          });
          } else {
            $('.js-sticky').css({
              top: '70px',
            });
          }
        }
      }
    }

    _lastScrollTop = _scrollTop;

  }

  // --- init
  const init = () => {
    handleHeaderScroll();
    handleScroll();

  }

  // --- return
  return {
    init,
    checkScroll: handleScroll

  }

})();

export default WindowScroll;
