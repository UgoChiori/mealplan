import MealPlan from "./components/MealPlan";
import MealPlanThree from "./components/MealPlanThree";
import MealPlanTwo from "./components/MealPlanTwo";
import MealPlanFour from "./components/MealPlanFour" ;
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";
import {Routes, Route} from "react-router-dom";
import NavBar from "./navigation/NavBar";

function App() {
 

  return (
    <div className="border border-black p-1 bg-teal-200">
      <NavBar/>
    <Routes>
<Route path="/" element={<MealPlan/>} />
<Route path="/mealplantwo" element={<MealPlanTwo/>} />
<Route path="/mealplanthree" element={<MealPlanThree/>} />
<Route path="/mealplanfour" element={<MealPlanFour/>} />
 

   </Routes>
   <Footer />
   <Analytics/>
    </div>
  )
}

export default App
