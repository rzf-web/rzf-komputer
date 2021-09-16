/* ------------------------------------------------------------------------------
@name: Hero Banner
@description: Hero Banner
--------------------------------------------------------------------------------- */

const HeroBanner = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-banner-promo');
    const _itemLength = $('.js-banner-promo .banner__card').length;
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
        autoplay: true,
        dots: true,
        nav: true,
        loop: false,
        navText: ["<i class='rzfkomputer-chevron-left'></i>","<i class='rzfkomputer-chevron-right'></i>"],
        mouseDrag: true,
        touchGrant: true,
        autoplayHoverPause: false,
        autoplayTimeout: 6000,
        dotsSpeed: 1000,
        autoplaySpeed: 1000,
        dragEndSpeed: 750,
        smartSpeed: 750
      });
    } else {
      if(_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
      _selector.addClass('hero-banner--single');
    }
  }

  // --- init
  const init = () => {
    handleRunCarousel();
  }

  // --- return
  return {
    init
  }

})();

export default HeroBanner;
