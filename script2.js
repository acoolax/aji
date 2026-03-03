document.addEventListener("DOMContentLoaded", function() {
    // Оголошуємо змінні для зберігання вибраних товарів та загальної суми
    const cart = [];
    let totalAmount = 0;

    // Функція для оновлення відображення корзини
    function updateCart() {
        const cartItems = document.querySelector(".cart-items");
        const totalAmountElement = document.querySelector(".total-price");

        // Очищаємо попередній вміст корзини
        cartItems.innerHTML = "";

        // Додаємо вибрані товари до корзини
        cart.forEach(item => {
            const cartItem = document.createElement("li");
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(cartItem);
        });

        // Оновлюємо загальну суму
        totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
    }

    // Обробник кліку на кнопку "Додати до корзини"
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("add-to-cart")) {
            const product = event.target.closest(".sppb-addon-pricelist");
            const productName = product.querySelector(".pricelist-title").textContent;
            const productPrice = parseFloat(product.querySelector(".pricelist-price").textContent.replace(/\D/g, '')) / 100; // Конвертуємо ціну в число

            // Додаємо товар до корзини
            cart.push({ name: productName, price: productPrice });
            totalAmount += productPrice;

            // Оновлюємо відображення корзини
            updateCart();
        }
    });

    // Обробник подачі форми
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Отримуємо дані з форми
        const phone = form.phone.value;
        const people = form.people.value;
        const promo = form.promo.value;

        // Відправляємо дані на сервер для обробки і відправки листа
        // Тут вам знадобиться власний серверний код

        // Очищаємо корзину та оновлюємо відображення
        cart.length = 0;
        totalAmount = 0;
        updateCart();
    });
});
