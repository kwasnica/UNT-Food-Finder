console.log("restaurants.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const restaurants = [
    {
      name: "Mean Green Grill",
      location: "University Union",
      cuisine: "American",
      dietary: "Vegetarian",
      special_offer: "10% off for students"
    },
    {
      name: "Vegan Delight",
      location: "Eagle Commons",
      cuisine: "Vegan",
      dietary: "Vegan, Gluten-Free",
      special_offer: "Buy 1 Get 1 Free on Tuesdays"
    }
  ];

  const listContainer = document.getElementById("restaurant-list");

  function createCard(rest) {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${rest.name}</h5>
          <p class="card-text"><strong>Location:</strong> ${rest.location}</p>
          <p class="card-text"><strong>Cuisine:</strong> ${rest.cuisine}</p>
          <p class="card-text"><strong>Dietary:</strong> ${rest.dietary}</p>
          <p class="card-text"><strong>Special Offer:</strong> ${rest.special_offer}</p>
        </div>
      </div>
    `;
    listContainer.appendChild(card);
  }

  // Render initial restaurants
  restaurants.forEach(createCard);

  // Handle form submissions
  document.getElementById("restaurant-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const newRestaurant = {
      name: document.getElementById("name").value,
      location: document.getElementById("location").value,
      cuisine: document.getElementById("cuisine").value,
      dietary: document.getElementById("dietary").value,
      special_offer: document.getElementById("special_offer").value
    };

    createCard(newRestaurant);
    this.reset();
  });
});
