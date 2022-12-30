import { useEffect, useState, MouseEvent } from 'react'
import styles from './navbar.module.css'
import { Bebas_Neue } from '@next/font/google'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

//import { magic } from "../../lib/magic-client";

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})
type TProps = {
  username: string
}
const NavBar = ({ username }: TProps) => {
  const [showDropdown, setShowDropdown] = useState(false)
  //const [username, setUsername] = useState(username)
  const [didToken, setDidToken] = useState('')
  const router = useRouter()

  useEffect(() => {
    // const applyUsernameInNav = async () => {
    //   try {
    //     const { email, issuer } = await magic.user.getMetadata()
    //     const didToken = await magic.user.getIdToken()
    //     if (email) {
    //       setUsername(email)
    //       setDidToken(didToken)
    //     }
    //   } catch (error) {
    //     console.error('Error retrieving email', error)
    //   }
    // }
    // applyUsernameInNav()
  }, [])

  const handleOnClickHome = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    router.push('/')
  }

  const handleOnClickMyList = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    router.push('/browse/my-list')
  }

  const handleShowDropdown = (e: MouseEvent) => {
    e.preventDefault()
    setShowDropdown(!showDropdown)
  }

  const handleSignOut = async (e: MouseEvent) => {
    e.preventDefault()

    try {
      // const response = await fetch('/api/logout', {
      //   method: 'POST',
      //   headers: {
      //     Authorization: `Bearer ${didToken}`,
      //     'Content-Type': 'application/json',
      //   },
      // })
      // const res = await response.json()
    } catch (error) {
      console.error('Error logging out', error)
      router.push('/login')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href='/'>
          <div className={styles.logoWrapper}>
            <Image src='/static/logo.png' alt='logo' width={44} height={44} />
            <span className={bebas.className}> NEXTtube</span>
          </div>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>
                {username}
                {!showDropdown ? (
                  <Image
                    src='/static/more.png'
                    alt='expand'
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    src='/static/less.png'
                    alt='hide'
                    width={32}
                    height={32}
                  />
                )}
              </p>
              {/** Expand more icon */}
              {/* <Image
                src={'/static/expand_more.svg'}
                alt='Expand dropdown'
                width='24px'
                height='24px'
              /> */}
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignOut}>
                    Logout
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
