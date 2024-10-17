let cart = [];

        function addToCart(name, price, image) {
            const item = { name, price, image, quantity: 1 };
            cart.push(item);
            renderCart();
        }

        function renderCart() {
            const cartItems = document.getElementById('cart-items');
            cartItems.innerHTML = '';
            let totalPrice = 0;

            cart.forEach((item, index) => {
                totalPrice += item.price * item.quantity;

                const row = document.createElement('div');
                row.className = 'cart-row';

                const img = document.createElement('img');
                img.src = item.image;
                img.style.width = '100px';
                img.style.textAlign = 'center' 
                row.appendChild(img);

                const name = document.createElement('div');
                name.textContent = item.name;
                name.style.textAlign = 'center'
                row.appendChild(name);

                const quantity = document.createElement('input');
                quantity.type = 'number';
                quantity.value = item.quantity;
                quantity.style.width = '60px'
                quantity.style.height='30px'
                quantity.style.textAlign = 'center'
                quantity.onchange = (e) => updateQuantity(index, e.target.value);
                row.appendChild(quantity);

                const price = document.createElement('div');
                price.textContent = `${item.price} грн`;
                row.appendChild(price);

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Видалити';
                removeButton.style.padding = '10px'
                removeButton.style.width = '90px'
                removeButton.style.height = '50px'
                removeButton.style.textAlign = 'center'
                removeButton.onclick = () => removeFromCart(index);
                row.appendChild(removeButton);

                cartItems.appendChild(row);
            });

            document.getElementById('total-price').textContent = `Загальна вартість: ${totalPrice} грн`;
        }

        function updateQuantity(index, quantity) {
            cart[index].quantity = parseInt(quantity, 10);
            renderCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            renderCart();
        }

        function clearCart() {
            cart = [];
            renderCart();
        }