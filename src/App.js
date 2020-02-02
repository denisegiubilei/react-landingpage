import React from 'react';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProductSection } from './components/ProductSection';
import { NewsletterForm } from './components/NewsletterForm';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <ProductSection />
      <NewsletterForm />
      <Footer />
    </>
  );
}

export default App;
