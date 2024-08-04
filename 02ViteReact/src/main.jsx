import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {

//   return (
//       <div>
//         <h1>Custom App </h1>
//       </div>
//   )
// }

// const reactElement = (
//   <a href="https://google.com" target="_blank"> Visit Google</a>
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* reactElement */}
  </React.StrictMode>,
)
