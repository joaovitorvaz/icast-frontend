import styles from './styles.module.css'
import React from "react"
import { useRouter } from 'next/router'


export default function PaginaPrincipal() {

  const router = useRouter();
  
  return (
    <section className={styles.container}>
      <div className={styles.quadrado1}></div>
      <div className={styles.quadrado2}></div>
      <div className={styles.quadrado3}></div>
      <div className={styles.quadrado4}></div>
        <div className={styles.content}>
          <div style={{display:'flex', flexDirection:'row', width:'150%'}}>
            <div className={styles.colunaTexto}>    
              <p className={styles.title}>iCast</p>
              <p className={styles.subtitle}>A cada podcast uma nova experiência</p>
              <p className={styles.description}>Escute e acompanhe os melhoress podcasts dentro da plataforma.
              <br></br> Publique seus podcastspara que todos possam acompanhar.</p>
            </div>
            <div className={styles.colunaBotao}>    
              <button className={styles.buttonEnviar} type='button' onClick={() => { router.push('login') }}>Login</button>
              <button className={styles.buttonEnviar} type='button' onClick={() => { router.push('cadastro') }}>Cadastrar</button>
            </div>
          </div>
        </div>
    </section>
  )
}