/* ------------------------------------------------------------------------------
@name: Templates
@description: Templates
--------------------------------------------------------------------------------- */

const Templates = (() => {

  // handleClick
  const handleClick = () => {
    const _list = '.inv-tpl__tab__control__item'
    const _pane = '.inv-tpl__tab__pane__item';
    const _txt = $('.inv-tpl__tab__control__item--active').text();
    $('.inv-tpl__tab__control__item--active').parents('.js-inv-tpl').find('.inv-tpl__select__text').text(_txt);

    $(_list).on('click', (e) => {
      const _this = $(e.currentTarget);
      const _target = _this.attr('data-target');
      const _text = _this.text();

      if (!_this.hasClass('inv-tpl__tab__control__item--active')) {
        _this.siblings().removeClass('inv-tpl__tab__control__item--active');
        _this.parents('.js-inv-tpl').find(_pane).removeClass('inv-tpl__tab__pane__item--active');
        _this.parents('.js-inv-tpl').removeClass('inv-tpl--active')

        _this.addClass('inv-tpl__tab__control__item--active');
        $('[data-pane="'+ _target +'"]').addClass('inv-tpl__tab__pane__item--active');
        _this.parents('.js-inv-tpl').find('.inv-tpl__select__text').text(_text);
      }
    });
  }

  // handleClickSelect
  const handleClickSelect = () => {
    $('.js-inv-tpl-select').on('click', (e) => {
      const _this = $(e.currentTarget);
      if (_this.parents('.js-inv-tpl').hasClass('inv-tpl--active')) {
        _this.parents('.js-inv-tpl').removeClass('inv-tpl--active');
      } else {
        _this.parents('.js-inv-tpl').addClass('inv-tpl--active');
      }
    });

    $('body').on('click', (e) => {
      if ($('.js-inv-tpl').hasClass('inv-tpl--active')) {
        $('.js-inv-tpl').removeClass('inv-tpl--active');
      }
    });

    $('body').on('click', '.js-inv-tpl-select', (e) => {
      e.stopPropagation();
    });
  }

  const handleKeyupSelect = () => {
    $('body').on('keyup', (e) => {
      if (e.which == 27 && $('.js-inv-tpl').hasClass('inv-tpl--active')) {
        $('.js-inv-tpl').removeClass('inv-tpl--active');
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

export default Templates
