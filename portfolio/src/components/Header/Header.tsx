import { IoHomeOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

export function Header(){
    return(
        <header className="w-full h-20 bg-[#F5E6CA] shadow-lg">
            <div className="h-20 max-w-7xl mx-auto w-full flex items-center justify-around">
                <h1 className="text-4xl font-bold">Igor D.</h1>

            <nav className="text-lg font-medium flex items-center gap-6">
                <div className="flex gap-2">
                    <IoHomeOutline size={26} color="#8C4A2F" />
                    <a>Home</a>
                </div>

                <div className="flex gap-2">
                    <MdWorkOutline size={26} color="#8C4A2F" />
                    <a>Projetos</a>
                </div>

                <div className="flex gap-2">
                    <RiSendPlaneFill size={26} color="#8C4A2F" />
                    <a>Contate</a>
                </div>
            </nav>
            </div>
        </header>
    )
}