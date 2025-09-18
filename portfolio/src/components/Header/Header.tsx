import { IoHomeOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { GoPaperclip } from "react-icons/go";

export function Header() {
    return (
        <header className="w-full h-20 bg-[#F5E6CA] shadow-lg">
            <div className="h-20 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-around">
                <h1 className=" text-xl sm:text-4xl font-bold">Igor D.</h1>

                <nav className="text-lg font-medium flex items-center gap-6">
                    <div className="flex gap-2">
                        <IoHomeOutline size={26} color="#8C4A2F" />
                        <a>Home</a>
                    </div>

                    <div className="flex gap-2">
                        <MdWorkOutline size={26} color="#8C4A2F" />
                        <a href="#projetos">Projetos</a>
                    </div>

                    <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" >
                        <div className="flex gap-2 p-2 bg-[#E5D3AB] rounded">
                            <GoPaperclip size={26} color="#8C4A2F" />
                            Curriculo

                        </div>
                    </a>


                </nav>
            </div>
        </header>
    )
}