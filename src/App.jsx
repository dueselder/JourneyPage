import './App.css'
import React from 'react'
import Header from "./components/Header/Header"
import Card from "./components/Card/Card"
import data from "./data_array.js"

console.log(data)

function App() {
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        item={card}
      />
    )
  })

  return (
    <>
      <Header />
      <section className="card-section">
        {cards}
      </section>
    </>
  )
}

export default App
