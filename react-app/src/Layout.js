import {Link, Outlet} from 'react-router-dom';
import  './index.css';


const Layout =() => {
    return(<>
        <nav>
            <ul>
                <li>
                    <Link exact to="/">Home</Link>
                </li>
                <li> 
                    <Link exact to = "/Contact"> Contact</Link>
                </li>
               
                <li>
                    <Link exact to ="/Search">Search</Link>
                </li>

                <li>
                    <Link exact to ="/Blog">Blog</Link>
                </li>
                
                <li>
                    <Link exact to ="/Nopage">Nopage</Link>
                </li>
            </ul>
        </nav>

        
    </>)
} 

export default Layout;