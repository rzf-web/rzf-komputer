const SortingCategory = (() => {

  // handleClick
  const handleDropdown = () => {
  $(window).on('click', function(){
    $('.js-sorting-dd').removeClass('product__sorting--show');
  });

  $('.product__sorting').on('click', function(e){
    e.stopPropagation();
  });

  $('.js-sorting-dd .product__sorting-select').on('click', function() {
      if ($(this).parents('.js-sorting-dd').hasClass('product__sorting--show')) {
        $(this).parents('.js-sorting-dd').removeClass('product__sorting--show');
      } else {
        $('.js-sorting-dd').removeClass('product__sorting--show');
        $(this).parents('.js-sorting-dd').addClass('product__sorting--show');
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