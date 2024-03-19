import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="flex flex-row justify-between px-20 items-center mt-5 md:px-5">
            <span className="font-[Montserrat] font-bold text-4xl">Crework<span className="text-yellow">.</span></span>

            <div className={`text-gray flex flex-row gap-6 ${showMenu ? "md:absolute" : "md:hidden"} md:flex-col md:w-full md:bg-[#1b1919] md:text-white md:top-[80px] md:py-5`}>
                <a href="#">30 Days of PM</a>
                <a href="#">Newsletter</a>
                <a href="#">Builder's Cohort</a>
            </div>
            {showMenu ? <IoMdClose className="hidden md:block" onClick={() => { setShowMenu(false) }} /> : <RxHamburgerMenu className="hidden md:block" onClick={() => { setShowMenu(true) }} />}
        </nav>
    )
}
