/* ------------------------------------------------------------------------------
@name: Cart
@description: Cart
--------------------------------------------------------------------------------- */

const Cart = (() => {

// variables
let _buttonMin = $('.js-cart-minus'),
    _buttonMax = $('.js-cart-plus'),
    _itemCount = 1,
    _quantity = $('.js-cart-quantity'),
    _oldPrice = 4500000,
    _newPrice = 4500000,
    _jsCartPrice = $('.js-cart-price'),
    _jsCartTotal = $('.js-cart-total');

// function change price
function formatRupiah(harga, prefix) {
  let number_string = String(harga).replace(/[^,\d]/g, '').toString(),
  split   = number_string.split(','),
  sisa    = split[0].length % 3,
  rupiah  = split[0].substr(0, sisa),
  ribuan  = split[0].substr(sisa).match(/\d{3}/gi);

  if(ribuan){
    let separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : (rupiah ? 'Rp' + rupiah : '');
}

  // handleClick
  const handleClick = () => {
    // handle button min
    $(_buttonMin).on('click', (e) => {
      e.preventDefault();
      if(_itemCount > 1) {
        _itemCount -= 1;
        _oldPrice = _oldPrice - _newPrice;
        $(_quantity).val(_itemCount);
        $(_jsPrice).text(formatRupiah(_oldPrice, ''));
      }
    });

    // handle button max
    $(_buttonMax).on('click', (e) => {
      // e.preventDefault();
      // _itemCount += 1;
      // _oldPrice = _oldPrice + _newPrice;
      // $(_quantity).val(_itemCount);
      // $(_jsPrice).text(formatRupiah(_oldPrice, ''));
      alert(12000);
    });
  }

  // handle keyup
  const handleKeyup = () => {
    // handle on keyup
    $(_quantity).on('keyup', (e) => {
      let _resultCount = _newPrice * $(_quantity).val();
      $(_jsPrice).text(formatRupiah(_resultCount, ''));
      _oldPrice = _resultCount;
      _itemCount = parseInt(e.currentTarget.value);
    });
  }

  // init 
  const init = () => {
    handleClick();
    handleKeyup();
  }

  return {
    init
  }

})();

export default Cart
