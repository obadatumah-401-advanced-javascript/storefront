import React from 'react';
import Footer from './components/footer/';
import Header from './components/header/';
import Categories from './components/categories/';
import Products from './components/products/';



function App() {
  return (
    <>
      <Header/>
      <main>
        <Categories/>
        <Products/>
      </main>
     
      <Footer/>
    </>
  );
}

export default App;