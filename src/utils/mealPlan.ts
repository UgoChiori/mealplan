export type Meal = {
    name: string;
    category: "breakfast" | "snack" | "lunch" | "dinner";
    ingredients: string[];
  };
  
  export type DailyMealPlan = {
    day: string;
    meals: Meal[];
  };
  
  export const weeklyMealPlan: DailyMealPlan[] = [
    {
      day: "Monday",
      meals: [
        {
          name: "Bacon, scrambled eggs, avocado, cucumber slices",
          category: "breakfast",
          ingredients: ["bacon", "avocado", "cucumber", "eggs"],
        },
        {
          name: "Boiled Eggs",
          category: "snack",
          ingredients: ["eggs", "salt", "pepper"],
        },
        {
          name: "Grilled Chicken/Turkey/Fish with Efo Riro/Soko",
          category: "lunch",
          ingredients: [
            "chicken/turkey/fresh fish",
            "efo",
            "pepper",
            "tomatoes,",
          ],
        },
        { name: "Garden eggs", category: "snack", ingredients: ["garden eggs"] },
        {
          name: "Green salad with mayonnaise",
          category: "dinner",
          ingredients: [
            "lettuce",
            "cucumber",
            "broccoli",
            "avocado",
            "boiled eggs",
            "lemon",
            "onion",
          ],
        },
      ],
    },
    {
      day: "Tuesday",
      meals: [
        {
          name: "Scrambled Eggs & Wholeweheat Toast",
          category: "breakfast",
          ingredients: ["eggs", "bread", "butter", "cheese"],
        },
        {
          name: "Carrot Slices & Mashed Avocado(guacamole)",
          category: "snack",
          ingredients: ["Carrots", "avocado", "salt", "pepper", "lime", "garlic", "onion", "cilantro/parsley"],
        },
        {
          name: "Lettuce wrap",
          category: "lunch",
          ingredients: ["chicken breast", "lettuce", "avocado", "mayonnaise"],
        },
        {
          name: "Boiled eggs",
          category: "snack",
          ingredients: ["eggs", "salt", "pepper"],
        },
        {
          name: "Stir-fried beef & Vegetables",
          category: "dinner",
          ingredients: ["beef", "carrots", "bell peppers", "soy sauce", "oil"],
        },
      ],
    },
    {
      day: "Wednesday",
      meals: [
        {
          name: "Greek Yogurt & Nut",
          category: "breakfast",
          ingredients: ["greek yogurt", "blueberries", "Nuts"],
        },
        {
          name: "Mixed Nuts",
          category: "snack",
          ingredients: ["almonds", "cashews", "walnuts"],
        },
        {
          name: "Chicken Peppersoup",
          category: "lunch",
          ingredients: ["chicken", "pepper", "onions"],
        },
        {
          name: "Dark Chocolate",
          category: "snack",
          ingredients: ["dark chocolate"],
        },
        {
          name: "Grilled Meat with Cabbage",
          category: "dinner",
          ingredients: ["beef/chicken", "cabbage"],
        },
      ],
    },
    {
      day: "Thursday",
      meals: [
        {
          name: "Avocado, Bacon and green salad",
          category: "breakfast",
          ingredients: ["bacon", "avocado", "lettuce", "cucumber"],
        },
        {
          name: "Green Smoothie",
          category: "snack",
          ingredients: [
            "ugu/celery",
            "lemon",
            "green apples",
            "parsley(optional)",
            "mint",
          ],
        },
        {
          name: "Okro soup",
          category: "lunch",
          ingredients: ["okro", "pepperss", "crayfish", "fish/beef/goat meat"],
        },
        {
          name: "Cheese or Boiled Eggs",
          category: "snack",
          ingredients: ["cheese", "eggs"],
        },
        {
          name: "Grilled Chicken/Turkey ",
          category: "dinner",
          ingredients: ["chicken", "turkey", "garlic", "ginger", "pepper"],
        },
      ],
    },
    {
      day: "Friday",
      meals: [
        {
          name: "Ugu or Celery Omelette",
          category: "breakfast",
          ingredients: ["ugu/celery", "eggs"],
        },
        {
          name: "Mashed Avocadoes & Carrot Sticks",
          category: "snack",
          ingredients: ["Avocado", "carrots"],
        },
        {
          name: "Goat Meat or Fish Peppersoup",
          category: "lunch",
          ingredients: [
            "goat meat",
            "fresh or dry fish",
            "pepper",
            "onion",
            "scent leaf",
            "crayfish",
          ],
        },
        {
          name: "Cheese or Boiled Eggs",
          category: "snack",
          ingredients: ["cheese", "eggs"],
        },
        {
          name: "Turkey/Chicken & Avocado Salad",
          category: "dinner",
          ingredients: [
            "turkey",
            "chicken breast/thigh",
            "avocado",
            "cheese(optional)",
            "cherry tomatoes",
            "lettuce",
            "carrots",
            "cucumber",
          ],
        },
      ],
    },
    {
      day: "Saturday",
      meals: [
        {
          name: "Avocado, omelette with vegetables",
          category: "breakfast",
          ingredients: ["avocado", "eggs", "carrots", "cucumber", "lettuce"],
        },
        {
          name: "Power Smoothie",
          category: "snack",
          ingredients: ["carrots", "lemon", "beets", "parsley", "mint", "lime"],
        },
        {
          name: "Amala with Ewedu and Stew",
          category: "lunch",
          ingredients: [
            "shrimp/beef/chicken/goatmeat/fish",
            "elubo",
            "peppers",
            "tomatoes",
            "iru",
          ],
        },
        {
          name: "Popcorn",
          category: "snack",
          ingredients: ["corn", "salt", "butter"],
        },
        {
          name: "Homemade Pizza/Chicken Wings",
          category: "dinner",
          ingredients: [
            "pizza dough",
            "tomato sauce",
            "cheese",
            "pepperoni",
            "chicken",
          ],
        },
      ],
    },
    {
      day: "Sunday",
      meals: [
        {
          name: "French Toast/Pancakes/Waffles/Akara/Moimoi",
          category: "breakfast",
          ingredients: [
            "bread",
            ",beans",
            "flour",
            "eggs",
            "milk",
            "maple syrup",
          ],
        },
        { name: "Ice Cream", category: "snack", ingredients: ["ice cream"] },
        {
          name: "Afang/Oha/Onugbu/FisherMan/Edikang Ikong Soups with eba/fufu/semo",
          category: "lunch",
          ingredients: [
            "beef/goatmeat",
            "afang",
            "waterleaf/spinach",
            "ugu",
            "crayfish",
            "dry fish",
            "crayfish",
            "periwinkles",
          ],
        },
        {
          name: "Nkwobi/Isiewu/Abacha",
          category: "snack",
          ingredients: ["goatmeat", "cow foot", "cassava flakes"],
        },
        {
          name: "Jollof/Fried/White Rice(with any sauce/stew)",
          category: "dinner",
          ingredients: [
            "chicken",
            "Rice",
            "Tomatoes",
            "Peppers",
            "Herbs and Spices",
            "Vegetable or Palm Oil",
          ],
        },
      ],
    },
  ];
  