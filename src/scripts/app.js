// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

// --- components
import {
  WindowScroll,
  Header,
  HeroBanner,
  Tabs,
  CardProduct,
  WindowResize,
  Templates,
  TemplateBanner,
  Footer,
  BlogBanner,
  Validation,
  InputForm,
  HeaderSearch
} from 'components';

// --- App
const App = (() => {
  // --- run transition
  const runTransition = () => {
    $('body').removeClass('hold-transition');
  }

  // --- show site content
  const showSiteContent = () => {
    $('.js-main-site').removeClass('main-site--hide');
    // --- disable scroll
    Scrolllable.enable();
  }

  // --- ready
  const ready = () => {
    (($) => {
      // --- disable scroll
      Scrolllable.disable();

      // --- Global
      runTransition();
      showSiteContent();
      BrowserCheck.init();

      // --- Project
      WindowResize.init();
      WindowScroll.init();
      Header.init();
      HeroBanner.init();
      CardProduct.init();
      Tabs.init();
      Templates.init();
      TemplateBanner.init();
      Footer.init();
      BlogBanner.init();
      Validation.init();
      InputForm.init();
      HeaderSearch.init();

    })(jQuery);
  }

  // --- load
  const load = () => {
    (($) => {
      $(window).on("load", () => {

      });
    })(jQuery);
  }

  // --- init
  const init = () => {
    load();
    ready();
  }

  // --- return
  return {
    init
  }

})();

// ---  run main js
App.init();
