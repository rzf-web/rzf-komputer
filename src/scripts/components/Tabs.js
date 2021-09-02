/* ------------------------------------------------------------------------------
@name: Tabs
@description: Tabs
--------------------------------------------------------------------------------- */

const Tabs = (() => {

  // handleClick
  const handleClick = () => {
    $('.js-tabs .tab-item').on('click', function() {
      if (!$(this).hasClass('active')) {
        let _target = $(this).attr('data-target');
        $(this).siblings().removeClass('active');
        $(this).parents('.js-tabs').find('.tab-pane').removeClass('active');

        $(this).addClass('active');
        $('[data-pane="'+ _target +'"]').addClass('active');
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