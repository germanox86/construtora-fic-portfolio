import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import WhatsappButton from './components/Whatsappbutton'

const App = () => {
  return (
    <><div className='w-full overflow-hidden'>
      <Header />
    </div><div>
        <About />
        <Projects/>
        <Footer />
        <WhatsappButton />
      </div></>
    
  )
}

export default App