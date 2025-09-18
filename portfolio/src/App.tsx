import { useState } from 'react'
import { Header } from './components/Header/Header'
import Image from "./assets/image.jpeg"
import ImageCar from "./assets/webCars.png"

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";


function App() {
  return (
    <div className='bg-[#FAF3E0] '>
      <Header />

      <div className='max-w-7xl mx-auto w-full flex flex-col items-center'>

        <img className='mt-10 w-68 h-68 rounded-full object-cover' src={Image} alt='img' />

        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[#8C4A2F] text-4xl font-bold'>Igor Duarte</h1>
          <span className='text-[#B86B33] text-2xl'>Desenvolvedor Front-End</span>

          <div className='flex gap-4 mt-2'>
            <a href=""><FaInstagram size={26} color='#8C4A2F' className='hover:scale-110' /></a>
            <a href="https://www.linkedin.com/in/igor-duarte-846626270/" target='_blank'><FaLinkedin size={26} color='#8C4A2F' className='hover:scale-110' /></a>
            <a href="https://api.whatsapp.com/send?phone=31996570938&text=Olá, tudo bom?" target='_blank'><FaWhatsapp size={26} color='#8C4A2F' className='hover:scale-110' /></a>
            <a href="https://github.com/duarteeigor" target='_blank'><FaGithub size={26} color='#8C4A2F' className='hover:scale-110' /></a>
          </div>
        </div>

        <div className='flex flex-col my-20'>
          <h1 className='text-center text-2xl font-medium mb-2'>Sobre mim</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores incidunt provident omnis odio facilis! Saepe eveniet nam voluptas molestiae, aperiam quas sequi atque doloribus facilis reprehenderit eligendi quos repellat obcaecati repellendus, deserunt maxime porro magni sit ullam? Inventore saepe nam cum ullam natus repellat, laboriosam ipsam quae fugiat facilis voluptatibus similique nostrum omnis eaque, ipsum corporis quas magni? Reiciendis ullam nam incidunt necessitatibus. Doloremque fugiat deserunt blanditiis dolorum, reiciendis iusto pariatur unde natus architecto voluptatem molestias sit vitae quasi quia facilis harum nihil eum quis tempora dolorem laboriosam. Totam, provident impedit. Officia libero, repellendus magni eum necessitatibus nemo cupiditate non.</p>
        </div>

        <div className='h-px bg-[#8C4A2F] w-full'></div>

        <div className='flex flex-col mb-20'>
          <h1 className='text-2xl font-medium text-center my-10'>Projetos</h1>

          <div className='flex gap-8'>
            <div className='bg-[#F5E6CA] p-6 w-80 overflow-hidden'>
              <a href="">
                <img className='w-full h-40 object-cover transform transition-transform duration-300 hover:scale-110' src={ImageCar} alt='' />
                <span className='text-lg font-medium'>Web-Cars (inspiração webmotors)</span>
                <p>Tecnologias: React, TypeScript, Tailwind</p>
              </a>
            </div>
          </div>
        </div>

        <div className='h-px bg-[#8C4A2F] w-full'></div>

        <div>
          <h1 className='text-2xl font-medium text-center my-10'>Skills</h1>

          <div className='flex gap-4'>
            <div className='bg-[#F5E6CA] p-6 flex flex-col items-center justify-center'>
              <FaReact size={80} color='#8C4A2F' />
              <h2>React</h2>
            </div>

            <div className='bg-[#F5E6CA] p-6 flex flex-col items-center justify-center'>
              <SiTypescript size={80} color='#8C4A2F' />
              <h2>TypeScript</h2>
            </div>

            <div className='bg-[#F5E6CA] p-6 flex flex-col items-center justify-center'>
              <IoLogoJavascript size={80} color='#8C4A2F' />
              <h2>JavaScript</h2>
            </div>

            <div className='bg-[#F5E6CA] p-6 flex flex-col items-center justify-center'>
              <BiLogoPostgresql size={80} color='#8C4A2F' />
              <h2>Postgres</h2>
            </div>

            <div className='bg-[#F5E6CA] p-6 flex flex-col items-center justify-center'>
              <RiTailwindCssFill size={80} color='#8C4A2F' />
              <h2>Tailwind</h2>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default App
