import Head from 'next/head'
import styles from './styles.module.css'
import Image from 'next/image'
import React, { useState } from "react"
import {useRef, useEffect, useContext} from "react"
import { api } from "../../../../service/api";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'

import { AuthContext } from "../../../../contexts/Authentication"

export default function PaginaPrincipal() {
  
  return (
      <main className={styles.main}>
      <div className={styles.quadrado1}></div>
      <div className={styles.quadrado2}></div>
      <div className={styles.quadrado3}></div>
      <div className={styles.quadrado4}></div>
        <div className={styles.conteiner}>
          <div>
            <div style={{display:'flex', flexDirection:'row', width:'150%'}}>
              <div className={styles.colunaTexto}>    
                <p className={styles.title}>iCast</p>
                <p className={styles.subtitle}>A cada podcast uma nova experiência</p>
                <p className={styles.description}>Escute e acompanhe os melhoress podcasts dentro da plataforma.
                <br></br> Publique seus podcastspara que todos possam acompanhar.</p>
              </div>
              <div className={styles.colunaBotao}>    
                <button className={styles.buttonEnviar} type='submit' > Login </button>
                <button className={styles.buttonEnviar} type='submit' > Cadastrar </button>
              </div>
            </div>
          </div>

        </div>
      </main>
  )
}