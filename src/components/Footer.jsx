import { Link } from "react-router-dom";


function Footer( {links} ) {    
    return (
        <footer className="footer">
            <div className="footer__nav">
                { links.map((link) => {
                    return (                   
                        <Link key={link.id} to={link.path} className="footer__link">{link.title}</Link>                    
                    )              
                })}
            </div>            
            <p className="copyright">Copyright © 2022 info6150-huskyhehe. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
