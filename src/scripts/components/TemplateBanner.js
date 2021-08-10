/* ------------------------------------------------------------------------------
@name: Template Banner
@description: Template Banner
--------------------------------------------------------------------------------- */

const TemplateBanner = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector =  $('.js-template-banner');
    const _itemLength = $('.js-template-banner .template-banner__item').length;
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
        dots: true,
        nav: false,
        loop: false,
        touchDrag: false,
        mouseDrag: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 8000
      });
    } else {
      if(_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
      _selector.addClass('template-banner--single');
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

export default TemplateBanner;