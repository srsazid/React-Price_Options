import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose, } from 'react-icons/ai';

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 'home', path: '/', name: 'Home' },
        { id: 'about', path: '/about', name: 'About' },
        { id: 'products', path: '/products', name: 'Products' },
        { id: 'contact', path: '/contact', name: 'Contact' },
        { id: 'dashboard', path: '/dashboard', name: 'Dashboard' },
    ];

    return (
        <nav>

            <div className="text-black p-6 bg-sky-300 flex items-center justify-between">
                <div>
                    <div className="md:hidden text-2xl"
                        onClick={() => setOpen(!open)}>
                        {
                            open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=" "></AiOutlineMenu>
                        }

                    </div>

                    <ul className={`md:flex duration-1000 absolute md:static rounded-xl bg-sky-300 
                    ${open ? " top-16 " : " -top-60 "}
                    text-black px-6 `}>
                        {
                            routes.map(route => <Link key={route.id} route={route}></Link>)
                        }
                    </ul>
                </div>
                <div className="w-16 rounded-full">
                    <img className="rounded-full" src="https://i.ibb.co/Vw15nnP/images.jpg" alt="Loading..!" />
                </div>

            </div>

        </nav>
    );
};

export default NavBar;