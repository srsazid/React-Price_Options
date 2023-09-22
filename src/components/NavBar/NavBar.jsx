const NavBar = () => {

    const routes = [
        { id: 'home', path: '/', name: 'Home' },
        { id: 'about', path: '/about', name: 'About' },
        { id: 'products', path: '/products', name: 'Products' },
        { id: 'contact', path: '/contact', name: 'Contact' },
        { id: 'dashboard', path: '/dashboard', name: 'Dashboard' },
    ];



    return (
        <nav>
            <ul className="flex justify-evenly p-5">
                {
                    routes.map(route => <li className="mr-10" key={routes.id}>
                        <a href={route.path}>{route.name}</a> </li>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;