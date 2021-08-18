/* ------------------------------------------------------------------------------
@name: Contact
@description: Contact
--------------------------------------------------------------------------------- */

const Contact = (() => {

  // - handleShowAlert
  const handleShowAlert = () => {
    if ($('body').find('.alert').hasClass('js-alert')) {
      $('body').addClass('show-alert');
      setTimeout( () => {
        $('body').removeClass('show-alert');
      }, 4000);
    }
  }

  const handleDropdown = () => {
    $(window).on('click', function() {
      $('.js-contact-dd').removeClass('rzfk-contact--show');
    });

    $('.rzfk-contact').on('click', function(e) {
      e.stopPropagation();
    });

    $('.js-contact-dd .rzfk-contact__btn').on('click', function() {
      if ($(this).parents('.js-contact-dd').hasClass('rzfk-contact--show')) {
        $(this).parents('.js-contact-dd').removeClass('rzfk-contact--show');
      } else {
        $('.js-contact-dd').removeClass('rzfk-contact--show');
        $(this).parents('.js-contact-dd').addClass('rzfk-contact--show');
      }
    });
  } 

  // - init
  const init = () => {
    handleShowAlert();
    handleDropdown();
  }

  return {
    init
  }

})();

export default Contact;
