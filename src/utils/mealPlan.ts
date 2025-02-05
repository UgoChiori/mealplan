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
        name: "Greek Yogurt & Nuts",
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
        ingredients: ["okro", "peppers", "crayfish", "fish/beef/goat meat"],
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
      { category: "breakfast", name: "Scrambled Eggs & Peppered Pomo", ingredients: ["Eggs", "Ponmo", "Butter", "Pepper", "Palm Oil", "Onion"] },
      { category: "snack", name: "Peppered Turkey Wings", ingredients: ["Turkey Wings", "Pepper", "Oil"] },
      { category: "lunch", name: "Catfish Peppersoup & Scent Leaf", ingredients: ["Catfish", "Pepper", "Scent Leaves"] },
      { category: "dinner", name: "Fried Pork Belly & Stir-Fried Ugwu", ingredients: ["Pork Belly", "Pumpkin Leaves", "Palm Oil"] },
    ],
  },
  {
    day: "Sunday",
    meals: [
      { category: "breakfast", name: "Eggs & Beef Suya with Peppers", ingredients: ["Eggs", "Beef Suya", "Bell Peppers", "Butter"] },
      { category: "snack", name: "Grilled Chicken & Cucumber", ingredients: ["Chicken", "Cucumber", "Salt"] },
      { category: "lunch", name: "Bitterleaf Soup with Vegetable Swallow", ingredients: ["Goat Meat", "Bitterleaf", "Palm Oil", "Tigernut/Cabbage/Coconut Flour"] },
      { category: "dinner", name: "Smoked Fish & Okra Soup", ingredients: ["Smoked Fish", "Okra", "Palm Oil"] },
    ],
  },

];

export const week2MealPlan: DailyMealPlan[] = [
  {
    day: "Monday",
    meals: [
      { category: "breakfast", name: "🥚 Eggs & Suya 🥩", ingredients: ["Eggs", "Beef Suya", "Butter/Oil"] },
      { category: "snack", name: "🔥 Peppered Goat Meat 🐐", ingredients: ["Goat Meat", "Salt", "Pepper", "Oil/Butter", "Onion"] },
      { category: "lunch", name: "🍗 Grilled Chicken & Efo Riro 🌿", ingredients: ["Chicken", "Greens", "Palm Oil", "Pepper", "Onion"] },
      { category: "dinner", name: "🐌 Peppered Snail & Ugu Sauce 🍃", ingredients: ["Snails", "Pumpkin Leaves", "Palm Oil", "Onion", "Pepper"] },
    ],
  },
  {
    day: "Tuesday",
    meals: [
      { category: "breakfast", name: "🍳 Fried Eggs & Offals 🥓", ingredients: ["Eggs", "Kidney, Liver, Intestines etc", "Butter"] },
      { category: "snack", name: "🍲 Goat Meat Peppersoup 🐐", ingredients: ["Goat Meat", "Pepper", "Scent Leaves"] },
      { category: "lunch", name: "🐟 Grilled Fish/Turkey/Chicken & Afang Soup 🌿", ingredients: ["Catfish", "Okazi Leaves", "Palm Oil"] },
      { category: "dinner", name: "🐄 Cow Leg Pepper Soup 🌶️", ingredients: ["Cow Leg", "Pepper", "Uziza Leaves", "Onion"] },
    ],
  },
  {
    day: "Wednesday",
    meals: [
      { category: "breakfast", name: "🍳 Omelette with Beef & Peppers 🫑", ingredients: ["Eggs", "Beef", "Bell Peppers", "Butter/Oil"] },
      { category: "snack", name: "🥩 Fried Gizzard & Cabbage 🥬", ingredients: ["Gizzard", "Cabbage", "Salt"] },
      { category: "lunch", name: "🍲 Edikang Ikong 🌿", ingredients: ["Goat Meat", "Waterleaf", "Palm Oil"] },
      { category: "dinner", name: "🐟 Stock Fish Peppersoup 🌶️", ingredients: ["Stock Fish", "Uziza Leaves"] },
    ],
  },
  {
    day: "Thursday",
    meals: [
      { category: "breakfast", name: "🍳 Scrambled Eggs & Avocado 🥑", ingredients: ["Eggs", "Avocado", "Butter/Oil"] },
      { category: "snack", name: "🍗 Peppered Chicken Wings 🔥", ingredients: ["Chicken Wings", "Pepper", "Oil", "Onion"] },
      { category: "lunch", name: "🍲 Oha Soup 🌿", ingredients: ["Oha Leaves", "Palm Oil"] },
      { category: "dinner", name: "🐌 Fried Snail & Egusi Soup 🍜", ingredients: ["Snails", "Egusi", "Palm Oil"] },
    ],
  },
  {
    day: "Friday",
    meals: [
      { category: "breakfast", name: "🍳 Eggs & Beef Suya with Peppers 🫑", ingredients: ["Eggs", "Beef Suya", "Bell Peppers", "Butter"] },
      { category: "snack", name: "🍗 Grilled/Fried Chicken & Cucumber 🥒", ingredients: ["Chicken", "Cucumber", "Salt", "Oil"] },
      { category: "lunch", name: "🍲 Bitterleaf Soup with Vegetable Swallow 🌿", ingredients: ["Goat Meat", "Bitterleaf", "Palm Oil", "Tigernut/Cabbage/Coconut Flour"] },
      { category: "dinner", name: "🐟 Smoked Fish & Okra Soup 🥣", ingredients: ["Smoked Fish", "Okra", "Palm Oil"] },
    ],
  },
  {
    day: "Saturday",
    meals: [
      { category: "breakfast", name: "🍳 Sunny Side Up Eggs, Bacon, Sausages & Avocado 🥑🥓", ingredients: ["Eggs", "Sausages", "Salt", "Black Pepper", "Bacon", "Avocado", "Butter", "Pepper", "Oil", "Onion"] },
      { category: "snack", name: "🔥 Peppered Wings 🍗", ingredients: ["Turkey/Chicken Wings", "Pepper", "Oil"] },
      { category: "lunch", name: "🍲 Goat Meat Peppersoup 🐐", ingredients: ["Goat Meat", "Pepper", "Scent Leaves"] },
      { category: "dinner", name: "🥩 Beef & Stir-Fried Ugu 🍃", ingredients: ["Beef", "Pumpkin Leaves", "Palm Oil"] },
    ],
  },
  {
    day: "Sunday",
    meals: [
      { category: "breakfast", name: "🍳 Eggs & Beef/Chicken/Ram Suya with Peppers 🫑", ingredients: ["Eggs", "Beef/Chicken/Ram Suya", "Bell Peppers", "Butter"] },
      { category: "snack", name: "🍗 Grilled Chicken & Cucumber 🥒", ingredients: ["Chicken", "Cucumber", "Salt"] },
      { category: "lunch", name: "🍲 Efo Riro with Grilled/Boiled Plantain/Yam 🍌", ingredients: ["Goat Meat", "Iru", "Soko/Tètè", "Palm Oil", "Yam/Plantain"] },
      { category: "dinner", name: "🐐 Goat Meat/Beef Okra Soup with Eba/Fufu/Amala 🍚", ingredients: ["Smoked Fish", "Meat", "Pomo", "Okra", "Palm Oil", "Gari/Fufu/Pounded Yam"] },
    ],
  },
];
export const week3MealPlan: DailyMealPlan[] = [
  {
    day: "Monday",
    meals: [
      { category: "breakfast", name: "🍳 Scrambled Eggs & Fried Cow Skin 🐄", ingredients: ["Eggs", "Ponmo", "Butter"] },
      { category: "snack", name: "🍗 Peppered Turkey Wings", ingredients: ["Turkey Wings", "Pepper", "Palm Oil"] },
      { category: "lunch", name: "🐟 Catfish Peppersoup & Scent Leaf 🌿", ingredients: ["Catfish", "Pepper", "Scent Leaves"] },
      { category: "dinner", name: "🥓 Fried Pork Belly & Stir-Fried Ugwu 🌱", ingredients: ["Pork Belly", "Pumpkin Leaves", "Palm Oil"] },
    ],
  },
  {
    day: "Tuesday",
    meals: [
      { category: "breakfast", name: "🍳 Eggs & Beef Suya with Peppers 🌶️", ingredients: ["Eggs", "Beef Suya", "Bell Peppers", "Butter"] },
      { category: "snack", name: "🍗 Boiled Chicken & Cucumber 🥒", ingredients: ["Chicken", "Cucumber", "Salt"] },
      { category: "lunch", name: "🐐 Goat Meat & Bitterleaf Soup 🍃", ingredients: ["Goat Meat", "Bitterleaf", "Palm Oil"] },
      { category: "dinner", name: "🐟 Smoked Fish & Okra Soup 🥣", ingredients: ["Smoked Fish", "Okra", "Palm Oil"] },
    ],
  },
  {
    day: "Wednesday",
    meals: [
      { category: "breakfast", name: "🍳 Sunny Side Up Eggs & Steamed Ugu 🌱", ingredients: ["Eggs", "Salt", "Black Pepper", "Pumpkin Leaves", "Butter"] },
      { category: "snack", name: "🍗 Peppered Chicken Wings 🌶️", ingredients: ["Chicken Wings", "Pepper", "Oil"] },
      { category: "lunch", name: "🍖 Grilled Turkey & Oha Soup 🍃", ingredients: ["Turkey", "Oha Leaves", "Palm Oil"] },
      { category: "dinner", name: "🐌 Fried Snail & Egusi Soup 🥣", ingredients: ["Snails", "Egusi", "Palm Oil"] },
    ],
  },
  {
    day: "Thursday",
    meals: [
      { category: "breakfast", name: "🍳 Omelette with Beef & Peppers 🌶️", ingredients: ["Eggs", "Beef", "Bell Peppers", "Butter"] },
      { category: "snack", name: "🍗 Fried/Baked Chicken Gizzard & Cabbage 🥬", ingredients: ["Gizzard", "Cabbage", "Salt"] },
      { category: "lunch", name: "🥬 Edikang Ikong with Vegetable Swallow 🍛", ingredients: ["Goat Meat", "Waterleaf", "Palm Oil", "TigerNut/Cabbage/Coconut Flour"] },
      { category: "dinner", name: "🐟 Stock Fish/Fresh Fish Peppersoup 🌿", ingredients: ["Stock Fish", "Uziza Leaves", "Palm Oil"] },
    ],
  },
  {
    day: "Friday",
    meals: [
      { category: "breakfast", name: "🍳 Ugu or Celery Omelette 🌱", ingredients: ["Ugu", "Celery", "Eggs"] },
      { category: "snack", name: "🥑 Mashed Avocado & Carrot Sticks 🥕", ingredients: ["Avocado", "Carrots"] },
      { category: "lunch", name: "🐐 Goat Meat or Fish Peppersoup 🥣", ingredients: ["Goat Meat", "Fish", "Pepper"] },
      { category: "dinner", name: "🍗 Turkey/Chicken & Avocado Salad 🥑", ingredients: ["Turkey", "Chicken", "Avocado"] },
    ],
  },
  {
    day: "Saturday",
    meals: [
      { category: "breakfast", name: "🥑 Avocado & Omelette with Vegetables 🥬", ingredients: ["Avocado", "Eggs", "Vegetables"] },
      { category: "snack", name: "🍏 Power Smoothie 🥬", ingredients: ["Spinach", "Green Apples", "Cucumber", "Lemon"] },
      { category: "lunch", name: "🍛 Amala with Ewedu & Stew 🍲", ingredients: ["Amala", "Ewedu", "Stew"] },
      { category: "snack", name: "🍿 Popcorn", ingredients: ["Popcorn"] },
      { category: "dinner", name: "🍕 Homemade Pizza & Chicken Wings 🍗", ingredients: ["Pizza dough", "Chicken wings"] },
    ],
  },
  {
    day: "Sunday",
    meals: [
      { category: "breakfast", name: "🥞 French Toast/Pancakes/Waffles/Akara/Moimoi 🍞", ingredients: ["Bread", "Eggs", "Flour", "Beans"] },
      { category: "snack", name: "🍦 Ice Cream", ingredients: ["Ice Cream"] },
      { category: "lunch", name: "🍛 Afang/Oha/Onugbu/FisherMan/Edikang Ikong Soups with Eba/Fufu/Semo 🍲", ingredients: ["Vegetables", "Meat", "Palm Oil", "Gari/Fufu/Semo"] },
      { category: "dinner", name: "🍖 Nkwobi/Isiewu/Abacha 🥗", ingredients: ["Cow Leg", "Goat Head", "Dried Cassava Flakes"] },
    ],
  }
];

export const week4MealPlan: DailyMealPlan[] = [
  {
    day: "Monday",
    meals: [
      { category: "breakfast", name: "🍳🥩 Eggs & Beef Suya with Peppers", ingredients: ["Eggs", "Beef Suya", "Bell Peppers", "Butter"] },
      { category: "snack", name: "🍗🥒 Baked/Grilled Chicken & Cucumber", ingredients: ["Chicken", "Cucumber", "Salt"] },
      { category: "lunch", name: "🥩🌿 Bitterleaf Soup with Vegetable Swallow", ingredients: ["Goat Meat", "Bitterleaf", "Palm Oil", "TigerNut/Cabbage/Coconut Powder"] },
      { category: "dinner", name: "🐟🫑 Smoked Fish & Okra Soup", ingredients: ["Smoked Fish", "Okra", "Palm Oil"] },
    ],
  },
  {
    day: "Tuesday",
    meals: [
      { category: "breakfast", name: "🍳🍌 Scrambled Eggs & Fried Plantain", ingredients: ["Eggs", "Plantain"] },
      { category: "snack", name: "🌶️🍗 Peppered Chicken Wings", ingredients: ["Chicken Wings", "Pepper"] },
      { category: "lunch", name: "🦃🥬 Grilled Turkey & Oha Soup", ingredients: ["Turkey", "Oha Leaves", "Palm Oil"] },
      { category: "dinner", name: "🐌🥜 Fried Snail & Egusi Soup", ingredients: ["Snails", "Egusi", "Palm Oil"] },
    ],
  },
  {
    day: "Wednesday",
    meals: [
      { category: "breakfast", name: "🍳🥩 Omelette with Beef & Peppers", ingredients: ["Eggs", "Beef", "Bell Peppers"] },
      { category: "snack", name: "🍗🥬 Boiled Chicken Gizzard & Cabbage", ingredients: ["Gizzard", "Cabbage"] },
      { category: "lunch", name: "🥩🥬 Fried Goat Meat & Edikang Ikong", ingredients: ["Goat Meat", "Waterleaf", "Palm Oil"] },
      { category: "dinner", name: "🐟🍵 Stock Fish & Nsala Soup", ingredients: ["Stock Fish", "Uziza Leaves", "Palm Oil"] },
    ],
  },
  {
    day: "Thursday",
    meals: [
      { category: "breakfast", name: "🥑🥓 Avocado, Bacon, and Green Salad", ingredients: ["Bacon", "Avocado", "Lettuce", "Cucumber"] },
      { category: "snack", name: "🥤🍏 Green Smoothie", ingredients: ["Ugu/Celery", "Lemon", "Green Apples", "Parsley", "Mint"] },
      { category: "lunch", name: "🧄🍲 Okro Soup", ingredients: ["Okro", "Peppers", "Crayfish", "Fish/Beef/Goat Meat"] },
      { category: "snack", name: "🧀🥚 Cheese or Boiled Eggs", ingredients: ["Cheese", "Eggs"] },
      { category: "dinner", name: "🍗🦃 Grilled Chicken/Turkey", ingredients: ["Chicken", "Turkey", "Garlic", "Ginger", "Pepper"] },
    ],
  },
  {
    day: "Friday",
    meals: [
      { category: "breakfast", name: "🥬🍳 Ugu or Celery Omelette", ingredients: ["Ugu/Celery", "Eggs"] },
      { category: "snack", name: "🥑🥕 Mashed Avocados & Carrot Sticks", ingredients: ["Avocado", "Carrots"] },
      { category: "lunch", name: "🍵🐟 Goat Meat or Fish Peppersoup", ingredients: ["Goat Meat", "Fish", "Pepper"] },
      { category: "dinner", name: "🦃🥗 Turkey/Chicken & Avocado Salad", ingredients: ["Turkey", "Chicken", "Avocado"] },
    ],
  },
  {
    day: "Saturday",
    meals: [
      { category: "breakfast", name: "🥑🍳 Avocado, Omelette with Vegetables", ingredients: ["Avocado", "Eggs", "Carrots", "Cucumber", "Lettuce"] },
      { category: "snack", name: "🥕🍋 Power Smoothie", ingredients: ["Carrots", "Lemon", "Beets", "Parsley", "Mint", "Lime"] },
      { category: "lunch", name: "🍲🍖 Amala with Ewedu and Stew", ingredients: ["Shrimp/Beef/Chicken/Goat Meat/Fish", "Elubo", "Peppers", "Tomatoes", "Iru"] },
      { category: "snack", name: "🍿 Popcorn", ingredients: ["Corn", "Salt", "Butter"] },
      { category: "dinner", name: "🍕🍗 Homemade Pizza/Chicken Wings", ingredients: ["Pizza Dough", "Tomato Sauce", "Cheese", "Pepperoni", "Chicken"] },
    ],
  },
  {
    day: "Sunday",
    meals: [
      { category: "breakfast", name: "🍞🥞 French Toast/Pancakes/Waffles/Akara/Moimoi", ingredients: ["Bread", "Beans", "Flour", "Eggs", "Milk", "Maple Syrup"] },
      { category: "snack", name: "🍨 Ice Cream", ingredients: ["Ice Cream"] },
      { category: "lunch", name: "🍲🥩 Afang/Oha/Onugbu/FisherMan/Edikang Ikong Soups with Eba/Fufu/Semo", ingredients: ["Beef/Goat Meat", "Afang", "Waterleaf/Spinach", "Ugu", "Crayfish", "Dry Fish", "Periwinkles"] },
      { category: "snack", name: "🍖🥗 Nkwobi/Isiewu/Abacha", ingredients: ["Goat Meat", "Cow Foot", "Cassava Flakes"] },
      { category: "dinner", name: "🍛🍗 Jollof/Fried/White Rice (with Any Sauce/Stew)", ingredients: ["Chicken", "Rice", "Tomatoes", "Peppers", "Herbs and Spices", "Vegetable or Palm Oil"] },
    ],
  },
];


