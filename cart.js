// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    let cart = [];

    // Initialize Cart from LocalStorage
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }

    // Render Cart Items
    function renderCartItems() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            cartTotal.textContent = 'Rs0.00';
            checkoutBtn.style.display = 'none';
            return;
        }

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <input type="checkbox" class="select-item" data-id="${item.id}" checked>
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Rs ${item.price} x ${item.quantity} = Rs ${item.price * item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="decrease-qty" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-qty" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}">Remove</button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        updateCartTotal();
        attachCartEventListeners();
    }

    // Update Cart Total based on checked items
    function updateCartTotal() {
        const selectedItems = document.querySelectorAll('.select-item:checked');
        let total = 0;
        selectedItems.forEach(checkbox => {
            const productId = parseInt(checkbox.getAttribute('data-id'));
            const item = cart.find(p => p.id === productId);
            if (item) {
                total += item.price * item.quantity;
            }
        });
        cartTotal.textContent = `Rs${total.toFixed(2)}`;

        // Show or hide checkout button based on selected items
        if (selectedItems.length > 0) {
            checkoutBtn.style.display = 'block';
        } else {
            checkoutBtn.style.display = 'none';
        }
    }

    // Attach Event Listeners to Cart Buttons and Checkboxes
    function attachCartEventListeners() {
        const removeButtons = document.querySelectorAll('.remove-item-btn');
        const decreaseQtyButtons = document.querySelectorAll('.decrease-qty');
        const increaseQtyButtons = document.querySelectorAll('.increase-qty');
        const selectItemCheckboxes = document.querySelectorAll('.select-item');

        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });

        decreaseQtyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-id'));
                decreaseQuantity(productId);
            });
        });

        increaseQtyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-id'));
                increaseQuantity(productId);
            });
        });

        selectItemCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                updateCartTotal();
            });
        });
    }

    // Remove Item from Cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        renderCartItems();
    }

    // Decrease Quantity
    function decreaseQuantity(productId) {
        const item = cart.find(item => item.id === productId);
        if (item && item.quantity > 1) {
            item.quantity -= 1;
            saveCart();
            renderCartItems();
        }
    }

    // Increase Quantity
    function increaseQuantity(productId) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += 1;
            saveCart();
            renderCartItems();
        }
    }

    // Save Cart to LocalStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Proceed to Checkout
    checkoutBtn.addEventListener('click', () => {
        const selectedItems = document.querySelectorAll('.select-item:checked');
        if (selectedItems.length === 0) {
            alert('Please select at least one item to proceed to checkout.');
            return;
        }

        // Prepare selected items for checkout
        const itemsToCheckout = [];
        selectedItems.forEach(checkbox => {
            const productId = parseInt(checkbox.getAttribute('data-id'));
            const item = cart.find(p => p.id === productId);
            if (item) {
                itemsToCheckout.push(item);
            }
        });

        // Save selected items to localStorage for checkout page
        localStorage.setItem('checkout', JSON.stringify(itemsToCheckout));

        alert('Proceeding to payment...');
        // Implement payment functionality here

        // Optionally, remove checked items from cart after checkout
        // cart = cart.filter(item => !itemsToCheckout.includes(item));
        // saveCart();
        // renderCartItems();
    });

    // Initial Render
    renderCartItems();
});
