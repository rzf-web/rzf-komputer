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

  const handleDropdown = () =>{
    $('body').on('click', function() {
      $('.js-contact-dd').removeClass('zeal-contact--show');
    });

    $('.zeal-contact').on('click', function(e) {
      e.stopPropagation();
    });

    $('.js-contact-dd .zeal-contact__btn').on('click', function() {
      if ($(this).parents('.js-contact-dd').hasClass('zeal-contact--show')) {
        $(this).parents('.js-contact-dd').removeClass('zeal-contact--show');
      } else {
        $('.js-contact-dd').removeClass('zeal-contact--show');
        $(this).parents('.js-contact-dd').addClass('zeal-contact--show');
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
