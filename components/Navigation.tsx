import Link from 'next/link'
import React from 'react'
import { Links } from '../@types'
import styles from './Navigation.module.css'
const links: Links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/posts', label: 'Posts' }
]

export function Navigation (): React.ReactElement {
  return (
    <nav className={styles.header}>
      <ul className={styles.navigation}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
