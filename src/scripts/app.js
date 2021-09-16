// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

// --- components
import {
  WindowScroll,
  Header,
  Banner,
  Tabs,
  CardProduct,
  WindowResize,
  Footer,
  Validation,
  HeaderSearch,
  SaleCarousel,
  Contact,
  Category,
  SortingCategory,
  ProductDetail,
  Sale,
  Cart,
  OrderStatus
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
  const callVendor = () => {
    // popup image
    const $gallery = new SimpleLightbox('.js-popup-image');
    // Scroll Reveal
    ScrollReveal().reveal('.features__card');
    ScrollReveal().reveal('.persuasive');
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
      Banner.init();
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
      OrderStatus.init();
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
