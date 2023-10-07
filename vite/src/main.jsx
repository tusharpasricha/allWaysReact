// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp(){
  return(
    <>
    <div>hi</div>
    </>
  )
}

const myElement = (<><div>myElement</div></>)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com'},
  "reactElement"
  )


ReactDOM.createRoot(document.getElementById('root')).render(
  //myApp()
  //myElement
  reactElement

)
