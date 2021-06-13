import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
   return (
      <footer className={styles.footer}> 
         {/* <div className={styles.containerFooter}>
            <div className={styles.info}>
               <div>
                  <h3 className="title-footer">Contactos...</h3>
                  <p>(+351) 265 536 061</p>
                  <p>geral.barrigadefreira@gmail.com</p>
               </div>
               <div>
                  <h3 className="title-footer">Horário...</h3>
                  <p>Terça a Domingo <br/>
                     das 10h ás 18h</p>
               </div>
               <div>
                  <h3 className="title-footer">Rede Social...</h3>
                  <a href="https://www.instagram.com/barriga_de_freira/" target="_blank"  rel="noreferrer">Instagram</a>
               </div>
            </div>
            <div className={styles.credits}>
               <p>
                  Barriga de Freira By <a href="https://www.instagram.com/carnes_do_convento/" rel="noreferrer" target="_blank">Carnes do Convento</a>
               </p>
            </div>
         </div> */}
         <p>
            Barriga de Freira By <a href="https://www.instagram.com/carnes_do_convento/" rel="noreferrer" target="_blank">Carnes do Convento</a>
         </p>
      </footer>
   )
}

export default Footer
