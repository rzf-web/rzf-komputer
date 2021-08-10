/* ------------------------------------------------------------------------------
@name: Input Form
@description: Input Form
--------------------------------------------------------------------------------- */

// --- Input Form
const InputForm = (() => {

  // --- handleClickDropdown
  const handleClickDropdown = () => {
    // handle click dropdown
    $('.js-fi-dropdown').on('click', (e) => {
      const _this = $(e.currentTarget);
      if (!_this.parents('.fi-row').hasClass('fi-dropdown--show')) {
        _this.parents('.fi-row').addClass('fi-dropdown--show');
      }
    });

    // handle click body
    $('body').on('click', (e) => {
      if ($('.fi-row').hasClass('fi-dropdown--show')) {
        $('.fi-row').removeClass('fi-dropdown--show');
      }
    });

    // stop progation
    $('body').on('click', '.js-fi-dropdown', (e) => {
      e.stopPropagation();
    });

  }

  // --- handleKeyupDropdown
  const handleKeyupDropdown = () => {
    $('body').on('keyup', (e) => {
      if (e.which == 27 && $('.fi-row').hasClass('fi-dropdown--show')) {
        $('.fi-row').removeClass('fi-dropdown--show');
      }
    });
  }

  const handleSelectDropdown = () => {
    const _val = $('.fi-dropdown-item').first().text();
    $('.js-fi-dropdown').val(_val).attr('readonly', 'readonly');
    $('.fi-dropdown-item').on('click', (e) => {
      const _this = $(e.currentTarget);
      let _txt = _this.text();
      _this.parents('.fi-row').find('.fi-dropdown').val(_txt);
    });
  }

  // --- init
  const init = () => {
    handleClickDropdown();
    handleKeyupDropdown();
    handleSelectDropdown();

  }

  // --- return
  return {
    init
  }

})();

export default InputForm;
