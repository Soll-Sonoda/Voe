import styles from './Teste.module.css';
import Limpa from './Limpa.png';
import Logo from './Logo.png';
function Teste () {
    return (
        <div className= {styles.divG}>

            <div className={styles.divHeader}> <img className={styles.Voe} src={Logo}></img></div>

            <div className={styles.Blue}> 
            <p className={styles.NomePP}> Perfil Profissional</p>
            <div className= {styles.White}>

                <p className={styles.Nome}> Nome </p>
                <p className={styles.Email}> E-mail </p>
                <p className={styles.Tel}> Telefone </p>
                <p className={styles.Estado}> Estado </p>
                <p className={styles.CrieSenha}> Crie uma Senha </p>
                <p className={styles.Sobrenome}> Sobrenome </p>
                <p className={styles.Confmail}> Confirme o e-mail </p>
                <p className={styles.Confdate}> Data de nascimento </p>
                <p className={styles.CPF}> CPF </p>
                <p className={styles.ConfSenha}> Confirme a senha </p>

                <img className={styles.Clean} src={Limpa}></img>

                <form>
            <div>
                <input className={styles.FormNome} type="text" placeholder="Insira seu nome aqui"/>
            </div>
            <div>
                <input className={styles.FormMail} type="text" placeholder="Insira seu e-mail aqui"/>
            </div>
            <div>
                <input className={styles.FormTel} type="text" placeholder="Insira seu telefone aqui"/>
            </div>
            <div>
                <input className={styles.FormEst} type="text" placeholder="Insira seu estado aqui"/>
            </div>
            <div>
                <input className={styles.FormCrie} type="password" placeholder="Cria aí uma senha mrm"/>
            </div>
            <div>
                <input className={styles.FormSobre} type="text" placeholder="Digite o seu sobrenome"/>
            </div>
            <div> 
             <input className= {styles.FormConfMail} type="text" placeholder="Confirme o seu e-mail"/>
             </div>
             <div> 
             <input className={styles.FormNasc} type="date" placeholder="Confirme o seu telefone"/>
             </div>
             <div> 
             <input className={styles.FormCPF} type="text" placeholder="Digite o seu CPF"/>
             </div>
             <div> 
             <input className={styles.FormConfSenha} type="password" placeholder="Confirme a sua senha"/>
             </div>
             <div>
                 <button className= {styles.Confirm} type="submit"> Cadastre-se</button>
             </div>

             
            
            

            
        </form>
        </div>

            </div>

        </div>
    )
}

export default Teste;