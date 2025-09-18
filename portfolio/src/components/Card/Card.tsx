import { useState } from "react";
import { Modal } from "../Modal/Modal";

interface ProjectProps {
  name: string;
  img: string;
  link: string;
  description: string;
  descriptionModal: string;
  tech: string;
}

export function Card({ name, img, description, descriptionModal, link, tech }: ProjectProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <Modal name={name} img={img} description={descriptionModal} link={link} onClose={() => setModalOpen(false)} />}
      <div
        onClick={() => setModalOpen(true)}
        className="bg-[#F5E6CA] p-4 rounded-xl shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
      >
        <img className="w-full h-40 object-cover rounded-lg mb-2" src={img} alt={name} />
        <h3 className="text-lg font-medium mb-1">{name}</h3>
        <p className="text-sm mb-1">{description}</p>
        <p className="text-sm font-semibold">{tech}</p>
      </div>
    </>
  );
}
