/* ------------------------------------------------------------------------------
@name: Contact Button
@description: Contact Button
--------------------------------------------------------------------------------- */

const Contact = (() => {

  const handleDropdown = () => {
    $(window).on('click', function() {
      $('.js-floating-chat-dd').removeClass('floating-chat--showed');
    });

    $('.floating-chat, .floating-chat__box').on('click', function(e) {
      e.stopPropagation();
    });

    $('.js-floating-chat-dd .floating-chat__btn').on('click', function() {
      if ($(this).parents('.js-floating-chat-dd').hasClass('floating-chat--showed')) {
        $(this).parents('.js-floating-chat-dd').removeClass('floating-chat--showed');
      } else {
        $('.js-floating-chat-dd').removeClass('floating-chat--showed');
        $(this).parents('.js-floating-chat-dd').addClass('floating-chat--showed');
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
