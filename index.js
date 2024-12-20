// Função para adicionar produtos ao carrinho
function addToCart(id, name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Adicionar o novo produto ao carrinho
    cart.push({ id, name, price });
    
    // Salvar o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Opcional: Confirmar para o usuário que o produto foi adicionado
    alert(`${name} foi adicionado ao carrinho.`);
}
