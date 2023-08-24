
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import React from "react"

function App() {
  const [quotes, setQuotes] = React.useState<[]>();

  React.useEffect(() => {
    
  },[])


  return (
    <>
      <Header name={"Random Quotes"} />
      <div className="layout">
        <Layout />
      </div>
    </>
  )
}

export default App
