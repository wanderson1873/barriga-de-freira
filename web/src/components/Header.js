import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Garfo} from '../Assets/garfo.svg';
import {ReactComponent as Taca} from '../Assets/taca.svg';
import {ReactComponent as Colher} from '../Assets/colher.svg';
import {ReactComponent as Logo} from '../Assets/logo.svg';

import styles from './Header.module.css';

const  Header = () => {
   return (
      <header className={styles.header}>
         <Logo />
         <nav className="container">
            <li>
               <Link to="/">
                  <Garfo />
                  Ementa
               </Link>
            </li>
            <li>
               <Link to="/Bebidas">
                  <Taca />
                  Bebidas
               </Link>
            </li>
            <li>
               <Link to="/Sobremesas">
                  <Colher />
                  Sobremesas
               </Link>
            </li>
         </nav>
      </header>
   )
}

export default Header;
