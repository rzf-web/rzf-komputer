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
  Footer,
  Validation,
  HeaderSearch,
  Contact,
  Category,
  SortingCategory,
  ProductDetail,
  Sale,
  Cart
  // TitlePage

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

  // --- call vendor

    // --- handleRevealConfig
    const handleRevealConfig = (delay = 250, distance = '24px') => {
      const _config = {
        duration: 850,
        distance: distance,
        delay: delay,
        origin: 'bottom',
      };
      return _config;
    }
  const callVendor = () => {
    // popup image
    const $gallery = new SimpleLightbox('.js-popup-image');
    // Scroll Reveal
    ScrollReveal().reveal('.features__card', handleRevealConfig(0, '24px'));
    ScrollReveal().reveal('.persuasive__img', handleRevealConfig(0, '24px'));
    ScrollReveal().reveal('.persuasive__txt-title', handleRevealConfig(0, '-24px'));
    ScrollReveal().reveal('.persuasive__txt-desc', handleRevealConfig(0, '-16px'));
    ScrollReveal().reveal('.persuasive__txt-btn', handleRevealConfig(0, '-12px'));
    window.sr = ScrollReveal({ duration: 6000 }); 
    sr.reveal('.card-product__card', 700);
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
      callVendor();

      // --- Project
      WindowResize.init();
      WindowScroll.init();
      Header.init();
      HeroBanner.init();
      CardProduct.init();
      Tabs.init();
      Footer.init();
      Validation.init();
      HeaderSearch.init();
      Contact.init();
      Category.init();
      SortingCategory.init();
      ProductDetail.init();
      Sale.init();
      Cart.init();
      // TitlePage.init();

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
