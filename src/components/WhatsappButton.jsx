import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5599999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center animate-pulse"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  )
}

export default WhatsappButton
