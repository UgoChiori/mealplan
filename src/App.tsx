import MealPlan from "./routes/MealPlan";
import MealPlanThree from "./routes/MealPlanThree";
import MealPlanTwo from "./routes/MealPlanTwo";
import MealPlanFour from "./routes/MealPlanFour";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Recipes from "./routes/Recipes";

function App() {
  return (
    <div className=" p-1 bg-teal-200">
      <NavBar />
      <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/" element={<MealPlan />} />
        <Route path="/mealplantwo" element={<MealPlanTwo />} />
        <Route path="/mealplanthree" element={<MealPlanThree />} />
        <Route path="/mealplanfour" element={<MealPlanFour />} />
      </Routes>

      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
