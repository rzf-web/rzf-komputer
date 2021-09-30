/* ------------------------------------------------------------------------------
@name: Cart
@description: Cart
--------------------------------------------------------------------------------- */


// let products = [
//   { id: 1, img: 'laptop-asus-3.jpg', name: 'Asus Ryzen 3 AMD III SSD 500GB', price: 4500000, stock: 2, total: 2 },
//   { id: 2, img: 'laptop-asus-2.jpg', name: 'HP Ryzen 3 AMD III SSD 500GB', price: 700000, stock: 5, total: 1 },
//   { id: 3, img: 'laptop-asus-1.jpg', name: 'Lenovo Ryzen 3 AMD III SSD 500GB', price: 3000000, stock: 3, total: 1 }
// ]
let products = []
if($('.js-tableCart').length > 0 ){
  products =  JSON.parse($('.js-tableCart').attr('dataProductCart'))
}

function renderTotal(total, stock, type){
  if(type == 'increment'){
    if(total >= stock){
      return stock;
    }
    return total + 1;
  } else {
    if(total < stock){
      return 1;
    }
    return total - 1;
  }
}

const formatRupiah = (harga, prefix) => {
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


function loadData(datas) {
  let total = 0;
  let html = '';
  datas.map((product) => {
    total += Number(product.total) * Number(product.price)
    html += loadHtml(product)
  })
  html+= `
  <td class='table-total'>
    <p class='cart__media__total'> Order Total :</p>
  </td>
  <td class='table-total'>
    <p class='cart__media__total js-cart-total-price'>Rp ${formatRupiah(total)}</p>
  </td>`
  $('.js-tableCart').html(html);

  }

function loadHtml(product) {
  return `
    <tr>
      <td>
        <div class='cart__media'>
          <div class='cart__media__content'>
            <button onclick='popupDelete(${product.id})' class='cart__media__delete-btn js-delete' type='button' title='Delete'>
              <i class='rzfkomputer-trashcan'></i>
            </button>
            <div class='cart__media__img-wrapper'>
              <img class='cart__media__img-el' src='assets/img/dummy/${product.img}' alt='Image' />
            </div>
          </div>
        </td>
        <td>
          <p class='cart__media__name'> ${product.name}</p>
        </td>
        <td>
          <p class="cart__media__price">Rp ${formatRupiah(product.price)}</p>
        </td>
        <td>
          <div class="cart__media__product-count">
            <button class='cart__media__btn-chevron-down' type="button" onclick="handleChangeTotal(${Number(product.id)}, 'decrement')" class="cart__media__btn-chevron-down js-cart-minus">
            <i class="rzfkomputer-minus"></i>
            </button>
            <input onkeyup='handleChangeInput(this, ${product.stock})' type="number" class='cart__media__input-qty js-cart-quantity' id="quantity" name="cart" max-length='12' title='Quantity' min='1' value='${product.total}' />
            <button type="button" onclick="handleChangeTotal(${product.id}, 'increment')" class="cart__media__btn-chevron-down js-cart-minus">
            <i class="rzfkomputer-add"></i>
            </button>
          </div>
        </td>
        <div class="cart__media__product-count">
            <button type="button" onclick="handleChangeTotal(${product.id}, 'decrement')" class="cart__media__btn-chevron-down js-cart-minus">
            <i class="rzfkomputer-minus"></i>
            </button>
            <input onchange='handleChangeInput(this, ${product.stock})' type="number" class='cart__media__input-qty' id="quantity" name="cart" max-length='12' title='Quantity' min='1' value='${product.total}' />
            <button type="button" onclick="handleChangeTotal(${Number(product.id)}, 'increment')" class="cart__media__btn-chevron-down js-cart-minus">
            <i class="rzfkompu5.400.000ter-add"></i>
            </button>
          </div>
        </td>
      </tr>
  `
}

    window.load = loadData(products);
    window.popupDelete = (id) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn--primary mr-12 w-100',
        cancelButton: 'btn btn--secondary w-100',
        },
        buttonsStyling: false
      })
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
      }).then((result) => {

          if(result.isConfirmed){
            $.ajax({
            url: `/product/${id}/delete`,
            type: 'DELETE',
            headers: {  
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            success: () => {
              // ketika sukses
              swalWithBootstrapButtons.fire({
                title: 'Terhapus!',
                text: 'Item Anda sudah terhapus',
                icon: 'success',
                width: 420
              })

              const newProduct = products.filter((item) => item.id != id);
              products = newProduct
              loadData(newProduct)
            },
            error: () => {
              swalWithBootstrapButtons.fire({
                title: 'Gagal!',
                text: 'Item Anda gagal terhapus',
                icon: 'error',
                width: 420
              })

            }
          })
          }



      })
    }
    window.handleChangeInput = function(e, stock) {
      let value = $(e).val(); 
      if(value > stock){
        $(e).val(stock)
      }else if(value == 0){
        $(e).val(1);
      }else{
        $(e).val(value)
      }
     }

window.handleChangeTotal = (index, type) => {
  const newProduct = products.map(product => {
    if (Number(index) == Number(product.id)) {
      return {
        ...product,
        total: renderTotal(product.total, product.stock, type)
      }
    }
    return {
      ...product
    }
  })  
  products = newProduct;
  loadData(newProduct);
}



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

  // handle click
  const handleClick = () => {
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
      }`` 
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

