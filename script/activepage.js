 const currentPage = window.location.pathname.split("/").pop() || "Home";
const navLinks = document.querySelectorAll(".menu a");
// console.log(currentPage, navLinks);

navLinks.forEach(link => {
    let linkPage = link.getAttribute('href').replace("./", "");
    if (linkPage === currentPage) {
      link.classList.add("text-primary", "font-semibold");
    }
})

const loadProductDetails = async(id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    displayProductDetails(json)
}

const displayProductDetails = (product) => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
    <div class="card bg-base-100 w-full shadow-sm ">
                <figure class="h-60 flex items-center justify-center bg-white">
                    <img class="h-full object-contain" 
                        src="${product['image']}" 
                        alt="cloths" />
                </figure>
                <div class="card-body space-y-5">
                    <h2 class="card-title flex justify-between">
                        <div class="badge badge-outline badge-primary">${product['category'].charAt(0).toUpperCase() + product['category'].slice(1)}</div>
                        <span class=" font-extralight text-sm space-x-2" ><i class="fa-solid fa-star text-warning"></i><span>${product['rating']['rate']} <span>(${product['rating']['count']})</span></span></span>
                    </h2>
                    <h2 class="text-xl font-medium">${product['title']}</h2>
                    <h2 class="text-2xl font-bold">$${product['price']}</h2>
                    <p>${product['description']}</p>
                    <button class="btn btn-primary rounded-xl"><i class="fa-solid fa-cart-shopping"></i><span>Add</span></button>

                </div>
            </div>
    `
document.getElementById('product_modal').showModal();
 }
