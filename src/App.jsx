import { Toolbar } from "./components/Toolbar"
import { PricingComponent } from "./components/PricingComponent"

function App() {
  
  return (
    <div className='flex flex-col w-screen h-full'>
      <Toolbar/>
      <PricingComponent/>
    </div>
  )
}

export default App
