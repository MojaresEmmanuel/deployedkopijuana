let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products = [
    {
        id: 1,
        name: 'CAFE AMERICANO',
        price: 120000
    },
    {
        id: 2,
        name: 'ICED COFFEE',
        price: 120000
    },
    {
        id: 3,
        name: 'CARAMEL MACCHIATO',
        price: 220000
    },
    {
        id: 4,
        name: 'SPANISH LATTE',
        price: 123000
    },
    {
        id: 5,
        name: 'ICED LATTE',
        price: 320000
    },
    {
        id: 6,
        name: 'SALTED CARAMEL',
        price: 120000
    },
    {
        id: 7,
        name: 'COFFEE CARAMEL',
        price: 120000
    },
    {
        id: 8,
        name: 'COFFEE HAZELNUT',
        price: 120000
    },
    {
        id: 9,
        name: 'WHITE CHOCOLATE MACCHIATO',
        price: 120000
    },
    {
        id: 10,
        name: 'ICED MOCHA',
        price: 120000
    },
    {
        id: 11,
        name: 'COFFEE ALMOND',
        price: 120000
    },
    {
        id: 12,
        name: 'KOPI VIENNA',
        price: 120000
    },
    {
        id: 12,
        name: 'SIGNATURE CHOCOLATE',
        price: 120000
    },
    {
        id: 12,
        name: 'NUTELLA HAZELNUT',
        price: 120000
    },
    {
        id: 12,
        name: 'JAVA CHIPS',
        price: 120000
    },
    {
        id: 12,
        name: 'PEPPERMINT MOCHA',
        price: 120000
    },
    {
        id: 12,
        name: 'BUTTER BEER',
        price: 120000
    },
    {
        id: 12,
        name: 'STRAWBERRY YOGURT',
        price: 120000
    },
    {
        id: 12,
        name: 'MANGO LATTE',
        price: 120000
    },
    {
        id: 12,
        name: 'STRAWBERRY LATTE',
        price: 120000
    },
    {
        id: 12,
        name: 'BREWED COFFEE',
        price: 120000
    },
    {
        id: 12,
        name: 'CAFE AMERICANO',
        price: 120000
    },
    {
        id: 12,
        name: 'CAPPUCCINO	',
        price: 120000
    },
    {
        id: 12,
        name: 'LATTE',
        price: 120000
    },
    {
        id: 12,
        name: 'CAFE MOCHA',
        price: 120000
    },
    {
        id: 12,
        name: 'KOPI VIENNA',
        price: 120000
    },
    {
        id: 12,
        name: 'CARAMEL	',
        price: 120000
    },
    {
        id: 12,
        name: 'HAZELNUT',
        price: 120000
    },
    {
        id: 12,
        name: 'Double Cheesy Ensaymada',
        price: 120000
    },
    {
        id: 12,
        name: 'Assorted Oatmeal	',
        price: 120000
    },
    {
        id: 12,
        name: 'Brownies',
        price: 120000
    },
    {
        id: 12,
        name: 'Chunky Cookies	',
        price: 120000
    },
    {
        id: 12,
        name: 'Chocolate Mousse	',
        price: 120000
    },
    {
        id: 12,
        name: 'Tres Leches',
        price: 120000
    },
    {
        id: 12,
        name: 'Not So Messy Cookies	',
        price: 120000
    },
    {
        id: 12,
        name: 'Korean Garlic Bun',
        price: 120000
    },
    {
        id: 12,
        name: 'Revel Bar',
        price: 120000
    },
    {
        id: 12,
        name: 'Ferero Cupcake',
        price: 120000
    },
    {
        id: 12,
        name: 'Oreo Cupcake',
        price: 120000
    },
    {
        id: 12,
        name: 'Oatmeal Cookie',
        price: 120000
    },
    {
        id: 12,
        name: 'Ham and Cheese',
        price: 120000
    },
    {
        id: 12,
        name: 'Chocolate Muffin	',
        price: 120000
    },
    {
        id: 12,
        name: 'BAKED PENNE',
        price: 120000
    },
    {
        id: 12,
        name: 'PASTA CARBONARA',
        price: 120000
    },
    {
        id: 12,
        name: 'LASAGNA	',
        price: 120000
    }

    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
             
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
                
        }
        
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
    
}