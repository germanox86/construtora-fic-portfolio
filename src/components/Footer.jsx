import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='pt-10 px-6 sm:px-10 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row md:justify-between md:items-start text-center md:text-left gap-10'>
        
        {/* Logo + Description */}
        <div className='w-full md:w-1/3'>
          <img src={assets.logo_dark} alt="Logo" className='mx-auto md:mx-0 w-40' />
          <p className='text-gray-400 mt-4 text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Empresa Section */}
        <div className='w-full md:w-1/5'>
          <h3 className='text-white text-lg font-semibold mb-4'>Empresa</h3>
          <ul className='text-gray-400 flex flex-col gap-2'>
            <li><a href="#Header" className='hover:text-white transition-colors'>Início</a></li>
            <li><a href="#About" className='hover:text-white transition-colors'>Quem Somos</a></li>
            <li><a href="#Projects" className='hover:text-white transition-colors'>Projetos</a></li>
          </ul>
        </div>

        {/* Contato Section */}
        <div className='w-full md:w-1/4'>
          <h3 className='text-white text-lg font-semibold mb-4'>Contato</h3>
          <ul className='text-gray-400 flex flex-col gap-1'>
            <li className='text-yellow-600 font-medium'>ATENDIMENTO</li>
            <li>(xx) xxxxxxxx</li>
            <li className='text-yellow-600 font-medium mt-3'>CENTRAL DE VENDAS</li>
            <li>(xx) xxxxxxxx</li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm pb-3'>
        Copyright © 2025 Germano Fonteles
      </div>
    </footer>
  )
}

export default Footer
