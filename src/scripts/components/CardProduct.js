/* ------------------------------------------------------------------------------
@name: Card Product
@description: Card Product
--------------------------------------------------------------------------------- */

const cardProduct = (() => {

  // --- handleCheckHeight
  const setHeight = () => {
    handleResetHeight();
    let _height = 0;
    $('.card-product__list .card-product__card').each((i, e) => {
      if (_height < $(e).find('.card-product__card__txt').height()) {
        _height = $(e).find('.card-product__card__txt').height();
      }
    });
    $('.card-product__card__txt').height(_height);
  }

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.card-product__card__txt').attr('style');
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.card-product__card__txt').removeAttr('style');
    }
  }

  // - init
  const init = () => {
    setHeight();
  }

  return {
    init,
    checkHeight: setHeight
  }

})();

export default cardProduct
