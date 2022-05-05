import { useState, useContext } from 'react'
import { AuthContext } from "../../../../contexts/Authentication"
import styles from './styles.module.css'

export default function Login() {

  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingLogin, setLoadingLogin] = useState(false);


  async function onSubmit(e) {
    e.preventDefault();
    setLoadingLogin(true);
    try {
      await signIn({ email, password });
    } catch {
      setLoadingLogin(false);
    }
  }

  return (
    <div className={styles.container}>
      <h2>Login</h2>
        <form onSubmit={e => onSubmit(e)}>
          <label htmlFor="email">E-mail: </label>
            <input 
              type="email" 
              value={email} 
              onChange={e =>setEmail(e.target.value)} 
              required
            />
            <label htmlFor="password">Senha: </label>
            <input 
              type="password" 
              value={password} 
              onChange={e =>setPassword(e.target.value)}
              required
            />
            <button type='submit' disabled={loadingLogin}>
              {loadingLogin ? "Carregando ..." : "Cadastrar"}
            </button>
        </form>
    </div>
  )
}