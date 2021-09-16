/* ------------------------------------------------------------------------------
@name: OrderStatus
@description: OrderStatus
--------------------------------------------------------------------------------- */

const OrderStatus = (() => {

  // handleClick
  const handleClick = () => {
    $('.js-show-order').on('click', (e) => {
      const _val = $(e.currentTarget);
      if ($('body').hasClass('show-order')) {
        $('body').removeClass('show-order').find('.order__box').fadeOut(500);
      } else {
        $('body').addClass('show-order').find('.order__box').fadeIn(300);
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

export default OrderStatus
