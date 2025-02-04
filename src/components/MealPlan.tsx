// // // import React from 'react';
// // // import {weeklyMealPlan} from "../utils/mealPlan";



// // // const MealPlan: React.FC = () => {
// // //   return (
// // //     <div className="p-4">
// // //     <h1 className="text-xl font-bold ">Weekly Meal Plan</h1>
// // //     {weeklyMealPlan.map((dayPlan) => (
// // //       <div key={dayPlan.day} className="mt-4">
// // //         <h2 className="text-lg font-semibold">{dayPlan.day}</h2>
// // //         <ul>
// // //           {dayPlan.meals.map((meal) => (
// // //             <li key={meal.name} className="border p-2 my-2">
// // //               <strong>{meal.name}</strong> - {meal.category}
// // //               <p className="text-sm">Ingredients: {meal.ingredients.join(", ")}</p>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     ))}
// // //   </div>
// // //   )
// // // }

// // // export default MealPlan

// // // import React from "react";
// // // import { weeklyMealPlan } from "../utils/mealPlan";

// // // const MealPlan: React.FC = () => {
// // //   return (
// // //     <div className="p-4">
// // //       <h1 className="text-xl font-bold mb-4 text-center">Weekly Meal Plan</h1>
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //         {weeklyMealPlan.map((dayPlan) => (
// // //           <div key={dayPlan.day} className="border rounded-lg p-4 shadow-md">
// // //             <h2 className="text-lg font-semibold mb-2">{dayPlan.day}</h2>
// // //             <ul>
// // //               {dayPlan.meals.map((meal) => (
// // //                 <li key={meal.name} className="border-b last:border-none pb-2 mb-2">
// // //                   <strong>{meal.name}</strong> - {meal.category}
// // //                   <p className="text-sm text-gray-600">Ingredients: {meal.ingredients.join(", ")}</p>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MealPlan;
// // import React from "react";
// // import { weeklyMealPlan } from "../utils/mealPlan";

// // const MealPlan: React.FC = () => {
// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-3xl font-extrabold mb-6 text-center text-green-700">Weekly Meal Planner</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {weeklyMealPlan.map((dayPlan) => (
// //           <div key={dayPlan.day} className="bg-white border-l-4 border-green-500 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
// //             <h2 className="text-2xl font-bold mb-4 text-green-700">{dayPlan.day}</h2>
// //             <ul>
// //               {dayPlan.meals.map((meal) => (
// //                 <li key={meal.name} className="mb-4">
// //                   <div className="flex justify-between items-center">
// //                     <strong className="text-lg text-gray-800">{meal.name}</strong>
// //                     <span className="text-sm text-white bg-green-500 px-2 py-1 rounded-md">{meal.category}</span>
// //                   </div>
// //                   <p className="text-sm text-gray-600 mt-1">
// //                     <span className="font-semibold">Ingredients:</span> {meal.ingredients.join(", ")}
// //                   </p>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MealPlan;

// import React from "react";
// import { weeklyMealPlan } from "../utils/mealPlan";

// const MealPlan: React.FC = () => {
//   return (
//     <div className="p-6 bg-teal-200 min-h-screen">
//       <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Weekly Meal Planner</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {weeklyMealPlan.map((dayPlan) => (
//           <div key={dayPlan.day} className="bg-white rounded-[20px] p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-700">{dayPlan.day}</h2>
//             {["breakfast", "snack", "lunch", "dinner"].map((category) => (
//               <div key={category} className="mb-4">
//                 <h3 className="text-xl font-medium text-teal-600">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
//                 <ul>
//                   {dayPlan.meals
//                     .filter((meal) => meal.category === category)
//                     .map((meal) => (
//                       <li key={meal.name} className="border-l-4 border-teal-500 pl-2 mt-2">
//                         <strong className="text-gray-800">{meal.name}</strong>
//                         <p className="text-sm text-gray-500">Ingredients: {meal.ingredients.join(", ")}</p>
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MealPlan;
import React from "react";
import { weeklyMealPlan } from "../utils/mealPlan";

// Food Emojis Dictionary
const foodEmojis: { [key: string]: string } = {
  "Eggs & Bacon": "🍳",
  "Oatmeal": "🥣",
  "Pancakes": "🥞",
  "Avocado Toast": "🥑🍞",
  "Fruit Salad": "🍉🍓🍌",
  "Smoothie": "🥤",
  "Suya": "🍢",
  "Jollof Rice": "🍛",
  "Moi Moi": "🫘",
  "Yam & Egg Sauce": "🍠🍳",
  "Beans & Plantain": "🫘🍌",
  "Chicken & Vegetables": "🍗🥦",
  "Goat Meat Pepper Soup": "🍖🔥",
  "Okro Soup & Swallow": "🍲",
  "Egusi Soup & Swallow": "🥜🍲",
  "Fried Rice & Chicken": "🍚🍗",
  "Boli & Groundnut": "🍌🥜",
};

// Meal Plan Component
const MealPlan: React.FC = () => {
  return (
    <div className="p-6 bg-teal-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Weekly Meal Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weeklyMealPlan.map((dayPlan) => (
          <div
            key={dayPlan.day}
            className="bg-white rounded-[20px] p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
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
                        <strong className="text-gray-800">
                          {foodEmojis[meal.name] || "🍽️"} {meal.name}
                        </strong>
                        <p className="text-sm text-gray-500">
                          Ingredients: {meal.ingredients.join(", ")}
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
};

export default MealPlan;
