import styles from './styles.module.css'
import Image from 'next/image'
import userIcon from './../../assets/userIcon.png'
import Link from 'next/link'

import { AiFillHome, AiOutlinePoweroff, AiOutlinePlus } from "react-icons/ai"
import { IoMdHeart } from "react-icons/io"
import { FaUser } from "react-icons/fa"

export default function Navbar () {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerNavbar}>
        <div className={styles.userIcon}>
          <Image
            src={userIcon}
            alt="Ícone do usuário"
            width={40}
            height={40}
          />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.iconsNavBar}>
            <li className={styles.buttonNavBar}>
              <Link href="/">
                <AiFillHome 
                  size={25} 
                  color="#473080"
                />
              </Link>        
            </li>

            <li className={styles.buttonNavBar}>
              <Link href="/perfil">
                <FaUser 
                  size={25} 
                  color="#473080"
                />
              </Link>
            </li>

            <li className={styles.buttonNavBar}>
              <Link href="/favoritos">
                <IoMdHeart 
                  size={25} 
                  color="#473080"
                />
              </Link>
            </li> 

            <li className={styles.buttonNavBar}>
              <Link href="/cadastrar-podcast">
                <AiOutlinePlus 
                  size={22} 
                  color="#473080"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <button type="button" className={styles.logoutButon}>
          <AiOutlinePoweroff
            size={20} 
            color="#000"
          />
        </button>
      </div>
    </div>
  )
}