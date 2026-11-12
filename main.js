var meals = [
  {
    "name": "Mediterranean Quinoa Bowl",
    "time": 10,
    "cookTime": 4,
    "count": 5,
    "imgCover": "images/meal-5.avif",
    "description": "Healthy bowl with quinoa, vegetables, and tahini dressing",
    "difficulty": "Easy",
    "category": "Mediterranean",
    "ratingsAverage": 4.5,
    "ratingsQuantity": 156,
    "ingredients": [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing"
    ],
    "instructions": [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
    ],
    "nutrition": {
      "calories": "480 kcal",
      "protein": "18g",
      "carbs": "58g",
      "fat": "20g",
      "fiber": "10g",
      "sodium": "540mg"
    },
    "tips": [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein"
    ]
  },
  {
    "name": "Shrimp Scampi",
    "time": 5,
    "cookTime": 9,
    "count": 11,
    "imgCover": "images/meal-6.avif",
    "description": "Garlicky shrimp in white wine butter sauce",
    "difficulty": "Easy",
    "category": "Seafood",
    "ratingsAverage": 4.8,
    "ratingsQuantity": 356,
    "ingredients": [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes"
    ],
    "instructions": [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately."
    ],
    "nutrition": {
      "calories": "520 kcal",
      "protein": "36g",
      "carbs": "54g",
      "fat": "18g",
      "fiber": "3g",
      "sodium": "620mg"
    },
    "tips": [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste"
    ]
  },
  {
    "name": "Margherita Pizza",
    "time": 40,
    "cookTime": 12,
    "count": 19,
    "imgCover": "images/meal-11.avif",
    "description": "Classic Italian pizza with fresh mozzarella and basil",
    "difficulty": "Intermediate",
    "category": "Italian",
    "ratingsAverage": 4.9,
    "ratingsQuantity": 512,
    "ingredients": [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping"
    ],
    "instructions": [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."
    ],
    "nutrition": {
      "calories": "580 kcal",
      "protein": "24g",
      "carbs": "68g",
      "fat": "22g",
      "fiber": "4g",
      "sodium": "920mg"
    },
    "tips": [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture"
    ]
  }
];

var i = 0;

function addMeal() {
  var cartona = "";

  for (; i < meals.length;) {
    var meal = meals[i];

    document.getElementById("recipe-name").textContent = meal.name;
    document.getElementById("recipe-description").textContent = meal.description;
    document.getElementById("recipe-image").src = meal.imgCover;
    document.getElementById("recipe-image").alt = meal.name;
    document.getElementById("rating-average").textContent = meal.ratingsAverage;
    document.getElementById("rating-quantity").textContent = "(" + meal.ratingsQuantity + " reviews)";
    document.getElementById("prep-time-display").textContent = meal.time + " min";
    document.getElementById("cook-time-display").textContent = meal.cookTime + " min";
    document.getElementById("servings-display").textContent = meal.count + " people";
    document.getElementById("difficulty-badge").textContent = meal.difficulty;
    document.getElementById("category-badge").textContent = meal.category;

    var warning = document.getElementById("time-warning");
    if (meal.time + meal.cookTime > 45) {
      warning.classList.remove("d-none");
    } else {
      warning.classList.add("d-none");
    }

    cartona = "<li>" + meal.ingredients.join("</li><li>") + "</li>";
    document.getElementById("ingredients-list").innerHTML = cartona;

    cartona = "<li>" + meal.instructions.join("</li><li>") + "</li>";
    document.getElementById("instructions-list").innerHTML = cartona;

    cartona = "<li>" + meal.tips.join("</li><li>") + "</li>";
    document.getElementById("tips-list").innerHTML = cartona;

    for (var field in meal.nutrition) {
      document.getElementById(field + "-value").textContent = meal.nutrition[field];
    }

    i++;
    break;
  }

  if (i === meals.length) {
    i = 0;
  }
}

addMeal();

