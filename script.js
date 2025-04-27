const restaurants = [
  { name: "El Matador", type: "mexican", rating: 4.5, location: "Denton, TX", dietary: ["halal", "vegetarian"] },
  { name: "Roma Italian", type: "italian", rating: 4.2, location: "UNT, Denton", dietary: ["vegan", "gluten-free"] },
  { name: "Spicy India", type: "indian", rating: 4.6, location: "Denton, TX", dietary: ["halal", "vegan"] }
];

function searchFood() {
  let query = document.getElementById("searchBox").value.toLowerCase();
  let filteredList = restaurants.filter(r => r.name.toLowerCase().includes(query) || r.type.includes(query));
  displayRestaurants(filteredList);
}

function filterByType(type) {
  let filteredList = restaurants.filter(r => r.type === type);
  displayRestaurants(filteredList);
}

function filterByPreference(preference) {
  let filteredList = restaurants.filter(r => r.dietary.includes(preference));
  displayRestaurants(filteredList);
}

function displayRestaurants(list) {
  let container = document.getElementById("restaurantList");
  container.innerHTML = "";
  list.forEach(r => {
    container.innerHTML += `
            <div class="restaurant-item">
                <div>
                    <h3>${r.name}</h3>
                    <p>${r.location}</p>
                    <p>Rating: ⭐${r.rating}</p>
                    <p>Dietary Options: ${r.dietary.join(", ")}</p>
                </div>
                <button onclick="addToFavorites('${r.name}')">❤️ Add to Favorites</button>
            </div>`;
  });
}

function addToFavorites(name) {
  alert(name + " added to favorites!");
}
