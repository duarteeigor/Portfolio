import { Header } from './components/Header/Header';
import Image from "./assets/image.jpeg";
import ImageWebCars from "./assets/webCars.png"


import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { Card } from './components/Card/Card';

function App() {

  const projetos = [
    {
      name: "Web-Cars",
      img: ImageWebCars,
      link: "https://projeto-web-carros-one.vercel.app/",
      description: "Inspiração Webmotors",
      tech: "Vite, TypeScript, Tailwind, Supabase",
      descriptionModal: "O projeto foi inspirado no site Webmotors. Basicamente tem uma página principal onde ficam listados os carros que foram cadastrados no banco de dados, também é possivel criar o seu próprio anúncio ao criar sua conta.Meu objetivo com a criação do site foi  praticar utilizando o supabase para armazenar os dados, autenticação e armazenamento de imagem"
    },
  ]

  const skills = [
    { icon: <FaReact size={60} color='#8C4A2F' />, name: "React" },
    { icon: <SiTypescript size={60} color='#8C4A2F' />, name: "TypeScript" },
    { icon: <IoLogoJavascript size={60} color='#8C4A2F' />, name: "JavaScript" },
    { icon: <BiLogoPostgresql size={60} color='#8C4A2F' />, name: "Postgres" },
    { icon: <RiTailwindCssFill size={60} color='#8C4A2F' />, name: "Tailwind" },
  ];

  return (
    <div className='bg-[#FAF3E0] min-h-screen'>
      <Header />

      <main className='max-w-7xl mx-auto w-full flex flex-col items-center px-4'>
        {/* Foto e perfil */}
        <div className='flex flex-col items-center mt-10'>
          <img className='w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#8C4A2F]' src={Image} alt='Foto de Igor Duarte' />
          <h1 className='text-[#8C4A2F] text-4xl font-bold mt-4'>Igor Duarte</h1>
          <span className='text-[#B86B33] text-2xl'>Desenvolvedor Front-End</span>

          <div className='flex gap-4 mt-4'>
            <a href="https://www.instagram.com/igudduart/"><FaInstagram size={26} color='#8C4A2F' className='hover:scale-110 transition-transform' /></a>
            <a href="https://www.linkedin.com/in/igor-duarte-846626270/" target='_blank'><FaLinkedin size={26} color='#8C4A2F' className='hover:scale-110 transition-transform' /></a>
            <a href="https://api.whatsapp.com/send?phone=31996570938&text=Olá, tudo bom?" target='_blank'><FaWhatsapp size={26} color='#8C4A2F' className='hover:scale-110 transition-transform' /></a>
            <a href="https://github.com/duarteeigor" target='_blank'><FaGithub size={26} color='#8C4A2F' className='hover:scale-110 transition-transform' /></a>
          </div>
        </div>

        {/* Sobre mim */}
        <section className='flex flex-col my-20 max-w-4xl text-center'>
          <h2 className='text-2xl font-medium mb-4'>Sobre mim</h2>
          <p className='text-[#8C4A2F]'>
            Olá! Sou Igor Duarte, desenvolvedor Front-End apaixonado por criar interfaces modernas e funcionais. Tenho experiência com React, TypeScript e Tailwind CSS, sempre buscando aprender novas tecnologias e boas práticas de desenvolvimento. Estou em busca de oportunidades para contribuir em projetos desafiadores e crescer profissionalmente.
          </p>
        </section>

        <div className='h-px bg-[#8C4A2F] w-full'></div>

        <section id='projetos' className='flex flex-col mb-20 w-full'>
          <h2 className='text-2xl font-medium text-center my-10'>Projetos</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projetos.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                name={item.name}
                description={item.description}
                link={item.link}
                tech={item.tech}
                descriptionModal={item.descriptionModal}
              />
            ))}



          </div>
        </section>



        <div className='h-px bg-[#8C4A2F] w-full'></div>

        
        <section className='flex flex-col mb-20 w-full'>
          <h2 className='text-2xl font-medium text-center my-10'>Skills</h2>
          <div className='flex flex-wrap justify-center gap-6'>
            {skills.map((skill, index) => (
              <div key={index} className='bg-[#F5E6CA] p-6 rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform'>
                {skill.icon}
                <h3 className='mt-2 font-medium'>{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className='bg-[#8C4A2F] text-[#FAF3E0] w-full py-6 mt-10'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4'>
          <p>© {new Date().getFullYear()} Igor Duarte. Todos os direitos reservados.</p>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <a href="#"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com/in/igor-duarte-846626270/" target='_blank'><FaLinkedin size={24} /></a>
            <a href="https://api.whatsapp.com/send?phone=31996570938&text=Olá, tudo bom?" target='_blank'><FaWhatsapp size={24} /></a>
            <a href="https://github.com/duarteeigor" target='_blank'><FaGithub size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
