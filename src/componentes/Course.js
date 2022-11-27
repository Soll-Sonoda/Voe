import Cursos from './Cursos.png';
import Acess from './Acess.png';
import styles from './Cursos.module.css';
function Teste () {
    return (
        <div className={styles.divcursos}> 
        <img className={styles.ImgCursos} src={Cursos} alt="tela de cursos"/>
        <input className={styles.Search} type='search'/>
       
            <h2 className={styles.cursosdisp} >
                Cursos disponíveis para você
            </h2>
        
       <div className={styles.card1}> 
       <h1>
           Técnicas de Confeitaria
           </h1>
           <h2> 
               Senac
           </h2>
           <p>
           O curso de aperfeiçoamento Técnicas de Confeitaria tem 
           como objetivo aprimorar técnicas de confeitaria. É destino
           a profissionais da área de produção culinárias,que atuam 
           ou tenham interesse em  atuar  na área de confeitaria.

            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Senac_logo.svg/2560px-Senac_logo.svg.png" alt="logo do Senac"></img>


            <a target="blank" href="https://www.ead.senac.br/gratuito/"> <img src={Acess} alt="botão para acessar conteúdo do curso"></img> </a>
               </div>
               <div className={styles.card2}> 
       <h1>
           Técnicas de Confeitaria
           </h1>
           <h2> 
               Senac
           </h2>
           <p>
           O curso de aperfeiçoamento Técnicas de Confeitaria tem 
           como objetivo aprimorar técnicas de confeitaria. É destino
         a profissionais da área de produção culinárias,que atuam 
         ou tenham interesse em  atuar  na área de confeitaria.

            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Senac_logo.svg/2560px-Senac_logo.svg.png" alt="logo do Senac"></img>
            <a target="blank" href="https://youtu.be/U1l6ca2Q3YU"> <img src={Acess} alt="botão para acessar conteúdo do curso"></img> </a>
               </div>
               <div className={styles.card3}> 
       <h1>
           Técnicas de Confeitaria
           </h1>
           <h2> 
               Senac
           </h2>
           <p>
           O curso de aperfeiçoamento Técnicas de Confeitaria tem 
como objetivo aprimorar técnicas de confeitaria. É destino
a profissionais da área de produção culinárias,que atuam 
ou tenham interesse em  atuar  na área de confeitaria.

            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Senac_logo.svg/2560px-Senac_logo.svg.png" alt="logo do Senac"></img>
            <a target="blank" href="https://www.ead.senac.br/gratuito/"> <img src={Acess} alt="botão para acessar conteúdo do curso"></img> </a>
               </div>
               <div className={styles.card4}> 
       <h1>
           Técnicas de Confeitaria
           </h1>
           <h2> 
               Senac
           </h2>
           <p>
           O curso de aperfeiçoamento Técnicas de Confeitaria tem 
          como objetivo aprimorar técnicas de confeitaria. É destino
          a profissionais da área de produção culinárias,que atuam 
          ou tenham interesse em  atuar  na área de confeitaria.

            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Senac_logo.svg/2560px-Senac_logo.svg.png" alt="logo do Senac"></img>
            <a target="blank" href="https://www.ead.senac.br/gratuito/"> <img src={Acess} alt="botão para acessar conteúdo do curso"></img> </a>
               </div>

               <div className= {styles.verMais}>
                   <p> Ver mais </p>
               </div>
        </div>
       
    )
}

export default Teste;