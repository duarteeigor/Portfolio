import { IoClose } from "react-icons/io5";

interface ModalProps {
  name: string;
  img: string;
  link: string;
  description: string;
  onClose: () => void; // função para fechar o modal
}

export function Modal({ name, img, description, link, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose} // fecha ao clicar no fundo escuro
    >
      <div
        className="bg-[#F5E6CA] text-white w-full max-w-4xl rounded-2xl p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro
      >
        <IoClose 
          size={36}
          color='#8C4A2F'
          className="absolute top-3 right-3"
          onClick={onClose}
        />
          
        
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        <img src={img} alt={name} className="w-full rounded-lg mb-4" />
        <p>
          {description}
        </p>

        <div className="flex justify-end">
            <a href={link} target="_blank" className="p-2 bg-[#8C4A2F] rounded-2xl hover:opacity-90 transition-opacity">Ir para o site</a >
        </div>
      </div>
    </div>
  );
}
