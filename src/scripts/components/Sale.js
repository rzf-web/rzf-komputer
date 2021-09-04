/* ------------------------------------------------------------------------------
@name: Sale
@description: Sale
--------------------------------------------------------------------------------- */

const Sale = (() => {
  
  const HandleCountdown = () => {
    let countDownDate = new Date("Sep 29, 2021 20:04:25").getTime();
    // Update the count down every 1 second
    let x = setInterval( () => {

    // Get today's date and time
    let _now = new Date().getTime();

    // Find the distance between now and the count down date
    let _distance = countDownDate - _now;

    // Time calculations for days, hours, minutes and seconds
    let _days = Math.floor(_distance / (1000 * 60 * 60 * 24));
    let _hours = Math.floor((_distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let _minutes = Math.floor((_distance % (1000 * 60 * 60)) / (1000 * 60));
    let _seconds = Math.floor((_distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $('.js-countdown-set').html(`
    <li class="sale__content__countdown__item">
    <h5 class="sale__content__countdown__item__number">${_days}</h5> hari</li>
    <li class="sale__content__countdown__item">
    <h5 class="sale__content__countdown__item__number">${_hours}</h5> jam</li>
    <li class="sale__content__countdown__item">
    <h5 class="sale__content__countdown__item__number">${_minutes}</h5> menit</li>
    <li class="sale__content__countdown__item">
    <h5 class="sale__content__countdown__item__number">${_seconds}</h5> detik</li>`);

  // If the count down is finished, write some text
  if (_distance < 0) {
    clearInterval(x);
    $('.js-countdown-set').html(`
      <p>Maaf, promo sudah habis!!</p>`);
  }
}, 1000);

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