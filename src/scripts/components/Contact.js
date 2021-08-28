/* ------------------------------------------------------------------------------
@name: Contact Button
@description: Contact Button
--------------------------------------------------------------------------------- */

const Contact = (() => {

  const handleDropdown = () => {
    $(window).on('click', function() {
      $('.js-contact-dd').removeClass('floating-chat--showed');
    });

    $('.floating-chat').on('click', function(e) {
      e.stopPropagation();
    });

    $('.js-contact-dd .floating-chat__btn').on('click', function() {
      if ($(this).parents('.js-contact-dd').hasClass('floating-chat--showed')) {
        $(this).parents('.js-contact-dd').removeClass('floating-chat--showed');
      } else {
        $('.js-contact-dd').removeClass('floating-chat--showed');
        $(this).parents('.js-contact-dd').addClass('floating-chat--showed');
      }
    });
  } 

  // - init
  const init = () => {
    handleDropdown();
  }

  return {
    init
  }

})();

export default Contact;
