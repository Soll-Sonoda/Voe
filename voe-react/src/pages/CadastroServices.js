import styles from './ServCadas.module.css';
import Limpa from './Limpa.png';
import Logo from './Logo.png';
import {useForm} from 'react-hook-form'
function ServCadastro () {
    const {register, handleSubmit} = useForm();
    function cadastrarUser (e) {
        console.log ('usuário cadastrado!')
        console.log (e) 

    }
    return (
        <div className= {styles.divG}>

            <div className={styles.divHeader}>
                 <img className={styles.Voe} src={Logo} alt= "logo do projeto voe, a logo consiste em um foguete com o visual construído a partir da junção de um lápis com uma ferramenta de trabalho, são dois elementos visuais que definem o nosso projeto."></img></div>

            <div className={styles.Blue}> 
            <p className={styles.NomePP}> Perfil Profissional - Serviço</p>
            <div className= {styles.White}>

                <p className={styles.Nome}> Nome completo </p>
                <p className={styles.Email}> E-mail </p>
                <p className={styles.Tel}> Telefone </p>
                <p className={styles.Estado}> Bairro </p>
                <p className={styles.CrieSenha}> Crie uma Senha </p>
                <p className={styles.Service}> Seu serviço </p>
                <p className={styles.Confmail}> Confirme o e-mail </p>
                <p className={styles.Confdate}> Data de nascimento </p>
                <p className={styles.CPF}> CPF/CNPJ </p>
                <p className={styles.ConfSenha}> Confirme a senha </p>
                <p className={styles.City}> Cidade </p>

                <img className={styles.Clean} src={Limpa} alt="mulher trabalhando"></img>

                <form onSubmit={handleSubmit(cadastrarUser)}>
                    
            <div>
               <label htmlFor= "name"> </label>
                <input 
                className={styles.FormNome} 
                type="text" 
                placeholder="Digite aqui"
                {...register("name")}
                />
            </div>

            <div>
            <label htmlFor="mail"/>
                <input 
                className={styles.FormMail} 
                type="text" 
                placeholder="Digite aqui"
                {...register("mail")}/>
            </div>

            <div>
            <label htmlFor="phone"/>
                <input 
                className={styles.FormTel} 
                type="text" 
                placeholder="Digite aqui"
                {...register("phone")}
                />
            </div>

            <div>
            <label htmlFor="bairro"/>
                <select 
                className={styles.FormCountry} 
                placeholder="Escolha"
                {...register("bairro")}>
                    <option value= "tamarineira"> Tamarineira </option>
                    <option value= "casa amarela"> Casa Amarela </option>
                    <option value= "jaboatão centro"> Jaboatão Centro </option>
                    <option value= "ibura"> Ibura </option>
                    <option value= "aldeia"> Aldeia </option>
                    <option value= "peixinhos"> Peixinhos </option>
                    <option value= "rio doce"> Rio Doce </option>
                    <option value= "janga"> Janga </option>
                </select>
            </div>

            <div>
            <label htmlFor="password"/>
                <input 
                className={styles.FormCrie} 
                type="password" 
                placeholder="Digite aqui"
                {...register("password")}/>
            </div>

            

            <div>
            <label htmlFor="services"/>
                <input
                 className={styles.FormService} 
                 type="text" 
                 placeholder="Digite aqui"
                 {...register("services")}/>
            </div>

            <div> 
            <label htmlFor="confMail"/>
             <input 
             className= {styles.FormConfMail} 
             type="text" 
             placeholder="Confirme o seu e-mail"
             {...register("confMail")}/>
             </div>

             <div> 
             <label htmlFor="formNasc"/>
             <input 
             className={styles.FormNasc}
              type="date" 
              placeholder="Selecione sua data de nascimento"
              {...register("birth")}/>
             </div>
             <div> 

             <label htmlFor="cpf"/>
             <input 
             className={styles.FormCPF} 
             type="text" 
             placeholder="Digite o seu CPF"
             {...register("cpf")}
             />
             </div>

             <div> 
             <label htmlFor="confPass"/>
             <input
              className={styles.FormConfSenha} 
              type="password" 
              placeholder="Confirme a sua senha"
              {...register("confPass")}/>
             </div>

             <div>
                 <label htmlFor="city"/>
                 <select
                 className= {styles.cidade}
                 placeholder="Escolha"
                 {...register("city")}>

                     <option value="recife pernambuco">
                         Recife-PE
                     </option>
                 </select>
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

export default ServCadastro;