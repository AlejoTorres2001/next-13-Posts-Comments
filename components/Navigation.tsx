import Link from 'next/link'
import React from 'react'
import styles from './Navigation.module.css'
const links: Array<{ href: string; label: string }> = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' }
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
