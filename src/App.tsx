import MealPlan from "./components/MealPlan"
import Footer from "./Footer"
import { Analytics } from "@vercel/analytics/react"

function App() {
 

  return (
    <div className="border border-black p-1 bg-teal-200">
   <MealPlan />
   <Footer />
   <Analytics/>
    </div>
  )
}

export default App
