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
    _quantityCartCount = $('.js-cart-count'),
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
    // handle delete product
    $('.js-delete').on('click', (e) => {
      e.preventDefault();
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn--primary mr-12 w-100',
          cancelButton: 'btn btn--secondary w-100',
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        showCancelButton: true,
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        confirmButtonColor: '#388e3c',
        cancelButtonColor: '#ff0000',
        confirmButtonText: 'Yes, delete it!',
        width: 550,
        padding: '22px'
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
            width: 550
          })
        }
      })
    });

    // handle button min
    $(_buttonMin).on('click', (e) => {
      e.preventDefault();
      if(_itemCount > 1) {
        _itemCount -= 1;
        _oldPrice = _oldPrice - _newPrice;
        $(_quantity).val(_itemCount);
        $(_quantityCartCount).text(_itemCount);
        changePrice(_jsCartPrice);
        changePrice(_jsCartTotal);
      }
    });

    // handle button max
    $(_buttonMax).on('click', (e) => {
      e.preventDefault();
      _itemCount += 1;
      _oldPrice = _oldPrice + _newPrice;
      $(_quantity).val(_itemCount);
      $(_quantityCartCount).text(_itemCount);
      changePrice(_jsCartPrice);
      changePrice(_jsCartTotal);
    });

    // change price
    const changePrice = (v) => {
      $(v).text(formatRupiah(_oldPrice, ''));
    }
  }

  // handle keyup
  const handleKeyup = () => {
    // handle on keyup
    $(_quantity).on('keyup', (e) => {
      let _resultCount = _newPrice * $(_quantity).val();
      $(_quantity).val(Math.abs($(_quantity).val()));
      $(_jsCartPrice).text(formatRupiah(_resultCount, ''));
      $(_jsCartTotal).text(formatRupiah(_resultCount, ''));
      _oldPrice = _resultCount;
      _itemCount = parseInt(e.currentTarget.value);
      $(_quantityCartCount).text(e.currentTarget.value == '' ? 0 : e.currentTarget.value);
      // console.log(parseInt(e.currentTarget.value));
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
