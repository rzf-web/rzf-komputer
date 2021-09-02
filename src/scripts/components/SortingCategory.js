const SortingCategory = (() => {

  // handleClick
  const handleDropdown = () => {
  $(window).on('click', function(){
    $('.js-sorting-dd').removeClass('product__sorting--showed');
  });

  $('.product__sorting-select').on('click', function(e){
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

  // init 
  const init = () => {
    handleDropdown();
  }

  return {
    init
  }
})();

export default SortingCategory