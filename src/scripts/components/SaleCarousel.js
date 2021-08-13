/* ------------------------------------------------------------------------------
@name: Sale Carousel
@description: Sale Carousel
--------------------------------------------------------------------------------- */

const SaleCarousel = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector =  $('.js-sale-carousel');
    const _itemLength = $('.js-sale-carousel .sale-carousel__item').length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        autoHeight: true,
        dots: true,
        nav: false,
        loop: true,
        touchDrag: true,
        mouseDrag: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dotsSpeed: 1000,
        autoplaySpeed: 1000,
        dragEndSpeed: 750,
        autoplayTimeout: 8000
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
      _selector.addClass('hero-banner--single');
    }
  }

  // init
  const init = () => {
    handleRunCarousel();
  }

  return {
    init
  }

})();

export default SaleCarousel;
