import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

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
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=" "></AiOutlineMenu>
                }

            </div>

            <ul className="md:flex justify-evenly p-5">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;