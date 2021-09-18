const SortingCategory = (() => {

  // handleClick
  const handleDropdown = () => {
    $(window).on('click', () => {
      $('.js-sorting-dd').removeClass('product__sorting--showed');
    });

    $('.product__sorting-select').on('click', (e) => {
      e.stopPropagation();
    });

  $('.js-sorting-dd .product__sorting-select .product__sorting-title').on('click', function() {
      if ($(this).parents('.js-sorting-dd').hasClass('product__sorting--showed')) {
        $(this).parents('.js-sorting-dd').removeClass('product__sorting--showed');
      } else {
        $('.js-sorting-dd').removeClass('product__sorting--showed');
        $(this).parents('.js-sorting-dd').addClass('product__sorting--showed');
      }
    });
  }

  // handleSticky 
  const handleSticky = () => {
    let _sticky = $('.js-sticky').offset() || null;
    
    if (_sticky !== null ) {
      $(window).on('scroll', () => {
        if (window.pageYOffset >= _sticky.top) {
          $('.js-sticky').addClass('sticky');
        } else {
          $('.js-sticky').removeClass('sticky');
        }
      });
    }
  }

  // init 
  const init = () => {
    handleDropdown();
    handleSticky();
  }

  return {
    init
  }
})();

export default SortingCategory