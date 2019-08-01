class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        this.products.push(product)

    }

    removeProduct(product) {
        const index = this.products.indexOf(product)
        this.products.splice(index, 1)

    }

    searchProduct(productName) {
        // Implement functionality here
        return this.products.filter((product) =>  product.name.search(productName) !== -1)
    }

    getTotal() {
        return this.products.reduce((acc, product) => acc + product.price, 0)
    }

    renderProducts() {
        // Implement functionality here
        this.products.forEach(product => {
            const li = document.createElement('li')
            li.textContent = `product: ${product.name} - ${product.price}`
            list.appendChild(li)
        });
        return list;
    }

    getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => response.json())
    }
}

const userP = document.getElementById('user')
const total = document.getElementById('total')
const list = document.getElementById('list')

const flatscreen = new Product('flat-screen', 5000);
const shoppingCart = new ShoppingCart([flatscreen]);
const telephone = new Product('telephone ', 100)
const telephone2 = new Product('telephone 2', 300)


console.log(shoppingCart)
shoppingCart.addProduct(telephone)
shoppingCart.addProduct(telephone2)
console.log(shoppingCart);
// shoppingCart.removeProduct(telephone)
// console.log(shoppingCart);

console.log(shoppingCart.searchProduct('tele'))
console.log(shoppingCart.getTotal())



shoppingCart.getUser().then(user => {
    console.log(user)
    shoppingCart.renderProducts()
    total.textContent = `total: ${shoppingCart.getTotal()}`
    console.log(user, user.name)
    userP.textContent = user.name
})