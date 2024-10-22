 document.addEventListener('DOMContentLoaded', function () {
    // Function to update the total price of the cart
     function updateTotalPrice() {
         const items = document.querySelectorAll('.cart-item');
         let totalPrice = 0;

         items.forEach(item => {
             const price = parseFloat(item.querySelector('.price').textContent);
             const quantity = parseInt(item.querySelector('.quantity').value);
             totalPrice += price * quantity;
         });

         document.getElementById('total-price').textContent = totalPrice.toFixed(2);
     }

    document.querySelectorAll('.cart-item').forEach(cartItem => {
        const increaseBtn = cartItem.querySelector('.increase');
        const decreaseBtn = cartItem.querySelector('.decrease');
        const quantityInput = cartItem.querySelector('.quantity');

        increaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            quantityInput.value = ++quantity;
            updateTotalPrice(); 
       });

        decreaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantityInput.value = --quantity;
                updateTotalPrice(); 
            }
       });
   });

    
    document.querySelectorAll('.delete-item').forEach(deleteBtn => {
        deleteBtn.addEventListener('click', function () {
            const cartItem = this.closest('.cart-item');
            cartItem.remove(); 
            updateTotalPrice(); 
        });
    });

    // Add event listener for liking items (toggling heart color)
          likeBtn.addEventListener('click', function () {
             const heartIcon = this.querySelector('.heart-icon');
             if (heartIcon.style.color === 'red') {
                 heartIcon.style.color = 'black'; // Unlike (default color)
             } else {
                 heartIcon.style.color = 'red';  //Like (red color)
             }
         });
    });

    // Initial total price calculation
     updateTotalPrice();



