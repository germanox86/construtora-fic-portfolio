import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
{/*função para previnir o scroll quando o menu está aberto: */}
useEffect(() =>{
    if(showMobileMenu){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
    return() =>{
        document.body.style.overflow = 'auto'
    }
},[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg transparent'>
            <img src={assets.logo} alt=""/>
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Início</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>Quem Somos</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projetos</a>
            </ul>
            <a href="https://github.com/germanox86"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-white text-black font-medium px-8 py-2 rounded-full hover:bg-gray-200 transition-colors"
            >
            GitHub
            </a>
            <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/*menu celular: */}  
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Início</a>
                <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>Quem Somos</a>
                <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projetos</a>
            </ul>
        </div>

    </div>
  )
}

export default Navbar