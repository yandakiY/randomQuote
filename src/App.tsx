
import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import React from "react"
import { api } from './api/config'

function App() {

  // interface PropsQuote{
  //   quote:string,
  //   author:string
  // }

  const [quote, setQuote] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");


  // const getQuotes = async () =>{
  //   const res = await api.get('');
  //   return res.data;
  // }
  

  React.useEffect(() => {
    api.get("/")
      .then(data => {
        setQuote(data.data.content)
        setAuthor(data.data.originator.name)
      })
      .catch(err => console.error(err))
  },[])


  return (
    <>
      <Header name={"Random Quotes"} />
      <div className="layout">
        <Layout quote={quote} author={author} />
      </div>
      Made by @Yandaki
    </>
  )
}

export default App
