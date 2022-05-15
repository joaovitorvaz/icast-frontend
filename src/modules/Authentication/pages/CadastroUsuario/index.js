import Head from 'next/head'
import styles from './styles.module.css'
import iconUser from "../../../../assets/icon.jpeg"
import iconLocalizacao from "../../../../assets/iconLocalizacao.png"
import Navbar from '../../../../components/Navbar'
import Image from 'next/image'
import React, { FormEvent, ChangeEvent, useState } from "react"
import {useRef, useEffect} from "react"

export default function Home() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();
  useEffect(() => {
    if(image){
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    }else{
      setPreview(null);
    }
  }, [image]);

  return (
    <div className={styles.container}>
      <Head>
        <title>iCast</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.grid}>
        <Navbar/>
        <main className={styles.main}>

          <div className={styles.criarUsuario}>
              <p className={styles.titleCriarUsuario}>iCast</p>
              <p className={styles.subtitleCriarUsuario}>Crie uma conta gratuitamente preenchendo o formulário</p>
              <div className={styles.organizaFormulario}>
                <label className={styles.label}>Enderecço do e-mail</label>
                <input className={styles.input}></input>

                <div>
                    <label className={styles.labelLado}>Nome</label>
                    <label className={styles.labelLado}>Sobrenome</label>
                    <div>
                        <input className={styles.inputLado}></input>
                        <input className={styles.inputLado}></input>
                    </div>
                </div>

                <label className={styles.label}>senha</label>
                <input className={styles.input}></input>
                
                <div>
                    <label className={styles.labelLado}>Estado</label>
                    <label className={styles.labelLado}>Cidade</label>
                    <div>
                        <input className={styles.inputLado}></input>
                        <input className={styles.inputLado}></input>
                    </div>
                </div>
                
                <label className={styles.label}>Avatar</label>
                {preview ? (
                  <img style={{height:'120px', objectFit: 'cover',
                   cursor: 'pointer', borderRadius:'4px'}}
                    src={preview} 
                    onClick={() => {
                      setImage(null);
                    }}></img>
                ) : (
                  <button 
                    style={{height:'120px', objectFit: 'cover', 
                    background:'white', border: '1px solid #98AFCA', 
                    borderRadius: '4px', cursor: 'pointer', width: '15%',
                }}
                    onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}>
                    <p style={{color: '#6F7782', fontWeight: '200', fontSize:'40px'}}>+</p></button>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  style={{display: "none"}}
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if(file && file.type.substr(0, 5) === "image"){
                      setImage(file);
                    }else{
                      setImage(null);
                    }
                  }}
                  >
                  </input>
                  <button className={styles.buttonCadastro}>Salvar cadastro</button>
              </div>
              <p className={styles.subtitleCriarUsuario}>Já possui uma conta? Faça Login</p>
            </div>
        </main>
      </div>
     
    </div>
  )
}