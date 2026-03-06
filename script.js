const products = [
    { id: 1, name: "Sony Wireless Headphone", price: 150, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 2, name: "Apple Watch Series 9", price: 399, img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500" },
    { id: 3, name: "Ray-Ban Sunglasses", price: 120, img: "https://images.unsplash.com/photo-1511499767390-90342f568952?w=500" },
    { id: 4, name: "Nike Air Force 1", price: 110, img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500" },
    { id: 5, name: "Fujifilm Instax Mini", price: 89, img: "https://images.unsplash.com/photo-1526170315873-3a92b4880d17?w=500" },
    { id: 6, name: "Herschel Backpack", price: 75, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
    { id: 7, name: "Logitech MX Master 3", price: 99, img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500" },
    { id: 8, name: "Mechanical Keyboard RGB", price: 130, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500" }
];

let cart = [];

// Load Products
function renderProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(p => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 product-card shadow-sm">
                <img src="${p.img}" class="card-img-top" alt="${p.name}">
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title fw-bold text-dark">${p.name}</h6>
                    <p class="text-primary fw-bold mt-auto mb-2">$${p.price}</p>
                    <button class="btn btn-outline-dark btn-sm rounded-pill" onclick="addToCart('${p.name}', ${p.price})">
                        <i class="bi bi-plus-lg"></i> কার্টে যোগ করুন
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}

function updateCart() {
    const badge = document.getElementById('cart-badge');
    const list = document.getElementById('cart-items');
    const totalDisp = document.getElementById('total-price');
    
    badge.innerText = cart.length;
    
    if(cart.length === 0) {
        list.innerHTML = '<p class="text-center text-muted mt-5">আপনার কার্ট খালি!</p>';
        totalDisp.innerText = '$0.00';
        return;
    }

    let sum = 0;
    list.innerHTML = cart.map((item, index) => {
        sum += item.price;
        return `
            <div class="d-flex justify-content-between align-items-center mb-3 bg-light p-2 rounded">
                <div>
                    <span class="d-block fw-bold" style="font-size: 0.9rem;">${item.name}</span>
                    <small class="text-success">$${item.price}</small>
                </div>
                <button class="btn btn-sm text-danger" onclick="removeItem(${index})"><i class="bi bi-trash"></i></button>
            </div>
        `;
    }).join('');
    totalDisp.innerText = `$${sum.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function confirmOrder() {
    alert("আপনার অর্ডারটি গ্রহণ করা হয়েছে! ধন্যবাদ।");
    cart = [];
    updateCart();
    bootstrap.Modal.getInstance(document.getElementById('checkoutModal')).hide();
}

// Start
window.onload = renderProducts;