import React from 'react'
import styles from './Bebidas.module.css';

const Sobremesas = () => {
   return (
      <div className={styles.sobremesas}>
         <h1>Para Adoçar...</h1>

         <div>
            <ul>
               <li className="name">
                  Pastel de Nata
               </li>
               <li className="price">1.4</li>
            </ul>

            <ul>
               <li className="name">
                  Barriga de Freira na Lata
               </li>
               <li className="price">4.5</li>
            </ul>

            <ul>
               <li className="name">
                  Ostra de Laranja
               </li>
               <li className="price">1.2</li>
            </ul>

            <ul>
               <li className="name">
                  Torta de Azeitão
               </li>
               <li className="price">1.8</li>
            </ul>

            <ul>
               <li className="name">
                  Beijinho Conventual
               </li>
               <li className="price">1.4</li>
            </ul>

            <ul>
               <li className="name">
                  Bolo de Fatia
               </li>
               <li className="price">2.9</li>
            </ul>

            <ul>
               <li className="name">
                  Queijada de Laranja
               </li>
               <li className="price">1.5</li>
            </ul>

            <ul>
               <li className="name">
                  Laranjinha Doce
               </li>
               <li className="price">1.0</li>
            </ul>

            <ul>
               <li className="name">
                  Cheesecake de Moscatel e Laranja
               </li>
               <li className="price">1.5</li>
            </ul>

            <ul>
               <li className="name">
                  Doce de Lata
               </li>
               <li className="price">4.0</li>
            </ul>

            <ul>
               <li className="name">
                  Macarons
               </li>
               <li className="price">1.5</li>
            </ul>

            <ul>
               <li className="name">
                  Arroz Doce
               </li>
               <li className="price">2.9</li>
            </ul>

            <ul>
               <li className="name">
                   Gelados Haagen Dazs (Carta)
               </li>
               <li className="price"></li>
            </ul>
            
         </div>
      </div>
   )
}

export default Sobremesas
