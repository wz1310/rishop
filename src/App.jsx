import React from 'react'
import Category from './components/Category'
import Footer from './components/Footer';
import Header from './components/Header'
import Submenu from './components/Submenu'
import Banner from './components/Banner';

const CardSection = ({ children }) => {
  return (
    <div className="bg-white w-[calc(100%-40px)] md:w-full max-w-5xl mt-2 mx-auto">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800 pt-27 bg-gray-100 min-h-screen flex flex-col items-center">
      <CardSection><Banner/></CardSection>
      <CardSection><Header /></CardSection>
      <CardSection><Submenu /></CardSection>
      <CardSection><Category /></CardSection>

      {/* contoh jika tambah content baru nanti */}
      {/* <CardSection><KomponenBaru /></CardSection> */}
      {/* ✅ Footer FULL width dan selalu di bawah */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </main>
  )
}

export default App
