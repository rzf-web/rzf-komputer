/* ------------------------------------------------------------------------------
@name: Contact Button
@description: Contact Button
--------------------------------------------------------------------------------- */

const Contact = (() => {

  const handleDropdown = () => {
    $(window).on('click', function() {
      $('.js-contact-dd').removeClass('floating-chat--show');
    });

    $('.floating-chat').on('click', function(e) {
      e.stopPropagation();
    });

    $('.js-contact-dd .floating-chat__btn').on('click', function() {
      if ($(this).parents('.js-contact-dd').hasClass('floating-chat--show')) {
        $(this).parents('.js-contact-dd').removeClass('floating-chat--show');
      } else {
        $('.js-contact-dd').removeClass('floating-chat--show');
        $(this).parents('.js-contact-dd').addClass('floating-chat--show');
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
