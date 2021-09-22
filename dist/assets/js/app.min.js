(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _utilities = require("./utilities");

var _components = require("./components");

// --- utilities
// --- components
// --- App
var App = function () {
  // --- run transition
  var runTransition = function runTransition() {
    $('body').removeClass('hold-transition');
  }; // --- show site content


  var showSiteContent = function showSiteContent() {
    $('.js-main-site').removeClass('main-site--hide'); // --- disable scroll

    _utilities.Scrolllable.enable();
  }; // --- call vendor
  // --- handleRevealConfig


  var handleRevealConfig = function handleRevealConfig() {
    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
    var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '24px';
    var _config = {
      duration: 850,
      distance: distance,
      delay: delay,
      origin: 'bottom'
    };
    return _config;
  };

  var callVendor = function callVendor() {
    // popup image
    var $gallery = new SimpleLightbox('.js-popup-image'); // Scroll Reveal

    ScrollReveal().reveal('.features__card', handleRevealConfig(0, '24px'));
    ScrollReveal().reveal('.persuasive__img', handleRevealConfig(0, '24px'));
    ScrollReveal().reveal('.persuasive__txt-title', handleRevealConfig(0, '-24px'));
    ScrollReveal().reveal('.persuasive__txt-desc', handleRevealConfig(0, '-16px'));
    ScrollReveal().reveal('.persuasive__txt-btn', handleRevealConfig(0, '-12px'));
    window.sr = ScrollReveal({
      duration: 6000
    });
    sr.reveal('.card-product__card', 700);
  }; // --- ready


  var ready = function ready() {
    (function ($) {
      // --- disable scroll
      _utilities.Scrolllable.disable(); // --- Global


      runTransition();
      showSiteContent();

      _utilities.BrowserCheck.init();

      callVendor(); // --- Project

      _components.WindowResize.init();

      _components.WindowScroll.init();

      _components.Header.init();

      _components.HeroBanner.init();

      _components.CardProduct.init();

      _components.Tabs.init();

      _components.Footer.init();

      _components.Validation.init();

      _components.HeaderSearch.init();

      _components.Contact.init();

      _components.Category.init();

      _components.SortingCategory.init();

      _components.ProductDetail.init();

      _components.Sale.init();

      _components.Cart.init();

      _components.OrderStatus.init(); // TitlePage.init();

    })(jQuery);
  }; // --- load


  var load = function load() {
    (function ($) {
      $(window).on("load", function () {});
    })(jQuery);
  }; // --- init


  var init = function init() {
    load();
    ready();
  }; // --- return


  return {
    init: init
  };
}(); // ---  run main js


App.init();

},{"./components":19,"./utilities":22}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Card Product
@description: Card Product
--------------------------------------------------------------------------------- */
var cardProduct = function () {
  // --- handleCheckHeight
  var setHeight = function setHeight() {
    handleResetHeight();
    var _height = 0;
    $('.card-product__list .card-product__card').each(function (i, e) {
      if (_height < $(e).find('.card-product__card__txt').height()) {
        _height = $(e).find('.card-product__card__txt').height();
      }
    });
    $('.card-product__card__txt').height(_height);
  }; // --- handleResetHeight


  var handleResetHeight = function handleResetHeight() {
    var _attr = $('.card-product__card__txt').attr('style');

    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.card-product__card__txt').removeAttr('style');
    }
  }; // - init


  var init = function init() {
    setHeight();
  };

  return {
    init: init,
    checkHeight: setHeight
  };
}();

var _default = cardProduct;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Cart
@description: Cart
--------------------------------------------------------------------------------- */
var Cart = function () {
  // variables
  var _buttonMin = $('.js-cart-minus'),
      _buttonMax = $('.js-cart-plus'),
      _itemCount = 1,
      _quantity = $('.js-cart-quantity'),
      _quantityCartCount = $('.js-cart-count'),
      _oldPrice = 4500000,
      _newPrice = 4500000,
      _jsCartPrice = $('.js-cart-price'),
      _jsCartTotal = $('.js-cart-total'); // function change price


  function formatRupiah(harga, prefix) {
    var number_string = String(harga).replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      var separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? 'Rp' + rupiah : '';
  } // handle click


  var handleClick = function handleClick() {
    // handle delete product
    $('.js-delete').on('click', function (e) {
      e.preventDefault();
      var swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn--primary mr-12 w-100',
          cancelButton: 'btn btn--secondary w-100'
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        showCancelButton: true,
        cancelButtonText: 'Batal',
        title: 'Hapus item ini?',
        text: "Tindakan ini tidak dapat diurungkan!",
        icon: 'warning',
        confirmButtonColor: '#388e3c',
        cancelButtonColor: '#ff0000',
        confirmButtonText: 'Ya, Hapus',
        width: 550,
        padding: '22px'
      }).then(function (result) {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: 'Terhapus!',
            text: 'Item Anda sudah terhapus',
            icon: 'success',
            width: 420
          });
        }
      });
    }); // handle button min

    $(_buttonMin).on('click', function (e) {
      e.preventDefault();

      if (_itemCount > 1) {
        _itemCount -= 1;
        _oldPrice = _oldPrice - _newPrice;
        $(_quantity).val(_itemCount);
        $(_quantityCartCount).text(_itemCount);
        changePrice(_jsCartPrice);
        changePrice(_jsCartTotal);
      }
    }); // handle button max

    $(_buttonMax).on('click', function (e) {
      e.preventDefault();
      _itemCount += 1;
      _oldPrice = _oldPrice + _newPrice;
      $(_quantity).val(_itemCount);
      $(_quantityCartCount).text(_itemCount);
      changePrice(_jsCartPrice);
      changePrice(_jsCartTotal);
    }); // change price

    var changePrice = function changePrice(v) {
      $(v).text(formatRupiah(_oldPrice, ''));
    };
  }; // handle keyup


  var handleKeyup = function handleKeyup() {
    // handle on keyup
    $(_quantity).on('keyup', function (e) {
      var _resultCount = _newPrice * $(_quantity).val();

      $(_quantity).val(Math.abs($(_quantity).val()));
      $(_jsCartPrice).text(formatRupiah(_resultCount, ''));
      $(_jsCartTotal).text(formatRupiah(_resultCount, ''));
      _oldPrice = _resultCount;
      _itemCount = parseInt(e.currentTarget.value);
      $(_quantityCartCount).text(e.currentTarget.value == '' ? 0 : e.currentTarget.value); // console.log(parseInt(e.currentTarget.value));
    });
  }; // init 


  var init = function init() {
    handleClick();
    handleKeyup();
  };

  return {
    init: init
  };
}();

var _default = Cart;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Category
@description: Category
--------------------------------------------------------------------------------- */
var Category = function () {
  // handleClick
  var handleClick = function handleClick() {
    var _list = '.c-p__tab__control__item';
    var _pane = '.c-p__tab__pane';

    var _txt = $('.c-p__tab__control__item--active').text();

    $('.c-p__tab__control__item--active').parents('.js-c-p').find('.c-p__select__text').text(_txt);
    $(_list).on('click', function (e) {
      var _this = $(e.currentTarget);

      var _target = _this.attr('data-target');

      var _text = _this.text();

      if (!_this.hasClass('c-p__tab__control__item--active')) {
        _this.siblings().removeClass('c-p__tab__control__item--active');

        _this.parents('.js-c-p').find(_pane).removeClass('c-p__tab__pane--active');

        _this.parents('.js-c-p').removeClass('c-p--active');

        _this.addClass('c-p__tab__control__item--active');

        $('[data-pane="' + _target + '"]').addClass('c-p__tab__pane--active');

        _this.parents('.js-c-p').find('.c-p__select__text').text(_text);
      }
    });
  }; // handleClickSelect


  var handleClickSelect = function handleClickSelect() {
    $('.js-c-p-select').on('click', function (e) {
      var _this = $(e.currentTarget);

      if (_this.parents('.js-c-p').hasClass('c-p--active')) {
        _this.parents('.js-c-p').removeClass('c-p--active');
      } else {
        _this.parents('.js-c-p').addClass('c-p--active');
      }
    });
    $('body').on('click', function (e) {
      if ($('.js-c-p').hasClass('c-p--active')) {
        $('.js-c-p').removeClass('c-p--active');
      }
    });
    $('body').on('click', '.js-c-p-select', function (e) {
      e.stopPropagation();
    });
  };

  var handleKeyupSelect = function handleKeyupSelect() {
    $('body').on('keyup', function (e) {
      if (e.which == 27 && $('.js-c-p').hasClass('c-p--active')) {
        $('.js-c-p').removeClass('c-p--active');
      }
    });
  }; // init


  var init = function init() {
    handleClick();
    handleClickSelect();
    handleKeyupSelect();
  };

  return {
    init: init
  };
}();

var _default = Category;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* ------------------------------------------------------------------------------
@name: Contact Button
@description: Contact Button
--------------------------------------------------------------------------------- */
var Contact = function () {
  var handleDropdown = function handleDropdown() {
    $(window).on('click', function () {
      $('.js-floating-chat-dd').removeClass('floating-chat--showed');
    });
    $('.floating-chat, .floating-chat__box').on('click', function (e) {
      e.stopPropagation();
    });
    $('.js-floating-chat-dd .floating-chat__btn').on('click', function () {
      if ($(this).parents('.js-floating-chat-dd').hasClass('floating-chat--showed')) {
        $(this).parents('.js-floating-chat-dd').removeClass('floating-chat--showed');
      } else {
        $('.js-floating-chat-dd').removeClass('floating-chat--showed');
        $(this).parents('.js-floating-chat-dd').addClass('floating-chat--showed');
      }
    });
  }; // Form Validation


  var ElementSelector = [{
    id: 'name',
    validation: {
      required: true
    }
  }, {
    id: 'email',
    validation: {
      required: true,
      email: true
    }
  }, {
    id: 'message',
    validation: {
      required: true
    }
  }, {
    id: 'phone',
    validation: {
      required: true,
      phone: true
    }
  }, {
    id: 'address',
    validation: {
      required: true
    }
  }];
  var ElementEvents = ['input', 'blur']; // handleClick

  var handleClick = function handleClick() {
    $('#js-submit').on('click', function (e) {
      $.each(ElementSelector, function (i, v) {
        $('#' + v.id).blur();
      }); // console.log(ElementSelector);

      if ($('.error').length > 0) {
        e.preventDefault();
      } else {
        e.preventDefault();

        if ($(e.currentTarget).hasClass('js-message')) {
          var _swalWithBootstrapBut;

          $.each(ElementSelector, function (i, v) {
            $('#' + v.id).val('');
          });
          var swalWithBootstrapButton = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn--primary mr-12 w-100'
            },
            buttonsStyling: false
          });
          swalWithBootstrapButton.fire((_swalWithBootstrapBut = {
            title: 'Pesan Terkirim!',
            text: 'Terimakasih Sobat RZF. Semoga hari-hari Anda menyenangkan',
            icon: 'success',
            confirmButtonColor: '#388e3c',
            confirmButtonText: 'Tutup'
          }, _defineProperty(_swalWithBootstrapBut, "confirmButtonColor", '#388e3c'), _defineProperty(_swalWithBootstrapBut, "width", 500), _defineProperty(_swalWithBootstrapBut, "height", 800), _defineProperty(_swalWithBootstrapBut, "width", 550), _defineProperty(_swalWithBootstrapBut, "padding", '22px'), _swalWithBootstrapBut));
        }
      } // console.log(WHITESPACE);

    });
  }; // - init


  var init = function init() {
    handleDropdown();
    handleClick();
  };

  return {
    init: init
  };
}();

var _default = Contact;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */
// --- Footer
var Footer = function () {
  var _width = 767.98; // handle Click Acccordion

  var handleClickAccordion = function handleClickAccordion() {
    $('.js-footer-accordion .footer__title').on('click', function (e) {
      var _this = $(e.currentTarget);

      if ($(window).width() <= _width) {
        if (_this.parents('.footer__menu__item').hasClass("footer__menu__item--show")) {
          _this.parents('.footer__menu__item').removeClass("footer__menu__item--show").find(".footer__nav").slideUp();
        } else {
          // _this.parents('.js-footer-accordion').removeClass("footer__menu__item--show").find(".footer__nav").slideUp().find('.footer__menu__item');
          _this.parents('.footer__menu__item').siblings('.footer__menu__item').removeClass("footer__menu__item--show").find(".footer__nav").slideUp();

          _this.parents('.footer__menu__item').find(".footer__nav").slideDown().parents('.footer__menu__item').addClass("footer__menu__item--show");
        }
      }
    });
  }; // handle Destroy Accordion


  var handleDestroyAccordion = function handleDestroyAccordion() {
    if ($(window).width() > _width) {
      $('.js-footer-accordion .footer__menu__item').removeClass('footer__menu__item--show').find('.footer__nav').removeAttr('style');
    }
  }; // --- handleSet


  var handleSet = function handleSet() {
    var _footerHeight = $('.footer').innerHeight();

    if ($(window).width() >= _width) {
      $('.main-site').css('paddingBottom', _footerHeight);
    } else {
      $('.main-site').removeAttr('style');
    }
  }; // --- init


  var init = function init() {
    handleSet();
    handleClickAccordion();
  }; // --- return


  return {
    init: init,
    setFooter: handleSet,
    destroyAccordion: handleDestroyAccordion
  };
}();

var _default = Footer;
exports["default"] = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utilities = require("../utilities");

/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */
// --- utilities
// --- Header
var Header = function () {
  // --- handleMobileNav
  var handleMobileNav = function handleMobileNav() {
    // nav open
    $('.js-nav').on('click', function () {
      if ($('body').hasClass('show-nav')) {
        _utilities.Scrolllable.enable();

        $('body').removeClass('show-nav');
      } else {
        _utilities.Scrolllable.disable();

        $('body').addClass('show-nav');
      }
    });
  }; // --- handleScrollMobileMenu


  var handleScrollMobileMenu = function handleScrollMobileMenu() {
    $('.js-mobile-menu').on('scroll', function (e) {
      if ($(e.currentTarget).scrollTop() > 4) {
        $('body').addClass('on-scroll-mobile-menu');
      } else {
        $('body').removeClass('on-scroll-mobile-menu');
      }
    });
  }; // --- handleCheckClass


  var handleCheckClass = function handleCheckClass() {
    if ($(window).width() >= 992) {
      _utilities.Scrolllable.enable();

      $('body').removeClass('show-nav');
    }
  }; // --- init


  var init = function init() {
    handleMobileNav();
    handleScrollMobileMenu();
  }; // --- return


  return {
    init: init,
    checkClass: handleCheckClass
  };
}();

var _default = Header;
exports["default"] = _default;

},{"../utilities":22}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utilities = require("../utilities");

/* ------------------------------------------------------------------------------
@name: Header Search
@description: Header Search
--------------------------------------------------------------------------------- */
var HeaderSearch = function () {
  var handleClick = function handleClick() {
    var _buttonSearch = $('.js-button-search'),
        _buttonCart = $('.js-button-cart'),
        _navItem = $('.js-nav-items'),
        _showForm = $('.header-search-section__form'),
        _headerContent = $('.header__content'),
        _overlaySearch = $('.overlay'),
        _overlayCartList = $('.overlay__cart__list'),
        _buttonSearchClose = $('.js-header-search-section__close'),
        _jsSearchForm = $('.js-search-form'),
        _jsButtonClose = $('.js-header-search-section__close'),
        _jsCart = $('.js-cart'),
        _jsCartList = $('.js-cart-list'),
        _jsNav = $('.burger-menu'),
        _jsSearchResult = $('.js-search-result'); // handle search keyup


    $('body').on('keyup', function (e) {
      if (e.which == 27 && $('.header__content').hasClass('showed')) {
        hideElement();
      }
    }); // handle click out area

    $(_overlaySearch).on('click', function () {
      hideElement();
    }); // handle button close

    $(_jsButtonClose).on('click', function () {
      hideElement();
    }); // function hide element groupping

    function hideElement() {
      $(_headerContent).removeClass('showed');
      $(_overlaySearch).removeClass('showed');
      $(_showForm).removeClass('showed');
      $(_jsSearchResult).removeClass('showed');
      setTimeout(function () {}, 400);

      _utilities.Scrolllable.enable();

      $(_jsNav).removeClass('showed');
    } // handle cart on click


    $(_jsCart).on('click', function (e) {
      e.stopPropagation();
      $(_jsCartList).toggleClass('showed');
      $(_overlayCartList).addClass('showed'); // console.log($(_jsCartList).html());

      $('body').removeClass('show-nav');
    });
    $(_jsCartList).on('click', function (e) {
      e.stopPropagation();
    });
    $(window).on('click', function () {
      $('.js-cart-list').removeClass('showed');
    }); // handle cart button when on click

    $(_buttonSearch).on('click', function () {
      setTimeout(function () {
        $(_showForm).addClass('showed');
        $(_jsSearchResult).addClass('showed');
      }, 600);
      $(_headerContent).addClass('showed');
      $(_overlaySearch).addClass('showed');
      $(_jsNav).addClass('showed');
      setTimeout(function () {
        $('body').removeClass('show-nav');
      }, 400);

      _utilities.Scrolllable.disable();
    }); // handle delete product

    $('.js-cart-list-delete').on('click', function (e) {
      e.preventDefault();
      var swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn--primary mr-12 w-100',
          cancelButton: 'btn btn--secondary w-100'
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        showCancelButton: true,
        cancelButtonText: 'Batal',
        title: 'Hapus item ini?',
        text: "Tindakan ini tidak dapat diurungkan!",
        icon: 'warning',
        confirmButtonColor: '#388e3c',
        cancelButtonColor: '#ff0000',
        confirmButtonText: 'Ya, Hapus',
        width: 550,
        padding: '22px'
      }).then(function (result) {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: 'Terhapus!',
            text: 'Item Anda sudah terhapus',
            icon: 'success',
            width: 420
          });
        }
      });
    });
  },
      // handle sorting product
  handleSortingSearch = function handleSortingSearch() {
    var _inputSearch = $('.js-search-popup-input'),
        _content = '',
        _input = $('.js-search-input'); // arrayProduct


    var dataProduct = ['Asus', 'Hp', 'Printer Thermal', 'TP-link'];
    $(dataProduct).each(function (i, v) {
      _content += "<li class='header__search-section__item'>\n            <a class='header__search-section__link' href='#'>".concat(v, "</a>\n            </li>");
    });

    _inputSearch.html(_content);

    $(_input).on('keyup', function () {
      _content = '';
      $(dataProduct).each(function (i, v) {
        if (v.toLowerCase().indexOf(_input.val().toLowerCase()) != -1) {
          _content += "<li class='header__search-section__item'>\n                <a class='header__search-section__link' href='#'>".concat(v, "</a>\n                </li>");
        }
      });

      if (_content == '') {
        if ($('.header__search-section-title').hasClass('show')) {
          $('.header__search-section-title').removeClass('show');
          $('.js-notif-show').addClass('show');
        }
      } else {
        $('.header__search-section-title').addClass('show');
        $('.js-notif-show').removeClass('show');
      }

      _inputSearch.html(_content);
    });
  }; // init


  var init = function init() {
    handleClick();
    handleSortingSearch();
  };

  return {
    init: init
  };
}();

var _default = HeaderSearch;
exports["default"] = _default;

},{"../utilities":22}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Hero Banner
@description: Hero Banner
--------------------------------------------------------------------------------- */
var HeroBanner = function () {
  // handleRunCarousel
  var handleRunCarousel = function handleRunCarousel() {
    var _selector = $('.js-banner-promo');

    var _itemLength = $('.js-banner-promo .banner__card').length;
    var _itemRun = 1; // destroy carousel

    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    } // --- check if itemLength > itemRun


    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        dots: true,
        nav: true,
        loop: false,
        navText: ["<i class='rzfkomputer-chevron-left'></i>", "<i class='rzfkomputer-chevron-right'></i>"],
        mouseDrag: true,
        touchGrant: true,
        autoplayHoverPause: false,
        autoplayTimeout: 6000,
        dotsSpeed: 1000,
        autoplaySpeed: 1000,
        dragEndSpeed: 750,
        smartSpeed: 750
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }

      _selector.addClass('hero-banner--single');
    }
  }; // --- handleRevealConfig


  var handleRevealConfig = function handleRevealConfig() {
    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
    var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '24px';
    var _config = {
      duration: 850,
      distance: distance,
      delay: delay,
      origin: 'bottom'
    };
    return _config;
  }; // --- handleRunScrollReveal


  var handleRunScrollReveal = function handleRunScrollReveal() {
    ScrollReveal().reveal('.banner__promo', handleRevealConfig(0, '24px'));
    ScrollReveal().reveal('.banner__category', handleRevealConfig());
  }; // --- init


  var init = function init() {
    handleRunCarousel();
    handleRunScrollReveal();
  }; // --- return


  return {
    init: init
  };
}();

var _default = HeroBanner;
exports["default"] = _default;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: OrderStatus
@description: OrderStatus
--------------------------------------------------------------------------------- */
var OrderStatus = function () {
  // handleClick
  var handleClick = function handleClick() {
    $('.js-show-order').on('click', function (e) {
      var _val = $(e.currentTarget);

      if ($('body').hasClass('show-order')) {
        $('body').removeClass('show-order').find('.order__box').fadeOut(500);
      } else {
        $('body').addClass('show-order').find('.order__box').fadeIn(300);
      }
    });
  }; // init


  var init = function init() {
    handleClick();
  };

  return {
    init: init
  };
}();

var _default = OrderStatus;
exports["default"] = _default;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: ProductDetail
@description: ProductDetail
--------------------------------------------------------------------------------- */
var ProductDetail = function () {
  // variables
  var _buttonMin = $('.pdetail__form__min'),
      _buttonMax = $('.pdetail__form__max'),
      _itemCount = 1,
      _quantity = $('.js-input-qty'),
      _oldPrice = 4500000,
      _newPrice = 4500000,
      _jsPrice = $('.js-price'); // function change price


  function formatRupiah(harga, prefix) {
    var number_string = String(harga).replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      var separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? 'Rp' + rupiah : '';
  } // handleClick


  var handleClick = function handleClick() {
    // handle button min
    $(_buttonMin).on('click', function (e) {
      e.preventDefault();

      if (_itemCount > 1) {
        _itemCount -= 1;
        _oldPrice = _oldPrice - _newPrice;
        $(_quantity).val(_itemCount);
        $(_jsPrice).text(formatRupiah(_oldPrice, ''));
      }
    }); // handle button max

    $(_buttonMax).on('click', function (e) {
      e.preventDefault();
      _itemCount += 1;
      _oldPrice = _oldPrice + _newPrice;
      $(_quantity).val(_itemCount);
      $(_jsPrice).text(formatRupiah(_oldPrice, ''));
    });
  }; // handle keyup


  var handleKeyup = function handleKeyup() {
    // handle on keyup
    $(_quantity).on('keyup', function (e) {
      var _resultCount = _newPrice * $(_quantity).val();

      $(_quantity).val(Math.abs($(_quantity).val()));
      $(_jsPrice).text(formatRupiah(_resultCount, ''));
      _oldPrice = _resultCount;
      _itemCount = parseInt(e.currentTarget.value);
    });
  }; // init 


  var init = function init() {
    handleClick();
    handleKeyup();
  };

  return {
    init: init
  };
}();

var _default = ProductDetail;
exports["default"] = _default;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Sale
@description: Sale
--------------------------------------------------------------------------------- */
var Sale = function () {
  var handleCountDown = function handleCountDown() {
    var countDownDate = new Date("Oct 16, 2021 10:10:25").getTime(); // update the count down every 1 second

    var x = setInterval(function () {
      // get today's date and time
      var _now = new Date().getTime(); // find the distance between now and the count down date


      var _distance = countDownDate - _now; // time calculations for days, hours, minutes and seconds


      var _days = Math.floor(_distance / (1000 * 60 * 60 * 24));

      var _hours = Math.floor(_distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

      var _minutes = Math.floor(_distance % (1000 * 60 * 60) / (1000 * 60));

      var _seconds = Math.floor(_distance % (1000 * 60) / 1000); // set result into html


      $('.js-countdown-set').html("\n    <li class=\"sale__content__countdown__item\">\n    <h5 class=\"sale__content__countdown__item__number\">".concat(_days, "</h5> hari</li>\n    <li class=\"sale__content__countdown__item\">\n    <h5 class=\"sale__content__countdown__item__number\">").concat(_hours, "</h5> jam</li>\n    <li class=\"sale__content__countdown__item\">\n    <h5 class=\"sale__content__countdown__item__number\">").concat(_minutes, "</h5> menit</li>\n    <li class=\"sale__content__countdown__item\">\n    <h5 class=\"sale__content__countdown__item__number\">").concat(_seconds, "</h5> detik</li>")); // when countdown is finished

      if (_distance < 0) {
        clearInterval(x);
        $('.sale__content__txt').html("\n      <p class='sale__content__txt__alert-limited'>Maaf, promo sudah habis. Nantikan promo berikutnya. Terimakasih...</p>");
      } // $('.js-button-sale').remove();
      // $('.js-countdown-set').html(`
      //   <p>Maaf, promo sudah habis. Nantikan promo berikutnya</p>`);
      // }

    }, 1000);
  }; // - init


  var init = function init() {
    handleCountDown();
  };

  return {
    init: init
  };
}();

var _default = Sale;
exports["default"] = _default;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var SortingCategory = function () {
  // handleClick
  var handleDropdown = function handleDropdown() {
    $(window).on('click', function () {
      $('.js-sorting-dd').removeClass('product__sorting--showed');
    });
    $('.product__sorting-select').on('click', function (e) {
      e.stopPropagation();
    });
    $('.js-sorting-dd .product__sorting-select .product__sorting-title').on('click', function () {
      if ($(this).parents('.js-sorting-dd').hasClass('product__sorting--showed')) {
        $(this).parents('.js-sorting-dd').removeClass('product__sorting--showed');
      } else {
        $('.js-sorting-dd').removeClass('product__sorting--showed');
        $(this).parents('.js-sorting-dd').addClass('product__sorting--showed');
      }
    });
  }; // handleSticky 


  var handleSticky = function handleSticky() {
    var _sticky = $('.js-sticky').offset() || null;

    if (_sticky !== null) {
      $(window).on('scroll', function () {
        if (window.pageYOffset >= _sticky.top) {
          $('.js-sticky').addClass('sticky');
        } else {
          $('.js-sticky').removeClass('sticky');
        }
      });
    }
  }; // init 


  var init = function init() {
    handleDropdown();
    handleSticky();
  };

  return {
    init: init
  };
}();

var _default = SortingCategory;
exports["default"] = _default;

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Tabs
@description: Tabs
--------------------------------------------------------------------------------- */
var Tabs = function () {
  // handleClick
  var handleClick = function handleClick() {
    $('.js-tabs .tab-item').on('click', function () {
      if (!$(this).hasClass('active')) {
        var _target = $(this).attr('data-target');

        $(this).siblings().removeClass('active');
        $(this).parents('.js-tabs').find('.tab-pane').removeClass('active');
        $(this).addClass('active');
        $('[data-pane="' + _target + '"]').addClass('active');
      }
    });
  }; // init 


  var init = function init() {
    handleClick();
  };

  return {
    init: init
  };
}();

var _default = Tabs;
exports["default"] = _default;

},{}],15:[function(require,module,exports){
// /* ------------------------------------------------------------------------------
// @name: Title Page
// @description: Title Page
// --------------------------------------------------------------------------------- */
// const TitlePage = (() => {
//   // --- Particle
//   const handleParticle = () => {
//     particleJS.load('#particles-js', 'assets/js/data/particles-js.json', function() {
//       // console.log('callback - particles.js config loaded');
//     });
//   }
//   // init
//   const init = () => {
//     handleParticle();
//   }
//   return {
//     init
//   }
// })();
// export default TitlePage;
"use strict";

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Validation
@description: Validation
--------------------------------------------------------------------------------- */
var WHITESPACE = /^ *$/;
var EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
var PHONE_NUMBER = /^(0|\+62)+([0-9]){4,16}/i;
var NUMBERIC = /[0-9]+$/i; // Form Validation

var ElementSelector = [{
  id: 'name',
  validation: {
    required: true
  }
}, {
  id: 'email',
  validation: {
    required: true,
    email: true
  }
}, {
  id: 'message',
  validation: {
    required: true
  }
}, {
  id: 'phone',
  validation: {
    required: true,
    phone: true
  }
}, {
  id: 'address',
  validation: {
    required: true
  }
}];
var ElementEvents = ['input', 'blur'];

var Validation = function () {
  // - handleInput
  var handleInput = function handleInput() {
    $.each(ElementEvents, function (ie, ve) {
      $.each(ElementSelector, function (i, v) {
        $('#' + v.id).on(ve, function () {
          var _val = $(this).val(),
              _target = $(this).attr('data-target'),
              _alertEl = $('#' + _target),
              _errorMessage; // Condition if validation does not error


          _alertEl.removeClass('error');

          $(this).parent().removeClass('error'); // Email validation

          if (v.validation.email) {
            if (!EMAIL.test(_val)) {
              _errorMessage = _alertEl.attr('data-invalid-email');
            }
          } // Phone validation


          if (v.validation.phone) {
            if (!PHONE_NUMBER.test(_val)) {
              _errorMessage = _alertEl.attr('data-invalid-phone');
            }
          } // Required validation


          if (WHITESPACE.test(_val)) {
            var _errorMessage = _alertEl.attr('data-req');
          } // Error Message


          if (_errorMessage !== undefined) {
            _alertEl.text(_errorMessage);

            _alertEl.addClass('error');

            $(this).parent().addClass('error');
          }
        });
      });
    });
  }; // // handleClick
  // const handleClick = () => {
  //   $('button[type="submit"]').on('click', (e) => {
  //     $.each(ElementSelector, (i, v) => {
  //       $('#'+v.id).blur();
  //     });
  //     console.log(ElementSelector);
  //     if ($('.error').length > 0) {
  //       e.preventDefault();
  //     } else {
  //       e.preventDefault();
  //       if ($(e.currentTarget).hasClass('js-message')) {
  //         $.each(ElementSelector, (i, v) => {
  //           $('#'+v.id).val('');
  //         });
  //         const swalWithBootstrapButton = Swal.mixin({
  //           customClass: {
  //             confirmButton: 'btn btn--primary mr-12 w-100',
  //           },
  //           buttonsStyling: false
  //         })
  //         swalWithBootstrapButton.fire({
  //           title: 'Pesan Terkirim!',
  //           text: 'Terimakasih Sobat RZF. Semoga hari-hari Anda menyenangkan',
  //           icon: 'success',
  //           confirmButtonColor: '#388e3c',
  //           confirmButtonText: 'Tutup',
  //           confirmButtonColor: '#388e3c',
  //           width: 500,
  //           height: 800,
  //           width: 550,
  //           padding: '22px',
  //         })
  //       }
  //     }
  //     // console.log(WHITESPACE);
  //   });
  // }
  // - init


  var init = function init() {
    handleInput(); // handleClick();
  };

  return {
    init: init
  };
}();

var _default = Validation;
exports["default"] = _default;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./index");

var _WindowScroll = _interopRequireDefault(require("./WindowScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* ------------------------------------------------------------------------------
@name: WindowResize
@description: WindowResize
--------------------------------------------------------------------------------- */
// --- components
// --- WindowResize
var WindowResize = function () {
  var _rtime;

  var _timeout = false;
  var _delta = 200; // --- handleResize

  var handleResize = function handleResize() {
    $(window).resize(function () {
      _rtime = new Date();

      if (_timeout === false) {
        _timeout = true;
        $('body').addClass('hold-transition');
        setTimeout(handleResizeEnd, _delta);
      }
    });
  }; // --- handleResizeEnd


  var handleResizeEnd = function handleResizeEnd() {
    if (new Date() - _rtime < _delta) {
      setTimeout(handleResizeEnd, _delta);
    } else {
      _timeout = false; // Run Function on Resize end

      $('body').removeClass('hold-transition');

      _index.Footer.setFooter();

      _index.Footer.destroyAccordion();

      _WindowScroll["default"].checkScroll();

      _index.CardProduct.checkHeight();
    }
  }; // --- init


  var init = function init() {
    handleResize();
  }; // --- return


  return {
    init: init
  };
}();

var _default = WindowResize;
exports["default"] = _default;

},{"./WindowScroll":18,"./index":19}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: WindowScroll
@description: WindowScroll
--------------------------------------------------------------------------------- */
// --- WindowScroll
var WindowScroll = function () {
  var _lastScrollTop = 0;
  var _delta = 4;

  var _headerHeight = $('.header').height() / 2;

  var _sticky = $('.js-sticky').offset() || null; // --- handleScroll


  var handleScroll = function handleScroll() {
    var _didScroll;

    $(window).scroll(function () {
      _didScroll = true;
      setInterval(function () {
        if (_didScroll) {
          handleHeaderScroll();
          _didScroll = false;
        }
      }, 200);
    });
  }; // --- handleHeaderScroll


  var handleHeaderScroll = function handleHeaderScroll() {
    // --- _scrollTop
    var _scrollTop = $(window).scrollTop(); // --- Make sure they scroll more than _delta


    if (Math.abs(_lastScrollTop - _scrollTop) <= _delta) {
      return;
    } // --- Scroll Down


    if (_scrollTop > _lastScrollTop && _scrollTop > _headerHeight) {
      $('body').addClass('window-scrolled');
      $('.js-sticky').css({
        top: '0'
      });
    } else {
      // --- Scroll Up
      if (_scrollTop + $(window).height() < $(document).height()) {
        $('body').removeClass('window-scrolled');

        if (_sticky !== null) {
          if (window.pageYOffset <= _sticky.top) {
            $('.js-sticky').css({
              top: '0'
            });
          } else {
            $('.js-sticky').css({
              top: '70px'
            });
          }
        }
      }
    }

    _lastScrollTop = _scrollTop;
  }; // --- init


  var init = function init() {
    handleHeaderScroll();
    handleScroll();
  }; // --- return


  return {
    init: init,
    checkScroll: handleScroll
  };
}();

var _default = WindowScroll;
exports["default"] = _default;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WindowScroll", {
  enumerable: true,
  get: function get() {
    return _WindowScroll["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "HeroBanner", {
  enumerable: true,
  get: function get() {
    return _HeroBanner["default"];
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _Tabs["default"];
  }
});
Object.defineProperty(exports, "CardProduct", {
  enumerable: true,
  get: function get() {
    return _CardProduct["default"];
  }
});
Object.defineProperty(exports, "WindowResize", {
  enumerable: true,
  get: function get() {
    return _WindowResize["default"];
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
Object.defineProperty(exports, "Validation", {
  enumerable: true,
  get: function get() {
    return _Validation["default"];
  }
});
Object.defineProperty(exports, "HeaderSearch", {
  enumerable: true,
  get: function get() {
    return _HeaderSearch["default"];
  }
});
Object.defineProperty(exports, "Contact", {
  enumerable: true,
  get: function get() {
    return _Contact["default"];
  }
});
Object.defineProperty(exports, "Category", {
  enumerable: true,
  get: function get() {
    return _Category["default"];
  }
});
Object.defineProperty(exports, "SortingCategory", {
  enumerable: true,
  get: function get() {
    return _SortingCategory["default"];
  }
});
Object.defineProperty(exports, "TitlePage", {
  enumerable: true,
  get: function get() {
    return _TitlePage["default"];
  }
});
Object.defineProperty(exports, "ProductDetail", {
  enumerable: true,
  get: function get() {
    return _ProductDetail["default"];
  }
});
Object.defineProperty(exports, "Sale", {
  enumerable: true,
  get: function get() {
    return _Sale["default"];
  }
});
Object.defineProperty(exports, "Cart", {
  enumerable: true,
  get: function get() {
    return _Cart["default"];
  }
});
Object.defineProperty(exports, "OrderStatus", {
  enumerable: true,
  get: function get() {
    return _OrderStatus["default"];
  }
});

var _WindowScroll = _interopRequireDefault(require("./WindowScroll"));

var _Header = _interopRequireDefault(require("./Header"));

var _HeroBanner = _interopRequireDefault(require("./HeroBanner"));

var _Tabs = _interopRequireDefault(require("./Tabs"));

var _CardProduct = _interopRequireDefault(require("./CardProduct"));

var _WindowResize = _interopRequireDefault(require("./WindowResize"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Validation = _interopRequireDefault(require("./Validation"));

var _HeaderSearch = _interopRequireDefault(require("./HeaderSearch"));

var _Contact = _interopRequireDefault(require("./Contact"));

var _Category = _interopRequireDefault(require("./Category"));

var _SortingCategory = _interopRequireDefault(require("./SortingCategory"));

var _TitlePage = _interopRequireDefault(require("./TitlePage"));

var _ProductDetail = _interopRequireDefault(require("./ProductDetail"));

var _Sale = _interopRequireDefault(require("./Sale"));

var _Cart = _interopRequireDefault(require("./Cart"));

var _OrderStatus = _interopRequireDefault(require("./OrderStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./CardProduct":2,"./Cart":3,"./Category":4,"./Contact":5,"./Footer":6,"./Header":7,"./HeaderSearch":8,"./HeroBanner":9,"./OrderStatus":10,"./ProductDetail":11,"./Sale":12,"./SortingCategory":13,"./Tabs":14,"./TitlePage":15,"./Validation":16,"./WindowResize":17,"./WindowScroll":18}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: BrowserCheck
@description: BrowserCheck
--------------------------------------------------------------------------------- */
// --- BrowserCheck
var BrowserCheck = function () {
  // --- handleCheck
  var handleCheck = function handleCheck() {
    var _browser = 'dekstop-browser';
    var HTMLElement = document.getElementsByTagName('html')[0];

    if (navigator.userAgent.match(/Android/i)) {
      _browser = 'android-browser';
    } else if (navigator.userAgent.match(/BlackBerry/i)) {
      _browser = 'blackberry-browser';
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      _browser = 'ios-browser';
    } else if (navigator.userAgent.match(/IEMobile/i)) {
      _browser = 'windows-phone-browser';
    }

    $('html').addClass(_browser);
  }; // --- init


  var init = function init() {
    handleCheck();
  }; // --- return


  return {
    init: init
  };
}();

var _default = BrowserCheck;
exports["default"] = _default;

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Scrolllable
@description: Scrolllable
--------------------------------------------------------------------------------- */
// --- Scrolllable
var Scrolllable = function () {
  // --- handleEnable
  var handleEnable = function handleEnable() {
    $('body').removeClass('rm-scroll'); // --- vendor scrollLock for solve (position changed when on hover) in window/mac show scrollbar

    scrollLock.enablePageScroll();
  }; // --- handleDisable


  var handleDisable = function handleDisable() {
    if ($(window).width() <= 1200) {
      $('body').addClass('rm-scroll');
    } else {
      // --- vendor scrollLock for solve (position changed when on hover) in window/mac show scrollbar
      scrollLock.setFillGapMethod('padding'); // handle fill gap header

      var _fillGapHeader = document.querySelector('.header');

      scrollLock.addFillGapTarget(_fillGapHeader);
      scrollLock.disablePageScroll();
    }
  }; // --- return


  return {
    enable: handleEnable,
    disable: handleDisable
  };
}();

var _default = Scrolllable;
exports["default"] = _default;

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isOS", {
  enumerable: true,
  get: function get() {
    return _isOS["default"];
  }
});
Object.defineProperty(exports, "BrowserCheck", {
  enumerable: true,
  get: function get() {
    return _BrowserCheck["default"];
  }
});
Object.defineProperty(exports, "Scrolllable", {
  enumerable: true,
  get: function get() {
    return _Scrolllable["default"];
  }
});

var _isOS = _interopRequireDefault(require("./isOS"));

var _BrowserCheck = _interopRequireDefault(require("./BrowserCheck"));

var _Scrolllable = _interopRequireDefault(require("./Scrolllable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./BrowserCheck":20,"./Scrolllable":21,"./isOS":23}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: isOS
@description: isOS
--------------------------------------------------------------------------------- */
var isOS = {
  android: function android() {
    return navigator.userAgent.match(/Android/i);
  },
  blackberry: function blackberry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  mac: function mac() {
    return navigator.platform.indexOf('Mac') > -1;
  },
  opera: function opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  win: function win() {
    return navigator.platform.indexOf('Win') > -1;
  },
  winMobile: function winMobile() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isOS.android() || isOS.blackberry() || isOS.iOS() || isOS.mac() || isOS.opera() || isOS.win() || isOS.winMobile();
  }
};
var _default = isOS;
exports["default"] = _default;

},{}]},{},[1])

//# sourceMappingURL=maps/app.js.map
