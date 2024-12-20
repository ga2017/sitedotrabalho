let cart = [];

function addToCart(name, price) {
    // Verifica se o produto já existe no carrinho
    const productIndex = cart.findIndex(item => item.name === name);

    if (productIndex === -1) {
        // Se o produto não existe no carrinho, adiciona ele
        cart.push({ name, price, quantity: 1 });
    } else {
        // Se o produto já está no carrinho, incrementa a quantidade
        cart[productIndex].quantity++;
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Limpa a lista de itens no carrinho

    let total = 0;

    // Exibe os produtos no carrinho
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    // Atualiza o total no carrinho
    document.getElementById("total-price").textContent = `Total: R$ ${total.toFixed(2)}`;

    // Atualiza o texto do botão do carrinho
    document.getElementById("cartButton").textContent = `Carrinho (${cart.length})`;
}

function clearCart() {
    cart = []; // Limpa o carrinho
    updateCart();
}

function checkout() {
    if (cart.length > 0) {
        alert("Compra finalizada com sucesso! Total: R$ " + document.getElementById("total-price").textContent);
        clearCart();
    } else {
        alert("O carrinho está vazio!");
    }
}

function toggleCart() {
    const cartContent = document.querySelector('.cart-content');
    if (cartContent.style.display === 'none' || cartContent.style.display === '') {
        cartContent.style.display = 'block';
    } else {
        cartContent.style.display = 'none';
    }
}

