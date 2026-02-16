
const loadTrendingProducts = async() =>{
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    // console.log(json);
    displayTrendingProducts(json);
}

const displayTrendingProducts = (products) => {
    const trendingContainer = document.getElementById('trending-container');
    trendingContainer.innerHTML = " ";

    for(let i = 0; i < 3; i++)
    {
        // console.log(products[i]);
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
        <div class="card bg-base-100 w-full shadow-sm h-[500px]">
                <figure class="h-60 overflow-hidden">
                    <img class="h-60 flex items-center justify-center bg-white" 
                        src="${products[i]['image']}" 
                        alt="cloths" />
                </figure>
                <div class="card-body space-y-3">
                    <h2 class="card-title flex justify-between">
                        <div class="badge badge-outline badge-primary">${products[i]['category'].charAt(0).toUpperCase() + products[i]['category'].slice(1)}</div>
                        <span class=" font-extralight text-sm space-x-2" ><i class="fa-solid fa-star text-warning"></i><span>${products[i]['rating']['rate']} <span>(${products[i]['rating']['count']})</span></span></span>
                    </h2>
                    <h2 class="text-xl font-medium">${products[i]['title']}</h2>
                     <h2 class="text-2xl font-bold">$${products[i]['price']}</h2>
                    <div class="grid grid-cols-2 gap-2 justify-between items-center">
                        <button onclick="loadProductDetails(${products[i]['id']})" class="btn btn-outline btn-primary rounded-xl "><i class="fa-regular fa-eye"></i><span>Details</span></button>
                        <button class="btn btn-primary rounded-xl"><i class="fa-solid fa-cart-shopping"></i><span>Add</span></button>
                    </div>
                </div>
            </div>
        `
        trendingContainer.append(cardDiv);
    }
}

loadTrendingProducts();

