import React from 'react'
import { week4MealPlan } from '../utils/mealPlan'

const foodEmojis: { [key: string]: string } = {
    "Bacon, scrambled eggs, avocado, cucumber slices": "🥓🍳🥑🥒",
    "Boiled Eggs": "🥚",
    "Grilled Chicken/Turkey/Fish with Efo Riro/Soko": "🍗🐟🥬",
    "Garden eggs": "🍆",
    "Green salad with mayonnaise": "🥗",
    "Scrambled Eggs & Wholewheat Toast": "🍳🍞",
    "Carrot Slices & Mashed Avocado(guacamole)": "🥕🥑",
    "Lettuce wrap": "🥬🌯",
    "Stir-fried beef & Vegetables": "🥩🥕🌶️",
    "Greek Yogurt & Nut": "🍦🥜",
    "Mixed Nuts": "🥜",
    "Chicken Peppersoup": "🍲🐔",
    "Dark Chocolate": "🍫",
    "Grilled Meat with Cabbage": "🥩🥬",
    "Avocado, Bacon and green salad": "🥑🥓🥗",
    "Green Smoothie": "🥤🌿",
    "Okro soup": "🍲🌿",
    "Cheese or Boiled Eggs": "🧀🥚",
    "Grilled Chicken/Turkey": "🍗🦃",
    "Ugu or Celery Omelette": "🍳🌿",
    "Mashed Avocadoes & Carrot Sticks": "🥑🥕",
    "Goat Meat or Fish Peppersoup": "🍲🐐🐟",
    "Turkey/Chicken & Avocado Salad": "🥗🍗🥑",
    "Avocado, omelette with vegetables": "🥑🍳🥦",
    "Power Smoothie": "🥤🥕",
    "Amala with Ewedu and Stew": "🍛",
    "Popcorn": "🍿",
    "Homemade Pizza/Chicken Wings": "🍕🍗",
    "French Toast/Pancakes/Waffles/Akara/Moimoi": "🍞🥞🧇",
    "Ice Cream": "🍨",
    "Afang/Oha/Onugbu/FisherMan/Edikang Ikong Soups with eba/fufu/semo": "🍲🍛",
    "Nkwobi/Isiewu/Abacha": "🍖🥗",
    "Jollof/Fried/White Rice(with any sauce/stew)": "🍚🍛",
  };

const MealPlanFour:React.FC = () => {
return (
    <div className="p-6 bg-teal-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Weekly Meal Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {week4MealPlan.map((dayPlan) => (
          <div
            key={dayPlan.day}
            className="bg-white rounded-[20px] p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">{dayPlan.day}</h2>
            {["breakfast", "snack", "lunch", "dinner"].map((category) => (
              <div key={category} className="mb-4">
                <h3 className="text-xl font-medium text-teal-600">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <ul>
                  {dayPlan.meals
                    .filter((meal) => meal.category === category)
                    .map((meal) => (
                      <li key={meal.name} className="border-l-4 border-teal-500 pl-2 mt-2">
                        <strong className="text-gray-800 break-words">
                          {foodEmojis[meal.name] || "🍽️"} {meal.name}
                        </strong>
                        <p className="text-sm text-gray-500 capitalize italic break-words">
                        <p className="font-bold ">Ingredients:</p> {meal.ingredients.join(", ")}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealPlanFour