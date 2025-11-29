import React from 'react'
import Category from './components/Category'
import Header from './components/Header'
import Submenu from './components/Submenu'

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800 pt-27">
      <Header />
      <Submenu />
      <Category/>
    </main>
  )
}

export default App
