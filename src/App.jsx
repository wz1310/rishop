import React from 'react'
import Category from './components/Category'
import Header from './components/Header'
import Submenu from './components/Submenu'

const CardSection = ({ children }) => {
  return (
    <div className="bg-white shadow-xl w-[calc(100%-4px)] md:w-full max-w-5xl mt-6 mx-auto rounded-xl">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800 pt-27 bg-gray-100 min-h-screen flex flex-col items-center">
      <CardSection><Header /></CardSection>
      <CardSection><Submenu /></CardSection>
      <CardSection><Category /></CardSection>

      {/* contoh jika tambah content baru nanti */}
      {/* <CardSection><KomponenBaru /></CardSection> */}
    </main>
  )
}

export default App
