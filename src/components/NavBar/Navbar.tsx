import { useState } from "react";
import { navLinks } from "../../constants/navbar";



function NavItems() {
    return (<ul className="nav-ul">

        {
            navLinks.map(e => <li
                className="nav-li hover:text-neutral-400 transition-all"
                key={e.id}
            >
                <a
                    className="nav-li_a "
                    href={e.href}
                >
                    {e.name}
                </a>
            </li>
            )
        }
    </ul>
    )
}



export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <nav className="fixed w-full     top-0 left-0  z-50 bg-black/90 ">
            <div className="max-w-7xl mx-auto flex items-center">

                <div className="py-5 flex justify-between w-full c-space  ">

                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-all ">
                        Anmol
                    </a>
                    <button
                        className="sm:hidden hover:scale-110 transition-all"
                        onClick={() => setIsMenuOpen(pre => !pre)}
                    >
                        <img
                            src={isMenuOpen ? 'assets/close.svg' : "assets/menu.svg"}
                            className="h-6 w-6   "
                            alt="menu"
                        />
                    </button>

                    <div className="flex gap-5 max-sm:hidden">
                        <NavItems />

                    </div>
                </div>
            </div>



            <div className={"nav-sidebar " +
                (isMenuOpen ? ' max-h-screen' : 'max-h-0')
            }>

                <div className=" p-5">
                    <NavItems />
                </div>
            </div>

        </nav>
    )
}
