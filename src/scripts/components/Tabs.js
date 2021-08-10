/* ------------------------------------------------------------------------------
@name: Tabs
@description: Tabs
--------------------------------------------------------------------------------- */

const Tabs = (() => {

  // handleClick
  const handleClick = () => {
    let _list = '.ds__nav__item',
        _pane = '.ds__content__item';

    $(_list).first().addClass('ds__nav__item--active');
    $(_pane).first().addClass('ds__content__item--active');

    $(_list).on('click', (e) => {
      let _this = $(e.currentTarget),
       _target = _this.attr('data-target');
      
      if (!_this.hasClass('ds__nav__item--active')) {
        _this.siblings().removeClass('ds__nav__item--active');
        _this.parents('.js-tabs').find(_pane).removeClass('ds__content__item--active');

        _this.addClass('ds__nav__item--active');
        $('[data-pane="'+ _target +'"]').addClass('ds__content__item--active');
      }
    });
  }

  // init
  const init = () => {
    handleClick();
  }

  return {
    init
  }

})();

export default Tabs