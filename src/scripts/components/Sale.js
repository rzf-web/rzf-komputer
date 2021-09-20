/* ------------------------------------------------------------------------------
@name: Sale
@description: Sale
--------------------------------------------------------------------------------- */

const Sale = (() => {
  
  const handleCountDown = () => {
    let countDownDate = new Date("Oct 16, 2021 10:10:25").getTime();

    // update the count down every 1 second
    let x = setInterval( () => {

    // get today's date and time
    let _now = new Date().getTime();

    // find the distance between now and the count down date
    let _distance = countDownDate - _now;

    // time calculations for days, hours, minutes and seconds
    let _days = Math.floor(_distance / (1000 * 60 * 60 * 24));
    let _hours = Math.floor((_distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let _minutes = Math.floor((_distance % (1000 * 60 * 60)) / (1000 * 60));
    let _seconds = Math.floor((_distance % (1000 * 60)) / 1000);

  // set result into html
  $('.js-countdown-set').html(`
    <li class="sale__content__countdown__item">
    <h5 class="sale__content__countdown__item__number">${_days}</h5> hari</li>
    <li class="sale__content__countdown__item">
    <h5 class="sale__content__countdown__item__number">${_hours}</h5> jam</li>
    <li class="sale__content__countdown__item">
    <h5 class="sale__content__countdown__item__number">${_minutes}</h5> menit</li>
    <li class="sale__content__countdown__item">
    <h5 class="sale__content__countdown__item__number">${_seconds}</h5> detik</li>`);

  // when countdown is finished
  if (_distance < 0) {
    clearInterval(x);
    $('.sale__content__txt').html(`
      <p class='sale__content__txt__alert-limited'>Maaf, promo sudah habis. Nantikan promo berikutnya. Terimakasih...</p>`);
    }
    // $('.js-button-sale').remove();

    // $('.js-countdown-set').html(`
    //   <p>Maaf, promo sudah habis. Nantikan promo berikutnya</p>`);
    // }

  }, 1000);
} 

  // - init
  const init = () => {
    handleCountDown();
  }

  return {
    init
  }

})();

export default Sale