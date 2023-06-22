import { useState } from 'react'
import OrderSummary from "./OrderSummary.jsx";


function App() {


  return (
    <>
      <div className={"container bg-pale-blue min-h-screen min-w-full grid place-items-center"}>
          <OrderSummary />
      </div>
    </>
  )
}

export default App
