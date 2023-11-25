import Navigation from "./components/Navigation"
import Balance from "./components/Balance"
import Transactions from "./components/Transactions"


function App() {

  return (
    <>
      <Navigation />
      <div className="relative mx-auto max-w-screen-xl mt-12">
        <Balance />
        <Transactions />
      </div>
    </>
  )
}

export default App
