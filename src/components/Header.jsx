import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


function Header( {menu} ) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    function toggleMenuStatus() {
        setIsMenuOpen(!isMenuOpen);
    };

    function closeMenu() {
        setIsMenuOpen(false);
    };

    function scrollToSection(id) {
        let hash = '#' + id;
        setTimeout(() => {
            window.location.hash = hash;
        }, 0);
    }    

    return (
        <header>
            <a className="skip__link" href='#main'>Skip to content</a>

            <div className="header__content">
                <Link to="/heriod-app" className="logo">
                    <img className="logo__img" src={logo} alt="logo" />
                </Link>
                <button
                    className="menu__toggler"
                    onClick={ () => toggleMenuStatus() }
                >
                    <i className={isMenuOpen ? 'gg-close' : 'gg-menu' }></i>
                </button>

                <ul className={`menu${isMenuOpen ? ' active' : '' }`}>
                    { menu.map((item) => {
                        return (
                            <li key={item.id} className="menu__item">
                                <Link 
                                    to={item.path}
                                    className="menu__item__link"
                                    onClick={ () => closeMenu() }    
                                >
                                    {item.title}
                                </Link>
                                { item.sections && <ul className="submenu">
                                    { item.sections.map((subitem) => {
                                        return (
                                            <li className="submenu__item" key={subitem.id}>                                                
                                                <Link
                                                    to={item.path}
                                                    className="submenu__item__link"    
                                                    onClick={() => scrollToSection(subitem.id)}            
                                                >
                                                    {subitem.title}
                                                </Link>                                              
                                            </li>
                                        )
                                    })}    
                                </ul>}
                            </li>
                        )
                    })}
                    <li className="menu__item">
                        <Link
                            to="/register"  
                            className="menu__register__link" 
                            onClick={ () => closeMenu()}
                        >
                            Register
                        </Link>
                    </li>
                </ul>
            </div>                  
        </header>
    );
}

export default Header;
