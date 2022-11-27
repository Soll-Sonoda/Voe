import {Link} from 'react-router-dom';
import styles from './Rota.module.css';
import Perf from './Perf.png';
import {AiOutlineBell} from 'react-icons/ai';
import {BsChatDots} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import Logo from './Logo.png';

function Rota () {
    return (

      
        <div className={styles.caixa}> 
        <img className={styles.logoHeader} src={Logo}></img>
        
        <ul className={styles.lista}>

        <li className= {styles.itens}>
          
          <Link className= {styles.linki} to = "/Services" > Serviços </Link>
        

          </li>
          
          <li className= {styles.itens}>
           
            <Link className= {styles.linki} to  = "/Market"> Loja </Link>
            
           
          </li>
          

          <li className= {styles.itens}>
          
          <Link className= {styles.linki} to = "/Cursos" > Cursos </Link>
        

          </li>
          
        
          
        </ul>

        <ul className={styles.lista2}> 
          <li >
            <Link className={styles.itens2} to = "./Notifica"> 
            <AiOutlineBell className={styles.Bell}/> </Link>
          </li>
          <li >
            <Link className={styles.itens2}  to= "./Conversa">
              <BsChatDots className={styles.Chat}/>
            </Link>

          </li>
          <li >
            <Link className={styles.itens2}  to= "./Perfilzin">
              <img className={styles.notify} src={Perf}></img>
            </Link>

          </li>

          <li >
            <Link className={styles.itens2}  to="./Definitions">
              <MdOutlineKeyboardArrowDown className={styles.Down}/>
            </Link>
          </li>
          </ul>
        </div>
       
    )
}

export default Rota;