const loadCategory = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const json = await res.json();
    console.log(json);
    displayCategories(json)
}

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = " ";

    categoryContainer.innerHTML = `<button class="btn btn-outline btn-primary rounded-2xl" onclick="loadAllProducts()">ALL</button>`

    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = "btn btn-outline btn-primary rounded-2xl";
        btn.innerText = category.charAt(0).toUpperCase() + category.slice(1); 
        btn.addEventListener("click", () => loadProductsByCategory(category));
        categoryContainer.appendChild(btn);
    });
}

const loadAllProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    console.log(json);
    displayProducts(json)
}

const loadProductsByCategory = async(category) => {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    displayProducts(json)
}

const displayProducts = (products) => {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = " ";

    products.forEach((product) => {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
        <div class="card bg-base-100 w-full shadow-sm h-[500px]">
                <figure class="h-60 overflow-hidden">
                    <img class="h-60 flex items-center justify-center bg-white" 
                        src="${product['image']}" 
                        alt="cloths" />
                </figure>
                <div class="card-body space-y-3">
                    <h2 class="card-title flex justify-between">
                        <div class="badge badge-outline badge-primary">${product['category'].charAt(0).toUpperCase() + product['category'].slice(1)}</div>
                        <span class=" font-extralight text-sm space-x-2" ><i class="fa-solid fa-star text-warning"></i><span>${product['rating']['rate']} <span>(${product['rating']['count']})</span></span></span>
                    </h2>
                    <h2 class="text-xl font-medium">${product['title']}</h2>
                     <h2 class="text-2xl font-bold">$${product['price']}</h2>
                    <div class="grid grid-cols-2 gap-2 justify-between items-center">
                        <button onclick="loadProductDetails(${product['id']})" class="btn btn-outline btn-primary rounded-xl "><i class="fa-regular fa-eye"></i><span>Details</span></button>
                        <button class="btn btn-primary rounded-xl"><i class="fa-solid fa-cart-shopping"></i><span>Add</span></button>
                    </div>
                </div>
            </div>
        `
        productsContainer.append(cardDiv);
    })
}
loadCategory();
loadAllProducts();
