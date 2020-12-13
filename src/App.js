import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductSection } from './containers/ProductSection';
import { NewsletterForm } from './components/NewsletterForm';
import './App.css';

const App = () => (
  <>
    <Header />
    <ProductSection />
    <NewsletterForm />
    <Footer />
  </>
);

export default App;
