import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [currentPage, setPage] = useState('about');

  const switchPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'portfolio':
        return <Portfolio/>
      case 'contact':
        return <ContactForm />
      case 'resume':
        return <Resume />
    }
  }

  return (
    <div>
      <Nav currenPage={currentPage} setPage={setPage}></Nav>
      <main>
      {
        switchPage(currentPage)
      }
      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
