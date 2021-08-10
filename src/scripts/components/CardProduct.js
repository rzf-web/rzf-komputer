/* ------------------------------------------------------------------------------
@name: Card Product
@description: Card Product
--------------------------------------------------------------------------------- */

const cardProduct = (() => {

  // - handleRunCarouselWidget
  const handleRunCarouselWidget = () => {
    const _selector =  $('.js-card-carousel');
    const _widthItem = $('.js-card-carousel .card__item').outerWidth(true) * $('.js-card-carousel .card__item').length;
    const _widthList = $('.best-product__content').width()

    if (_selector.hasClass('owl-carousel')) {
      // destroy carousel
      _selector.owlCarousel('destroy');
    }

    // init carousel more extra small
    if ($(window).width() > 576) {

      // --- check if _widthList < _widthItem
      if (_widthList < _widthItem) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          loop: false,
          autoWidth: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: false,
          items: 1,
          nav: true,
          rewind: false,
          dots: true,
          autoplay: false,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          autoplaySpeed: 500,
          navSpeed: 500
        });

        _selector.removeClass('best-product__content--show-button-left').addClass('best-product__content--show-button-right');
        _selector.on('translated.owl.carousel', (event) => {
          if (_selector.find('.owl-prev').hasClass('disabled')) {
            _selector.removeClass('best-product__content--show-button-left').addClass('best-product__content--show-button-right');
          } else {
            _selector.addClass('best-product__content--show-button-left');
          }

          if (_selector.find('.owl-next').hasClass('disabled')) {
            _selector.removeClass('best-product__content--show-button-right').addClass('best-product__content--show-button-left');
          } else {
            _selector.addClass('best-product__content--show-button-right');
          }
        });
      } else {
        _selector.removeClass('owl-carousel');
      }
    } else {
      _selector.removeClass('owl-carousel');
    }
  }

  // - init
  const init = () => {
    handleRunCarouselWidget();
  }

  return {
    init,
    runCarouselWidget: handleRunCarouselWidget
  }

})();

export default cardProduct
