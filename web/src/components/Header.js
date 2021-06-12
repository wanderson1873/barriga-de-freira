import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import {ReactComponent as Garfo} from '../Assets/garfo.svg';
import {ReactComponent as Taca} from '../Assets/taca.svg';
import {ReactComponent as Colher} from '../Assets/colher.svg';
import {ReactComponent as Logo} from '../Assets/logo.svg';

import styles from './Header.module.css';

const  Header = () => {
   return (
      <header className={styles.header}>
         <Link to="/" className={styles.logo}>
            <Logo />
         </Link>
         <nav className={styles.nav}>
               <NavLink to="/" end activeClassName={styles.active}>
                  <Garfo />
                  Ementa
               </NavLink>

               <NavLink to="/bebidas" activeClassName={styles.active}>
                  <Taca />
                  Bebidas
               </NavLink>

               <NavLink to="/sobremesas" activeClassName={styles.active}>
                  <Colher />
                  Sobremesas
               </NavLink>
         </nav>
      </header>
   )
}

export default Header;
