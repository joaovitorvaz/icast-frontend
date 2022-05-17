import { useState, useContext } from 'react'
import { AuthContext } from "../../../../contexts/Authentication"
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

export default function Login() {
  const router = useRouter()
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingLogin, setLoadingLogin] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoadingLogin(true);
    try {
      await signIn({ email, password });
      router.push('/');
    } catch {
      toast.error("Senha e/ou email não estão corretos.");
      setLoadingLogin(false);
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.loginUser}>
          <div className={styles.criarUsuario}>
            <p className={styles.titleLoginUser}>iCast</p>
            <p className={styles.subtitleLoginUser}>Faça login com sua conta preenchendo o formulário</p>
          </div>
          <div className={styles.blocoFormulario} style={{padding:'0px 60px 0px 60px'}}>
            <div style={{display:'flex', flexDirection:'column', width:'100%'}} onSubmit={e => onSubmit(e)}>
              <label className={styles.label} htmlFor="email">E-mail</label>
              <input className={styles.input} type="email" 
                value={email} 
                onChange={e =>setEmail(e.target.value)} 
                required>  
              </input>
              <label className={styles.label} htmlFor="password">Senha</label>
              <input className={styles.input}  
                type="password" 
                value={password} 
                onChange={e =>setPassword(e.target.value)}
                required>
              </input>
            </div>
            <button onClick={onSubmit} className={styles.buttonEnviar} type='submit' disabled={loadingLogin}>
              {loadingLogin ? "Carregando ..." : "Entrar"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}