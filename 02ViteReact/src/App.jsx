import Chai  from "./Chai";
function App() {

  const userName = "Aman Sagar"

  return (
    <>
      <div>
        <Chai/>
        <h1>Chai with code by {userName}</h1>  {/* Use of {} syntax for already evaluation expression that is already evaluated  */}
      </div>
    </>
  )
}

export default App
