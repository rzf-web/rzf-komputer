/* ------------------------------------------------------------------------------
@name: Sale
@description: Sale
--------------------------------------------------------------------------------- */

const Sale = (() => {
  
  const HandleCountdown = () => {
    $('.js-countdown-set').countdown('2021/09/25', function(e) {
      $(this).html(event.strftime(''
        + '<li class="sale__content__countdown__item"><span class="countdown-time__number">%D</span> hari </li>'
        + '<li class="sale__content__countdown__item"><span class="countdown-time__number">%H</span> jam </li>'
        + '<li class="sale__content__countdown__item"><span class="countdown-time__number">%M</span> menit </li>'
        + '<li class="sale__content__countdown__item"><span class="countdown-time__number">%S</span> detik </li>'));
    })
  } 

  // - init
  const init = () => {
    HandleCountdown();
  }

  return {
    init
  }

})();

export default Sale