/* ------------------------------------------------------------------------------
@name: Category
@description: Category
--------------------------------------------------------------------------------- */

const Category = (() => {

  // handleClick
  const handleClick = () => {
    const _list = '.c-p__tab__control__item'
    const _pane = '.c-p__tab__pane';
    const _txt = $('.c-p__tab__control__item--active').text();
    $('.c-p__tab__control__item--active').parents('.js-c-p').find('.c-p__select__text').text(_txt);

    $(_list).on('click', (e) => {
      const _this = $(e.currentTarget);
      const _target = _this.attr('data-target');
      const _text = _this.text();

      if (!_this.hasClass('c-p__tab__control__item--active')) {
        _this.siblings().removeClass('c-p__tab__control__item--active');
        _this.parents('.js-c-p').find(_pane).removeClass('c-p__tab__pane--active');
        _this.parents('.js-c-p').removeClass('c-p--active')

        _this.addClass('c-p__tab__control__item--active');
        $('[data-pane="'+ _target +'"]').addClass('c-p__tab__pane--active');
        _this.parents('.js-c-p').find('.c-p__select__text').text(_text);
      }
    });
  }

  // handleClickSelect
  const handleClickSelect = () => {
    $('.js-c-p-select').on('click', (e) => {
      const _this = $(e.currentTarget);
      if (_this.parents('.js-c-p').hasClass('c-p--active')) {
        _this.parents('.js-c-p').removeClass('c-p--active');
      } else {
        _this.parents('.js-c-p').addClass('c-p--active');
      }
    });

    $('body').on('click', (e) => {
      if ($('.js-c-p').hasClass('c-p--active')) {
        $('.js-c-p').removeClass('c-p--active');
      }
    });

    $('body').on('click', '.js-c-p-select', (e) => {
      e.stopPropagation();
    });
  }

  const handleKeyupSelect = () => {
    $('body').on('keyup', (e) => {
      if (e.which == 27 && $('.js-c-p').hasClass('c-p--active')) {
        $('.js-c-p').removeClass('c-p--active');
      }
    });
  }

  // init
  const init = () => {
    handleClick();
    handleClickSelect();
    handleKeyupSelect();
  }

  return {
    init
  }

})();

export default Category
