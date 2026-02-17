async function loadCategories() {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();
    displayCategories(categories);
  } catch (err) {
    console.error("Error loading categories:", err);
  }
}

function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className =
      "btn btn-sm md:btn-md btn-outline btn-primary px-6 capitalize";
    button.innerText = category;

    button.onclick = () => filterByCategory(category);

    categoryContainer.appendChild(button);
  });
}

async function filterByCategory(category) {
  const container = document.getElementById("product-container");
  container.innerHTML = `<span class="loading loading-spinner loading-lg"></span>`;

  let url = "https://fakestoreapi.com/products";
  if (category !== "all") {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    container.innerHTML = "";
    displayProducts(data);
  } catch (err) {
    console.error("Filtering error:", err);
  }
}

async function loadProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("product-container");

  products.slice(0, 6).forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "card bg-white shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]";

    card.innerHTML = `
        <figure class="px-6 pt-6 h-64 bg-gray-50 m-4 rounded-xl">
          <img src="${product.image}" alt="${product.title}" class="object-contain h-full" />
        </figure>
        <div class="card-body pt-2">
          <div class="flex justify-between items-center mb-2">
            <span class="badge badge-ghost text-xs capitalize">${product.category}</span>
            <span class="text-yellow-500 text-sm">
              <i class="fa-solid fa-star"></i> ${product.rating.rate} (${product.rating.count})
            </span>
          </div>
          <h3 class="card-title text-base font-bold line-clamp-1" title="${product.title}">${product.title}</h3>
          <p class="text-xl font-bold text-gray-800">$${product.price}</p>
          <div class="card-actions grid grid-cols-2 gap-2 mt-4">
            <button class="btn btn-outline btn-sm">Details</button>
            <button class="btn btn-primary btn-sm bg-indigo-600 border-none hover:bg-indigo-700 text-white">Add to Cart</button>
          </div>
        </div>
      `;
    container.appendChild(card);
  });
}

loadProducts();

loadCategories();