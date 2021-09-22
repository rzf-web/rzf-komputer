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

// Form Validation
const ElementSelector = [
  {
    id: 'name',
    validation: {
      required: true
    }
  },
  {
    id: 'email',
    validation: {
      required: true,
      email: true
    }
  },
  {
    id: 'message',
    validation: {
      required: true,
    }
  },
  {
    id: 'phone',
    validation: {
      required: true,
      phone: true
    }
  },
  { 
    id: 'address',
    validation: {
      required: true,
    }
  }
];
const ElementEvents = ['input', 'blur'];

  // handleClick
  const handleClick = () => {
    $('#js-submit').on('click', (e) => {
      $.each(ElementSelector, (i, v) => {
        $('#'+v.id).blur();
      });
      // console.log(ElementSelector);

      if ($('.error').length > 0) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if ($(e.currentTarget).hasClass('js-message')) {
          $.each(ElementSelector, (i, v) => {
            $('#'+v.id).val('');
          });
          const swalWithBootstrapButton = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn--primary mr-12 w-100',
            },
            buttonsStyling: false
          })
          swalWithBootstrapButton.fire({
            title: 'Pesan Terkirim!',
            text: 'Terimakasih Sobat RZF. Semoga hari-hari Anda menyenangkan',
            icon: 'success',
            confirmButtonColor: '#388e3c',
            confirmButtonText: 'Tutup',
            confirmButtonColor: '#388e3c',
            width: 500,
            height: 800,
            width: 550,
            padding: '22px',
          })
        }
      }
      // console.log(WHITESPACE);
    });
  }

  // - init
  const init = () => {
    handleDropdown();
    handleClick();
  }

  return {
    init
  }

})();

export default Contact;
