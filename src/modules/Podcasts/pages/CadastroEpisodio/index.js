import Head from 'next/head'
import styles from './styles.module.css'
import iconUser from "../../../../assets/icon.jpeg"
import iconLocalizacao from "../../../../assets/iconLocalizacao.png"
import Navbar from '../../../../components/Navbar'
import Image from 'next/image'
import React, { FormEvent, ChangeEvent, useState } from "react"
import {useRef, useEffect} from "react"

export default function CadastroEp() {

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
          <div className={styles.informacoes}>
            <Image 
              src={iconUser}
              width={70}
              height={70}
              style={{borderRadius:'50px'}}
            />
            <div className={styles.organizarInformacoes}>
              <p>João Vítor Vaz</p>
              <div className={styles.organizarEndereco}>
                <Image 
                    src={iconLocalizacao}
                    width={30}
                    height={15}
                    className={styles.imgEndereco}
                />
                  <p>Bahia, Brasil</p>
                </div>
            </div>
            <button className={styles.buttonStatus}>Usuário</button>
          </div>
          <div className={styles.criarEp}>
              <p className={styles.titleCriarEp}>Publicar Episódio</p>
              <p className={styles.subtitleCriarEp}>Publique novos episódios para seus podcasts</p>
              <div className={styles.organizaFormulario}>
              <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                <div style={{display:'flex', flexDirection:'column', width:'35%'}}>
                  <label className={styles.label}>Podcast</label>
                  <input className={styles.input}></input>
                </div>
                <div style={{display:'flex', flexDirection:'column', marginLeft:'20px', width:'65%'}}>
                  <label className={styles.label}>Nome do episódio</label>
                  <input className={styles.input}></input>
                </div>
              </div>
              <label className={styles.label}>Descrição do episódio</label>
              <textarea className={styles.textarea}></textarea>
              <label className={styles.label}>Capa do podcast</label>
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
                  borderRadius: '4px', cursor: 'pointer'}}
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
                <button className={styles.buttonEnviar}>Enviar</button>
              </div>
            </div>
        </main>
      </div>
     
    </div>
  )
}