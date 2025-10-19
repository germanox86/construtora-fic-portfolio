import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once:true}}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Sobre <span className='underline underline-offset-4 decoration-1 under font-light'>Nossa Empresa</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Lorem ipsum dolor sit amet
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 my-5">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Anos de Excelência</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">50+</p>
              <p>Projetos Entregues</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">100+</p>
              <p>Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">100%</p>
              <p>Satisfação</p>
            </div>
          </div>
            <p className='my-5 max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          
          <button className='bg-blue-600 text-white px-8 py-2 rounded'>Saiba Mais</button>
        </div>
      </div>
    </motion.div>
  );
};

export default About