import { useContext } from 'react'
import Image from 'next/image'
import userIcon from './../../assets/userIcon.png'
import Link from 'next/link'

import { AiFillHome, AiOutlinePoweroff, AiOutlinePlus } from "react-icons/ai"
import { IoMdHeart } from "react-icons/io"
import { FaUser } from "react-icons/fa"
import { BsFileEarmarkMusicFill } from "react-icons/bs"
import { AuthContext } from "../../contexts/Authentication"
import { useRouter } from 'next/router'
import styles from './styles.module.css'


export default function Navbar () {

  const router = useRouter()
  const { role, logOut } = useContext(AuthContext);

  function handleLogout() {
    logOut();
    router.push("/")
  }

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
                <a>
                  <AiFillHome 
                    size={25} 
                    color="#473080"
                  />
                </a>
              </Link>        
            </li>

            <li className={styles.buttonNavBar}>
              <Link href="/perfil">
                <a>
                  <FaUser 
                    size={25} 
                    color="#473080"
                  />
                </a>
              </Link>
            </li>
            {role !== 'DEFAULT_USER' && (
              <li className={styles.buttonNavBar}>
                <Link href="/cadastro-podcast">
                  <a>
                    <AiOutlinePlus 
                      size={22} 
                      color="#473080"
                    />
                  </a>
                </Link>
              </li>
            )}
            {role !== 'DEFAULT_USER' && (
                <li className={styles.buttonNavBar}>
                  <Link href="/cadastro-episodio">
                    <a>
                      <BsFileEarmarkMusicFill 
                        size={20} 
                        color="#473080"
                      />
                    </a>
                  </Link>
              </li> 
            )}
          </ul>
        </nav>
        <button type="button" onClick={handleLogout} className={styles.logoutButon}>
          <AiOutlinePoweroff
            size={20} 
            color="#000"
          />
        </button>
      </div>
    </div>
  )
}