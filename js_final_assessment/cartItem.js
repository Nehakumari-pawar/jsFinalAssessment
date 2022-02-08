'use strict';

const cartProduct=[];
// for calculating the total price of the items
let shopItemsButton=document.querySelectorAll('.shop-item-button');
console.log(shopItemsButton);
   
    for(let i=0;i<shopItemsButton.length;i++)
    {
        
       shopItemsButton[i].addEventListener('click',(event) => {
            console.log('you clicked me');
            let products={
                            image: event.target.parentElement.parentElement.children[0].children[0].src,
                            name:event.target.parentElement.parentElement.children[1].textContent,
                            price:event.target.parentElement.parentElement.children[2].textContent,
                            quantity:1,

                        }
            console.log(products);
            addItemToLocal(products);
         
        });
    }

function addItemToLocal(products)
   {
       let cartItem=JSON.parse(localStorage.getItem('prdInCart'));
       console.log(cartItem);
       if(cartItem === null)
       {
            cartProduct.push(products);
            localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
       }
       else{
              cartItem.forEach(item => {
                  if(products.name === item.name){
                      products.quantity=item.quantity += 1;
                      products.totalPrice=item.totalPrice += products.totalPrice;

                  } else{
                      cartProduct.push(item);
                  }
              });
              cartProduct.push(products);
              alert("item is added to the cart");
       }
       localStorage.setItem('prdInCart',JSON.stringify(cartProduct));
       window.location.reload();

   }

//For displaying cart items
   function dispCartItems()
   {
       let cartData='';
    let cartItem=JSON.parse(localStorage.getItem('prdInCart'));
    cartItem.forEach(item => {
       cartData += `
       <div class="cartList">
       <div class="forItem"><img src="${item.image}" class="cart" alt=""  width:10px height:10px></div>
       <div class="forItem"><h3>${item.name}</h3></div>   
       <div class="forItem"><h3 >${item.price}</h3></div>
       <div class="forItem"><h3 >${item.quantity}</h3></div> 
       <div class="removeItem forItem" ><button> remove </button></div>
       </div>`


    });
    document.querySelector('.displayCart').innerHTML=cartData;
   }

   dispCartItems();

// for removing cart item

const removeItem=document.getElementsByClassName('removeItem');
    for(var i=0;i<removeItem.length;i++)
    {
        let removeBtn=removeItem[i];
        removeBtn.addEventListener('click',() => {
            let cartItem=JSON.parse(localStorage.getItem('prdInCart'));
            console.log(event.target.parentElement.parentElement.children[1].children[0].textContent);
            cartItem.forEach(item => {
         
                if(item.name != event.target.parentElement.parentElement.children[1].children[0].textContent)
                    {
                        cartProduct.push(item);
                    }


           });

        localStorage.setItem('prdInCart',JSON.stringify(cartProduct));
        window.location.reload();
 


    })
}




         
                 
                